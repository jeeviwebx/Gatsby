const _ = require('lodash');
const Promise = require('bluebird');
const { execSync } = require('child_process');
const { updateContent } = require('./node_modules/@boldreports/docs-helper/src/content.js');
const config = require('./config.json');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
	if (stage === 'build-javascript') {
		actions.setWebpackConfig({
			devtool: false,
		});
	}
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField, createRedirect } = actions;
	let slug;

	if (node.internal.type === `MarkdownRemark`) {
		const fileNode = getNode(node.parent);
		const parsedFilePath = path.parse(fileNode.relativePath);
		
		// Home page - slug Maping
		if (parsedFilePath.name == config.additionalInfo.homePage.fileName && parsedFilePath.dir == '') {
			slug = '/';
		} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
			slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
		} else if (parsedFilePath.dir === '') {
			slug = `/${parsedFilePath.name}/`;
		} else {
			slug = `/${parsedFilePath.dir}/`;
		}

		if (node.internal.content) {
			let tocPath = slug; 
			
			// Home page - File Maping
			if (slug === '/' && parsedFilePath.name == config.additionalInfo.homePage.fileName && parsedFilePath.dir == '') {
				tocPath = `/${parsedFilePath.name}/`;
			}

			const updatedContent = updateContent(node.internal.content, tocPath, node.frontmatter, fileNode.relativePath);
			if (updatedContent) {
				node.internal.content = updatedContent;
			}
        }

		let lastUpdated = null;
		try {
			lastUpdated = execSync(`git log -1 --format=%cI -- docs/"${fileNode.relativePath}"`).toString().trim();
		} catch (e) {
			console.log('Git error:', e);
		}

		createNodeField({ node, name: 'slug', value: slug });
		createNodeField({ node, name: 'lastUpdated', value: lastUpdated });

		createRedirect({ fromPath: '/uwp', toPath: 'https://help.syncfusion.com/uwp/sfreportviewer/', isPermanent: true });
		createRedirect({ fromPath: '/wpf', toPath: 'https://help.syncfusion.com/wpf/reportviewer/', isPermanent: true });
	}
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const layout = path.resolve('./src/templates/layout.js');
		resolve(
			graphql(`
				{
					allMarkdownRemark {
						edges {
							node {
								html
								id
								frontmatter {
									description
									title
									keywords
									canonical
								}
								fields {
									slug
									lastUpdated
								}
							}
						}
					}
				}
			`).then((result) => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}
				// Create blog posts pages.
				const posts = result.data.allMarkdownRemark.edges;
				_.each(posts, (post, index) => {
					createPage({
						path: post.node.fields.slug,
						component: layout,
						context: {
							html: post.node.html,
							slug: post.node.fields.slug,
							lastUpdated: post.node.fields.lastUpdated,
							frontmatter: post.node.frontmatter
						},
					});
				});
			})
		);
	});
};
