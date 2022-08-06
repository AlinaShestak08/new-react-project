/* eslint-disable prettier/prettier */
import styled from 'styled-components';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface IMenuBurger {
  active?: boolean;
  onClick: () => void;
}

export const ButtonMenuBurger = ({ active, onClick }: IMenuBurger) => (
  <Button onClick={onClick} active={active}>
    <div />
    <div />
    <div />
  </Button>
);


const Button = styled.button<{ active?: boolean }>`
  display: block;
  float: left;
  background: ${ColorService.PRIMARY};
  color: ${ColorService.WHITE};
  border: none;
  width: 84px;
  height: 84px;

  cursor: pointer;
  div {
    position: relative;
    width: 20px;
    height: 2px;
    border-radius: 10px;
    margin-top: 4px;
    margin-left: 32px;
    background-color: white;

    transition: all 0.3s linear;
    transform-origin: 1px;
  
    :first-child {
      transform: ${({ active }) =>
        (active ? "rotate(45deg)" : "rotate(0)")};
      margin-left: ${({ active }) =>
        (active ? "35px" : "32px")};
    }
    :nth-child(2) {
      opacity: ${({ active }) => (active ? "0" : "1")};
      transform: ${({ active }) => 
        (active ? "rotate(45deg)" : "rotate(0)")};
      margin-left: ${({ active }) =>
        (active ? "35px" : "32px")};
    }
    :nth-child(3) {
      transform: ${({ active }) =>
        (active ? "rotate(-45deg)" : "rotate(0)")};
      margin-left: ${({ active }) =>
        (active ? "35px" : "32px")};
    }
  }
  
`;
