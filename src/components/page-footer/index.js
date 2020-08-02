/* global window, document */

import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import ContactForm from "../contact-form";

import Logo from "../site-icons/logo";
import debounce from "../../utilities/debounce";
import useMainNav from "../../hooks/useSiteNav";
import useSiteImage from "../../hooks/useSiteImage";
import useSiteMetadata from "../../hooks/useSiteMetadata";

import { Container } from "../common-styles";
import { Wrapper, FooterInfo, FooterDecoration, Copyright } from "./footer-styles";

/** ***************************************************************************
 *  Footer Component
 *************************************************************************** */

const Footer = () => {
  const siteMetadata = useSiteMetadata();
  const thisImage = siteMetadata.footer.image;
  const footerImage = useSiteImage(thisImage);

  console.log(footerImage);

  return (
    <Wrapper>
      <FooterInfo>
        <Link to="/">
          <Logo />
        </Link>
        <ContactForm />
        <Copyright>{siteMetadata.footer.copyright}</Copyright>
      </FooterInfo>
      <FooterDecoration>
        <Img fluid={footerImage} alt="" />
      </FooterDecoration>
    </Wrapper>
  );
};

export default Footer;
