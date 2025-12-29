import { useNavigate } from "react-router";

interface PostCardProps{
    id: number
    title: string;
    body: string
}



export const PostCard = ({id, title }: PostCardProps) => {


    const navigate = useNavigate(); 

    const hanldeDetailPost = () => {
        navigate(`/country/${id}`);

    }

    return(
        <article className="flex flex-col gap-3 rounded-lg border border-black">
            <div
                className="flex items-center justify-center"
            >
                <span>{title}</span>

            </div>
            <div className="flex items-center justify-center">
                <button
                    className="p-2 cursor-pointer rounded-md bg-blue-500 "
                    onClick={hanldeDetailPost}
                >
                    Ver más
                </button>

            </div>

        </article>
    )
}