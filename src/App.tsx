import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PostApp } from "./PostApp/PostApp"


const queryClient = new QueryClient()

export const App = () =>  {
  
  return (
    <QueryClientProvider client={queryClient}>
      <PostApp />
    </QueryClientProvider>
  )
}


