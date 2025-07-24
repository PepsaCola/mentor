import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesById, getUser } from "../../../redux/selectors";
import { addMessageToChat } from "../../../redux/user/slice";
import {
    Btn,
    Form,
    Input,
    List,
    ListItem,
    Message,
    Name,
    NameWrap, ScrollButton, SendIcon,
    Wrap,
} from "./styled";
import { Avatar } from "../Avatar/Avatar";

export const Chat = () => {
    const { socket } = useOutletContext();
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [message, setMessage] = useState("");
    const [showScrollButton, setShowScrollButton] = useState(false);

    const messages = useSelector((state) => getMessagesById(state, id));

    const listRef = useRef(null);
    const endRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        socket.emit("private_message", {
            fromUserId: user._id,
            toUserId: id,
            message,
        });

        dispatch(
            addMessageToChat({
                userId: id,
                message: {
                    fromUserId: user._id,
                    message,
                    timestamp: new Date(),
                },
            })
        );

        setMessage("");
    };

    const scrollToBottom = (start= false) => {
        endRef.current?.scrollIntoView({
            behavior: start===true ? "auto" : "smooth",
        });

    };

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const handleScroll = () => {
            const isAtBottom =
                list.scrollHeight - list.scrollTop - list.clientHeight < 100;
            setShowScrollButton(!isAtBottom);
        };

        list.addEventListener("scroll", handleScroll);
        return () => list.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const isAtBottom =
            list.scrollHeight - list.scrollTop - list.clientHeight < 100;

        if (isAtBottom) {
            scrollToBottom();
        }
    }, [messages]);

    useEffect(() => {

        scrollToBottom(true);
    }, [id]);

    const contact = user.contacts.find((c) => c.contact._id === id);
    console.log(contact);
    return (
        <Wrap>
            <NameWrap>
                <Avatar
                    src={contact.contact.avatar || "/img/default-avatar.png"}
                    alt="Avatar"
                />
                <Name>{contact.contact.username}</Name>
            </NameWrap>

            <List ref={listRef}>
                {messages.map((msg, index) => {
                    const isYou = msg.fromUserId === user._id;
                    return (
                        <ListItem key={index} isYou={isYou}>
                            <Message >{msg.message}</Message>
                        </ListItem>
                    );
                })}
                <div ref={endRef} />
            </List>

            {showScrollButton && (
                <ScrollButton
                    onClick={scrollToBottom}
                >
                    ↓
                </ScrollButton>
            )}

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Btn type="submit">
                    <SendIcon></SendIcon>
                </Btn>
            </Form>
        </Wrap>
    );
};
