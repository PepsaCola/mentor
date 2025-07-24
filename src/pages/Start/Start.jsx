import {BtnWrap, Register, SignIn, Title} from "./styled";
import {StartBack} from "../../components/StartBack/StartBack";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getToken} from "../../redux/selectors";
import {useEffect} from "react";

export const Start = () => {

    const navigate = useNavigate()
    const token = useSelector(getToken)

    useEffect(() => {
        if(token) navigate("/")
    },[token,navigate])

    return (
        <StartBack>
            <Title>Mentor</Title>
            <BtnWrap>
                <SignIn to='/login'>Sign in</SignIn>
                <Register to='/register'>Register</Register>
            </BtnWrap>
        </StartBack>
    )
}