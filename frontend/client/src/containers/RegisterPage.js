import { useState } from "react";
import Layout from "components/Layout";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "features/user";
import "./Pages.css";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const { registered, loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ first_name, last_name, email, password }));
  };

  if (registered) return <Navigate to="/login" />;

  return (
    <Layout title="Register" content="Register page">
      <div className="wrapper-register">
        <h1>Register for an Account</h1>
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={onChange}
              value={first_name}
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              className="form-control"
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={onChange}
              value={last_name}
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
              required
            />
          </div>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button className="btn btn-primary mt-4">Register</button>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;