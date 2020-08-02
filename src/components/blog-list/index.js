import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CTA from "../cta";
import NiceDate from "../../utilities/nice-date";

import { ImageWrapper, Wrapper, BlogCard } from "./blog-list-styles";

const BlogList = ({ posts }) => {
  console.log(posts);
  return (
    <Wrapper>
      {posts.map(post => {
        const categoryPage = `/blog/${post.category.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <li key={post.title}>
            <BlogCard>
              <ImageWrapper>
                <img src={post.thumbnail} alt="" />
                <h3>{post.title}</h3>
                <NiceDate startDate={post.date} />
              </ImageWrapper>

              <p>
                <Link to={categoryPage}>{post.category.toUpperCase()}</Link>
              </p>
            </BlogCard>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
};
