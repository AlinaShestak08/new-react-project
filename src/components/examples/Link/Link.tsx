/* eslint-disable prettier/prettier */
import styled from 'styled-components';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';


interface ILink {
  text: string;
  url: string;
  onClick: () => void;
}

export const Link = ({ text, url, onClick }: ILink) => (
  <LinkStyled onClick={onClick} href={url}>
    {text}
  </LinkStyled>
);


const LinkStyled = styled.a`
  color: ${ColorService.SECONDARY};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-decoration: underline;

  :visited{
    color: ${ColorService.SECONDARY};
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  :disabled {
    color: ${ColorService.GRAY};
    cursor: auto;
  }
  :hover {
    color: ${ColorService.PRIMARY};
  }
`;
