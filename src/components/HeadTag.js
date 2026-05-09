import React from 'react';
import { Helmet } from "react-helmet";
import favicon32 from '../assets/img/favicon-32x32.png';
import favicon192 from '../assets/img/favicon-192x192.png';
import favicon180 from '../assets/img/favicon-180x180.png';
import favicon270 from '../assets/img/favicon-270x270.png';
import ogImg from '../assets/img/og-img.png';

const HeadTag = ({ pageContext = {} }) => {
	const { slug = '', frontmatter = {} } = pageContext;
	const metaRobot = { name: 'robots', content: 'follow' };

	return (
		<>
			<Helmet>
				<title>{frontmatter?.title}</title>
				<meta name="description" content={frontmatter?.description} />
				<meta name="keywords" content={frontmatter?.keywords} />
				<meta name={metaRobot.name} content={metaRobot.content} />

				<link rel="icon" href={favicon32} sizes="32x32" />
				<link rel="icon" href={favicon192} sizes="192x192" />
				<link rel="apple-touch-icon" href={favicon180} />
				<meta name="msapplication-TileImage" content={favicon270} />

				<meta property="og:title" content={frontmatter?.title} />
				<meta property="og:description" content={frontmatter?.description} />
				<meta property="og:image" content={ogImg} />
				<meta property="og:image:secure_url" content={ogImg} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:alt" content="Bold Reports Documentation" />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="Bold Reports Docs" />
				<meta property="og:locale" content="en_US" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={frontmatter?.title} />
				<meta name="twitter:description" content={frontmatter?.description} />
				<meta name="twitter:image" content={ogImg} />

				<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-K73VBT8"></script>
				<script>{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){ dataLayer.push(arguments); }
					gtag('js', new Date());
					gtag('config', 'GTM-K73VBT8');
				`}</script>
			</Helmet>
		</>
	);
};

export default HeadTag;
