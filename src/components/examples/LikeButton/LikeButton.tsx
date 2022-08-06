/* eslint-disable prettier/prettier */
import styled from 'styled-components';
//import likeDefault from './likeDefault.svg';
import {ReactComponent as Like} from './likeDefault.svg';


//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface ILike {
  onClick: () => void;
}

export const LikeButton = ({ onClick }: ILike) => (
  <Button onClick={onClick}>
    <LikeStyled />
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
  margin-right: 6px;

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

const LikeStyled = styled(Like)`
  fill: ${ColorService.PRIMARY2};
`;
