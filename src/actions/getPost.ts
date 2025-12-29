import { PostApi } from "../api/postApi"
import type { ApiResponse } from "../types/apiResponse"



export const gePostAction = async(): Promise<ApiResponse[]> => {

    const { data } = await PostApi.get<ApiResponse[]>('/posts')

    
    return data


}   