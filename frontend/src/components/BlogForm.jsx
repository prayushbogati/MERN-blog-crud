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


        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
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
        <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Add Blog</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    placeholder="Title"
                    className={`w-full border p-2 rounded-lg ${emptyFields.includes('title') ? 'border-red-500' : ''}`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    placeholder="Author"
                    className={`w-full border p-2 rounded-lg ${emptyFields.includes('author') ? 'border-red-500' : ''}`}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <textarea
                    placeholder="Body"
                    className={`w-full border p-2 rounded-lg ${emptyFields.includes('body') ? 'border-red-500' : ''}`}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
                    Save Blog
                </button>

                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
        </div>
    )
}

export default BlogForm