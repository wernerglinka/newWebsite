import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "./useSiteMetadata";

/** ***************************************************************************
 *  useBlogposts
 *
 *  Get all blogposts filter out the blog landing page and return a normalized
 *  array of blogposts.
 *  Blogposts may be filtered for a
 *  - single categoy or "all"
 *  - single author or "all"
 *  - quantity
 *  - specific year or "all"
 *
 *  Notes:
 *  - filter-out the file with template set to "blog" as that is the blog
 *    landing page
 *  - since blogpost authors are a reference to the authors file we
 *    need to convert them into real names. It is imperative that the
 *    file name reflects the name that is used in the file name. For example:
 *    "Barack Obama" =>  "/content/data/authors/barack-obama.json"
 *************************************************************************** */
const useBlogposts = props => {
  const data = useStaticQuery(graphql`
    query getBlogposts {
      allBlogposts: allMdx(
        filter: {
          fileAbsolutePath: { glob: "**/content/pages/blog/**/*.mdx" }
          frontmatter: { template: { ne: "blog" } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
              pageIntroduction {
                pageTitle
              }
              thumbnail
              category
              tags
              date
            }
          }
        }
      }
    }
  `);

  const allBlogposts = [];

  data.allBlogposts.edges.map(edge => {
    const temp = {
      category: edge.node.frontmatter.category,
      title: edge.node.frontmatter.title,
      thumbnail: edge.node.frontmatter.thumbnail,
      date: edge.node.frontmatter.date,
    };

    allBlogposts.push(temp);
  });

  return allBlogposts;
};

export default useBlogposts;
