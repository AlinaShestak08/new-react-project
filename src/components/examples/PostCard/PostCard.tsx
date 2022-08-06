/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import styled from 'styled-components';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';
import { DislikeButton } from '../DislikeButton';
import { FavoriteButton } from '../FavoriteButton';
import { LikeButton } from '../LikeButton';

interface IModal {
date: string,
title: string,
id: number,
image: string,
onClick: () => void
}


export const PostCard = ({date, title, id, image, onClick}: IModal) => (
    
    <PostCardStyled key={id}>
        <PostImg onClick={onClick} src={image}></PostImg>
        <PostDate>{date}</PostDate>
        <PostTitle href={"/posts/" + `${id}`} > {title} </PostTitle>
        <PostButtons>
        <div>
            <LikeButton onClick={() => console.log("like")}/>
            <DislikeButton onClick={() => console.log("dislike")}/>
        </div>
        <FavoriteButton onClick={() => console.log("favorite")}/>
        </PostButtons>
        
    </PostCardStyled>
);

const PostImg = styled.img`
  height: 246px;
  max-width: 300px;
  cursor: pointer;
`;
const PostCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: 20px;
  margin: 0 3px;
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;
const PostDate = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  color : ${ColorService.GRAY};
  margin: 10px 0px;
`;
const PostTitle = styled.a`
  color: ${ColorService.BLACK};
  text-align: start;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 10px;

  :hover {
    color:  ${ColorService.PRIMARY};
  }
`;

const PostButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;