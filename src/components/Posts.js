import React, {useState, useCallback} from "react";
import { getPosts } from '../redux/actions'

import { useDispatch, useSelector } from 'react-redux'

function Posts(props) {
//   const [posts, setPosts] = useState([])
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const handleGetPosts = () => {
    // dispatch(() => 1. esta haciendo una llamada a la api, 2.estas tirando una accion con dispatch)
    dispatch(getPosts())
  };

  const showPosts = useCallback(() => {
     return posts.map(p => <h1>{p.title}</h1>)
  }, [posts])

  console.log('posts: ', posts)

  return (
    <>
      <h1>Aqui estan mis posts</h1>
      <button onClick={handleGetPosts}>Get Posts</button>
      {showPosts()}
    </>
  );
}

export default Posts;
