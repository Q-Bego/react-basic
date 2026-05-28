import './index.scss'
import classNames from 'classnames'
const ChannelItem = ({ name, ifshow, canEdit, onClick }) => {
  const showClose = () => {
    return ifshow ? true : false
  }
  return (
    <div
      className={classNames(
        'ChannelItem',
        canEdit && 'canEdit',
        showClose() && ifshow
      )}
      onClick={onClick}
    >
      <div className={classNames(('name', ifshow))}>{name}</div>
      {showClose() && canEdit && <div className='close'>x</div>}
    </div>
  )
}
export default ChannelItem
