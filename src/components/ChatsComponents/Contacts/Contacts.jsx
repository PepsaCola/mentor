import { Form, Input, List, ListItem, Name, NewRequests, SendBtn, Title, Wrap} from "./styled";
import { useState} from "react";
import { useSelector} from "react-redux";
import {getContactsFromState, getUser} from "../../../redux/selectors";
import {Avatar} from "../Avatar/Avatar";



export const Contacts = ({socket}) => {
    const user = useSelector(getUser);

    const contacts = useSelector(getContactsFromState);

    const [toUserId, setToUserId] = useState('')

    const handleChange = (e) => {
        setToUserId(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!toUserId.trim()) return
        socket.emit('send_contacts_request', {
            fromUserId: user._id,
            fromName:user.username,
            toUserId
        })
        setToUserId('')
    }

    return (
        <Wrap>
            <Title>Chats</Title>
            <h1>{user.username}</h1>
            <span>{user._id}</span>
            <List>
                <NewRequests to={'requests'}>New requests</NewRequests>
                {contacts.map((contact, index) => (
                    <ListItem to={contact.contact._id} key={index}>
                        <Avatar src={contact.contact.avatar||'/img/default-avatar.png'} />
                        <Name>{contact.contact.username}</Name>
                    </ListItem>

                ))}
                <Form onSubmit={handleSubmit}>
                    <Input onChange={handleChange} value={toUserId} type='text' name='toUserId' placeholder='Write Id'></Input>
                    <SendBtn>Send</SendBtn>
                </Form>
            </List>
        </Wrap>
    )
}