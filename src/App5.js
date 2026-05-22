import { useState } from 'react'

//状态操作表单元素的值
const App = () => {
  const [value, setValue] = useState('')
  const [isChecked, setChecked] = useState(false)
  return (
    <div>
      {/* 注意：value和onChange应该同时出现 */}
      {/* onChange:在输入框的状态变化的时候执行后面的函数，
      e 是事件对象（event），这次输入行为的信息包 */}
      <input value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={() => alert(value)}>获取</button>
      <button
        onClick={() => {
          setValue('黑马')
        }}
      >
        修改
      </button>
      <hr></hr>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
      ></input>
      {isChecked ? '选中了' : '没有被选中'}
    </div>
  )
}
export default App
