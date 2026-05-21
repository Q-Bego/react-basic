// classnames处理类名
import { useState } from 'react'
import classNames from 'classnames'

const App = () => {
  const [disabled, setDisabled] = useState(false)
  const [size, setSize] = useState('small')
  return (
    <div>
      <div>
        <button className={classNames('btn', disabled && 'btn-disabled')}>
          按钮1
        </button>
        <hr></hr>
        {/* 对象语法，适用于处理多个类名 */}
        <button
          className={classNames('btn', {
            'btn-disabled': disabled,
            'btn-small': size === 'small',
            'btn-large': size === 'large'
          })}
        >
          按钮2
        </button>
      </div>
      <hr></hr>
      <div>
        操作
        <button onClick={() => setDisabled(true)}>禁用</button>
        <button onClick={() => setSize('small')}>变小</button>
        <button onClick={() => setSize('large')}>变大</button>
      </div>
    </div>
  )
}
export default App
