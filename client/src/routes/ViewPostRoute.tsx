import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { api } from "../api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGlobalStore } from "../useGlobalStore";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Breadcrumbs } from "../components/Breadcrumbs";

const texts = {
  commentsTitle: "Comentários",
  commentsSendButton: "Enviar",
};

const initialPost = {
  id: 0,
  content: "",
  created_at: "",
};

const initialComments = [];
const initialComment = "";

export function ViewPostRoute() {
  const isAuthorized = useGlobalStore((state) => state.isAuthorized);
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(initialPost);
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState(initialComment);

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

  async function loadComments() {
    const response = await api.get(`/posts/${params.id}/comments`);
    const comments = response.data;
    setComments(comments);
  }

  async function createComment() {
    const response = await api.post(`/posts/${params.id}/comments`, {
      message: comment,
    });
  }

  async function onCommentSubmit(event) {
    event.preventDefault();
    await createComment();
    await loadComments();
  }

  useEffect(() => {
    loadPost();
    loadComments();
  }, [params.id]);

  const pageTitle = `Ver publicação #${post.id}`;

  return (
    <>
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
      <Card>
        <Title>{texts.commentsTitle}</Title>
        {isAuthorized && (
          <form onSubmit={onCommentSubmit} className="mt-2">
            <textarea
              placeholder="Digite o seu comentário"
              rows={3}
              className={`rounded-lg px-2 py-1 border focus:border-green-500 outline-none resize-none w-full`}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <div className="flex justify-end mt-2">
              <Button type="submit">{texts.commentsSendButton}</Button>
            </div>
          </form>
        )}
        {!isAuthorized && (
          <div className="my-4">
            <p>
              Para comentar, você deve{" "}
              <Link
                to="/entrar"
                className="text-blue-600 hover:text-blue-800 hover:underline font-bold"
              >
                entrar
              </Link>{" "}
              ou{" "}
              <Link
                to="/criar-conta"
                className="text-blue-600 hover:text-blue-800 hover:underline font-bold"
              >
                criar uma conta
              </Link>
              .
            </p>
          </div>
         )}
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="border-b py-2 block">
              <span className="text-sm text-gray-500">
                {new Date(comment.created_at).toLocaleDateString()}
              </span>
              <p>{comment.message}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
