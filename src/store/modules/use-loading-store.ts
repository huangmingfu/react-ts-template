import { create } from 'zustand';

interface State {
  count: number;
  isLoading: boolean;
}

type Action = {
  showLoading: (loading: boolean) => void;
  hideLoading: (loading: boolean) => void;
};

export const useLoadingStore = create<State & Action>((set) => ({
  count: 0, // 用于记录并发请求的数量
  isLoading: false,
  showLoading: () => set((state) => ({ ...state, count: state.count + 1, isLoading: true })),
  hideLoading: () =>
    set((state) => ({ ...state, count: state.count - 1, isLoading: state.count - 1 > 0 }))
}));
