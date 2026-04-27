import Image from "next/image";
import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimmingimg from "@/assets/swimming.png";
import classimg from "@/assets/class.png";
import playgroundimg from "@/assets/playground.png";


const RightSideBar = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-2xl">Login With</h2>

        <div className="flex flex-col gap-3 mt-4">
          <button className="btn btn-outline btn-info">
            <FaGoogle />
            Login with Google
          </button>

          <button className="btn btn-outline btn-success">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-500">Find Us On</h2>

        <div className="flex flex-col gap-3 mt-5">
          <button className="btn btn-outline btn-success">
            <FaFacebookF />
            Facebook
          </button>

          <button className="btn btn-outline btn-info">
            <FaTwitter />
            Twitter
          </button>

          <button className="btn btn-outline btn-error">
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-500 mb-3">
          Q-Zone
        </h2>

        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          <div className="bg-white p-2 rounded shadow">
            <Image
              src={swimmingimg}
              width={500}
              height={300}
              alt="Swimming"
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center mt-2 text-sm">Swimming</p>
          </div>

          <div className="bg-white p-2 rounded shadow">
            <Image
              src={classimg}
              width={500}
              height={300}
              alt="Class"
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center mt-2 text-sm">Class</p>
          </div>

          <div className="bg-white p-2 rounded shadow">
            <Image
              src={playgroundimg}
              width={500}
              height={300}
              alt="Playground"
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center mt-2 text-sm">
              Play Ground
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
