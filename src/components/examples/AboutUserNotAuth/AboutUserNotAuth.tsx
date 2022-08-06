/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import userImg from './user.svg';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface IAboutUserNotAuth {
  onClick: () => void;
}

export const AboutUserNotAuth = ({ onClick }: IAboutUserNotAuth) => (
  <Div onClick={onClick}>
    <img src={userImg} />
  </Div>
);


const Div = styled.div<{ active?: boolean }>`
  display: block;
  float: left;
  background: ${ColorService.PRIMARY};
  color: ${ColorService.WHITE};
  border: none;
  width: 84px;
  height: 84px;
  cursor: pointer;

  img {
    margin-top: 29px;
  }
`;
