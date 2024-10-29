// 引入zustand库和Immer中间件
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


type UserInfo = {
  username: string
  avatar: string
}

type Action = {
  updateToken: (token: string) => void
  updateUserInfo?: (userInfo: UserInfo) => void
  updateUserName: (username: string) => void
}

interface State {
  token: string
  userInfo: UserInfo
}

// 创建带有Immer中间件的zustand存储
export const useUserStore = create<State & Action>()(

  // 这里使用了immer进行包裹住“设置函数”（setter）
  immer(set => ({
    token: '',
    userInfo: { username: '', avatar: 'http://xxxx.com/yy.jpg' },
    updateToken: token => set(state => { state.token = token }),
    updateUserName: username => set(state => { state.userInfo.username = username })
  }))
)
