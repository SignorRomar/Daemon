import Layout from "components/Layout";
import "./Pages.css";

const HomePage = () => {
  return (
    <Layout title=" Home" content="Home page">
      <div className="intro">
        <div className="summary">
          <h1>
            {" "}
            Welcome to <span> Daemon: </span>Your Secure Online Hub{" "}
          </h1>
          <p>
            Your Secure Online Hub Explore Daemon, a user-friendly website that
            prioritizes your security while maintaining simplicity. Our platform
            uses advanced technologies behind the scenes to ensure a smooth and
            secure user experience.
          </p>
        </div>
        <div className="text-container">
          <br />{" "}
          <h3>
            Why <span>Daemon?</span>
          </h3>
          <ul>
            <li>
              <span> Effortless Sign-In: </span>Enjoy a hassle-free sign-in
              process that keeps your data safe and secure.
            </li>
            <li>
              <span>Modern Authentication:</span> Daemon utilizes the latest
              authentication methods to protect your account without making
              things complicated for you.
            </li>
            <li>
              <span> Seamless Navigation:</span> Focus on what matters most—your
              content. Our intuitive design lets you explore without any
              unnecessary hurdles.
            </li>
            <p>
              Discover the ease of <span>Daemon.</span> Your secure online hub
              awaits.
            </p>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
