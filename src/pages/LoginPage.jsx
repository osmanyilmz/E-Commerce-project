import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/authActions";
import { useState } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const user = useSelector((state) => state.client.user);

  const onSubmit = async (data) => {
    const { email, password, remember } = data;
    const result = await dispatch(loginUser(email, password, remember));

    if (result.success) {
      history.push("/");
    } else {
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("remember")} />
          <label>Remember Me</label>
        </div>

        <button
          type="submit"
          className="bg-[#23A6F0] text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => history.push("/signup")}
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}
