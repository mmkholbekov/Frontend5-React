import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const post = {
      title: formData.get('title'),
      body: formData.get('body'),
    }

    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    const data = await response.json()
    navigate('/')
  }
  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        <br />
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" required></textarea>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default Create
