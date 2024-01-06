import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { DarkModeToggle } from "./DarkModeToggle";
import { FaSpinner } from "react-icons/fa";
import { globalNavigate } from "../globalNavigate";
import { BiAddToQueue as LogoNewNotepad } from "react-icons/bi";
import { AiOutlineHome as LogoHome } from "react-icons/ai";
import { AiOutlineFileText as LogoList } from "react-icons/ai";
import { MdSwitchAccount } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { useGlobalStore } from "../useGlobalStore";
import { TokenStorage } from "../tokenStorage";

export function AppBar() {
  const user = useGlobalStore((state) => state.user);
  const setUser = useGlobalStore((state) => state.setUser);
  const setIsAuthorized = useGlobalStore((state) => state.setIsAuthorized);
  const isAuthorized = useGlobalStore((state) => state.isAuthorized);

  const isLoading = useGlobalStore((state) => state.isLoading);

  const navigate = useNavigate();

  useEffect(() => {
    globalNavigate.navigate = navigate;
  }, [navigate]);

  function logout() {
    TokenStorage.removeToken();
    navigate("/entrar");
    toast(`Até mais, ${user.first_name}!`);
    setIsAuthorized(false);
    setUser({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    });
  }

  return (
    <header className="m-4 p-3 gap-10 shadow-md flex justify-between items-center fixed bottom-0 left-0">
      <div className="flex items-center gap-10">
        <Link to="/" className="text-4xl">
          <LogoHome />
        </Link>
        <Link to="/criar-publicacao" className="text-4xl">
          <LogoNewNotepad />
        </Link>
        <Link to="/home-post" className="text-4xl">
          <LogoList />
        </Link>
        <Link to="/entrar" className="text-4xl">
          <AiOutlineLogin />
        </Link>
        {isLoading && <FaSpinner className="animate-spin text-2xl" />}
      </div>
      <div className="flex items-center gap-4">
        {isAuthorized ? (
          <>
            <Button onClick={logout}>Sair</Button>
            <Link to="/usuario" className="flex items-center gap-2">
              {user.first_name} {user.last_name}
              <img
                src={user.avatar}
                className="w-12 h-12 rounded-full"
                alt={`${user.first_name} Avatar`}
              />
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/criar-conta" className="text-4xl">
              <MdSwitchAccount />
            </Link>{" "}
          </div>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

// Simulei as implementações das seguintes componentes (você deve substituir pelo seu código real):
function LinkButton({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
