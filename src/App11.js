//跨组件通讯
import { createContext, useState, useContext } from 'react'
import './App11.scss'
// 1.创建context对象
const ThemeContext = createContext()
//2.划定范围指定数据 ThemeContext provider

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Menu></Menu>
    </div>
  )
}
const Menu = () => {
  return (
    <div className='menu'>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </div>
  )
}
const MenuItem = () => {
  const { themeColor } = useContext(ThemeContext)
  console.log(themeColor)
  return <li style={{ color: themeColor }}>菜单</li>
}
const Content = () => {
  const { themeColor } = useContext(ThemeContext)
  return (
    <div className='content'>
      <div className='main' style={{ color: themeColor }}>
        Context 跨组件通讯
      </div>
      <Footer></Footer>
    </div>
  )
}
const Footer = () => {
  const { onRest } = useContext(ThemeContext)
  return (
    <div className='footer'>
      <button onClick={onRest}>重置主题</button>
    </div>
  )
}
const App = () => {
  const [themeColor, setThemeColor] = useState('#1677FF')
  const onRest = () => {
    setThemeColor('#1677FF')
  }
  return (
    <div className='app'>
      <ThemeContext.Provider value={{ themeColor, onRest }}>
        <input
          className='theme-selector'
          type='color'
          value={themeColor}
          onChange={e => setThemeColor(e.target.value)}
        ></input>
        <div className='main'>
          <Sidebar></Sidebar>
          <Content></Content>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
