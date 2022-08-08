import { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import {
  showPosts,
  getPostsAsync,
  removePosts,
  toggleFavorite,
  getIsShowModalPost,
  getSelectedPost,
  setIsShowModalPost,
  setSelectedPost,
  getSelectedPosts,
  setIsEditMode,
  setSelectedPostsList,
  setIsShowModalPostsList,
  likePost,
  dislikePost,
  setSearchValue,
  setOrderingValue,
  setCurrentPage,
  postsSlide,
  setTotalCount,
} from '../../../core/slices/postsSlice';
import { IPost, IPostsInfo } from '../../../types/posts';
import { Input } from '../../atoms/Input';
import { PostCard, Tabs, Modal } from '../../examples';

// interface IPost {
//   author: number;
//   date: string;
//   id: number;
//   image: string;
//   lesson_num: number;
//   text: string;
//   title: string;
//   isFavorite: boolean;
// }

// interface IPostsInfo {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: IPost[];
// }

export const PostsPage = () => {
  // const [sendedUser, setSendedUser] = useState(false);

  const { posts, searchValue, orderingValue, perPage } = useSelector(showPosts);
  const isShowModalPost = useSelector(getIsShowModalPost);
  const selectedPost = useSelector(getSelectedPost);
  const { selectedPostsList, isShowModalPostsList, isEditMode } = useSelector(getSelectedPosts);

  const currentPage = useSelector(setCurrentPage);
  const totalCount = useSelector(setTotalCount);
  const pages = [1, 2, 3, 4, 5];
  // console.log({ postsStore, selectedPostsList, isShowModalPostsList });
  const dispatch = useDispatch();

  // const [posts, setPosts] = useState<IPostsInfo>();
  const [postsV2, setPostsV2] = useState<IPostsInfo>();
  // const [searchValue, setSearchValue] = useState<string>('');
  // const [orderingValue, setOrderingValue] = useState<string>('');

  const [postsLocal, setPostsLocal] = useState<IPost[]>();

  useEffect(() => {
    dispatch(getPostsAsync({ searchValue, orderingValue }) as any);
  }, [searchValue, orderingValue, perPage, dispatch, currentPage]);

  const onChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    dispatch(setSearchValue(event.target.value));
  };

  const searchInput = {
    value: searchValue,
    error: '',
    type: 'text' as 'text',
    labelText: 'Search',
    placeholder: 'Placeholder',
    disabled: false,
  };

  const onBlur = () => {};

  const fields = [
    {
      fieldName: 'lesson_num',
      name: 'Lesson number',
    },
    {
      fieldName: 'date',
      name: 'Date',
    },
    {
      fieldName: 'Title',
      name: 'title',
    },
    {
      fieldName: 'author',
      name: 'Author ID',
    },
  ];

  const onChangeOrdering = (field: string) => {
    console.log({ field });
    dispatch(setOrderingValue(field));
  };

  const onSelectPost = (post: IPost) => {
    dispatch(setSelectedPost(post));
    dispatch(setIsShowModalPost(true));
  };

  const onSelectPostLocal = (post: IPost) => {
    if (isEditMode) {
      setPostsLocal(postsLocal ? [...postsLocal, post] : [post]);
    }
  };

  const sendPosts = () => {
    dispatch(setSelectedPostsList(postsLocal));
    dispatch(setIsEditMode(false));
    setPostsLocal([]);
  };

  return (
    <>
      <Tabs
        link1Text="All"
        url1="/posts"
        link2Text="My favorites"
        url2="/posts"
        link3Text="Popular"
        url3="/posts"
      />
      <br></br>
      <br></br>
      <AllPosts>
        {posts?.results?.map(
          ({ date, title, id, image, lesson_num, author, isFavorite, likes, dislikes, ...res }) => (
            <PostCard
              onClick={
                () =>
                  onSelectPost({
                    date,
                    title,
                    id,
                    image,
                    lesson_num,
                    author,
                    isFavorite,
                    likes,
                    dislikes,
                    ...res,
                  })
                //onSelectPost({ date, title, id, image, author, lesson_num, text, ...res })
              }
              key={id}
              date={date}
              id={id}
              title={title}
              image={image}
            />
            // <PostCard key={id}>
            //     <PostImg onClick={() => setShowModal(true)} src={image}></PostImg>
            //     <PostDate>{date}</PostDate>
            //     <PostTitle href={"/posts/" + `${id}`} > {title} </PostTitle>
            //     <PostButtons>
            //       <div>
            //         <LikeButton onClick={() => console.log("like")}/>
            //         <DislikeButton onClick={() => console.log("dislike")}/>
            //       </div>
            //       <FavoriteButton onClick={() => console.log("favorite")}/>
            //     </PostButtons>
            // </PostCard>
          ),
        )}
      </AllPosts>

      <Paginator>
        {pages.map((page, index) => (
          <PageNumber key={index} onClick={() => dispatch(currentPage(page))}>
            {page}
          </PageNumber>
        ))}
      </Paginator>

      {isShowModalPost && (
        <Modal onClose={() => dispatch(setIsShowModalPost(false))}>
          {selectedPost?.image && <Image src={selectedPost?.image} alt="Image" />}
        </Modal>
      )}
    </>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul``;

const Li = styled.li``;

const TabsOrdering = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    padding: 20px;
    border: 1px solid black;
    margin: 4px;
  }
`;

const LiPost = styled.li`
  border: 1px solid black;
  padding: 3px;
`;

const Image = styled.img`
  width: 500px;
  max-height: 400px;
`;

const AllPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Paginator = styled.div``;

const PageNumber = styled.span`
  margin: 0 20px;
  cursor: pointer;
`;
