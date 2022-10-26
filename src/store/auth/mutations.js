import { SET_AUTH } from './mutations-types'

export default {
  [SET_AUTH](state) {
    state.authenticated = true
  }
} 