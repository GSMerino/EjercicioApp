import { useNavigate } from "react-router";

interface PostCardProps{
    id: number
    title: string;
    body: string
}



export const PostCard = ({id, title }: PostCardProps) => {


    const navigate = useNavigate(); 

    const hanldeDetailPost = () => {
        navigate(`/post/${id}`);

    }

    return(
        <article className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6">
            <div
                className="flex items-center justify-center"
            >
                <span className="text-2xl md:text-xl font-bold text-gray-800">{title}</span>

            </div>
            <div className="flex items-center justify-center">
                <button
                    className="p-2 cursor-pointer rounded-md bg-blue-500  text-white"
                    onClick={hanldeDetailPost}
                >
                    Ver más
                </button>

            </div>

        </article>
    )
}