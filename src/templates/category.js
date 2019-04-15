import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { Layout, Wrapper, Header, Subline, Article } from 'components';
import config from '../../config/SiteConfig';
import { Content } from '../components/styled/Content';
import { Underlined } from '../components/styled/Text';

const Category = props => {
	const { category } = props.pageContext;
	const { edges, totalCount } = props.data.allMarkdownRemark;
	const subline = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${category}"`;

	return (
		<Layout>
			<Helmet title={`${category} | ${config.siteTitle}`} />
			<Header />

			<Wrapper>
				<Content>
					<h2>
						<Underlined>{category}</Underlined>
					</h2>
					<Subline sectionTitle>
						{subline} (See{' '}
						<Link to="/categories">all categories</Link>)
					</Subline>
					{edges.map(post => (
						<Article
							title={post.node.frontmatter.title}
							date={post.node.frontmatter.date}
							excerpt={post.node.excerpt}
							timeToRead={post.node.timeToRead}
							slug={post.node.fields.slug}
							category={post.node.frontmatter.category}
							key={post.node.fields.slug}
						/>
					))}
				</Content>
			</Wrapper>
		</Layout>
	);
};

export default Category;

Category.propTypes = {
	pageContext: PropTypes.shape({
		category: PropTypes.string.isRequired,
	}).isRequired,
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array.isRequired,
			totalCount: PropTypes.number.isRequired,
		}),
	}).isRequired,
};

export const postQuery = graphql`
	query CategoryPage($category: String!) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { category: { eq: $category } } }
		) {
			totalCount
			edges {
				node {
					frontmatter {
						title
						date(formatString: "DD.MM.YYYY")
						category
					}
					fields {
						slug
					}
					excerpt(pruneLength: 200)
					timeToRead
				}
			}
		}
	}
`;
