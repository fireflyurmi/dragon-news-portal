'use client' ;
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleLoginFunc = (data) => {};
  return (
    <div className="flex justify-center items-center bg-pink-50 min-h-screen font-sans">
      <div className="bg-white p-10 rounded-sm shadow-sm w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-700 mb-8 border-b pb-6">
          Login your account
        </h2>

        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                className="w-full p-3 bg-pink-50 border-none rounded focus:ring-2 focus:ring-gray-300 outline-none text-sm"
                placeholder="Enter your email address"
                {...register("email", { required: "Email field is required" })}
              />
              {errors.email && <p className="text-red-500 font-mono">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 bg-pink-50 border-none rounded focus:ring-2 focus:ring-gray-300 outline-none text-sm"
                placeholder="Enter your password"
                {...register("password", { required: "Password field is required" })}
              />
              {errors.password && <p className="text-red-500 font-mono">{errors.password.message}</p>}
            </div>

            <button className="w-full bg-[#404040] hover:bg-black text-white font-semibold py-3 rounded transition duration-200 mt-2">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-mono mt-3">Don&apos;t Have An Account ? <Link href={"/register"} className="text-red-500">Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
