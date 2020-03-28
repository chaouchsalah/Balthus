import styled from 'styled-components';
import { danger, pink } from '../../utils/colors';

const Error = styled.div`
  background-color: ${pink};
  color: ${danger};
  border: 1px solid ${danger};
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export default Error;
