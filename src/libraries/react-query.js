
import {QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: true,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        keepPreviousData: true,
        staleTime: 10 * 1000,
        cacheTime: 60 * 1000,
        optimisticResults: true,
        structuralSharing: true,
        retryOnMount: true,
        retry: false,
      },
      mutations: {},
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        // Handle the error here
      }
    })
  });