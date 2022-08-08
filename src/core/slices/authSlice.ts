import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostsInfo, IPost } from '../../types/posts';
import { IUserConfirm } from '../../types/user';
import { actions } from '../constants';

interface IAuthSate {
  email: string | null;
  error: string | null;
  isSuccess: boolean;
}

const initialState: IAuthSate = {
  email: null,
  error: null,
  isSuccess: false,
};

interface IUser {
  username: string;
  email: string;
  password: string;
}

export const sendRegistrationAction = createAction<IUser>(actions.SEND_REGISTRATION);
export const sendRegistrationConfirmAction = createAction<IUserConfirm>(
  actions.SEND_REGISTRATION_CONFIRM,
);

export const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setEmail, setError, setIsSuccess } = authSlide.actions;
export default authSlide.reducer;
