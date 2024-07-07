import  { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@priyanshu-medium/medium/dist";
import axios from "axios";
import { BACKEND_URL } from "../confing";

export const Auth = ({ type }: { type: "Signup" | "Signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "Signup" ? "signup" : "signin"}`,
        postInputs
      );
      const data = response.data;
      localStorage.setItem("token", data.jwt);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      alert("Error while signing up")
    }
  }
  
  
  return (
    <div className=" flex justify-center h-screen">
      <div className="flex flex-col justify-center ">
        <div className="px-14">
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-400">
            {type === "Signup"
              ? "Already have an account?"
              : "Don't have an account?"}

            <Link
              to={type === "Signup" ? "/signin" : "/signup"}
              className="pl-2 hover:underline"
            >
              {type === "Signup" ? "Signin" : "Signup"}
            </Link>
          </div>
        </div>
        <div className="mt-4 ">
          {type === "Signup" ? (
            <LabelledInput
              type="text"
              label="Name"
              placeholder="Enter your name"
              onChange={(e) =>
                setPostInputs((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          ) : null}
          <LabelledInput
            type="email"
            label="Email"
            placeholder="user@gmail.com"
            onChange={(e) =>
              setPostInputs((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <LabelledInput
            type="password"
            label="Password"
            placeholder="******"
            onChange={(e) =>
              setPostInputs((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />

          <button
            onClick={sendRequest}
            type="button"
            className=" mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "Signup" ? "Sign up" : "Sing in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
