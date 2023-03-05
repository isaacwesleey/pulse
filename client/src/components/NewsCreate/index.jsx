import { useState, useEffect } from 'react';
import { useToken } from '../../TokenContext';
import './NewsCreate.css';

const NewsCreate = () => {
  const [token, setToken] = useToken();
  const [title, setTitle] = useState('');
  const [lede, setLede] = useState('');
  const [theme, setTheme] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('lede', lede);
      formData.append('theme', theme);
      formData.append('content', content);
      formData.append('image', image);

      const res = await fetch('http://localhost:3005/api/news', {
        headers: {
          Authorization: token,
        },
        method: 'POST',
        body: formData,
      });

      const body = await res.json();

      if (body.status === 'error') {
        alert(body.data);
        console.log('Algo salio mal');
        console.error(body.data.news);
      } else {
        alert(body.data);
        console.log(body.data.news);
      }
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
  };

  return (
    <div className='news-create'>
      <h1>Create News</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor='lede'>Lede</label>
        <input
          type='text'
          name='lede'
          id='lede'
          value={lede}
          onChange={(e) => setLede(e.target.value)}
        />

        <label htmlFor='theme'>Theme</label>
        <input
          type='text'
          name='theme'
          id='theme'
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />

        <label htmlFor='content'>Content</label>
        <textarea
          name='content'
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor='image'>Image</label>
        <input
          type='file'
          name='image'
          id='image'
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsCreate;
