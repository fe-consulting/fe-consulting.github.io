import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { Subline } from "components";

const Post = styled.article`
  justify-items: space-between;
  width: 780px;
	display: flex;
	margin: 2rem 0;
	padding: 1rem 0;

	&:last-child {
		border-color: transparent;
	}
`;

const Title = styled.h2`
	position: relative;
	text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
	margin-bottom: 0.75rem;
	font-size: 20px;
	font-weight: 600;
`;

const Excerpt = styled.p`
	grid-column: -1 / 1;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-size: 15px;
	color: #878787;
`;

const PostImageWrapper = styled.div`
	flex: 0 0 300px;
`;

const PostImage = styled(Link)`
  background-image: url(${props => props.image});
  background-origin: border-box;
  width: 280px;
  margin-left: 20px;
  height: 180px;
  display: block;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  
   &:hover {
    border-bottom-color: transparent;
  }
`;

const ArticleMatadataWrapper = styled.div`
  flex: 0 0 550px;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, category, featuredImage }) => (
  <Post>
    <ArticleMatadataWrapper>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In{" "}
        <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </ArticleMatadataWrapper>
    <PostImageWrapper>
      <PostImage to={slug} image={featuredImage}/>
    </PostImageWrapper>
  </Post>
);

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired
};