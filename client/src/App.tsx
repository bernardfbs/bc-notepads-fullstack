import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomeRoute } from "./routes/HomeRoute";
import { CreateNotepadRoute } from "./routes/CreateNotepadRoute";
import { TextField } from "./components/TextField";
import { Title } from "./components/Title";
import { Button } from "./components/Button";
import { ViewNotepadRoute } from "./routes/ViewNotepadRoute";
import { EditNotepadRoute } from "./routes/EditNotepadRoute";
import { LandingPage } from "./routes/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/criar-notepad" element={<CreateNotepadRoute />} />
          <Route path="/ver-notepad/:id" element={<ViewNotepadRoute />} />
          <Route path="/editar-notepad/:id" element={<EditNotepadRoute />} />
          <Route path="/home-notepad/" element={<HomeRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
