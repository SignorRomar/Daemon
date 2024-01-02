import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "components/Layout";
import "./Pages.css";

const DashboardPage = () => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  if (!isAuthenticated && !loading && user === null)
    return <Navigate to="/login" />;

  return (
    <Layout title="Dashboard" content="Dashboard page">
      {loading || user === null ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="user">
          <h1 className="mb-5">Dashboard</h1>
          <p>
            You are now securely logged into <span>Daemon</span>
          </p>
          <ul>
            <li class>
              {" "}
              Welcome, {user.first_name} {user.last_name}{" "}
            </li>{" "}
            <br />
            <li> User email: {user.email}</li>
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default DashboardPage;
