import { RouterProvider } from 'react-router/dom';

import { useLoadingStore } from '@/store';

import { Loading } from '@/components';

import router from './router';

function App() {
  const { isLoading } = useLoadingStore();
  return (
    <>
      <RouterProvider router={router} />
      {isLoading && <Loading />}
    </>
  );
}

export default App;
