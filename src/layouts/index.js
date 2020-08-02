/* global window */

import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "emotion-theming";
import { FiArrowUp } from "react-icons/fi";
import { Waypoint } from "react-waypoint";
import { CSSTransition } from "react-transition-group";
import theme from "../styles/theme";
import Head from "../components/head";
import Header from "../components/page-header";
import Footer from "../components/page-footer";
// import shortcodes
import InlineMessage from "../components/shortcodes/inline-message";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { ToTop, PageBg } from "./layout-styles";
import PageTransition from "../components/page-transition";

/** ***************************************************************************
 *  Default Page Layout
 *
 * - uses ThemeProvider from emotion-theming
 * - uses MDXProvider to allow injection of shortcodes without importing them
 * - uses page transitions CSSTransition from react-transitions
 *
 *  Notice the PageBg component. This is necessary so the footer is not
 *  shinning through when the page is faded-in
 *************************************************************************** */

const DefaultLayout = ({ children, location }) => {
  const siteMetadata = useSiteMetadata();
  const shortcodes = { InlineMessage };

  // get page banner properties
  const { hasBanner, banner, pageTitle } = children.props.pageContext.fields.pageIntroduction;

  // manage scroll state, stickyness of the main nav and visibility of the to top button
  const [scrollState, setScrollState] = useState({
    stickyMainNav: false,
    toTopVisible: false,
  });

  const hideToTopButton = () => {
    setScrollState({ ...scrollState, toTopVisible: false });
  };

  const showToTopButton = () => {
    setScrollState({ ...scrollState, toTopVisible: true });
  };

  const makeNavFixed = () => {
    setScrollState({ ...scrollState, stickyMainNav: true });
  };

  const makeNavStatic = () => {
    setScrollState({ ...scrollState, stickyMainNav: false });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <Head metaData={siteMetadata} />

          <Waypoint onEnter={makeNavStatic} onLeave={makeNavFixed} />

          <div id="pageTop" />

          <Header siteTitle={siteMetadata.title} isSticky={scrollState.stickyMainNav} />
          <MDXProvider components={shortcodes}>
            <PageBg className={hasBanner ? "hasBanner" : null}>
              {/* waypoint for to top botton */}
              <Waypoint
                scrollableAncestor={typeof window === "undefined" ? null : window}
                onEnter={hideToTopButton}
                onLeave={showToTopButton}
              />

              <PageTransition location={location}>{children}</PageTransition>
            </PageBg>
          </MDXProvider>
          <Footer />
          <ToTop href="#pageTop" className={scrollState.toTopVisible ? "isVisible" : null}>
            <FiArrowUp />
          </ToTop>
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropType.shape().isRequired,
  location: PropType.shape().isRequired,
};

export default DefaultLayout;
