import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Breadcrumbs } from "../components/Breadcrumbs";

const initialPost = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

export function ViewPostRoute() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(initialPost);

  async function loadPost() {
    const response = await api.get(`/posts/${params.id}`);
    const nextPost = response.data;
    setPost(nextPost);
  }

  async function deletePost() {
    const response = await api.delete(`/posts/${params.id}`);
    if (response.data.id) {
      toast(`O post #${post.id} foi deletado com sucesso`);
      navigate("/");
    } else {
      toast("Houve um erro ao deletar");
    }
  }

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <Card>
      <title>Ver publicação #{post.id}</title>
      <Breadcrumbs
        links={[
          { href: "/", label: "Home" },
          {
            href: `/ver-publicacao/${params.id}`,
            label: `Ver post #${params.id}`,
          },
        ]}
      />
      <div className="flex gap-3 justify-end">
        <Button className="bg-red-500 hover:bg-red-600" onClick={deletePost}>
          Deletar
        </Button>
        <LinkButton
          className="bg-amber-500 hover:bg-amber-700"
          to={`/editar-publicacao/${params.id}`}
        >
          Editar
        </LinkButton>
      </div>

      <span className="text-gray-400 mb-2">#{post.id}</span>
      <div>{new Date(post.created_at).toLocaleDateString()}</div>
      <p>{post.content}</p>
    </Card>
  );
}
