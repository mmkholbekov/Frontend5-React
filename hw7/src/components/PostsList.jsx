import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, addPost, deletePost } from './postsSlice.jsx';

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts)
  const status = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch])

  const handleAddNewPost = () => {
    const newPost = {
      title: 'New Post Title',
    }
    dispatch(addPost(newPost))
  }

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId))
  }

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <>
          <button onClick={handleAddNewPost}>Add New Post</button>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.title}
                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default PostsList
