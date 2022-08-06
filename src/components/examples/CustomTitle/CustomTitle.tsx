/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';

interface ITitle {
  text: string;
}

export const CustomTitle = ({ text }: ITitle) => (
  <Title>
    {text}
  </Title>
);

const Title = styled.p`
  color: ${ColorService.BLACK};
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  font-family: ${getFontFamily('bold')};
  text-align: left;
  align-self: flex-start;
`;