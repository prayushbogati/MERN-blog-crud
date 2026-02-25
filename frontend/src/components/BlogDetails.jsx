import React from 'react'
import { useBlogContext } from '../../hooks/useBlogContext'
import { formatDistanceToNow } from "date-fns"
import { UseAuthContext } from '../../hooks/useAuthContext'

const BlogDetails = ({ blog }) => {
    const { dispatch } = useBlogContext()
    const { user } = UseAuthContext()
    const handleClick = async () => {
        const response = await fetch(`http://localhost:3000/blogs/${blog._id}`, {
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
        <div className='w-sm text-center p-2 relative h-37 rounded-2xl bg-slate-100'>

            <h3>Title: {blog.title}</h3>
            <p>Author: {blog.author}</p>
            <p>Desc: {blog.body}</p>
            <p>
                Created: {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
            </p>
            <button onClick={handleClick} className='absolute right-2 bottom-2 bg-red-500 text-white p-1 rounded-md mt-2 hover:bg-red-600'>Delete</button>
        </div>
    )
}

export default BlogDetails