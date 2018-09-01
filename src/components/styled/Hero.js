import styled from 'styled-components';
import { media } from "../../utils/media";

export const Hero = styled.h2`
	font-size: 28px;
	margin: 0;
	line-height: 1.8;
	align-content: center;
	align-self: center;
	align-items: center;
	height: calc(100vh - 150px);
	justify-content: center;
	display: flex;
	text-align: center;
	
	@media ${media.phone} {
    font-size: 22px;
  }
`;

export const HeroLine = styled.div`
	font-weight: 600;
	font-size: 40px;
	
	@media ${media.phone} {
    font-size: 36px;
  }
`;
