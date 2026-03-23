import React from 'react'
import { useEffect } from 'react'
import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'
import { useBlogContext } from '../../hooks/useBlogContext'
import { UseAuthContext } from '../../hooks/useAuthContext'


const Home = () => {
    const { blogs, dispatch } = useBlogContext()
    const { user } = UseAuthContext()

    useEffect(() => {

        if (!user) {
            return
        }
        const fetchBlogs = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
                headers:
                {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_BLOGS', payload: data })
            }
        }

        fetchBlogs()
    }, [dispatch, user])

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">

                {/* Blog Form */}
                <BlogForm />

                {/* Blog List */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Blogs</h2>

                    <div className="space-y-4">
                        {blogs?.length > 0 ? (
                            blogs.map(blog => (
                                <BlogDetails key={blog._id} blog={blog} />
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No blogs yet</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home