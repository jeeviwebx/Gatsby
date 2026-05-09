const _ = require('lodash');
const Promise = require('bluebird');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const {
	updateContent
} = require('./node_modules/@boldreports/docs-helper/src/content.js');

const config = require('./config.json');
const tocJson = require('./left-toc.json');

const { marked } = require('marked');
const matter = require('gray-matter');
const { markedHighlight } = require('marked-highlight');

const Prism = require('prismjs');

// Prism languages
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-json');
require('prismjs/components/prism-markup');
require('prismjs/components/prism-css');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-tsx');

// Prism highlight setup
marked.use(
	markedHighlight({
		langPrefix: 'language-',

		highlight(code, lang) {
			const language = Prism.languages[lang]
				? lang
				: 'javascript';

			return Prism.highlight(
				code,
				Prism.languages[language],
				language
			);
		}
	})
);

// Get git last updated date
const getGitLastUpdated = (filePath) => {
	try {
		const relativeGitPath = path.relative(
			process.cwd(),
			filePath
		);

		const gitCommand = `git log -1 --format=%cI -- "${relativeGitPath}"`;

		const result = execSync(gitCommand, {
			encoding: 'utf8'
		}).trim();

		return result || new Date().toISOString();
	} catch (e) {
		console.log(`Git date not found for: ${filePath}`);

		return new Date().toISOString();
	}
};

exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	const docsPath = path.resolve('./docs');

	const layout = path.resolve(
		'./src/templates/layout.js'
	);

	const pagesData = tocJson.pagesData || [];

	let completedCount = 0;

	await Promise.all(
		pagesData.map(async (page) => {
			try {
				// Skip html files
				if (page.fileType === 'html') return;

				const slug = page.path || '/';

				const cleanPath = slug.replace(
					/^\/|\/$/g,
					''
				);

				const rootFile = path.join(
					docsPath,
					'overview.md'
				);

				const directFile = path.join(
					docsPath,
					`${cleanPath}.md`
				);

				const indexFile = path.join(
					docsPath,
					cleanPath,
					'index.md'
				);

				// Resolve file path
				const filePath =
					(slug === '/' &&
						fs.existsSync(rootFile) &&
						rootFile) ||
					(fs.existsSync(directFile) &&
						directFile) ||
					(fs.existsSync(indexFile) &&
						indexFile) ||
					'';

				if (!filePath) {
					console.log(
						`MD file not found for path: ${slug}`
					);

					return;
				}

				// Read markdown
				const rawContent =
					await fs.promises.readFile(
						filePath,
						'utf8'
					);

				// Parse frontmatter
				const {
					data: seo,
					content
				} = matter(rawContent);

				// Git last updated
				const lastUpdated =
					getGitLastUpdated(filePath);

				// Markdown -> HTML
				const html = marked(content);

				// Create page
				createPage({
					path: slug,

					component: layout,

					context: {
						filePath,
						html,
						page,
						seo,
						lastUpdated
					}
				});

				completedCount++;

				console.log(
					`[${completedCount} / ${pagesData.length}] Page creation completed - ${slug}`
				);
			} catch (error) {
				console.error(
					`Error creating page: ${page.path}`,
					error
				);
			}
		})
	);
};