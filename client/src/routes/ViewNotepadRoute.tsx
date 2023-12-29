import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Breadcrumbs } from "../components/Breadcrumbs";

const initialNotepad = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  createdAt: "",
};

export function ViewNotepadRoute() {
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState(initialNotepad);

  async function loadNotepad() {
    const response = await api.get(`/notepads/${params.id}`);
    const nextNotepad = response.data;
    setNotepad(nextNotepad);
  }

  async function deleteNotepad() {
    const response = await api.delete(`/notepads/${params.id}`);
    if (response.data.id === true) {
      toast(`O notepad #${notepad.id} foi deletado com sucesso`);
      navigate("/");
    } else {
      toast("Houve um erro ao deletar");
    }
  }

  useEffect(() => {
    loadNotepad();
  }, []);

  return (
    <Card>
      <Breadcrumbs
        links={[
          { href: "/", label: "Home" },
          {
            href: `/ver-notepad/${params.id}`,
            label: `Ver notepad #${params.id}`,
          },
        ]}
      />
      <div className="flex gap-3 justify-end">
        <Button className="bg-red-500 hover:bg-red-600" onClick={deleteNotepad}>
          Deletar
        </Button>
        <LinkButton
          className="bg-amber-500 hover:bg-amber-700"
          to={`/editar-notepad/${params.id}`}
        >
          Editar
        </LinkButton>
      </div>

      <span className="text-gray-400 mb-2">#{notepad.id}</span>
      <div>{new Date(notepad.createdAt).toLocaleDateString()}</div>
      <Title>{notepad.title}</Title>
      <p className="mb-4 text-gray-500">{notepad.subtitle}</p>
      <p>{notepad.content}</p>
    </Card>
  );
}
