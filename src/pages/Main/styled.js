import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent as LogoutIcon} from "../../img/icons/logout.svg";

export const MainWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
export const Sidebar = styled.div`
    width: 260px;
    background-color: var(--sidebar-back);
    display: flex;
    flex-direction: column;
`
export const SidebarWrap = styled.div`
    padding: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
`
export const Content = styled.div`
    flex: 1;
    background-color: var(--main-back);
`
export const Logo = styled.h1`
    text-align: center;
    color: var(--main-text-color);
    padding: 17px 0;
    background-color: var(--second-back);
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 14px;
`
export const ListItem = styled(Link)`
    text-align: center;
    font-size: 24px;
    color: var(--main-text-color);
`
export const Name = styled.span`
    font-size: 24px;
    color: var(--main-text-color);
    margin-left: 15px;
`
export const Profile = styled.div`
    margin-top: auto;
    padding: 11px;
    display: flex;
    align-items: center;
    background-color: var(--second-back);
    border-radius: 10px;
`
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`
export const Logout = styled(LogoutIcon)`
    margin-left: auto;
`