import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Article, Wrapper, Header } from 'components';
import { Content } from '../components/styled/Content';
import { Underlined } from '../components/styled/Text';

const PostsPage = ({
	data: {
		allMarkdownRemark: { edges: postEdges },
	},
}) => (
	<Layout>
		<Header />

		<Wrapper>
			<Content>
				<h2>
					<Underlined>Articles</Underlined>
				</h2>

				{postEdges.length &&
					postEdges.map(post => (
						<Article
							title={post.node.frontmatter.title}
							date={post.node.frontmatter.date}
							excerpt={post.node.excerpt}
							timeToRead={post.node.timeToRead}
							slug={post.node.fields.slug}
							category={post.node.frontmatter.category}
							key={post.node.fields.slug}
							featuredImage={post.node.frontmatter.featuredImage}
						/>
					))}
			</Content>
		</Wrapper>
	</Layout>
);

export default PostsPage;

PostsPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array.isRequired,
		}),
	}).isRequired,
};

export const IndexQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "DD.MM.YYYY")
						category
						featuredImage
					}
					excerpt(pruneLength: 200)
					timeToRead
				}
			}
		}
	}
`;
