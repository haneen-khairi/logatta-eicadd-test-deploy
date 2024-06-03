import HttpHelpers from '../helpers';

const PatientApiEndpoints = {
  getFiles: (params) =>
    HttpHelpers.authenticatedAxios.get('patient/file').then((response) => response.data),

    getVoices: (params) =>
    HttpHelpers.authenticatedAxios.get('voice', {params}).then((response) => response.data),

    getBooking: (params) =>
    HttpHelpers.authenticatedAxios.get('booking', {params}).then((response) => response.data),

    getFinance: (params) =>
    HttpHelpers.authenticatedAxios.get('finance', {params}).then((response) => response.data),

    
};

export default PatientApiEndpoints;
