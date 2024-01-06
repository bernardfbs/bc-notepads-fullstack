import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomeRoute } from "./routes/HomeRoute";
import { CreatePostRoute } from "./routes/CreatePostRoute";
import { ViewPostRoute } from "./routes/ViewPostRoute";
import { UserAccountRoute } from "./routes/UserAccountRoute";
import { EditPostRoute } from "./routes/EditPostRoute";
import { LandingPage } from "./routes/LandingPage";
import { SignInRoute } from "./routes/SignInRoute";
import { SignUpRoute } from "./routes/SignUpRoute";
import { LoadUser } from "./components/LoadUser";

export default function App() {
  return (
    <BrowserRouter>
      <div>
      <LoadUser />
        <AppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/criar-publicacao" element={<CreatePostRoute />} />
          <Route path="/usuario" element={<UserAccountRoute />} />
          <Route path="/ver-publicacao/:id" element={<ViewPostRoute />} />
          <Route path="/editar-publicacao/:id" element={<EditPostRoute />} />
          <Route path="/home-post/" element={<HomeRoute />} />
          <Route path="/entrar" element={<SignInRoute />} />
          <Route path="/criar-conta" element={<SignUpRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
