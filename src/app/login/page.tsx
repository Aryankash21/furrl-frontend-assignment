"use client";

export default function Page() {
  return (
    <div className="login">
      <div className="login-container">
        <img src="/logo.png" alt="Logo" className="login-logo" />
        <h1>Welcome Back</h1>
        <div className="inputs">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn-login">Sign In</button>
      </div>
    </div>
  );
}
