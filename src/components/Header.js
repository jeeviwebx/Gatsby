import React from 'react';
import { Link } from 'gatsby';
import HeaderSearch from './HeaderSearch';
import AskAI from './AskAI';
import ThemeSwitch from './ThemeSwitch';
import HeaderMobileMenu from './HeaderMobileMenu';
import config from '../../config.json';
import '../assets/css/dark-mode.css';
import '../assets/css/tabs.css';
import '../assets/css/focus.css';
import '../assets/css/header.css';

const Header = () => {
	return (
		<>
			<header id="header-container">
				<div className="container">
					<div id="header-left-side">
						<a href="/" className="header-home-link">
							<div className="header-logo"></div>
						</a>
						<span className="header-docs-text">
							<Link to="/">{config.additionalInfo.header}</Link>
						</span>
					</div>

					<div id="header-middle-side">
						<HeaderSearch />
						<AskAI />
					</div>

					<div id="header-right-side">
						<div className="ask-container-mobile">
							<AskAI />
						</div>

						<div className="header-links">
							<a href="https://www.boldreports.com/forums/" className="header-menu-link" target="_blank" rel="noreferrer">
								Forum
							</a>
							<a href="https://support.boldreports.com/kb" className="header-menu-link" target="_blank" rel="noreferrer">
								KB
							</a>
						</div>
						<a href="https://app.boldid.net/register/reports/enterprise?evaluation=v2" className="header-try-it-free-btn" target="_blank" rel="noreferrer">
							Try it Free
						</a>

						<ThemeSwitch />

						<HeaderMobileMenu />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
