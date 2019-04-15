import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header } from 'components';
import { Underlined } from '../components/styled/Text';
import config from '../../config/SiteConfig';
import { Content } from '../components/styled/Content';

const Title = styled.h3`
	position: relative;
	text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
	margin-bottom: 0.75rem;
`;

const Category = ({
	data: {
		allMarkdownRemark: { group },
	},
}) => (
	<Layout>
		<Helmet title={`Categories | ${config.siteTitle}`} />

		<Header />

		<Wrapper>
			<Content>
				<h2>
					<Underlined>Categories</Underlined>
				</h2>

				{group.map(category => (
					<Title key={category.fieldValue}>
						<Link
							to={`/categories/${kebabCase(category.fieldValue)}`}
						>
							{category.fieldValue}
						</Link>{' '}
						({category.totalCount})
					</Title>
				))}
			</Content>
		</Wrapper>
	</Layout>
);

export default Category;

Category.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			group: PropTypes.array.isRequired,
		}),
	}).isRequired,
};

export const postQuery = graphql`
	query CategoriesPage {
		allMarkdownRemark {
			group(field: frontmatter___category) {
				fieldValue
				totalCount
			}
		}
	}
`;
