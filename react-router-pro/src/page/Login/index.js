import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      我是Login
      <Link to='/article'>跳转到文章页</Link>
      {/* 命令式写法 */}
      <button
        onClick={() => {
          navigate('/article')
        }}
      >
        跳转到文章页
      </button>
      <button
        onClick={() => {
          navigate('/article?id=10018&name=jack')
        }}
      >
        searchParams传参
      </button>
      <button
        onClick={() => {
          navigate('/article/1001/jack')
        }}
      >
        Params传参
      </button>
    </div>
  )
}
export default Login
