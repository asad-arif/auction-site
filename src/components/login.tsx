import { Link } from "react-router-dom";

const Login = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <form
        className="mx-auto flex flex-col gap-3 w-[50%] mt-5"
        onSubmit={submitHandler}
      >
        <h1 className="font-bold text-3xl">Login</h1>
        <input
          type="text"
          required
          placeholder="Enter email"
          className="border-2 border-green-500 p-2 rounded-md"
        />
        <input
          type="password"
          required
          className="border-2 border-green-500 p-2 rounded-md"
        />
        <Link to={""} className="self-end">
          Forget Password?
        </Link>
        <button className="p-3 bg-green-500 rounded-lg font-bold" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
