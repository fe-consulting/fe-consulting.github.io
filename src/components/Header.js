import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../config/Theme';
import { media } from '../utils/media';

const Heading = styled.h1`
	font-size: 18px;
	font-weight: 500;
	margin: 0;
	padding: 0.5rem 0;
	font-family: 'Raleway', sans-serif;

	a {
		&:hover {
			color: #fff;
			border-color: transparent;
		}
	}
`;

const Navigation = styled.div`
	flex: 1;
	align-items: end;
	justify-content: flex-end;
	line-height: 15px;
	flex-direction: row;
	display: flex;

	a {
		font-weight: 100;
		font-size: 18px;
		margin-left: 2rem;
		border-bottom: 3px solid transparent;
		padding: 0.5rem 0;
		transition: border 0.25s;
		font-family: 'Raleway', sans-serif;
	}

	a:hover,
	[aria-current],
	.current {
		border-bottom-color: ${theme.primary};
		color: #fff;
	}
`;

const FlexHeader = styled.div`
	display: flex;
	max-width: 1140px;
	margin: 0 auto;
	padding: 1rem 3rem;

	@media ${media.phone} {
		padding: 20px;
	}
`;

export const Header = () => (
	<FlexHeader>
		<Heading>
			<Link to="/">frontend.consulting</Link>
		</Heading>

		<Navigation>
			<Link activeClassName="current" to="/articles">
				articles
			</Link>
			<a href="mailto:gc@frontend.consulting">get in touch</a>
		</Navigation>
	</FlexHeader>
);

export default Header;
