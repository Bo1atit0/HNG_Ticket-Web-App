import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../AuthForm";

function Login() {
  const navigate = useNavigate();

  // Handles login submission
  const handleLogin = ({ email, password }) => {
    const storedUser = JSON.parse(localStorage.getItem("ticketapp_user"));

    // Check if user exists and password matches
    if (
      !storedUser ||
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    // Save fake session token
    localStorage.setItem("ticketapp_session", "mock-session-token");

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div>
      <AuthForm type="login" onSubmit={handleLogin} />

      <p className="text-center mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
