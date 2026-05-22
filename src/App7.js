// 评论案例
//如果要在react脚手架中使用scss的话，一定要装包
import { useState } from 'react'
import './App.scss'
//使用图片的话必须要导入
import head from './assets/head.png'
import { orderBy } from 'lodash'
import dayjs from 'dayjs'
//导航Tab数据
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' }
]
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
//当前用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar: head,
  // 用户昵称
  uname: '明智吾郎'
}
const App = () => {
  //记录导航tab高亮的状态
  const [activeTab, setActiveTab] = useState('hot')
  const [list, setList] = useState(defaultList)
  const [value, setValue] = useState('')
  const onDelete = rpid => {
    setList(list.filter(item => item.rpid !== rpid))
  }
  const onLike = rpid => {
    setList(
      list.map(item => {
        if (item.rpid === rpid) {
          console.log(item)
          return {
            ...item,
            action: item.action === 0 ? 1 : 0,
            like: item.action === 1 ? item.like - 1 : item.like + 1
          }
        }
        return item
      })
    )
  }
  const onDislike = rpid => {
    setList(
      list.map(item => {
        if (item.rpid == rpid) {
          return {
            ...item,
            action: item.action === 2 ? 0 : 2,
            //如果现在是喜欢，需要数量减1
            //如果没有喜欢，数量不变
            like: item.action === 1 ? item.like - 1 : item.like
          }
        }
        return item
      })
    )
  }
  const ontoggle = type => {
    setActiveTab(type)
    let newlist
    if (type === 'time') {
      //按照时间降序排序
      newlist = orderBy(list, 'ctime', 'desc')
    } else {
      //按照喜欢数量排序
      newlist = orderBy(list, 'like', 'desc')
    }
    setList(newlist)
  }
  const onAdd = () => {
    //组装一条评论数据
    const comment = {
      rpid: Date.now(),
      user,
      content: value,
      ctime: dayjs().format('MM-DD HH:mm'),
      like: 0,
      action: 0
    }
    //添加到评论列表list
    const newList = [comment, ...list]
    //排序
    if (activeTab === 'time') {
      setList(orderBy(newList, 'ctime', 'desc'))
    } else {
      setList(orderBy(newList, 'like', 'desc'))
    }
    //刷新评论状态
    //清空输入框
    setValue('')
  }
  return (
    <div className='app'>
      <div className='reply-navigation'>
        <ul className='nav-bar'>
          <li className='nav-title'>
            <span className='nav-title-text'>评论</span>
            <span className='total-reply'>{list.length}</span>
          </li>
          <li className='nav-sort'>
            {tabs.map(item => {
              return (
                <div
                  key={item.type}
                  className={
                    item.type === activeTab ? 'nav-item active' : 'nav-item'
                  }
                  onClick={() => ontoggle(item.type)}
                >
                  {item.text}
                </div>
              )
            })}
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
              value={value}
              onChange={e => {
                setValue(e.target.value)
              }}
            ></textarea>
            <div className='reply-box-send' onClick={onAdd}>
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
                      <i
                        className={
                          item.action === 1
                            ? 'icon like-icon liked'
                            : 'icon like-icon'
                        }
                        onClick={() => onLike(item.rpid)}
                      ></i>
                      <span>{item.like}</span>
                    </span>
                    <span className='reply-dislike'>
                      <i
                        className={
                          item.action === 2
                            ? 'icon dislike-icon disliked'
                            : 'icon dislike-icon'
                        }
                        onClick={() => onDislike(item.rpid)}
                      ></i>
                    </span>
                    {user.uid === item.user.uid && (
                      <span
                        className='delete-btn'
                        onClick={() => onDelete(item.rpid)}
                      >
                        删除
                      </span>
                    )}
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {list.length === 0 && <div className='reply-none'>暂无评论</div>}
    </div>
  )
}
export default App
