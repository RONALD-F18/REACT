import FormularioLogin from "./pages/FormularioLogin";
import FormularioRegister from "./pages/FormularioRegister";
import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormularioLogin />} />
      <Route path="/Registro" element={<FormularioRegister />} />
    </Routes>
  );
}

export default App;
