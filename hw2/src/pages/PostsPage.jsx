//         HOME WORK №3
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(page - 1) * 10}`)
        setPosts(response.data.posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
          <button onClick={handlePrev} disabled={page === 1}>
            Prev
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  )
}

export default PostsPage;
