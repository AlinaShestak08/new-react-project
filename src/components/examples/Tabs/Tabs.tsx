/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface ITabs {
  link1Text: string;
  link2Text: string;
  link3Text: string;
  url1: string;
  url2: string;
  url3: string;
}

export const Tabs = ({ link1Text, link2Text, link3Text, url1, url2, url3 }: ITabs) => (
  <TabsStyled>
    <Tab href={url1}>{link1Text}</Tab>
    <Tab href={url2}>{link2Text}</Tab>
    <Tab href={url3}>{link3Text}</Tab>
  </TabsStyled>
);


const TabsStyled = styled.div`
  color: ${ColorService.WHITE};
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: flex-start;
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;

const Tab = styled.a`
  position: relative;
  top: 1px;
  font-size: 16px;
  line-height: 24px;
  font-family: ${getFontFamily('semibold')};
  color: ${ColorService.SECONDARY};
  padding: 0 20px 24px;
  display: block;
  text-decoration: none;

:active {
    border-bottom: 1px solid  ${ColorService.SECONDARY};
  }

:hover {
    color: ${ColorService.PRIMARY};
}
`;

