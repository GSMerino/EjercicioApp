
import type { ApiResponse } from "../../types/apiResponse"
import { PostCard } from "./PostCard";


interface PostGridProps {
    posts: ApiResponse[];
}



export const PostGrid = ({ posts }: PostGridProps) => {
    
    return(
        <section className="grid grid-cols-3 gap-6 py-12 px-4 lg:px-8">
            {
                posts.map((post) => (
                    <PostCard 
                        key={post.id}
                        id={post.id}
                        title={post.title} body="" />
                ))
            }
        </section>
    )

}