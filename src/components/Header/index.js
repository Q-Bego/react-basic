import './index.css'

const Child = () => {
  return <h1>Header 标题</h1>
}

const Header = () => {
  return (
    <div>
      <Child></Child>Header
    </div>
  )
}
export default Header
