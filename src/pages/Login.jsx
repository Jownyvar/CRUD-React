const Login = () => {
  return (
    <>
      <div className="card">
        <form action="">
          <p>Log In</p>
          <input type="text" id="email" placeholder="john.doe@example.com" />
          <br />
          <input type="Password" id="password" placeholder="*****" />
          <br />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
