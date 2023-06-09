import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Form = styled.div`
	display: flex;
	width: 90%;
	position: relative;
	align-items: center;
`;

export const Input = styled.input`
	width: 100%;
	margin-left: 10%;
	border-radius: 50px;
	padding: 20px 30px;
	font-size: 25px;
	border: none;
	transition: 0.2s;
	box-shadow: inset 0 0 5px ${colors.black};
	&:focus {
		box-shadow: 0px 0px 10px 1000px ${colors.black};
		outline: none;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 95%;
	}
`;

export const Button = styled.button`
	position: absolute;
	width: 50px;
	height: 50px;
	margin: 12px;
	border-radius: 50px;
	right: 0px;
	font-size: 15px;
	border: none;
	background-color: ${colors.lightGray};
	color: ${colors.white};
	transition: 0.2s all;
	box-shadow: 0 0 10px ${colors.black};
`;
