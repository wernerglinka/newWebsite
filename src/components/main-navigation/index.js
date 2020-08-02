import React, { useState } from "react";
import { Link } from "gatsby";
import useSiteNav from "../../hooks/useSiteNav";
import { MainMenu } from "./main-navigation-styles";

/** ***************************************************************************
 *  Main menu Component
 *  Builds the main navigation menu
 *************************************************************************** */
const MainNav = () => {
  const allNavLinks = useSiteNav();
  const topLevelItems = allNavLinks;

  return (
    <MainMenu>
      {topLevelItems.map(link => (
        <li key={link.url} menuid={link.itemID} className={link.itemClass || null}>
          <Link to={link.url} activeClassName="active">
            {link.label}
          </Link>
        </li>
      ))}
    </MainMenu>
  );
};

MainNav.propTypes = {};

export default MainNav;
