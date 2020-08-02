import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useClientNames = thisTestimonial => {
  const data = useStaticQuery(graphql`
    query getClientNames {
      allClientsJson {
        edges {
          node {
            client
          }
        }
      }
    }
  `);

  const allClientNames = data.allClientsJson.edges.map(client => client.node.client);

  return allClientNames;
};

export default useClientNames;
