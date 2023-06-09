import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Container = styled.div`
	text-transform: uppercase;
	font-size: 40px;
	margin: 30px 0;
	z-index: 1;
	text-align: center;
	color: ${colors.white};
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 15px 0;
		font-size: 30px;
	}
`;

export const Header = styled.div`
	align-items: center;
	height: 70px;
	color: #f1f1f1;
`;
