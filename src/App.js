import './App.css'
import Header from './components/Header'
//组件的应用
const App = () => {
  const handleClick = () => {
    alert('App组件')
  }
  return (
    <div className='app' onClick={handleClick}>
      <Header></Header>
      React Component
    </div>
  )
}

export default App
