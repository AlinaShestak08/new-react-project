import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostsInfo, IPost } from '../../types/posts';
const API_URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=20';

interface IPostSate {
  posts: IPostsInfo | null;
  isShowModalPost: boolean;
  selectedPost: IPost | null;
  selectedPostsList: IPost[] | null;
  isShowModalPostsList: boolean;
  isEditMode: boolean;
  searchValue: string;
  orderingValue: string;
  currentPage: number;
  perPage: number;
  totalCount: number;
}

const initialState: IPostSate = {
  posts: null,
  isShowModalPost: false,
  selectedPost: null,
  selectedPostsList: null,
  isShowModalPostsList: false,
  isEditMode: false,
  searchValue: '',
  orderingValue: '',
  currentPage: 1,
  perPage: 6,
  totalCount: 0,
};

export const postsSlide = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      const posts = action.payload.results.map((post: IPost) => ({
        ...post,
        isFavorite: false,
        likes: 0,
        dislikes: 0,
      }));
      state.posts = { ...action.payload, results: posts };
    },
    removePosts: (state) => {
      state.posts = null;
    },
    toggleFavorite: (state, action) => {
      if (state.posts) {
        const newPosts = state?.posts.results.map((post: IPost) => ({
          ...post,
          isFavorite: post.id === action.payload ? !post.isFavorite : post.isFavorite,
        }));
        state.posts = { ...state.posts, results: newPosts };
      }
    },
    likePost: (state, action) => {
      if (state.posts) {
        const newPosts = state?.posts.results.map((post: IPost) => ({
          ...post,
          likes: post.id === action.payload ? post.likes + 1 : post.likes,
        }));
        state.posts = { ...state.posts, results: newPosts };
      }
    },
    dislikePost: (state, action) => {
      if (state.posts) {
        const newPosts = state?.posts.results.map((post: IPost) => ({
          ...post,
          dislikes: post.id === action.payload ? post.dislikes + 1 : post.dislikes,
        }));
        state.posts = { ...state.posts, results: newPosts };
      }
    },
    setIsShowModalPost: (state, action) => {
      state.isShowModalPost = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setIsShowModalPostsList: (state, action) => {
      state.isShowModalPostsList = action.payload;
    },
    setSelectedPostsList: (state, action) => {
      state.selectedPostsList = state.selectedPostsList
        ? [...state.selectedPostsList, ...action.payload]
        : action.payload;
    },
    setIsEditMode: (state, action) => {
      state.isEditMode = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setOrderingValue: (state, action) => {
      state.orderingValue = action.payload;
    },

    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const getPostsAsync =
  ({
    searchValue,
    orderingValue,
    perPage,
  }: {
    searchValue: string;
    orderingValue: string;
    perPage: number;
  }) =>
  async (dispatch: any) => {
    try {
      const response = await axios.get(
        `${API_URL}&search=${searchValue}&ordering=${orderingValue}&offset=5=0`,
      );
      dispatch(addPosts(response.data));
    } catch (err: any) {
      throw new Error(err);
    }
  };

export const {
  addPosts,
  removePosts,
  toggleFavorite,
  setIsShowModalPost,
  setSelectedPost,
  setIsShowModalPostsList,
  setSelectedPostsList,
  setIsEditMode,
  likePost,
  dislikePost,
  setSearchValue,
  setOrderingValue,
  setTotalCount,
} = postsSlide.actions;

export const showPosts = ({
  posts: { posts, searchValue, orderingValue, perPage },
}: {
  posts: IPostSate;
}) => ({ posts, searchValue, orderingValue, perPage });

export const getSelectedPost = (state: { posts: IPostSate }) => state.posts.selectedPost;
export const getIsShowModalPost = (state: { posts: IPostSate }) => state.posts.isShowModalPost;

export const setCurrentPage = (state: { posts: IPostSate }) => state.posts.currentPage;

// export const getSelectedPost = (state: { posts: IPostSate }) => state.posts.selectedPost;
export const getSelectedPosts = ({ posts }: { posts: IPostSate }) => ({
  selectedPostsList: posts?.selectedPostsList,
  isShowModalPostsList: posts?.isShowModalPostsList,
  isEditMode: posts.isEditMode,
});

export default postsSlide.reducer;
