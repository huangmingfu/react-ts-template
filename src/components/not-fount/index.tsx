import { useEffect } from 'react';

import { useRouter } from '@/hooks';

function NotFount() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, [router]);

  return <div>404------1s后跳转到首页</div>;
}

export default NotFount;
