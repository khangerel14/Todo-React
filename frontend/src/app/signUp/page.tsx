"use client";
import Background from "@/images/Background";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = "http://localhost:8000/auth/signUp";

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const user = await axios.post(BASE_URL, {
        username: username,
        password: password,
      });
      console.log(user);
      if ( user ) {
        setTimeout(() => {
          router.push("/dashboard")
        }, 3000)
      }
    } catch (error) {
      setError("Invalid request");
      console.log(error, "error");
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col justify-center items-center w-2/3 gap-36">
        <h1 className="text-green-800 text-8xl">Hello Dear</h1>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Username"
            className="border-b p-3 hover:border w-96"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b p-3 hover:border w-96"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="flex justify-center w-36 text-white p-2 bg-green-800 rounded-md"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex items-center h-screen w-1/3">
        <Background />
      </div>
    </div>
  );
};

export default Page;
