import FormularioLogin from "./pages/FormularioLogin";
import FormularioRegister from "./pages/FormularioRegister";
import "./styles/app.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormularioRegister />} />
      <Route path="/Registro" element={<FormularioRegister />} />
    </Routes>
  );
}

export default App;
