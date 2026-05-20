import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.querySelector('#root'))

// 抽离事件处理函数
const handleClick = e => {
  console.log(111)
  e.preventDefault()
  alert('欢迎来到黑马前端')
}
root.render(
  <div>
    <div className='box' onClick={() => alert('你好')}>
      {/* <a
        href='https://www.itcast.cn/'
        onClick={e => {
          e.preventDefault()
          alert('欢迎来到黑马前端')
        }}
      >
        传智教育
      </a> */}
    </div>
    <a href='https://www.itcast.cn/' onClick={handleClick}>
      传智教育
    </a>
  </div>
)
