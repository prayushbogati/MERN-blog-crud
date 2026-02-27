import { useState } from 'react'
import { useBlogContext } from '../../hooks/useBlogContext'
import { UseAuthContext } from '../../hooks/useAuthContext';

const BlogForm = () => {
    const { dispatch } = useBlogContext();
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const { user } = UseAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blog = { title, author, body }


        const response = await fetch("http://localhost:3000/blogs", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const data = await response.json();

        if (!response.ok) {
            setError(data.error)
            setEmptyFields(data.emptyFields)
            console.log(emptyFields);

        }

        if (response.ok) {
            setError(null)
            setEmptyFields([])
            console.log("blogs added", blog);

            setTitle("")
            setAuthor("")
            setBody("")

            dispatch({ type: 'CREATE_BLOGS', payload: data })
        }
    }

    return (
        <div className='px-10 rounded-2xl bg-slate-100 flex flex-col items-center pt-5 h-100'>
            <div className='text-2xl'>Add Blogs</div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">

                <div className="flex flex-col mt-5">
                    <label>Title</label>
                    <input
                        className={`border border-gray-400 p-1 ${emptyFields.includes('title') ? 'border-red-500' : 'border-gray-400'}`}
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>

                <div className="flex flex-col">
                    <label>Author</label>
                    <input
                        className={`border border-gray-400 p-1 ${emptyFields.includes('author') ? 'border-red-500' : 'border-gray-400'}`}
                        type="text"
                        name="author"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>

                <div className="flex flex-col">
                    <label>Body</label>
                    <input
                        className={`border border-gray-400 p-1 ${emptyFields.includes('body') ? 'border-red-500' : 'border-gray-400'}`}
                        type="text"
                        name="body"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </div>

                <button type="submit" className="border p-1 hover:bg-gray-200 mt-5">
                    Save
                </button>

                {error && <div className='text-red-500 text-center'>{error}</div>}
            </form>
        </div>
    )
}

export default BlogForm