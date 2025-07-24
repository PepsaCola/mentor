import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../../redux/selectors";
import {AcceptBtn, List, ListItem, RejectBtn, Title, Wrap} from "./styled";
import {addContact, notAddContact} from "../../../redux/user/redusers/contact";
import {useOutletContext} from "react-router-dom";

export const Requests = ()=>{

    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const { socket } = useOutletContext();
    const handleAccept = (fromUserId) => {
        dispatch(addContact({fromUserId}))
        socket.emit('accept_contact_request', {
            fromUserId, // хто запросив
            toUserId: user._id // хто прийняв
        });
    }

    const handleReject = (fromUserId) => {
        dispatch(notAddContact({fromUserId}))
    }
    return (
        <Wrap>
            <Title>Requests</Title>
            <List>
                {user.invitations?user.invitations.map((invitation,index) =>
                    <ListItem key={index}>
                        {invitation.fromName}
                        <AcceptBtn onClick={()=>handleAccept(invitation.fromUserId)}>Accept</AcceptBtn>
                        <RejectBtn onClick={()=>handleReject(invitation.fromUserId)}>Reject</RejectBtn>
                    </ListItem>
                ):'You have not invitations'}
            </List>
        </Wrap>
    )
}