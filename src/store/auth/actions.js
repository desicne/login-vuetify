import { SET_AUTH } from './mutations-types'

export default {
    authenticateUser ({ commit }) {
        // obvoiusly here we just set auth to true, but we can see whatever ofc
        commit(SET_AUTH)
    },
}
  