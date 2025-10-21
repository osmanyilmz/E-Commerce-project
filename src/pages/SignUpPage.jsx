import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import { useHistory } from "react-router-dom";

export default function SignUpPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedRole = watch("role_id");
  const password = watch("password");

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
      })
      .catch(() => {
        setErrorMsg("Could not load roles!");
      });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const formattedData =
        Number(data.role_id) === 3
          ? {
              name: data.name,
              email: data.email,
              password: data.password,
              role_id: data.role_id,
              store: {
                name: data.store_name,
                phone: data.store_phone,
                tax_no: data.tax_no,
                bank_account: data.bank_account,
              },
            }
          : {
              name: data.name,
              email: data.email,
              password: data.password,
              role_id: data.role_id,
            };

      await axiosInstance.post("/signup", formattedData);

      setSuccessMsg(
        "You need to click link in email to activate your account!"
      );

      setTimeout(() => {
        history.goBack();
      }, 3000);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block font-medium">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min 3 characters" },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email</label>
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
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
                message:
                  "Min 8 chars with upper, lower, number and special char",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium">Role</label>
          <select
            {...register("role_id")}
            className="w-full border p-2 rounded"
          >
            {roles.map((role, index) => (
              <option key={role.id} value={role.id} selected={index === 2}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {Number(selectedRole) === 3 && (
          <>
            <div>
              <label className="block font-medium">Store Name</label>
              <input
                {...register("store_name", {
                  required: "Store name is required",
                  minLength: { value: 3, message: "Min 3 characters" },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.store_name && (
                <p className="text-red-500 text-sm">
                  {errors.store_name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Store Phone</label>
              <input
                {...register("store_phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: "Invalid Turkish phone number",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.store_phone && (
                <p className="text-red-500 text-sm">
                  {errors.store_phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Tax ID</label>
              <input
                {...register("tax_no", {
                  required: "Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Invalid format: TXXXXVXXXXXX",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.tax_no && (
                <p className="text-red-500 text-sm">{errors.tax_no.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Bank Account (IBAN)</label>
              <input
                {...register("bank_account", {
                  required: "Bank account is required",
                  pattern: {
                    value: /^TR\d{2}\d{5}[0-9A-Z]{16}$/,
                    message: "Invalid IBAN format",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.bank_account && (
                <p className="text-red-500 text-sm">
                  {errors.bank_account.message}
                </p>
              )}
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#23A6F0] text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
        {successMsg && <p className="text-green-600 mt-2">{successMsg}</p>}
      </form>
    </div>
  );
}
