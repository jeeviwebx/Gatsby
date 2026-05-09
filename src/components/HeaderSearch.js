import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react';
import { navigate } from 'gatsby';
import docsNavigation from '../../left-toc.json';

const buildHeaderSearchIndex = () => {
	const entries = Array.isArray(docsNavigation.pagesData) ? docsNavigation.pagesData : [];
	const seen = new Set();

	return entries
		.filter((item) => item && item.title && item.path)
		.map((item) => ({
			title: item.title,
			path: item.path,
			searchText: `${item.title} ${item.path}`.toLowerCase(),
		}))
		.filter((item) => {
			if (seen.has(item.path)) return false;
			seen.add(item.path);
			return true;
		});
};

const HEADER_SEARCH_INDEX = buildHeaderSearchIndex();

const HeaderSearch = () => {
	const searchWrapRef = useRef(null);
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	const filteredSuggestions = useMemo(() => {
		const trimmedQuery = query.trim().toLowerCase();
		if (!trimmedQuery) return [];
		return HEADER_SEARCH_INDEX.filter((item) => item.searchText.includes(trimmedQuery)).slice(0, 10);
	}, [query]);

	useEffect(() => {
		setSuggestions(query.trim() ? filteredSuggestions : []);
	}, [filteredSuggestions, query]);

	useEffect(() => {
		const handleDocClick = (e) => {
			const searchWrap = searchWrapRef.current;
			if (searchWrap && !searchWrap.contains(e.target)) {
				setSuggestions([]);
			}
		};

		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				setQuery('');
				setSuggestions([]);
			}
		};

		window.addEventListener('click', handleDocClick);
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('click', handleDocClick);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handleSearchChange = useCallback((e) => {
		setQuery(e.target.value);
	}, []);

	const handleSearchKeyDown = useCallback(
		(e) => {
			if (e.key === 'Enter' && suggestions.length) {
				e.preventDefault();
				navigate(suggestions[0].path);
				setQuery('');
				setSuggestions([]);
			}
			if (e.key === 'Escape') {
				setQuery('');
				setSuggestions([]);
			}
		},
		[suggestions]
	);

	const onSuggestionClick = useCallback((path) => {
		navigate(path);
		setQuery('');
		setSuggestions([]);
	}, []);

	const clearHeaderSearch = useCallback(() => {
		setQuery('');
		setSuggestions([]);
		if (typeof window !== 'undefined') {
			window.requestAnimationFrame(() => {
				const input = searchWrapRef.current?.querySelector('input[type="search"]');
				if (input) input.focus();
			});
		}
	}, []);

	return (
		<div className="search-box" ref={searchWrapRef}>
			<span className="bd-icon bd-icon-search search-icon" />
			<input
				type="search"
				placeholder="Search..."
				value={query}
				onChange={handleSearchChange}
				onKeyDown={handleSearchKeyDown}
				aria-label="Search documentation"
			/>
			{query && (
				<button type="button" className="search-clear-btn" aria-label="Clear search" onClick={clearHeaderSearch}>
					×
				</button>
			)}
			{(suggestions.length > 0 || query.trim() !== '') ? (
				<ul className="left-toc-search-suggestions header-search-suggestions">
					{suggestions.length > 0 ? (
						suggestions.map((s) => (
							<li key={s.path}>
								<button
									className="search-suggestion-btn"
									role="option"
									aria-selected={false}
									onClick={() => onSuggestionClick(s.path)}
									onKeyDown={(e) => {
										if (e.key === 'Enter') onSuggestionClick(s.path);
									}}
								>
									{s.title}
								</button>
							</li>
						))
					) : (
						<li className="no-results">No results</li>
					)}
				</ul>
			) : null}
		</div>
	);
};

export default HeaderSearch;
