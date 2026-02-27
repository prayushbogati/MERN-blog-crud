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
            const response = await fetch("http://localhost:3000/blogs", {
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
            <div className="flex flex-col gap-15 lg:flex-row-reverse justify-around items-center m-20">
                <BlogForm />
                <div className='flex flex-col gap-10 items-center'>
                    <h2 className='text-2xl'>Blogs</h2>
                    {blogs && blogs.length > 0 && blogs.map((blog) => (

                        <BlogDetails key={blog._id} blog={blog} />

                    ))}

                    {blogs && blogs.length === 0 &&

                        <p className='text-red-500 italic'>No blogs present</p>

                    }
                </div>
            </div>
        </>
    )
}

export default Home