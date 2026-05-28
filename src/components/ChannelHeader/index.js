import './index.scss'
const ChannelHeader = ({ title, info, extra, changeEdit }) => {
  return (
    <div className='channelheader'>
      <span>{title}</span>
      <span className='info'>{info}</span>
      <span className='extra' onClick={changeEdit}>
        {extra}
      </span>
    </div>
  )
}
export default ChannelHeader
