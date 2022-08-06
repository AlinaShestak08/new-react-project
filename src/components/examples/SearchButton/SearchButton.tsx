/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import searchImg from './search.svg';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface ISearchButton {
  onClick: () => void;
}

export const SearchButton = ({ onClick }: ISearchButton) => (
  <Button onClick={onClick}>
    <img src={searchImg} />
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

  img {
    
  }
`;
