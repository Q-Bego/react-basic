import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
//2.创建react根对象
const root = createRoot(document.querySelector('#root'))

// <h1>Hello react</h1>=>JSX 写在 JS 中的HTML标签o

//虽然JSX像HTML，但是JSX的规则更加严格
// 1.必须有一个根节点
// 2.所有标签都需要闭合，HTML中的<img>可以不闭合
// 3.所有命名都需要小驼峰命名法

/**
 * 分类菜单数组
 * **/
const categories = [
  { id: 1, name: '推荐' },
  { id: 2, name: '一人套餐' },
  { id: 3, name: '西呗凉菜' },
  { id: 4, name: '西贝热菜' },
  { id: 5, name: '杂粮主食' }
]
const selectedID = 2

root.render(
  <div style={{ width: '200px', backgroundColor: 'skyblue' }}>
    <ul className='list'>
      {categories.map((item, index) => {
        return (
          <li
            key={item.id}
            className={
              item.id === selectedID ? 'list-item selected' : 'list-item'
            }
          >
            {/* {index === 0 ? (
              <img
                src='https://yiy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/waimai/menu-tuijian.png'
                alt='推荐'
              />
            ) : null} */}
            {index === 0 && (
              <img
                src='https://yiy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/waimai/menu-tuijian.png'
                alt='推荐'
              />
            )}
            {item.name}
          </li>
        )
      })}
    </ul>
  </div>
)
console.log(<h1 className='title'>Hello WORLD</h1>)
console.log(React.createElement('h1', { className: 'title' }, 'Hello Wolrd'))
