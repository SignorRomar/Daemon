import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { resetRegistered, login } from "features/user";
import Layout from "components/Layout";
import "./Pages.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, registered } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (registered) dispatch(resetRegistered());
  }, [registered]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <Layout title="Login" content="Login page">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

      <div className="log">
        <div className="wrapper-login">
          <form className="mt-5" onSubmit={onSubmit}>
            <h1>Login</h1>
            <div className="form-group">
              <input
                className="form-control "
                type="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={email}
                required
              />
              <i class="bx bx-user-pin"></i>
            </div>
            <div className="form-group mt-5">
              <input
                className="form-control "
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={password}
                required
              />
              <i class="bx bx-lock-alt"></i>
            </div>
            {loading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button className="btn btn-primary mt-4">Login</button>
            )}
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="/register">
                  {" "}
                  <span>Register</span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
