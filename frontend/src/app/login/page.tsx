"use client";
import Background from "@/images/Background";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const BASE_URL = "http://localhost:8000/auth/logIn";

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(BASE_URL, { ...input });
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data === false) {
        alert("Username or Password is incorrect");
        return;
      }
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.response.data.msg);
    }
  };
  return (
    <div className="flex w-full justify-between h-full">
      <div className="flex flex-col justify-center w-2/3 items-center gap-36">
        <h1 className="text-green-800 text-8xl">Welcome Back</h1>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your Username"
            className="border-b p-3 hover:border w-96"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="border-b p-3 hover:border w-96"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {error && <p className="text-red-600 my-2">{error}</p>}
          <button
            className="flex justify-center w-36 text-white p-2 bg-green-800 rounded-md"
            onClick={submitHandler}
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex justify-center w-1/3 items-center h-screen">
        <Background />
      </div>
    </div>
  );
};

export default Login;
