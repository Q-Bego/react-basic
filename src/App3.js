//如果要在react脚手架中使用scss的话，一定要装包
import { useState } from 'react'
import './App.scss'
//使用图片的话必须要导入
import head from './assets/head.png'
//列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar:
        'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/zhoujielun.jpeg',
      uname: '周杰伦'
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    // 喜欢数量
    like: 98,
    // 0：未表态 1: 喜欢 2: 不喜欢
    action: 0
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar:
        'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/xusong.jpeg',
      uname: '许嵩'
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
    action: 2
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: head,
      uname: '明智吾郎'
    },
    content: '赤手空拳面对杀人犯我好害怕',
    ctime: '10-19 09:00',
    like: 66,
    action: 1
  }
]
const App = () => {
  const [list, setList] = useState(defaultList)
  return (
    <div className='app'>
      <div className='reply-navigation'>
        <ul className='nav-bar'>
          <li className='nav-title'>
            <span className='nav-title-text'>评论</span>
            <span className='total-reply'>9</span>
          </li>
          <li className='nav-sort'>
            <div className='nav-item active'>最热</div>
            <div className='nav-item'>最新</div>
          </li>
        </ul>
      </div>
      <div className='replay-wrap'>
        <div className='box-normal'>
          <div className='reply-box-avatar'>
            <div className='bili-avatar'>
              <img className='bili-avatar-img' src={head} alt='头像'></img>
            </div>
          </div>
          <div className='reply-box-wrap'>
            <textarea
              className='reply-box-textarea'
              placeholder='发布一条友善的评论'
            ></textarea>
            <div className='reply-box-send'>
              <div className='send-text'>发布</div>
            </div>
          </div>
        </div>
      </div>
      {/* 评论列表 */}
      <div className='reply-list'>
        {list.map(item => {
          return (
            <div key={item.rpid} className='reply-item'>
              <div className='root-reply-avatar'>
                <div className='bili-avatar'>
                  <img
                    className='bili-avatar-img'
                    src={item.user.avatar}
                    alt=''
                  ></img>
                </div>
              </div>

              <div className='content-wrap'>
                <div className='user-info'>
                  <div className='user-name'>{item.user.uname}</div>
                </div>
                <div className='root-reply'>
                  <div className='reply-content'>{item.content}</div>
                  <div className='reply-info'>
                    <span className='reply-time'>{item.ctime}</span>
                    <span className='reply-like'>
                      <i className='icon like-icon'></i>
                      <span>{item.like}</span>
                    </span>
                    <span className='reply-dislike'>
                      <i className='icon dislike-icon'></i>
                    </span>
                    <span className='delete-btn'>删除</span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='reply-none'>暂无评论</div>
    </div>
  )
}
export default App
