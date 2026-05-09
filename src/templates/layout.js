import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeadTag from '../components/HeadTag';
import TopNav from '../components/TopNav';
import LeftToc from '../components/LeftToc';
import MobileLeftToc from '../components/MobileLeftToc';
import Footer from '../components/Footer';
import RightToc from '../components/RightToc';
import NavigationButtons from '../components/NavigationButtons';
import MdContents from '../components/MdContents';
import Feedback from '../components/Feedback';
import Breadcrumb from '../components/BreadCrumb';
import '../assets/css/style.css';
import '../assets/css/prism.css';
import toc from '../../left-toc.json';

const tabData = toc.tabData || [];
const leftTocData = toc.leftTocData || [];
const breadCrumbData = toc.routerData || [];
const navigationData = toc.routerData || [];
const pathPrefix = toc?.pathPrefix || '';

const normalizePath = (value = '') => {
    if (!value) return '/';
    const pathname = String(value).split(/[?#]/)[0].trim();
    if (!pathname || pathname === '/') return '/';
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

const tabContainsPath = (items = [], currentPath = '') => {
    const targetPath = normalizePath(currentPath);

    const walk = (nodes) => {
        for (const node of nodes || []) {
            if (normalizePath(node?.path) === targetPath) {
                return true;
            }

            if (node?.items?.length && walk(node.items)) {
                return true;
            }
        }

        return false;
    };

    return walk(items);
};

const findActiveTab = (currentPath = '') => {
    const tabs = Object.entries(leftTocData || {});

    for (const [tabName, tabData] of tabs) {
        if (tabContainsPath(tabData?.items || [], currentPath)) {
            return tabName;
        }
    }

    return tabData[0] || '';
};

const sitevisitorLoad = () => {
    const script = document.createElement("script");
    script.src = pathPrefix + "/js/sitevisitor-tracking.js";
    script.async = true;
    document.body.appendChild(script);
}

const Layout = ({ pageContext = {} }) => {
    const { html = '', lastUpdated, slug = '' } = pageContext;

    // State for content - allows client-side updates without page reload
    const [pageContent, setPageContent] = useState({ html, lastUpdated });
    const [isLoading, setIsLoading] = useState(false);

    const stripPathPrefix = (pathname = '') => {
        const prefix = pathPrefix;
        if (prefix && pathname.startsWith(prefix)) {
            return pathname.slice(prefix.length);
        }
        return pathname;
    };

    const getInitialPath = () => {
        if (typeof window !== 'undefined' && window.location?.pathname) {
            // Strip pathPrefix to match slug and routerData keys
            return stripPathPrefix(window.location.pathname) || slug || '/';
        }

        return slug || '/';
    };

    const [currentPath, setCurrentPath] = useState(getInitialPath);
    const [activeTab, setActiveTab] = useState(findActiveTab(getInitialPath()));
    const [mobileTocOpen, setMobileTocOpen] = useState(false);
    const [tocSearchResetKey, setTocSearchResetKey] = useState(0);

    const scrollContentToTop = () => {
        if (typeof window === 'undefined') return;
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        const content = document.getElementById('content-container');
        if (content) content.scrollTop = 0;
    };

    // Fetch content via GraphQL
    const fetchPageContent = async (path) => {
        try {
            const pagePath = path == "/" ? "/index/" : path;
            const response = await fetch(`${pathPrefix}/page-data${pagePath}page-data.json`);
            const data = await response.json();
            setPageContent({ html: data.result.pageContext.html, lastUpdated: data.result.pageContext.lastUpdated });
        } catch (error) {
            console.error('Failed to fetch page content:', error);
        }
    };

    // Navigation handler for client-side updates
    const handleNavigate = (path) => {
        if (!path) return;

        // Update URL without page reload
        const newPath = pathPrefix ? `${pathPrefix}${path}` : path;
        window.history.pushState({}, '', newPath);

        // Reset scroll before loading the next page
        scrollContentToTop();

        // Update currentPath - THIS WAS MISSING
        setCurrentPath(path);

        // Update active tab
        setActiveTab(findActiveTab(path));

        // Fetch and update content
        fetchPageContent(path);
    };

    useEffect(() => {
        setPageContent({ html, lastUpdated });
    }, [slug, html, lastUpdated]);

    useEffect(() => {
        setActiveTab(findActiveTab(currentPath));
        setMobileTocOpen(false);
        sitevisitorLoad();
    }, [currentPath]);

    useEffect(() => {
        setCurrentPath(getInitialPath());
    }, [slug]);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const handleLocationChange = () => {
            setCurrentPath(stripPathPrefix(window.location.pathname));
            scrollContentToTop();
        };

        window.addEventListener('popstate', handleLocationChange);
        window.addEventListener('onRouteUpdate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            window.removeEventListener('onRouteUpdate', handleLocationChange);
        };
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setTocSearchResetKey((prev) => prev + 1);
    };

    const closeMobileToc = () => setMobileTocOpen(false);

    return (
        <>
            {/* Head Tag */}
            <HeadTag pageContext={pageContext} />

            {/* Header */}
            <Header />

            {/* TOP NAV */}
            <TopNav tabs={tabData} activeTab={activeTab} onTabChange={handleTabChange} />
            <MobileLeftToc
                open={mobileTocOpen}
                tabs={tabData}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                leftTocData={leftTocData}
                currentPath={currentPath}
                onClose={closeMobileToc}
            />

            <div id="layout-container">
                <div id="left-side">
                    <LeftToc
                        leftToc={leftTocData}
                        activeTab={activeTab}
                        currentPath={currentPath}
                        pathPrefix={pathPrefix}
                        onNavigate={handleNavigate}
                        searchResetKey={tocSearchResetKey}
                    />
                </div>
                <div id="right-side">
                    <main>
                        <Breadcrumb
                            breadCrumb={breadCrumbData}
                            currentPath={currentPath}
                            onToggleMobileToc={() => setMobileTocOpen((prev) => !prev)}
                            pathPrefix={pathPrefix}
                        />
                        <div id="content-container" style={{ position: 'relative' }}>
                            <MdContents html={pageContent.html} lastUpdated={pageContent.lastUpdated} />

                            {isLoading && (
                                <div className="content-loading content-loading-overlay" aria-live="polite" aria-busy="true">
                                    <span className="bd-icon bd-icon-loading" aria-hidden="true" />
                                </div>
                            )}

                            <Feedback pathName={currentPath} />
                            <NavigationButtons navigation={navigationData} currentPath={currentPath} pathPrefix={pathPrefix} />
                        </div>
                    </main>
                    <RightToc html={pageContent.html} enableBehavior />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;