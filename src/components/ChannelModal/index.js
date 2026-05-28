import './index.scss'
import { useContext, useState } from 'react'
import ChannelHeader from '../ChannelHeader'
import ChannelItem from '../ChannelItem'
import { ChannelContext } from '../../ChannelContext'
import classNames from 'classnames'
const ChannelModal = ({ visible, onClose }) => {
  const { mychannels, morechannels, onUpdateChannels } =
    useContext(ChannelContext)
  const [isEdit, setIsEdit] = useState(false)
  const changeEdit = () => {
    return setIsEdit(!isEdit)
  }
  return (
    <div className='channels' style={{ display: visible ? 'block' : 'none' }}>
      <div className='header'>
        <span>全部板块</span>
        <span className='close' onClick={onClose}>
          X
        </span>
      </div>
      <div className='content'>
        <ChannelHeader
          title='我的模块'
          info='点击进入模块'
          extra={isEdit ? '完成' : '编辑'}
          changeEdit={changeEdit}
        ></ChannelHeader>
        <div className={classNames('ChannelContent', isEdit && 'edit')}>
          {mychannels.map(item => {
            return (
              <ChannelItem
                key={item.id}
                name={item.name}
                ifshow={isEdit}
                canEdit={item.canEdit}
                onClick={() => {
                  if (isEdit && item.canEdit) {
                    onUpdateChannels(item.id, !item.selected)
                  }
                }}
              ></ChannelItem>
            )
          })}
        </div>
        <ChannelHeader title='更多板块' info='点击进入模块'></ChannelHeader>
        <div className='ChannelContent'>
          {morechannels.length > 0
            ? morechannels.map(item => {
                return (
                  <ChannelItem
                    key={item.id}
                    name={item.name}
                    ifshow='more-item'
                    canEdit={item.canEdit}
                    onClick={() => {
                      onUpdateChannels(item.id, !item.selected)
                    }}
                  ></ChannelItem>
                )
              })
            : '已全部添加至我的模块'}
        </div>
      </div>
    </div>
  )
}
export default ChannelModal
