import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import sortObjInArray from "../utilities/sortObjectsInArray";

const useSelectedProjects = () => {
  const data = useStaticQuery(graphql`
    query getSelectedProjects {
      allClientsJson {
        edges {
          node {
            client
            website
            projects {
              type
              tech
              designer
              yearBuild
              image
              featured
              thumbnail
            }
          }
        }
      }
    }
  `);

  // get all clients that have a featured project
  const allSelectedProjects = data.allClientsJson.edges.filter(client => {
    let isFeatured;
    client.node.projects.forEach((project, i) => {
      isFeatured = false;
      if (project.featured) {
        isFeatured = true;
      }
    });
    return isFeatured;
  });

  // remove non-featured projects
  const featuredProjects = allSelectedProjects.map(project => {
    // client can have more than 1 project. get the featured one
    const featuredProject = project.node.projects.filter(item => item.featured);
    // normalize object
    return {
      client: project.node.client,
      year: featuredProject[0].yearBuild,
      thumbnail: featuredProject[0].thumbnail,
    };
  });

  // and sort them by date
  const sortedFeaturedProjects = featuredProjects.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    }
    if (a.year > b.year) {
      return -1;
    }
    return 0;
  });

  return sortedFeaturedProjects;
};

export default useSelectedProjects;
