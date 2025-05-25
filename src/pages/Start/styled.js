import styled from "styled-components";
import {Link} from "react-router-dom";

export const Title = styled.h1`
color: var(--main-text-color);
    font-size: 48px;
    margin-bottom: 28px;
`
export const BtnWrap = styled.div`

`
export const SingIn = styled(Link)`
    padding: 8px 16px;
    font-size: 16px;
    color: #1E1E1E;
    background: #E3E3E3;
    border-radius: 8px;
`
export const Register = styled(Link)`
    padding: 8px 10px;
    font-size: 16px;
    color: #F5F5F5;
    background: #2C2C2C;
    border-radius: 8px;
    margin-left: 12px;
`