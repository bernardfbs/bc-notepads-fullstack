import { Button } from "./Button";
import { BiNotepad } from "react-icons/bi";

export function FormLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Bem-vindo ao nosso notepad.
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Explore nosso Notepad feito em React, com menu appbar lateral
        customizado e darkmode!
      </p>
      <BiNotepad className="text-8xl"></BiNotepad>
    </div>
  );
}
