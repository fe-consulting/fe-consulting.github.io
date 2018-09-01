import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Subline } from 'components';

const Post = styled.article`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	padding: 1rem 0;
	border-bottom: 1px dashed #424242;
	
	&:last-child {
		border-color: transparent;
	}
`;

const Title = styled.h2`
	position: relative;
	text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
	margin-bottom: 0.75rem;
	font-size: 18px;
	font-weight: 600;
`;

const Excerpt = styled.p`
	grid-column: -1 / 1;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-size: 13px;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, category }) => (
	<Post>
		<Title>
			<Link to={slug}>{title}</Link>
		</Title>
		<Subline>
			{date} &mdash; {timeToRead} Min Read &mdash; In{' '}
			<Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
		</Subline>
		<Excerpt>{excerpt}</Excerpt>
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
};
