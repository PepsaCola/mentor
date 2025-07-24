import {Avatar, Content, List, ListItem, Logo, Logout, MainWrap, Name, Profile, Sidebar, SidebarWrap} from "./styled";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getToken, getUser} from "../../redux/selectors";

export const Main = () => {

    const navigate = useNavigate()
    const token = useSelector(getToken)
    const user = useSelector(getUser)

    useEffect(() => {
        if(!token) navigate("/start")
    },[token,navigate])

    const handleLogout = ()=>{

    }
    return (
        <>
        <MainWrap>
            <Sidebar>
                <Logo>Mentor</Logo>
                <SidebarWrap>
                    <List>
                        <ListItem to='chats'>Chats</ListItem>

                    </List>
                    <Profile>
                        <Avatar src={user.avatar || '/img/default-avatar.png'} />
                        <Name>{user.username}</Name>
                        <Logout onClick={handleLogout} style={{ cursor: "pointer" }} />
                    </Profile>
                </SidebarWrap>

            </Sidebar>
            <Content>
                <Outlet />
            </Content>
        </MainWrap>
        </>
    )
}