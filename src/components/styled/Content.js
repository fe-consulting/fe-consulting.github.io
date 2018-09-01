import styled from 'styled-components';
import { media } from '../../utils/media';

export const Content = styled.div`
	grid-column: 2;
	padding: 1rem 3rem;
	@media ${media.tablet} {
		padding: 3rem 2rem;
	}
	@media ${media.phone} {
		padding: 2rem 0.5rem;
	}
	overflow: hidden;
`;
