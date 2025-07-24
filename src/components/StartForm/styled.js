import styled from "styled-components";
import {Link} from "react-router-dom";

export const Form = styled.form`
    background: white;
    border-radius: 8px;
    outline: 1px #D9D9D9 solid;
    padding: 24px;
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const Label = styled.label`
    color: #1E1E1E;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 8px;
`
export const Input = styled.input`
    padding: 12px 16px;
    color:  #B3B3B3;
    font-size: 16px;
    background: transparent;
    border-radius: 8px;
    outline: 1px  #D9D9D9 solid;
    border: none;
    box-sizing: border-box;
`
export const BtnWrap = styled.div`
    display: flex;
    gap: 16px;
    
`

export const SignUp = styled(Link)`
    background-color: transparent;
    border: none;
    padding: 12px;
    font-size: 16px;
    box-sizing: border-box;
    color: #303030;
    width: calc((100% - 16px)/2);
    font-weight: 400;
    cursor: pointer;
    text-align: center;
`
export const SignUpBtn = styled.button`
    border: none;
    padding: 12px;
    box-sizing: border-box;
    cursor: pointer;
    color: #F5F5F5;
    background-color: #2C2C2C;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
`

export const SignInBtn = styled.button`
    color: #F5F5F5;
    background-color: #2C2C2C;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: 400;
    padding: 12px;
    box-sizing: border-box;
    width: calc((100% - 16px)/2);
    cursor: pointer;
`
export const Forgot = styled(Link)`
    text-decoration: underline;
    color: #1E1E1E; 
    font-size: 16px; 
    font-weight: 400;
`