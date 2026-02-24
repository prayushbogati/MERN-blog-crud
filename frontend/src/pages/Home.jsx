import React from 'react'
import { useEffect } from 'react'
import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'
import { useBlogContext } from '../../hooks/useBlogContext'


const Home = () => {
    const { blogs, dispatch } = useBlogContext()

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch("http://localhost:3000/blogs")
            const data = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_BLOGS', payload: data })
            }
        }

        fetchBlogs()
    }, [dispatch])

    return (
        <>
            <div className="flex justify-center gap-0px m-20">
                <div className='flex flex-col gap-10 items-center w-2/3'>
                    {blogs && blogs.length > 0 && blogs.map((blog) => (

                        <BlogDetails key={blog._id} blog={blog} />

                    ))}

                    {blogs && blogs.length === 0 &&

                        <p className='text-red-500 italic'>No blogs present</p>

                    }
                </div>
                <BlogForm />
            </div>
        </>
    )
}

export default Home