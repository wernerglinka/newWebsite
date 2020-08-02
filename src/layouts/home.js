/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../utilities/md-to-html";
import allComponents from "../components/index";
import { Container } from "../components/common-styles";
import SectionWrapper from "../components/page-section-wrapper";
import { PageContent, HomePageIntro } from "./layout-styles";
import PageBanner from "../components/page-banner";

/** ***************************************************************************
 *  Home Page Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *  - the page body
 *************************************************************************** */

const StandardPage = ({ pageContext }) => {
  const fields = pageContext.fields;
  const pageSections = fields.sections;
  const pageBody = pageContext.body;
  // get page banner properties
  const { hasBanner, banner, pageTitle } = fields.pageIntroduction;

  return (
    <>
      <PageContent>
        <Container>
          <HomePageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntroduction.pageIntro) }} />
        </Container>

        {pageSections &&
          pageSections.map((section, i) => {
            const SectionComponent = allComponents[section.component];

            return (
              <SectionWrapper key={`${section.sectionID}${i}`}>
                <SectionComponent info={section} />
              </SectionWrapper>
            );
          })}
      </PageContent>
      <Container>
        <MDXRenderer>{pageBody}</MDXRenderer>
      </Container>
    </>
  );
};

StandardPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default StandardPage;
