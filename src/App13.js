//useEffect的扩展
import { useEffect, useState } from 'react'
const ChatRoom = ({ roomID }) => {
  //挂载，只在一开始执行一次
  // useEffect(() => {
  //   console.log('建立链接：music')
  // }, [])
  //更新，挂载和改变的时候都执行
  // useEffect(() => {
  //   console.log(`建立链接：${roomID}`)
  // }, [roomID])
  //卸载
  // useEffect(() => {
  //   return () => {
  //     console.log('断开链接')
  //   }
  // }, [])

  //依赖项的说明
  //指定effect的原则：Effect函数中用到的，并且可变的值（props/states/组件中创建的变量等）
  useEffect(() => {
    console.log(`建立链接:${roomID}`)
    return () => {
      console.log('断开链接')
    }
  }, [roomID])
  return (
    <div className='chat-room'>
      <h1>欢迎来到{roomID}房间！</h1>
    </div>
  )
}
const App = () => {
  const [roomID, setRoomID] = useState('music')
  const [chatting, setChatting] = useState(true)
  return (
    <div className='app'>
      <button
        onClick={() => {
          setChatting(!chatting)
        }}
      >
        {chatting ? '退出聊天' : '开始聊天'}
      </button>
      {chatting ? (
        <div>
          <label>
            选择聊天室：
            <select value={roomID} onChange={e => setRoomID(e.target.value)}>
              <option value='music'>music</option>
              <option value='travel'>travel</option>
              <option value='sports'>sports</option>
            </select>
            <ChatRoom roomID={roomID}></ChatRoom>
          </label>
        </div>
      ) : (
        <p>点击【开始聊天按钮，开始吧~】</p>
      )}
    </div>
  )
}
export default App
