/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import {ReactComponent as Favorite} from './favoriteIcon.svg';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface IFavorite {
  isFavorite?: boolean;
  onClick: () => void;
}

export const FavoriteButtonWithIcon = ({ onClick, isFavorite }: IFavorite) => (
  <Button onClick={onClick} isFavorite = {isFavorite}>
    <FavoriteStyled />
    <PButton>Add to favorites</PButton>
  </Button>
);


const Button = styled.button<{ isFavorite?: boolean }>`
  display: flex;
  float: left;
  background-color: ${ColorService.LIGHT};
  color: ${ColorService.SECONDARY};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  svg path {
      fill: ${ColorService.SECONDARY};
    }
  border: none;
  width: 237px;
  height: 56px;
  cursor: pointer;
  padding: 16px 40px;

  :hover {
    color: ${ColorService.WHITE};
    background: ${ColorService.PRIMARY2};
    svg path {
      fill: ${ColorService.WHITE};
    }
  }

  :disabled {
    svg path {
      fill: ${ColorService.GRAY};
    }
  }
`;

const FavoriteStyled = styled(Favorite)`
  
`;

const PButton = styled.p`
  
`;