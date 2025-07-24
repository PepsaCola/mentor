import {useEffect} from "react";
import {io} from "socket.io-client";
import {useDispatch, useSelector} from "react-redux";
import {getToken, getUser} from "../../redux/selectors";
import {Contacts} from "../../components/ChatsComponents/Contacts/Contacts";
import {Wrap} from "./styled";
import {Outlet, useNavigate} from "react-router-dom";
import {getInvitations} from "../../redux/user/redusers/getInvitations";
import {getContacts} from "../../redux/user/redusers/contact";
import {addMessageToChat} from "../../redux/user/slice";

const socket = io("http://localhost:3001");

export const Chats = () => {
    const user = useSelector(getUser);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector(getToken)
    // const roomId = '1';
    // const partner = 'Kiril';
    // const [message, setMessage] = useState("");
    // const [chat, setChat] = useState([]);

    useEffect(() => {
        if(!token) navigate("/")
    },[token,navigate])

    useEffect(() => {
        // Приєднання до кімнати один-на-один
        // socket.emit("join_room", roomId);
        socket.emit('register', user._id)
        // Отримання повідомлень
        socket.on("receive_message", (data) => {
            console.log(data);
            // setChat(prev => [...prev, data]);
        });
        socket.on("receive_private_message", (data) => {
            dispatch(addMessageToChat({
                userId: data.fromUserId,
                message: {
                    fromUserId: data.fromUserId,
                    message: data.message,
                    timestamp: data.timestamp
                }
            }));
        });
        socket.on('new_invitation', ({fromUserId}) => {
            dispatch(getInvitations(user._id))
            alert(`New invitation from ${fromUserId}`);
        })
        socket.on('contacts_updated', () => {
            console.log(123)
            setTimeout(() => {
                dispatch(getContacts());
            }, 500);
        });

        return () => {
            socket.off("receive_message");
            socket.off("new_invitation");
            socket.off("contacts_updated");
            socket.off("receive_private_message")
        };
    }, [user,dispatch]);

    // const sendMessage = () => {
    //     if (message.trim()) {
    //         socket.emit("send_message", {
    //             from: user.username,
    //             roomId,
    //             message
    //         });
    //         // setChat(prev => [...prev, { from: user.username, message }]);
    //         setMessage("");
    //     }
    // };

    return (
        <Wrap>
            <Contacts socket={socket} />
            <Outlet context={{socket}}/>
        </Wrap>
        // <div>
        //     <h3>Chat with {partner}</h3>
        //     <div style={{ height: 200, overflowY: 'auto', border: '1px solid #ccc' }}>
        //         {chat.map((m, i) => (
        //             <div key={i}>
        //                 <strong>{m.from}:</strong> {m.message}
        //             </div>
        //         ))}
        //     </div>
        //     <input
        //         value={message}
        //         onChange={e => setMessage(e.target.value)}
        //         onKeyDown={e => e.key === "Enter" && sendMessage()}
        //     />
        //     <button onClick={sendMessage}>Send</button>
        // </div>
    );
}