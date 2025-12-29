import { useQuery } from "@tanstack/react-query"
import { gePostAction } from "../actions/getPost"



export const usePost = () => {


    return useQuery({
        queryKey: ['posts'],
        queryFn: () => gePostAction(),
        staleTime: 5000
    });
}