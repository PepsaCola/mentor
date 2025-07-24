import styled from "styled-components";
import {ReactComponent as Send} from '../../../img/icons/send.svg'


export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    flex: 1;
    
`

export const NameWrap = styled.div`
    display: flex;
    background-color: var(--second-back);
    padding: 10px 43px;
    align-items: center;
    gap: 16px;

`
export const Name = styled.h2`

    color: var(--main-text-color);
`
export const Form = styled.form`
display: flex;
    width: 100%;
    padding: 0 10px 10px   ;
    box-sizing: border-box;
    gap: 11px;
`
export const Input = styled.input`
    background-color: var(--second-back);
    box-sizing: border-box;
    outline: none;
    border: none;
    padding: 5px 19px;
    flex: 1;
    color: var(--main-text-color);
    border-radius: 10px;
`
export const Btn = styled.button`
    width: 25px;
    height: 25px;
    background-color: var(--main-emphasis);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`

export const SendIcon = styled(Send)`
    
`
export const List = styled.ul`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px 22px;
    box-sizing: border-box;
    scrollbar-color: var(--add-text-color) transparent;
    scrollbar-width: thin;
`
export const ListItem = styled.li`
    display: flex;
    justify-content: ${({ isYou }) => isYou ? 'flex-end' : 'flex-start'};
    width: 100%;
    
`
export const Message = styled.span`
    background-color: var(--second-back);
    padding: 15px 19px;
    color: var(--main-text-color);
    max-width: 400px;
    border-radius: 15px;
`
export const ScrollButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 30px;
  background-color: var(--main-emphasis, #007bff);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 99px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.3s ease;
`;