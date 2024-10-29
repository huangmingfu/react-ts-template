// 引入zustand库和Immer中间件
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UserInfo = {
  username: string;
  avatar: string;
};

type Action = {
  updateToken: (token: string) => void;
  updateUserName: (username: string) => void;
  updateUserInfo?: (userInfo: UserInfo) => void;
};

interface State {
  token: string;
  userInfo: UserInfo;
}

// 创建带有Immer中间件的zustand存储
export const useUserStore = create<State & Action>()(
  immer((set) => ({
    token: '',
    userInfo: { username: 'react', avatar: 'https://picsum.photos/200/300' },
    updateToken: (token) =>
      set((state) => {
        state.token = token;
      }),
    updateUserName: (username) =>
      set((state) => {
        state.userInfo.username = username;
      })
  }))
);
