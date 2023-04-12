import React from 'react';
import { Container } from 'react-bootstrap';
import "./SignUp.css";

const SignUp = () => {
  return (
   <>
   <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <input className='form-control' type="text" name="name" placeholder="Name" />
                <input className='form-control' type="email" name="email" placeholder="Email" />
                <input className='form-control'
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <input className='form-control'
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
   </>
  );
};

export default SignUp;