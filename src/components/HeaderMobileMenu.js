import React, { useEffect, useRef, useState, useCallback } from 'react';

const HeaderMobileMenu = () => {
	const menuRef = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			const menuElement = menuRef.current;
			if (menuElement && !menuElement.contains(e.target)) {
				setIsMenuOpen(false);
			}
		};

		const handleEscapeKey = (e) => {
			if (e.key === 'Escape') {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('click', handleOutsideClick);
		window.addEventListener('keydown', handleEscapeKey);

		return () => {
			window.removeEventListener('click', handleOutsideClick);
			window.removeEventListener('keydown', handleEscapeKey);
		};
	}, []);

	const toggleMenu = useCallback((state) => {
		if (typeof state === 'boolean') {
			setIsMenuOpen(state);
			return;
		}
		setIsMenuOpen((prev) => !prev);
	}, []);

	return (
		<div id="article-options-wrap" ref={menuRef}>
			<div
				id="article-options"
				role="button"
				tabIndex={0}
				aria-label="Open menu"
				onClick={() => toggleMenu()}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') toggleMenu();
				}}
			>
				<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
					<circle cx="12" cy="5" r="2.4" fill="#667085" />
					<circle cx="12" cy="12" r="2.4" fill="#667085" />
					<circle cx="12" cy="19" r="2.4" fill="#667085" />
				</svg>
			</div>

			{isMenuOpen && (
				<div
					className="menu-popup-overlay"
					onClick={() => toggleMenu(false)}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') toggleMenu(false);
					}}
				>
					<div className="menu-popup-box" onClick={(e) => e.stopPropagation()} role="dialog">
						<button className="menu-popup-close" aria-label="Close" onClick={() => toggleMenu(false)}>
							×
						</button>
						<div className="menu-popup-item">
							<a href="https://www.boldreports.com/forums/">Forum</a>
						</div>
						<div className="menu-popup-item">
							<a href="https://support.boldreports.com/kb">KB</a>
						</div>
						<div className="menu-cta">
							<div className="menu-cta-item">
								<a href="https://app.boldid.net/register/reports/enterprise?evaluation=v2" className="menu-try-it-free-btn">
									Try it Free
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HeaderMobileMenu;
