/* eslint no-unused-expressions:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { SEO } from 'components';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600');

  body {
    color: ${theme.default};
    background: ${theme.bg};
    font-family: 'Raleway', sans-serif;
    @media ${media.phone} {
      font-size: 14px;
    }
    ::selection, 
    ::-moz-selection {
  		background: ${theme.bg};
		}
  }
  
  a {
    color: ${theme.default};
    text-decoration: none;
    transition: all ${theme.transitionTime};
    border-bottom: 1px solid transparent;
  }
  
  a:hover {
    border-color: ${theme.primary};
    color: ${theme.default};
  }
  
  h1, h2, h3, h4 {
    color: ${theme.default};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
	text-align: center;
	padding: 3rem 0;
	span {
		font-size: 0.75rem;
	}
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query LayoutQuery {
				site {
					buildTime(formatString: "DD.MM.YYYY")
				}
			}
		`}
		render={() => (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<SEO />
					{children}
					<Footer>
						<a href='https://github.com/fe-consulting' target='_blank'>
              <img src='images/github.png' alt='Github' width="25" height='auto' />
						</a>
					</Footer>
				</React.Fragment>
			</ThemeProvider>
		)}
	/>
);

export default Layout;

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
