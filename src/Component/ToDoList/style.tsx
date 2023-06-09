import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Todos = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 90%;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 10px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 80%;
	}
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 100%;
	}
	@media only screen and (max-width: ${screenSizes.mediaS}px) {
		width: 100%;
	}
	@media only screen and (max-width: ${screenSizes.mediaXS}px) {
		width: 100%;
	}
`;

export const TodoSingle = styled.div`
	display: flex;
	border-radius: 5px;
	width: 29.5%;
	padding: 20px;
	margin-top: 15px;
	align-items: center;
	background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 100%;
	}
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 40%;
	}
	@media only screen and (max-width: ${screenSizes.mediaS}px) {
		width: 50%;
	}
	@media only screen and (max-width: ${screenSizes.mediaXS}px) {
		width: 60%;
	}
`;

export const TodoSingleTest = styled.div`
	flex: 1;
	padding: 5px;
	border: none;
	font-size: 20px;
`;

export const Icon = styled.div`
	margin-left: 10px;
	font-size: 25px;
	cursor: pointer;
`;
