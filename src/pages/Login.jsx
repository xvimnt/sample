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

export default function Login() {

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const state = useSelector(state => state)
  const { user } = state
  const { loginUser, loadingUser, doneLoadingUser } = userSlice.actions
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (user.userInfo.email_verified) navigate('/home')
  }, [navigate, user.userInfo])


  async function signIn() {
    dispatch(loadingUser())
    try {
      const user = await Auth.signIn(emailValue, passwordValue);
      const newUser = {
        email: user.attributes.email,
        username: user.username,
        email_verified: user.attributes.email_verified,
        jwt: user.signInUserSession.accessToken.jwtToken,
      }
      dispatch(loginUser(newUser))
    } catch (error) {
      setErrorMessage(error.toString())
    }
    dispatch(doneLoadingUser())
  }

  return (
    <>
      <TopMainNavbar />
      <Wrapper className="mt-5 mb-3">
        <h1>Log In</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        {user.loading && <div className="fail">Loading...</div>}
        <input
        className="form-control"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          placeholder="someone@gmail.com" />
        <input
        className="form-control"
        type="password"
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
          placeholder="password" />
        <hr />
        {!user.loading && (<button
        className="btn btn-success"
        disabled={!emailValue || !passwordValue}
          onClick={signIn}>Log In</button> )}
        <button onClick={() => navigate('/forgot-password')}>Olvidaste tu clave?</button>
        <button onClick={() => navigate('/signup')}>Aun no tienes una cuenta? Registrate</button>
      </Wrapper>
      <Footer />
    </>
  )
}