export default {
  state: {
    users: [],
    loadingStatus: false
  },
  mutations: {
    setUsersToState: (state, users) => {
      state.users = users
    },
    changeLoadingStatus: (state, newStatus) => {
      state.loadingStatus = newStatus
    }
  },
  actions: {
    getSmallData: async ({commit}) => {
      commit('changeLoadingStatus', true)
      return await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then(res => res.json())
        .then(data => {
          commit('setUsersToState', data)
          commit('changeLoadingStatus', false)
        })
        .catch(err => console.log(err))
    },
    getBigData: async ({commit}) => {
      commit('changeLoadingStatus', true)
      return await fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then(res => res.json())
        .then(data => {
          commit('setUsersToState', data)
          commit('changeLoadingStatus', false)
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    usersGetter: state => state.users,
    loadingStatusGetter: state => state.loadingStatus,
    userForCartGetter: state => index => state.users[index],
    filterUser: state => str => state.users.filter(user => user.id == str || user.firstName === str || user.lastName === str || user.email === str || user.phone == str),
  }
}