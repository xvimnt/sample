import React, { useEffect, useState } from "react";
import { Wrapper } from "../style/components"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// Amplify Auth
import { Auth } from 'aws-amplify';
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
// Data
import userSlice from "../data/userSlice"

export default function Verify() {

    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const state = useSelector(state => state)
    const { user } = state
    const { loadingUser, doneLoadingUser, confirmUser } = userSlice.actions
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        // redirect authenticated user to profile screen
        if (user.userInfo.email_verified) navigate('/home')
    }, [navigate, user.userInfo])


    async function resendConfirmationCode() {
        try {
            await Auth.resendSignUp(user.userInfo.username);
            setErrorMessage("Codigo enviado de nuevo")
        } catch (error) {
            setErrorMessage(error.toString())
        }
    }

    async function confirmSignUp() {
        dispatch(loadingUser())
        try {
            console.log(user)
            await Auth.confirmSignUp(user.userInfo.username, code);
            dispatch(confirmUser())
        } catch (error) {
            setErrorMessage(error.toString())
        }
        dispatch(doneLoadingUser())
    }
    return (
        <>
            <TopMainNavbar />
            <Wrapper className="mt-5 mb-3">
                <h1>Verifica tu codigo</h1>
                {errorMessage && <div className="fail">{errorMessage}</div>}
                {user.loading && <div className="fail">Loading...</div>}
                <input
                    className="form-control"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    type="number"
                    placeholder="123456" />
                <hr />
                {!user.loading && (<button
                    className="btn btn-success"
                    disabled={!code}
                    onClick={confirmSignUp}>Confirmar Codigo</button>)}
                <button
                    className="btn btn-info"
                    onClick={resendConfirmationCode}>Reenviar Codigo</button>
            </Wrapper>
            <Footer />
        </>
    )
}