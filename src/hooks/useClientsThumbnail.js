import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useClientsThumbnail = thisImage => {
  const data = useStaticQuery(graphql`
    query getClientThumbnail {
      allFile(filter: { relativeDirectory: { eq: "clientsTns" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1600) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  // Gatsby graphql doesn't accept variables, ergo we get all images in folder banner
  // and then match the file name.
  // path to folder is determined by gatsby-plugin-filesystem
  let thumbnail;
  data.allFile.edges.map(edge => {
    if (thisImage.includes(edge.node.childImageSharp.fluid.originalName)) {
      thumbnail = edge.node.childImageSharp.fluid;
    }
  });

  return thumbnail;
};

export default useClientsThumbnail;
