
import axios from 'axios';
import Cookies from 'js-cookie';

class HttpHelpers {
  constructor() {
    this.subscribers = [];
  }

  setBaseUrl(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.authenticatedAxios = axios.create({ baseURL: this.apiBaseUrl });
    this.unAuthenticatedAxios = axios.create({ baseURL: this.apiBaseUrl });
    this.addAuthenticationInterceptor();
    this.addUnauthenticationInterceptor();
  }

  getToken() {
    return Cookies.get('token');
  }



  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter((callback) => callback(accessToken));
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  addAuthenticationInterceptor() {
    this.authenticatedAxios.interceptors.request.use(
      async (config) => {
        config.headers['X-localization'] = 'ar';
        // ** Get token from AsyncStorage/LocalStorage
        const accessToken = await this.getToken();
        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  addUnauthenticationInterceptor() {
    this.unAuthenticatedAxios.interceptors.request.use(
      async (config) => {
        config.headers['Accept-Language'] = 'ar';
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default new HttpHelpers();
