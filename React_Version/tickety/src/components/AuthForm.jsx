import { useForm } from "react-hook-form";
function AuthForm({ type, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {type === "login" ? "Login to Tickety" : "Create an Account"}
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {type === "Sign Up" && (
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("Name", { required: "Name is required" })}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.Name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Name.message}
                </p>
              )}
            </div>
          )}
          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters",
                },
              })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default AuthForm;
