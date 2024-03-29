import React from 'react';
import './signup.css';

const App = () => {
  const login = () => {
    const logemail = document.getElementById('logemail').value;
    const logpass = document.getElementById('logpass').value;
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ logemail, logpass }),
    }).then((res) => {
      return res.json();
    }).then((data) => {
      if (data.success === true)
      {
        localStorage.setItem('USER', logemail);
        window.location.href='/';
      }
      else
      {
        alert(data.message);
      }
    });
  }

  const register = () => {
    const logname = document.getElementById('lognamer').value;
    const logemail = document.getElementById('logemailr').value;
    const logpass = document.getElementById('logpassr').value;
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ logname, logemail, logpass }),
    }).then((res) => {
      console.log(res);
      return res.json();
    }).then((data) => {
      if (data.success === true)
      {
        window.location.href='/';
      }
      else
      {
        alert(data.message);
      }
    });
  }


  return (
    <>
      <a href="/" className="logo">
        <img className="mandi" src="https://cdn.discordapp.com/attachments/1169346758636224614/1197881967497195600/WhatsApp_Image_2024-01-19_at_17.58.11_4acfc064-removebg-preview.png?ex=65bce184&is=65aa6c84&hm=91ca55bca32015b1e8e9c3d74ed4cb677d9b6d67f921d5366b6ea5f23ebab2c4&" alt="" />
      </a>

      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a onClick={login} className="btn mt-4">
                            submit
                          </a>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="lognamer"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemailr"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpassr"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a onClick={register} className="btn mt-4">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
