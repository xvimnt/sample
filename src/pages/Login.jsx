import React, {useEffect} from "react";
import { Wrapper } from "../style/components"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// Amplify Auth
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
// Data
import userSlice from "../data/userSlice"

export default function Login() {

  const state = useSelector(state => state)
  const { user } = state
  const { loginUser } = userSlice.actions
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    console.log(user)
    // redirect authenticated user to profile screen
    if (user.userInfo.username) navigate('/home')
  }, [navigate, user.userInfo])

  return (
    <>
      <TopMainNavbar />
      <Wrapper className="mt-5 mb-3">
        <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
          {({ signOut, user }) => {
            return (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}}
        </Authenticator>
      </Wrapper>
      <Footer />
    </>
  )
}