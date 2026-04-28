'use client' ;
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleRegisterFunc = (data) => {};
  return (
    <div className="flex justify-center items-center bg-pink-50 min-h-screen font-sans">
      <div className="bg-white p-10 rounded-sm shadow-sm w-full max-w-md my-10">
        <h2 className="text-2xl font-bold text-center text-slate-700 mb-8 border-b pb-6">
          Register your account
        </h2>

        <form onSubmit={handleSubmit(handleRegisterFunc)}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-pink-50 border-none rounded focus:ring-2 focus:ring-gray-300 outline-none text-sm"
                placeholder="Enter your name"
                {...register("name", { required: "Name field is required" })}
              />
              {errors.name && <p className="text-red-500 font-mono">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                type="text"
                className="w-full p-3 bg-pink-50 border-none rounded focus:ring-2 focus:ring-gray-300 outline-none text-sm"
                placeholder="Enter your photo URL"
                {...register("name", { required: "URL field is required" })}
              />
              {errors.photo && <p className="text-red-500 font-mono">{errors.photo.message}</p>}
            </div>

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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;