import styled from 'styled-components';

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10%;
	padding-right: 10%;
	h2 {
		margin-top: 40px;
		margin-bottom: 50px;
		align-self: center;
	}
	padding-bottom: 20px;
	button {
		align-self: flex-end;
		margin-right: 20px;
	}
`;

export const TabWrapper = styled.div`
	display: flex;
	width: 66.666%;
	background-color: white;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;

export const ContentWrapper = styled.div`
	background-color: #fff;
	width: 66.666%;
	margin-top: -21px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
`;

export const Tab = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 50px;
	p {
		margin-top: ${(props) => props.isSelected && '-10px'};
	}
	${(props) => {
		return (
			props.isSelected &&
			`span {
		height: 3px;
		width: 100%;
		background-color: blue;
		margin-bottom: -20px;
  }`
		);
	}}
`;

export const StyledMain = styled.span`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
