
import HttpHelpers from '../helpers';
const AuthApiEndpoints = {
  login: (data) =>
    HttpHelpers.unAuthenticatedAxios
      .post('login', data)
      .then((response) => response.data),

      changePassword: (data) =>
      HttpHelpers.authenticatedAxios
        .post('change-password', data)
        .then((response) => response.data),

        contactUs: (data) =>
        HttpHelpers.unAuthenticatedAxios
          .post('contact', data)
          .then((response) => response.data),

      getUserData: (data) =>
      HttpHelpers.authenticatedAxios
        .get('patient', data)
        .then((response) => response.data),
};

export default AuthApiEndpoints;
