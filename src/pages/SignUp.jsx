import React, { useEffect, useState } from "react";
import { Wrapper } from "../style/components"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
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
      <Wrapper>
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                {errorMessage && <div className="fail">{errorMessage}</div>}
                {user.loading && <div className="fail">Loading...</div>}
                <form>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control"
                      value={emailValue}
                      onChange={e => setEmailValue(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" value={passwordValue}
                      onChange={e => setPasswordValue(e.target.value)} id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" value={confirmPasswordValue}
                      onChange={e => setConfirmPasswordValue(e.target.value)} id="floatingPassword2" placeholder="Password" />
                    <label for="floatingPassword2">Confirm Password</label>
                  </div>
                  <div class="d-grid">
                    {!user.loading && (<button
                      disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue} onClick={signUp} class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                      Up</button>)}
                  </div>
                  <hr class="my-4" />
                  <Link to={"/login"}>ya tienes una cuenta? Log In</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}