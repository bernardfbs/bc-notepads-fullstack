import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import { DarkModeToggle } from "./DarkModeToggle";
import { MdStickyNote2 as LogoIcon } from "react-icons/md";
import { BiAddToQueue as LogoNewNotepad } from "react-icons/bi";
import { AiOutlineHome as LogoHome } from "react-icons/ai";
import { AiOutlineFileText as LogoList } from "react-icons/ai";

export function AppBar() {
  return (
    <header className="m-4 p-3 gap-10 shadow-md flex flex-col justify-between fixed top-0 right-0">
      <div className="flex flex-row items-center gap-10">
        <Link to="/" className="text-4xl">
          <LogoHome></LogoHome>
        </Link>
      </div>
      <div>
        <Link to="/criar-notepad">
          <LogoNewNotepad className="text-4xl"></LogoNewNotepad>
        </Link>
      </div>
      <Link to="/home-notepad">
        <LogoList className="text-4xl"></LogoList>
      </Link>
      <DarkModeToggle></DarkModeToggle>
    </header>
  );
}
