import styled from 'styled-components';

export const CheckWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 66.666%;
  align-self: center;
  h4 {
    width: 100%;
  }
`;

export const StyledStastics = styled.div`
	background-color: #fff;
	width: 66.666%;
	margin-top: 30px;
	padding-top: 15px;
	padding-bottom: 15px;
	display: flex;
	flex-direction: column;
	canvas {
		margin-left: 25%;
		margin-top: 20px;
	}
	border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  button {
    margin-top: 20px;
    align-self: center;
  }
`;
