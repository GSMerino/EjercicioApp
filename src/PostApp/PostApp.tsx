import { usePost } from "../hooks/usePost"




export const PostApp = () => {

    const { data, isLoading } = usePost()


    
    return (
        <main>

            {isLoading ? <p>Cargando...</p> :
                <ul>
                    {
                        data?.map((post) => (

                            <li key={post.id}>
                                <h1>
                                    title: {post.title}
                                </h1>
                                <p>description: {post.body}</p>

                            </li>   
                        ))
                    }
                </ul>
                    
            }
            

            
        </main>
    )
}