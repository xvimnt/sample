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
      <Wrapper className="mt-5 mb-5">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
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
                  <div class="d-grid">
                    {!user.loading && (<button onClick={signIn} class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                      in</button>)}
                  </div>
                  <hr class="my-4" />
                  <Link to={"/forgot-password"}>Olvidaste tu clave?</Link><br />
                  <Link to={"/signup"}>Aun no tienes una cuenta? Registrate</Link>
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