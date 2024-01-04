import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomeRoute } from "./routes/HomeRoute";
import { CreatePostRoute } from "./routes/CreatePostRoute";
import { ViewPostRoute } from "./routes/ViewPostRoute";
import { EditPostRoute } from "./routes/EditPostRoute";
import { LandingPage } from "./routes/LandingPage";
import { SignInRoute } from "./routes/SignInRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/criar-publicacao" element={<CreatePostRoute />} />
          <Route path="/ver-publicacao/:id" element={<ViewPostRoute />} />
          <Route path="/editar-publicacao/:id" element={<EditPostRoute />} />
          <Route path="/home-post/" element={<HomeRoute />} />
          <Route path="/entrar" element={<SignInRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
