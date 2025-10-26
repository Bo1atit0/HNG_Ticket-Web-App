import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../AuthForm";

function Signup() {
  const navigate = useNavigate();

  // Handles signup submission
  const handleSignup = ({ name, email, password }) => {
    // Save user data to localStorage
    const newUser = { name, email, password };
    localStorage.setItem("ticketapp_user", JSON.stringify(newUser));

    alert("Account created successfully! You can now log in.");

    // Redirect to login page
    navigate("/auth/login");
  };

  return (
    <div>
      <AuthForm type="Sign Up" onSubmit={handleSignup} />

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
