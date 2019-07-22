import _ from 'lodash';
import axios from 'axios';
import Vue from 'vue';

const instance = axios.create();
let loader;
const apiCallList = [];

function addApiCall(url) {
  apiCallList.push(url);
  if (loader === undefined || apiCallList.length === 0) {
    loader = Vue.$loading.show({
      container: null,
      canCancel: false,
      loader: 'dots',
    });
  } else {
    // loader.show();
  }
}

function removeApiCall() {
  apiCallList.pop();
  if (apiCallList.length === 0) {
    loader.hide();
    loader = undefined;
  }
}

instance.interceptors.request.use((config) => {
  addApiCall(config.url);
  return config;
});

instance.interceptors.response.use((response) => {
  removeApiCall();
  return response;
}, (error) => {
  removeApiCall();

  if (error.response.status === 500) {
    const message = _.get(error.response.data, 'message', 'Internal Server Error');

    Vue.smithToast({ title: '서버에러', message, type: 'error' });
    return false;
  }
  if (error.response.status === 404) {
    Vue.route({ name: 'Page404' });
    return false;
  }

  if (_.includes([401, 403], error.response.status)) {
    Vue.initSession();
    Vue.route({ path: '/login' });
    return false;
  }

  if (error.response) {
    if (error.response.data !== undefined) {
      return error.response;
    }
  }

  return null;
});

export default instance;