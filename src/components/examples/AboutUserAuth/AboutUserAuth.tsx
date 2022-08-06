/* eslint-disable prettier/prettier */
import styled from 'styled-components';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface IAboutUserAuth {
  initials: string;
  username: string;
  onClick: () => void;
}

export const AboutUserAuth = ({ initials, username, onClick }: IAboutUserAuth) => (
  <Div onClick={onClick}>
  <p>
    <div>{initials}</div> 
    {username}
  </p>
    
  </Div>
);


const Div = styled.div<{ active?: boolean }>`
  display: block;
  float: left;
  background: ${ColorService.PRIMARY};
  color: ${ColorService.WHITE};
  border: none;
  width: 230px;
  height: 84px;
  box-sizing: border-box;
  cursor: pointer;

  div{
    background-color: ${ColorService.PRIMARY2};
    width: 48px;
    height: 48px;
    margin-top: 17px;
    margin-right: 16px;
    display: inline-block;
  }
  p {
    line-height: 48px;
    display: inline;
  }
`;
