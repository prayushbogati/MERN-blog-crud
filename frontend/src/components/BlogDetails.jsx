import React from 'react'
import { useBlogContext } from '../../hooks/useBlogContext'
import { formatDistanceToNow } from "date-fns"
import { UseAuthContext } from '../../hooks/useAuthContext'

const BlogDetails = ({ blog }) => {
    const { dispatch } = useBlogContext()
    const { user } = UseAuthContext()
    const handleClick = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${blog._id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        const data = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_BLOG", payload: data })
        }
    }
    return (
        <div className="bg-white shadow-md rounded-xl p-4 relative">

            <h3 className="text-lg font-semibold text-green-700">{blog.title}</h3>

            <p className="text-sm text-gray-600">by {blog.author}</p>

            <p className="mt-2 text-gray-700">{blog.body}</p>

            <p className="text-xs text-gray-400 mt-2">
                {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
            </p>

            <button
                onClick={handleClick}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
                ✕
            </button>
        </div>
    )
}

export default BlogDetails