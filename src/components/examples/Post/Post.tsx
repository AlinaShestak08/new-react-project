/* eslint-disable prettier/prettier */

import styled from 'styled-components';
import { CustomTitle, DislikeButton, LikeButton } from '../../examples';
import { FavoriteButtonWithIcon } from '../../examples/FavoriteButtonWithIcon';

interface IPost {
    image: string;
    title: string;
    text: string;
  }
  
  
export const Post = ({title, image, text}: IPost) => (
    <>
      <CustomTitle text={title}></CustomTitle>
      <PostImage src={image}></PostImage>
      <PostText>{text} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</PostText>
      <PostButtons>
        <div>
          <LikeButton onClick={() => console.log("LikePost")}></LikeButton>
          <DislikeButton onClick={() => console.log("DislikePost")}></DislikeButton>
        </div>
          <FavoriteButtonWithIcon onClick={() => console.log("Add to favorites")}></FavoriteButtonWithIcon>
      </PostButtons>
    </>
);

const PostImage = styled.img `
  margin-top: 48px;
  width: 80%;
`;

const PostText = styled.p `
  margin: 48px 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  width: 920px;
  text-align: justify;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const PostButtons = styled.div `
  align-items: center;
  width: 920px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;