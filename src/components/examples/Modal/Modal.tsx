/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import styled from 'styled-components';

//import { getFontFamily } from '../../../services';
//import { ColorService } from '../../../services/ColorService';

interface IModal {
children: ReactNode
onClose: () => void;
}


export const Modal = ({children, onClose}: IModal) => (
    
    <ModalStyled>
        <Content>
            <ModalClose onClick={onClose}>
                &#10005;
            </ModalClose>
            <ModalContent>
            {children}
            </ModalContent>
        </Content>
  </ModalStyled>
);

const ModalStyled = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 20px;
  padding: 12px 16px;
`;

const ModalClose = styled.div`
  display: flex;
  right: 8px;
  top: 4px;
  font-size: 24px;
  cursor: pointer;
  flex-direction: row-reverse;
`;

const ModalContent = styled.div`
  padding: 0px 20px 20px 20px;
`;