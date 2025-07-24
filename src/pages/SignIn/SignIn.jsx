import {StartBack} from "../../components/StartBack/StartBack";
import {BtnWrap, Forgot, Form, Input, Label, SignInBtn, SignUp} from "../../components/StartForm/styled";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuth} from "../../redux/selectors";
import {login} from "../../redux/auth/redusers/login";

export const SignIn = () => {

    const [formData, setFormData] = useState({ email: "", password: ""});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {isLoading,error,token} = useSelector(getAuth)

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(login(formData));
        if (login.fulfilled.match(result)) setFormData({  email: "", password: ""});
    }

    useEffect(() => {
        if(token) navigate("/")
    },[token,navigate])

    return (
        <StartBack>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Email
                    <Input onChange={handleChange} type='email' name='email' placeholder='Value' />
                </Label>
                <Label>
                    Password
                    <Input onChange={handleChange} type='password' name='password' placeholder='Value' />
                </Label>
                <BtnWrap>
                    <SignUp to='/register'>Sing Up</SignUp>
                    <SignInBtn type='submit'>{isLoading ? "Loading..." :'Sign In'}</SignInBtn>
                    {error && <p style={{color: "red"}}>{error.message}</p>}
                </BtnWrap>
                <Forgot to='/'>Forgot password?</Forgot>
            </Form>
        </StartBack>
    )
}