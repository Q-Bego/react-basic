import { useEffect, useState } from 'react'
import Home from './components/Home'
import axios from 'axios'
import { ChannelContext } from './ChannelContext.js'
const App = () => {
  // 1.获取频道数据
  const [channels, setChannels] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get('http://localhost:8000/channels')
      setChannels(res.data)
    }
    loadData()
  }, [])
  //提供数据
  //1.选中的频道数据
  const mychannels = channels.filter(item => item.selected)
  //2.未选中的频道数据
  const morechannels = channels.filter(item => !item.selected)
  //3.更新频道选中的数据
  const onUpdateChannels = (id, selected) => {
    setChannels(
      channels.map(item => {
        if (item.id === id) {
          return {
            ...item,
            selected
          }
        }
        return item
      })
    )
  }
  return (
    <ChannelContext.Provider
      value={{ mychannels, morechannels, onUpdateChannels }}
    >
      <div className='app'>
        <Home></Home>
      </div>
    </ChannelContext.Provider>
  )
}
export default App
