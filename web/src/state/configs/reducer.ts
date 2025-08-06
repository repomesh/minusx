import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EmbedConfigs {
  embed_host?: string
}

interface ConfigsState {
  embed: EmbedConfigs
}

const initialState: ConfigsState = {
  embed: {}
}

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    setEmbedConfigs: (state, action: PayloadAction<EmbedConfigs>) => {
      state.embed = action.payload
    },
    clearEmbedConfigs: (state) => {
      state.embed = {}
    }
  },
})

export const { setEmbedConfigs, clearEmbedConfigs } = configsSlice.actions

export default configsSlice.reducer