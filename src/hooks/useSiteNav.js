import { useStaticQuery, graphql } from "gatsby";

const useSiteMainNav = () => {
  const data = useStaticQuery(graphql`
    {
      topLevel: file(relativePath: { eq: "main-navigation/main-menu.json" }) {
        childMainNavigationJson {
          main {
            label
            url
            itemID
            hasSubMenu
            itemClass
            buttonAttr
          }
        }
      }
    }
  `);

  const topLevel = data.topLevel.childMainNavigationJson.main;

  return topLevel;
};

export default useSiteMainNav;
