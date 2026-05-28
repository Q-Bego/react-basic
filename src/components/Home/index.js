import ChannelModal from '../ChannelModal'
import { useContext, useState } from 'react'
import './index.scss'
import { ChannelContext } from '../../ChannelContext'
const Home = () => {
  const [visible, setVisible] = useState(false)
  const { mychannels } = useContext(ChannelContext)
  return (
    <div className='home'>
      <div className='home-channels'>
        <div className='list'>
          {mychannels.map(item => {
            return (
              <div className='item' key={item.id}>
                {item.name}
              </div>
            )
          })}
        </div>
        <div className='more' onClick={() => setVisible(true)}>
          =
        </div>
      </div>
      <div className='content1'></div>
      <ChannelModal
        visible={visible}
        onClose={() => setVisible(false)}
      ></ChannelModal>
    </div>
  )
}
export default Home
