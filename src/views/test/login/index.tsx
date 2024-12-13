import { useRouter } from '@/hooks';

function Login() {
  const router = useRouter();
  return (
    <div>
      Login登录页面
      <button onClick={() => router.push('/')}>回到首页</button>
    </div>
  );
}

export default Login;
