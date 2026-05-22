//组件之间的通信，组件props
import head from './assets/head.png'
import face from './assets/face.png'
// const Avatar = props => {
//   console.log(props)
//   //注意：props是一个只读的属性
//   return <img src={props.imgUrl} width={props.size} alt='' />
// }

//解构，简化，少写一个props，可以给组件加默认值，传了之后时以传的值为准
const Avatar = ({ imgUrl, size = 50 }) => {
  //注意：props是一个只读的属性
  return <img src={imgUrl} width={size} alt='' />
}

const App = () => {
  return (
    <div>
      {/* 头像组件 */}
      {/* 如果需要给组件传非字符串类型的数据需要给属性加字符串 */}
      <Avatar size={100} imgUrl={face}></Avatar>
      <hr></hr>
      <Avatar imgUrl={face}></Avatar>
    </div>
  )
}
export default App
