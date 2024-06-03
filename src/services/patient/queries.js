
import {  useQuery } from '@tanstack/react-query';
import PatientApiEndpoints from './user.api';


export function useGetUserFiles() {
    return useQuery({
      queryKey: ['user-files'],
      queryFn:PatientApiEndpoints.getFiles,
    });
  }

  export function useGetUserVoices(id) {
    return useQuery({
      queryKey: ['user-voices', {id}],
      queryFn:()=> PatientApiEndpoints.getVoices({'patient_id':id}),
    });
  }

  export function useGetUserBooking(id) {
    return useQuery({
      queryKey: ['user-booking', {id}],
      queryFn:()=> PatientApiEndpoints.getBooking({'patient_id':id}),
    });
  }

  export function useGetUserFinance(id) {
    return useQuery({
      queryKey: ['user-Finance', {id}],
      queryFn:()=> PatientApiEndpoints.getFinance({'patient_id':id}),
    });
  }

  