import styled from 'styled-components';
import { primary } from '../../utils/colors';

const Button = styled.button`
	background-color: ${(props) => (props.secondary ? '#fff' : primary)};
	border-color: ${(props) => (props.secondary ? primary : '#fff')};
	color: ${(props) => (props.secondary ? primary : '#fff')};
  padding-bottom: 15px;
  padding-top: 15px;
  width: 25%;
  border-radius: 5px;
  font-size: 16px;
`;

export default Button;
