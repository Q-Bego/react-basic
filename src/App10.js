import { useState } from 'react'
import './App10.scss'
import classNames from 'classnames'
//好友列表
const Friends = ({ friends, onSelect, chatfriend }) => {
  return (
    <div className='friends'>
      {friends.map(item => {
        return (
          <div
            className={classNames(
              'friend',
              item.id === chatfriend.id && 'selected'
            )}
            onClick={() => onSelect(item)}
          >
            <img src={item.avatar} className='avatar' alt=''></img>
            <div className='info'>
              <div className='row'>
                <div className='name'>{item.name}</div>
                <div className='date'>{item.dateStr}</div>
              </div>
              <div className='msg'>{item.message}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
//聊天窗口
const Chat = ({ friend }) => {
  return (
    <div className='chat-wrapper'>
      <div className='header'>{friend.name}</div>
      <div className='list'></div>
      <div className='input'></div>
    </div>
  )
}
//父组件

//好友列表数据
const defaultFriends = [
  {
    id: '13258165',
    name: '周杰伦',
    avatar:
      'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/zhoujielun.jpeg',
    dateStr: '刚刚',
    message: '哎呦，不错哦'
  },
  {
    id: '36080105',
    name: '许嵩',
    avatar:
      'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/xusong.jpeg',
    dateStr: '01/05',
    message: '[语音]'
  }
]
const App = () => {
  const [friends, setFriends] = useState(defaultFriends)
  //找到需要传递的共享的数据
  const [chatfriend, setChatfriend] = useState(friends[0])
  const onSelectFriend = friend => {
    setChatfriend(friend)
  }
  return (
    <div className='app'>
      <Friends
        friends={friends}
        onSelect={onSelectFriend}
        chatfriend={chatfriend}
      ></Friends>
      <Chat friend={chatfriend}></Chat>
    </div>
  )
}
export default App
