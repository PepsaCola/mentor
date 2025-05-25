import {StartBack} from "../../components/StartBack/StartBack";
import {BtnWrap, Forgot, Form, Input, Label, SingInBtn, SingUp} from "../../components/StartForm/styled";

export const SingIn = () => {
    return (
        <StartBack>
            <Form>
                <Label>
                    Email
                    <Input placeholder='Value' />
                </Label>
                <Label>
                    Password
                    <Input placeholder='Value' />
                </Label>
                <BtnWrap>
                    <SingUp to='/register'>Sing Up</SingUp>
                    <SingInBtn>Sign In</SingInBtn>
                </BtnWrap>
                <Forgot to='/'>Forgot password?</Forgot>
            </Form>
        </StartBack>
    )
}