import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrap = styled.div`
background-color: #1E1F22;
    width: 260px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
`

export const NewRequests = styled(Link)`
`

export const Title = styled.h2`
    font-size: 24px;
    color: var(--main-text-color);
`
export const List = styled.ul`
display: flex;
    flex-direction: column;
    
    
`
export const ListItem = styled(Link)`
display: flex;
`

export const Name = styled.p`
    color: var(--main-text-color); 
    font-size: 24px;
`
export const Form = styled.form``
export const Input = styled.input``
export const SendBtn = styled.button`
    
`
