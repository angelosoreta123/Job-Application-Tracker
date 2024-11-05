import { Link } from "react-router-dom";

const AccountForm = ({
  formTitle,
  buttonName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleSubmit,
  error,
}) => {
  return (
    <div className="p-4 shadow-md shadow-gray-300 rounded-md m-4 md:m-0 border-2 sm:p-10">
      <h1 className="text-white text-center font-semibold text-xl sm:text-3xl">
        {formTitle}
      </h1>
      <form className="mt-5 w-auto sm:w-80" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-white text-sm">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          required
          className="border rounded w-full py-2 px-3 mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formTitle !== "Forgot Password" && (
          <>
            <label htmlFor="password" className="text-white text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="border rounded w-full py-2 px-3 mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}
        {formTitle === "Reset Password" && (
          <>
            <label htmlFor="confirmPassword" className="text-white text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="border rounded w-full py-2 px-3 mb-6"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
        {error && <div className="text-red-500 mb-3">{error}</div>}

        <div className="flex justify-between items-center flex-col sm:flex-row gap-5">
          {formTitle === "Log In" ? (
            <>
              <button
                type="submit"
                className="bg-white hover:bg-slate-400 text-black font-bold py-2 px-4 rounded-full w-40 focus:outline-none focus:shadow-outline"
              >
                {buttonName}
              </button>
              <h2 className="text-white text-sm">
                <Link to={"/forgot-password"}>Forgot Password?</Link>
              </h2>
            </>
          ) : (
            <button
              type="submit"
              className="bg-white hover:bg-slate-400 text-black font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            >
              {buttonName}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
