const resultsLS = 'gameResults(riariver)';

// LocalStorage Interface
const lsUtils = {
  getData: (key) => JSON.parse(localStorage.getItem(key)),
  setData: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  deleteData: (key) => localStorage.removeItem(key),
};

// Interface
const service = {
  getResults: () => lsUtils.getData(resultsLS) || [],

  saveResult(data) {
    const results = this.getResults();

    results.unshift(data);
    if (results.length > 10) results.length = 10;
    lsUtils.setData(resultsLS, results);
  },
};

export default service;
