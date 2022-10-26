import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const initialState = {
  authenticated: false,
}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
}
