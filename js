exports.createPages = async ({ actions }) => {
    const { createPage } = actions;

    const docsPath = path.resolve("./docs");

    const files = fs.readdirSync(docsPath);
	const layout = path.resolve('./src/templates/layout.js');

    files.forEach((file) => {
        const slug = file.replace(".md", "");
        createPage({
            path: `/docs/${slug}/`,
            component: layout,
            context: {
                filePath: path.join(docsPath, file)
            }
        });
		console.log("Page creation completed" - slug);
    });
};