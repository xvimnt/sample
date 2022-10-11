import React, { useState } from "react";
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <>
      <TopMainNavbar />
      <Wrapper>
        <section class="vh-100 gradient-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" >
                  <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                      <h2 class="fw-bold mb-2">SignUp</h2>
                      <p class="text-white-50 mb-5">Please enter your login and password!</p>

                      <div class="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" class="form-control form-control-lg" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label class="form-label" for="typeEmailX">Email</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <label class="form-label" for="typePasswordX">Password</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <label class="form-label" for="typePasswordX">Confirm Password</label>
                      </div>

                      <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                      <button class="btn btn-outline-light btn-lg px-5" type="submit">SignUp</button>

                      <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="text-white"><FontAwesomeIcon icon={faGoogle} /></a>
                      </div>

                    </div>

                    <div>
                      <p class="mb-0">Already have an account? <Link to="/login" class="text-white-50 fw-bold">Login</Link>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      <Footer />
    </>
  )
}