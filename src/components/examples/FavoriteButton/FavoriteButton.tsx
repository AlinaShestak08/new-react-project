/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import {ReactComponent as Favorite} from './favoriteIcon.svg';


//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface IFavorite {
  onClick: () => void;
}

export const FavoriteButton = ({ onClick }: IFavorite) => (
  <Button onClick={onClick}>
    <FavoriteStyled />
  </Button>
);


const Button = styled.button`
  display: block;
  float: left;
  background: ${ColorService.LIGHT};
  color: ${ColorService.WHITE};
  border: none;
  width: 88px;
  height: 56px;
  cursor: pointer;

  :hover{
    background: ${ColorService.PRIMARY2};
    svg path {
      fill: ${ColorService.WHITE};
    }
  }

  :disabled {
    background: ${ColorService.LIGHT};
    svg path {
      fill: ${ColorService.GRAY};
    }
  }
`;

const FavoriteStyled = styled(Favorite)`
  
`;
