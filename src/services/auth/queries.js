
import {  useQuery } from '@tanstack/react-query';

import AuthApiEndpoints from './api';
import Cookies from 'js-cookie';

  const token =  Cookies.get('token');
  export function useGetUserData() {
    return useQuery({
      queryKey: ['user-data'],
      queryFn: AuthApiEndpoints.getUserData,
      enabled: token !== 'null' 
    });
  }
  