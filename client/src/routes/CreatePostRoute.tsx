import { useNavigate } from "react-router-dom";
import { useZorm } from "react-zorm";
import { Button } from "../components/Button";
import toast from "react-simple-toasts";
import { ErrorMessage } from "../components/ErrorMessage";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { api } from "../api";
import { PostSchema } from "../postSchema";
import { Card } from "../components/Card";

export function CreatePostRoute() {
  const navigate = useNavigate();
  const zo = useZorm("create-post", PostSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.post("/posts", event.data);
      if (response.data.id) {
        toast("Parabéns! Seu post foi gerado");
        navigate("/");
      } else toast("Ops! Houve um erro ao gerar seu post");
    },
  });

  return (
    <Card>
        <Breadcrumbs
          links={[
            { href: "/", label: "Home" },
            {
              href: "/criar-publicacao",
              label: "Criar publicação",
            },
          ]}
        />
        <form
          ref={zo.ref}
          className="flex flex-col gap-4 m-2 md:max-w-screen-md md:mx-auto"
        >
          <h1 className="text-center font-bold text-2xl">Criar publicação</h1>
         
          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Digite aqui o conteúdo da publicação"
              className={`rounded-lg px-2 py-1 border focus:border-green-500 outline-none w-full ${zo.errors.content(
                "border-red-600"
              )}`}
              rows={3}
              name={zo.fields.content()}
            ></textarea>
            {zo.errors.content((error) => (
              <ErrorMessage>{error.message}</ErrorMessage>
            ))}
          </div>
          <Button type="submit">Enviar</Button>
        </form>
    </Card>
  );
}
