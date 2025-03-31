import { useState } from "react";
import axios from "axios";

const useBlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
  
    const getPosts = async () => {
        setIsError(false);
        setIsLoading(true);
      try {
        const results = await axios("http://localhost:4000/posts");
        setPosts(results.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    return {posts, isError, isLoading, getPosts}
};

export default useBlogPosts;