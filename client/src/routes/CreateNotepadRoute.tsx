import { useNavigate } from "react-router-dom";
import { useZorm } from "react-zorm";
import { Button } from "../components/Button";
import toast from "react-simple-toasts";
import { ErrorMessage } from "../components/ErrorMessage";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { api } from "../api";
import { NotepadSchema } from "../notepadSchema";
import { Card } from "../components/Card";

export function CreateNotepadRoute() {
  const navigate = useNavigate();
  const zo = useZorm("create-notepad", NotepadSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.post("/notepads", event.data);
      if (response.data.id) {
        toast("Parabéns! Seu notepad foi gerado");
        navigate("/");
      } else toast("Ops! Houve um erro ao gerar seu notepad");
    },
  });

  return (
    <Card>
      <div>
        <Breadcrumbs
          links={[
            { href: "/", label: "Home" },
            {
              href: "/criar-notepad",
              label: "Criar notepad",
            },
          ]}
        />
        <form
          ref={zo.ref}
          className="flex flex-col gap-4 m-2 md:max-w-screen-md md:mx-auto"
        >
          <h1 className="text-center font-bold text-2xl">Novo Notepad</h1>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Digite aqui o título"
              className={`rounded-lg px-2 py-1 border focus:border-green-500 outline-none w-full ${zo.errors.title(
                "border-red-600"
              )}`}
              name={zo.fields.title()}
            ></input>
            {zo.errors.title((error) => (
              <ErrorMessage>{error.message}</ErrorMessage>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Digite aqui o subtítulo"
              className={`rounded-lg px-2 py-1 border focus:border-green-500 outline-none w-full ${zo.errors.subtitle(
                "border-red-600"
              )}`}
              name={zo.fields.subtitle()}
            ></input>
            {zo.errors.subtitle((error) => (
              <ErrorMessage>{error.message}</ErrorMessage>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Digite aqui o conteúdo"
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
      </div>
    </Card>
  );
}
