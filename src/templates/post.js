import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled, { injectGlobal } from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from 'components';

import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';
import { Content } from '../components/styled/Content';
import theme from '../../config/Theme';

const Title = styled.h1`
	margin-bottom: 1rem;
`;

const PostContent = styled.div`
	font-size: 18px;
	font-weight: 300;
	font-family: 'Merriweather', serif;
	line-height: 2;
	width: 100%;
	max-width: 800px;
	margin-top: 2em;

	a[target='_blank'] {
		border-bottom: 1px solid ${theme.primary};
		padding-bottom: 2px;
	}
`;

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Merriweather:300,400,700');
`;
require('prismjs/themes/prism-tomorrow.css');

const Post = props => {
	const { slug, prev, next } = props.pageContext;
	const postNode = props.data.markdownRemark;
	const post = postNode.frontmatter;

	return (
		<Layout>
			<SEO postPath={slug} postNode={postNode} postSEO />
			<Helmet title={`${post.title} | ${config.siteTitle}`} />

			<Header />

			<Wrapper>
				<Content>
					<Title>{post.title}</Title>

					<Subline>
						{post.date} &mdash; {postNode.timeToRead} Min Read
						&mdash; In{' '}
						<Link to={`/categories/${kebabCase(post.category)}`}>
							{post.category}
						</Link>
					</Subline>
					<PostContent
						dangerouslySetInnerHTML={{ __html: postNode.html }}
					/>
					<PrevNext prev={prev} next={next} />
				</Content>
			</Wrapper>
		</Layout>
	);
};

export default Post;

Post.propTypes = {
	pageContext: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		next: PropTypes.object,
		prev: PropTypes.object,
	}),
	data: PropTypes.shape({
		markdownRemark: PropTypes.object.isRequired,
	}).isRequired,
};

Post.defaultProps = {
	pageContext: PropTypes.shape({
		next: null,
		prev: null,
	}),
};

export const postQuery = graphql`
	query postBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD.MM.YYYY")
				category
			}
			timeToRead
		}
	}
`;
