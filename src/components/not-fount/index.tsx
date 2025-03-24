import { useEffect } from 'react';

import { useRouter } from '@/hooks';

function NotFount() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push('/');
    }, 1000);
    return () => clearTimeout(timerId);
  }, [router]);

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      404------（1s后将跳转到首页）
    </div>
  );
}

export default NotFount;
