import Header from "./components/pages/header";
import Body from "./components/pages/body";
import { posts as initialPosts } from "./data/posts";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPost] = useState(initialPosts);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLike = (index: number) => {
    setPost(prev =>
      prev.map((post, i) =>
        i === index ? { ...post, like: !post.like } : post
      )
    );
  }

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Body posts={filteredPosts} onLike={toggleLike} />
    </>
  )
}

export default App
