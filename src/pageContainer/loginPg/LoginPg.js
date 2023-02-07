import NavBar from "../../Components/navbar/NavBar";
import "./loginPg.css";
const LoginPg = () => {
  return (
    <div className="loginPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div class="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div class="page-content">
          <div class="login-Modal">
            <div class="modal-container">
              <div class="modal-title">
                <p class="fw-bold fs-L">Login</p>
              </div>
              <div class="form-input">
                <div class="input-details">
                  <label class="input-label" for="input-email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jhondoe@gmail.com"
                    class="input-space full-form input-email"
                    id="input-email"
                    required
                  />
                  <label class="input-label" for="input-pass">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="1234567890"
                    maxlength="10"
                    class="input-space full-form input-pass"
                    id="input-pass"
                    required
                  />
                </div>
                <div class="form-utils">
                  <div class="util-input">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember Me</label>
                  </div>
                  <button class="btn btn-link">Forgot Password?</button>
                </div>
              </div>
              <div class="modal-btn">
                <button class="btn btn-primary">Login</button>
                <button
                  class="btn btn-link"
                  onclick="window.location.href='/components/signupPg/index.html'"
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>

          {/* <!-- ................PAGE CONTENT ............................... --> */}
          {/* <!-- ................FOOTER ............................... --> */}

          {/* <!-- ................FOOTER ............................... --> */}
        </div>
        {/* <!-- ................BASE CONTAINER............. --> */}
      </div>
    </div>
  );
};
export default LoginPg;
