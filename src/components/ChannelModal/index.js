import './index.scss'
import ChannelHeader from '../ChannelHeader'
const ChannelModal = ({ visible, onClose }) => {
  return (
    <div className='channels' style={{ display: visible ? 'block' : 'none' }}>
      <div className='header'>
        <span>全部板块</span>
        <span className='close' onClick={onClose}>
          X
        </span>
      </div>
      <div className='content'>
        <ChannelHeader title='我的模块' info='点击进入模块'></ChannelHeader>
      </div>
    </div>
  )
}
export default ChannelModal
