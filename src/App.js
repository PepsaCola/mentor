import {Route, Routes} from "react-router-dom";
import {Start} from "./pages/Start/Start";
import {SignIn} from "./pages/SignIn/SignIn";
import {Register} from "./pages/Register/Register";
import {Main} from "./pages/Main/Main";
import {Chats} from "./pages/Chats/Chats";
import {MainContent} from "./pages/MainContent/MainContent";
import {Chat} from "./components/ChatsComponents/Chat/Chat";
import {Requests} from "./components/ChatsComponents/Requests/Requests";

function App() {
  return (
    <Routes>
        <Route path="/start" element={<Start/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Main/>} >
            <Route path='' element={<MainContent/>}/>
            <Route path='chats' element={<Chats/>}>
                <Route path='requests' element={<Requests/>}/>
                <Route path=':id' element={<Chat/>}/>
            </Route>
        </Route>
    </Routes>
  );
}

export default App;
