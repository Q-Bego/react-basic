import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
})
const { setChannels } = channelStore.actions

//异步请求部分
const fetChannelList = () => {
  return async dispatch => {
    console.log(dispatch)
    const res = await axios.get('https://geek.itheima.net/v1_0/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetChannelList }
const reducer = channelStore.reducer
export default reducer
