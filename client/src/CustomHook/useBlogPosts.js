import { useState, useEffect } from "react";
import axios from "axios";

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await axios("http://localhost:4000/posts");
        setPosts(results.data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return { posts, isError, isLoading };
};

export default useBlogPosts;
