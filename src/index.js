//非父子之间的通信
// 1.兄弟关系
// 2.后代关系
import { createRoot } from 'react-dom/client'
import App from './App12'
const root = createRoot(document.querySelector('#root'))

root.render(<App></App>)
