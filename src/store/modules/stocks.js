import stocks from "../../components/data/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCK(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {}
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCK", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
