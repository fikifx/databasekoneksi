import './App.css';

function App() {
  return (
    <div className="parent clearfix">
  <div className="bg-illustration">
    <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo" />
    <div className="burger-btn">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div className="login">
    <div className="container">
      <h1>Login to access to<br />your account</h1>
      <div className="login-form">
        <form action>
          <input type="email" placeholder="E-mail Address" />
          <input type="password" placeholder="Password" />
          <div className="remember-form">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className="forget-pass">
            <a href="#">Forgot Password ?</a>
          </div>
          <button type="submit">LOG-IN</button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
