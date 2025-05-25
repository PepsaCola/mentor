import {BtnWrap, Register, SingIn, Title} from "./styled";
import {StartBack} from "../../components/StartBack/StartBack";

export const Start = () => {
    return (
        <StartBack>
            <Title>Mentor</Title>
            <BtnWrap>
                <SingIn to='/sing-in'>Sign in</SingIn>
                <Register to='/register'>Register</Register>
            </BtnWrap>
        </StartBack>
    )
}