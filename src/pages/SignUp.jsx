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

export default function SignUp() {

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const state = useSelector(state => state)
  const { user } = state
  const { loginUser, loadingUser, doneLoadingUser } = userSlice.actions
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(user)
    // redirect authenticated user to profile screen
    if (user.userInfo.email_verified) navigate('/home')
    else if (user.userInfo.username) navigate("/verify")
  }, [navigate, user.userInfo])

  async function signUp() {
    dispatch(loadingUser())
    const username = emailValue
    const email = emailValue
    const password = passwordValue
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,          // optional
          // other custom attributes 
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });
      const newUser = {
        email: email,
        username: email,
        email_verified: false,
        jwt: null,
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
        <h1>Registrate</h1>
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
        <input
          className="form-control"
          type="password"
          value={confirmPasswordValue}
          onChange={e => setConfirmPasswordValue(e.target.value)}
          placeholder="password" />
        <hr />
        {!user.loading && (<button
          className="btn btn-success"
          disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue}
          onClick={signUp}>Registrarse</button>)}
        <button onClick={() => navigate('/login')}>Ya tienes una cuenta? Sign In</button>
      </Wrapper>
      <Footer />
    </>
  )
}