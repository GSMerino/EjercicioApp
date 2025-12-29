import { CustomLoader } from "../../../components/custom/CustomLoader"
import { PostGrid } from "../../components/PostGrid"
import { usePost } from "../../../hooks/usePost"



export const HomePage = () => {

    const { data, isLoading } = usePost()

    return(

        <main>

            {
                isLoading ? <CustomLoader /> : <PostGrid posts={data ?? []} />
            }
            
        </main>

    )
    
}