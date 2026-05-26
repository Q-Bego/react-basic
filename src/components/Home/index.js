import ChannelModal from '../ChannelModal'
import { useState } from 'react'
import './index.scss'
const Home = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='home'>
      <div className='home-channels'>
        <div className='list'>
          <div className='item'>全站</div>
          <div className='item'>高清</div>
          <div className='item'>直播</div>
        </div>
        <div className='more' onClick={() => setVisible(true)}>
          =
        </div>
      </div>
      <div className='content'></div>
      <ChannelModal
        visible={visible}
        onClose={() => setVisible(false)}
      ></ChannelModal>
    </div>
  )
}
export default Home
