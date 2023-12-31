import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { api } from "../api";
import { Card } from "../components/Card";

interface Post {
  id: 0;
  title: "";
  subtitle: "";
  content: "";
  created_at: ""; // Ou ajuste para o tipo de data apropriado
}

const initialPosts: Post[] = [];
const initialLoading = true;

export function HomeRoute() {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(initialLoading);

  async function loadPosts() {
    const response = await api.get("/posts");
    const nextPosts = response.data.posts;
    setPosts(nextPosts);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setLoading(false);
    }
  }, [posts]);

  return (
    <>
      {loading && (
        <div className="flex justify-center">
          <FaSpinner className="text -4xl animate-spin" />
        </div>
      )}
      {posts.map((post) => {
        return (
          <Card>
            <Link
              to={`/ver-publicacao/${post.id}`}
              key={post.id}
              className="border-b py-2 cursor-pointer block"
            >
              <span className="text-sm text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </span>
              <p>{post.content}</p>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
