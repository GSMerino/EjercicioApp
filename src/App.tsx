import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from 'react-router';
import { RouterApp } from "./router/router";

const queryClient = new QueryClient()

export const PostApp = () =>  {
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RouterApp} />
    </QueryClientProvider>
  )
}


