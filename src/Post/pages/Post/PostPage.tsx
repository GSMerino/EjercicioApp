import { Link, useParams } from "react-router"
import { usePost } from "../../../hooks/usePost"
import { NotepadText, House  } from 'lucide-react';

export const PostPage = () => {
  const { id } = useParams()
  const { data = [] } = usePost()

  const post = data.find(p => p.id === Number(id))

  if (!post) return <p className="text-center mt-10">Post no encontrado</p>

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <article className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6">
            
            
            <header className="flex items-center justify-between border-b pb-4">
                
                <div className="flex flex-col gap-3">
                    <Link to='/'
                        className="text-gray-800 cursor-pointer"
                    >
                        <House  size={20}/>
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {post.title}
                    </h1>

                </div>


                <span className="text-sm text-gray-500 flex items-center gap-2">
                    <NotepadText size={20}/>
                    User #{post.userId}
                </span>
            </header>

            
            <section className="text-gray-700 leading-relaxed text-base md:text-lg">
                {post.body}
            </section>

      </article>
    </section>
  )
}
