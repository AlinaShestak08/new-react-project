/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


export const Footer = () => (
  <FooterStyled>
    <FooterText>©2022 Blogfolio</FooterText>
    <FooterText>All rights reserved</FooterText>
  </FooterStyled>
);

const FooterStyled = styled.footer`
  background: ${ColorService.EXTRA_LIGHT};
  width: 100%;
  display: flex;
  padding: 34px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const FooterText = styled.p`
  color: ${ColorService.GRAY};
  font-size: 16px;
  line-height: 24px;
  font-family: ${getFontFamily()};
`;