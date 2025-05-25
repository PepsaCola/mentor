import {StartBack} from "../../components/StartBack/StartBack";
import { Forgot, Form, Input, Label, SingUpBtn} from "../../components/StartForm/styled";

export const Register = () => {
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
                <Label>
                    Name
                    <Input placeholder='Value' />
                </Label>
                <SingUpBtn to='/register'>Sing Up</SingUpBtn>
                <Forgot to='/sing-in'>Have account?</Forgot>
            </Form>
        </StartBack>
    )
}