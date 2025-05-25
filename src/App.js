import {Route, Routes} from "react-router-dom";
import {Start} from "./pages/Start/Start";
import {SingIn} from "./pages/SingIn/SingIn";
import {Register} from "./pages/Register/Register";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/sing-in" element={<SingIn/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default App;
