/* eslint-disable prettier/prettier */
import styled from 'styled-components';
//import likeDefault from './likeDefault.svg';
import {ReactComponent as Dislike} from './dislikeDefault.svg';


//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface IDislike {
  onClick: () => void;
}

export const DislikeButton = ({ onClick }: IDislike) => (
  <Button onClick={onClick}>
    <DislikeStyled />
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
    background: ${ColorService.ERROR};
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

const DislikeStyled = styled(Dislike)`
  fill: ${ColorService.PRIMARY2};
`;
