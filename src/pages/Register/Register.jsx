import {StartBack} from "../../components/StartBack/StartBack";
import { Forgot, Form, Input, Label, SignUpBtn} from "../../components/StartForm/styled";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuth} from "../../redux/selectors";
import {registerUser} from "../../redux/auth/redusers/register";

export const Register = () => {

    const [formData, setFormData] = useState({username: "", email: "", password: ""});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {isLoading,error,token} = useSelector(getAuth)

    useEffect(() => {
        if(token) navigate("/")
    },[token,navigate])

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerUser(formData));
        if (registerUser.fulfilled.match(result)) setFormData({ username: "", email: "", password: "" });
    }

    return (
        <StartBack>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Email
                    <Input onChange={handleChange} type='email' name='email' placeholder='Value' />
                </Label>
                <Label>
                    Password
                    <Input onChange={handleChange} type='password' name='password'placeholder='Value' />
                </Label>
                <Label>
                    Name
                    <Input onChange={handleChange} type='text' name='username' placeholder='Value' />
                </Label>
                <SignUpBtn type='submit'>{isLoading ? "Loading..." :"Sign Up"}</SignUpBtn>
                {error && <p style={{color: "red"}}>{error.message}</p>}
                <Forgot to='/login'>Have account?</Forgot>
            </Form>
        </StartBack>
    )
}