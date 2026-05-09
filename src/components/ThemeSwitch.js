import React, { useEffect, useState, useCallback } from 'react';

const THEME_STORAGE_KEY = 'boldreports-theme';

const ThemeSwitch = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
		const isDark = savedTheme === 'dark';

		document.body.classList.toggle('dark-mode', isDark);
		setIsDarkMode(isDark);
	}, []);

	const handleThemeToggle = useCallback(() => {
		setIsDarkMode((prevIsDark) => {
			const nextIsDark = !prevIsDark;

			if (typeof window !== 'undefined') {
				document.body.classList.toggle('dark-mode', nextIsDark);
				localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? 'dark' : 'light');

				const tip = document.getElementById('theme_tooltip');
				if (tip) tip.textContent = nextIsDark ? 'Light theme' : 'Dark theme';
			}

			return nextIsDark;
		});
	}, []);

	const showTooltip = useCallback((e) => {
		const tip = typeof document !== 'undefined' ? document.getElementById('theme_tooltip') : null;
		if (!tip) return;

		tip.textContent = isDarkMode ? 'Light theme' : 'Dark theme';
		tip.style.left = `${e.clientX}px`;
		tip.style.top = `${e.clientY + 24}px`;
		tip.style.transform = 'translateX(-38%)';
		tip.style.opacity = '1';
	}, [isDarkMode]);

	const hideTooltip = useCallback(() => {
		const tip = typeof document !== 'undefined' ? document.getElementById('theme_tooltip') : null;
		if (tip) tip.style.opacity = '0';
	}, []);

	return (
		<>
			<button
				className="theme-switch-btn"
				aria-label="Toggle theme"
				aria-describedby="theme_tooltip"
				data-tooltip-id="theme_tooltip"
				onClick={handleThemeToggle}
				onMouseMove={showTooltip}
				onMouseLeave={hideTooltip}
			>
				<div className="theme-toggle-icon"></div>
			</button>
			<div id="theme_tooltip" className="custom-tooltip">
				Dark theme
			</div>
		</>
	);
};

export default ThemeSwitch;
