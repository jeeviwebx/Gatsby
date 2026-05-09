import React, { useState, memo, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../assets/css/lefttoc.css';

const collapseTooltipId = 'left_toc_collapse_tooltip';

const normalizePath = (value = '') => {
    if (!value) return '';
    const path = String(value).split(/[?#]/)[0].trim();
    if (!path) return '';
    if (path === '/') return '/';
    return path.endsWith('/') ? path : `${path}/`;
};

// 🔁 Recursive Item
const RenderItem = memo(function RenderItem({ item, searchTerm, currentPath, isParentActive, level = 0, pathPrefix = '', onNavigate }) {
    const [open, setOpen] = useState(false);

    const hasChildren = Array.isArray(item.items) && item.items.length > 0;
    const isSection = item.type === 'section';
    const isLink = item.type === 'page' && item.path;
    const isHtmlFile = item.fileType === 'html';

    // Check if this item or any child is active
    const isActive = normalizePath(currentPath) === normalizePath(item.path);
    const hasActiveChild = (items) => {
        if (!items) return false;
        for (const child of items) {
            if (normalizePath(child.path) === normalizePath(currentPath)) return true;
            if (child.items && hasActiveChild(child.items)) return true;
        }
        return false;
    };

    const childIsActive = hasChildren && hasActiveChild(item.items);

    useEffect(() => {
        if (isActive || childIsActive || (searchTerm && hasChildren)) {
            setOpen(true);
        }
    }, [currentPath, searchTerm, hasChildren, isActive, childIsActive]);

    const toggle = () => {
        if (hasChildren && !isSection) {
            setOpen((prev) => !prev);
        }
    };

    const handleLinkClick = (e, path, isHtmlFile) => {
        if (isHtmlFile) {
            e.stopPropagation();
            return;
        }
        if (onNavigate && path) {
            e.preventDefault();
            e.stopPropagation();
            onNavigate(path);
        }
    };

    return (
        <div className={`toc-item level-${level}${isActive ? ' active-item' : ''} ${isSection ? 'toc-section-container' : 'toc-normal-container'}`}>
            <div
                className={`toc-title ${hasChildren ? 'sub-main-title' : 'sub-title'} ${isActive ? 'active-link' : ''}`}
                onClick={toggle}
                style={{
                    cursor: hasChildren && !isSection ? 'pointer' : 'default'
                }}
            >
                {hasChildren && !isSection && (
                    <span
                        className={`arrow ${open ? 'bd-icon-expandable' : 'bd-icon-collapsible'}`}
                        aria-hidden="true"
                    />
                )}

                {isLink ? (
                    isHtmlFile ? (
                        <a
                            href={`${pathPrefix}${item.path}`}
                            onClick={(e) => {
                                handleLinkClick(e, item.path, true);
                            }}
                            target={item.fileType === 'html' ? '_blank' : (item.target || '_self')}
                        >
                            {item.title}
                        </a>
                    ) : (
                        <Link
                            to={item.path}
                            className={isActive ? 'active-link' : ''}
                            onClick={(e) => {
                                handleLinkClick(e, item.path, false);
                            }}
                        >
                            {item.title}
                        </Link>
                    )
                ) : (
                    <span className={isSection ? 'section-title' : ''}>
                        {item.title}
                    </span>
                )}
            </div>

            {hasChildren && (open || isSection) && (
                <div className={`${level === 0 ? 'toc-main-children' : 'toc-children'}${level === 0 && item?.type !== 'section' && hasChildren ? ' has-border' : ''}`}>
                    {item.items.map((child, i) => (
                        <RenderItem
                            key={i}
                            item={child}
                            searchTerm={searchTerm}
                            currentPath={currentPath}
                            isParentActive={isActive || childIsActive}
                            level={level + 1}
                            pathPrefix={pathPrefix}
                            onNavigate={onNavigate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

// 🔍 Filter Tree
const filterTree = (items, term) => {
    if (!term) return items;

    return items
        .map((item) => {
            if (!item) return null;

            const match = item.title
                ?.toLowerCase()
                .includes(term.toLowerCase());

            if (item.items) {
                const filteredChildren = filterTree(item.items, term);

                if (match || filteredChildren.length > 0) {
                    return {
                        ...item,
                        items: filteredChildren
                    };
                }
            }

            return match ? item : null;
        })
        .filter(Boolean);
};

// 📌 Tab Component with individual search
const TocTab = memo(function TocTab({ tabName, items, currentPath, searchTerm, pathPrefix = '', onNavigate }) {
    return (
        <div key={tabName} className="toc-tab-group">
            <div
                className="toc-tab-items"
            >
                {filterTree(items, searchTerm).length > 0 ? (
                    filterTree(items, searchTerm).map((item, index) => (
                        <RenderItem
                            key={item.title + index}
                            item={item}
                            searchTerm={searchTerm}
                            currentPath={currentPath}
                            isParentActive={false}
                            pathPrefix={pathPrefix}
                            onNavigate={onNavigate}
                        />
                    ))
                ) : (
                    searchTerm && (
                        <div className="no-results">
                            No results found for "<strong>{searchTerm}</strong>"
                        </div>
                    )
                )}
            </div>
        </div>
    );
});

// 📌 Main Component
const LeftToc = ({ leftToc, activeTab, currentPath, pathPrefix = '', onNavigate, searchResetKey }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [bottomReached, setBottomReached] = useState(false);
    const listRef = useRef(null);
    const hasScrolledRef = useRef(false);

    useEffect(() => {
        setSearchTerm('');
    }, [searchResetKey]);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;
            setBottomReached(isBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showTooltip = (e, id) => {
        const tip = document.getElementById(id);
        if (!tip) return;

        const offset = 24;

        tip.style.left = `${e.clientX}px`;
        tip.style.top = `${e.clientY + offset}px`;
        tip.style.transform = 'translateX(-38%)';
        tip.style.opacity = '1';
    };

    const hideTooltip = (id) => {
        const tip = document.getElementById(id);
        if (tip) tip.style.opacity = '0';
    };

    useEffect(() => {
        if (typeof document === 'undefined') return undefined;
        document.body.classList.toggle('left-collapsed', collapsed);

        return () => {
            document.body.classList.remove('left-collapsed');
        };
    }, [collapsed]);

    // Handle both object (new structure) and array (old structure)
    const getTabs = () => {
        if (!leftToc) return [];
        if (typeof leftToc === 'object' && !Array.isArray(leftToc)) {
            return Object.entries(leftToc).map(([tabName, tabData]) => ({
                tabName,
                items: tabData.items || []
            }));
        }
        // Old structure: just return as single tab
        return [{ tabName: 'Content', items: leftToc.items || [] }];
    };

    const tabs = getTabs();

    // Filter tabs based on activeTab prop
    const filteredTabs = activeTab
        ? tabs.filter((tab) => tab.tabName === activeTab)
        : tabs;
    const collapsedTabName = filteredTabs[0]?.tabName || activeTab || 'Content';

    // Scroll active item to center only on initial load
    useEffect(() => {
        if (hasScrolledRef.current) return;
        hasScrolledRef.current = true;

        const timer = setTimeout(() => {
            const sidebar = document.getElementById('left-sidebar');
            if (!sidebar) return;

            const activeEl = sidebar.querySelector('.toc-item.active-item, .toc-title.active-link');
            if (activeEl) {
                activeEl.scrollIntoView({ behavior: 'auto', block: 'center' });
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [currentPath]);

    return (
        <>
            <nav
                id="left-sidebar"
                className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}
                style={{ paddingBottom: bottomReached ? '60px' : '20px' }}
            >
                <div className="left-toc-search" id="left-toc-search">
                    <input
                        id="auto-complete"
                        type="search"
                        placeholder="Filter by title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {!searchTerm && (
                        <span className="bd-icon bd-icon-search left-toc-search-icon" aria-hidden="true" />
                    )}
                    {searchTerm && (
                        <button
                            type="button"
                            className="search-clear-btn"
                            onClick={() => setSearchTerm('')}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>
                <button
                    id="left-toc-collapse-btn"
                    className="left-toc-collapse-btn"
                    aria-label={collapsed ? 'Expand' : 'Collapse'}
                    aria-describedby={collapseTooltipId}
                    data-tooltip-id={collapseTooltipId}
                    aria-pressed={collapsed}
                    onMouseEnter={(e) => showTooltip(e, collapseTooltipId)}
                    onMouseMove={(e) => showTooltip(e, collapseTooltipId)}
                    onMouseLeave={() => hideTooltip(collapseTooltipId)}
                    onClick={() => setCollapsed((prev) => !prev)}
                >
                    <span className="bd-icon bd-icon-expand-1" aria-hidden="true"></span>
                </button>
                <div
                    className="toc-tab-items"
                    ref={listRef}
                >
                    {filteredTabs.map((tab) => (
                        <TocTab
                            key={tab.tabName}
                            tabName={tab.tabName}
                            items={tab.items}
                            currentPath={currentPath}
                            searchTerm={searchTerm}
                            pathPrefix={pathPrefix}
                            onNavigate={onNavigate}
                        />
                    ))}
                </div>
            </nav>
            {collapsed && (
                <div id="left-collapsed-label">
                    <span className="left-collapsed-label-text">{collapsedTabName}</span>
                </div>
            )}
            <div id={collapseTooltipId} className="custom-tooltip">
                {collapsed ? 'Expand' : 'Collapse'}
            </div>
        </>
    );
};

export default LeftToc;