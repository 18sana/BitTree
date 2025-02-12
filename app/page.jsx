"use client"
import generate from "./generate/page";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      {/* Home Section */}
      <section id="home" className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-20">
        <div className="flex justify-center flex-col ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl mt-[10vh]">Everything you</p>
          <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl">simple link in bio.</p>
          <p className="text-yellow-300 text-3xl my-4">
            Join 50M+ people using Linktree for their link in bio.
            One link to help you share everything you create, curate, and sell from your social media profiles.
          </p>
          <div className="input flex gap-5">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-2 py-2 focus:outline-green-800 rounded-md text-xl"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={createTree}
              className="bg-pink-300 rounded-full px-4 py-4 text-xl font-semibold"
            >
              Claim Your Linktree
            </button>
          </div>
        </div>
        <div className="max-w-[600px] w-full flex items-center justify-center flex-col mr-[10vw]">
          <img className="max-w-[800px] w-full mt-[10vw] mb-[10vh] ml-[30vh]" src="/home.png" alt="homepage image" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#e8bfe8] min-h-[100vh] grid grid-cols-2 pt-20">
        <div className="flex items-center justify-center flex-col ml-[10vw]">
          <img className="max-w-[600px] w-full mt-[22vh] mb-[10vh] rounded-lg shadow-lg" src="/feature.png" alt="Features illustration" />
        </div>
        <div className="flex justify-center flex-col mr-[10vw] gap-3">
          <p className="text-[#780016] font-bold text-6xl mt-[10vh]">Powerful Features</p>
          <p className="text-[#780016] font-bold text-6xl">that simplify</p>
          <p className="text-[#780016] font-bold text-6xl">your link sharing.</p>
          <p className="text-[#780016] text-2xl my-4">
            Customize your Linktree to match your brand.
            Integrate with top apps and track performance
            with advanced analytics. Share everything from
            one simple link.
          </p>
          <ul className="list-disc text-green-900 text-xl ml-5">
            <li className="text-[#780016]">Customizable Themes</li>
            <li className="text-[#780016]">Advanced Analytics</li>
            <li className="text-[#780016]">Seamless Integrations</li>
            <li className="text-[#780016]">Monetization Options</li>
          </ul>
          <button className="bg-[#780016] rounded-full px-4 py-4 text-xl text-white font-semibold">See more</button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#bfe8d6] min-h-[100vh] grid grid-cols-2 pt-20">
        <div className="flex justify-center flex-col ml-[10vw] gap-5">
          <p className="text-[#061492] font-bold text-6xl mt-[10vh]">Flexible Pricing</p>
          <p className="text-[#061492] font-bold text-6xl">for Everyone.</p>
          <p className="text-[#061492]  text-2xl my-4">
            Choose a plan that fits your needs. Start free and
            upgrade anytime to unlock advanced features.
          </p>
          <div className="flex flex-col gap-3">
            <div className="border-2 border-[#061492] p-5 rounded-lg">
              <h3 className="text-3xl font-bold text-[#061492] ">Free Plan</h3>
              <p className="text-xl text-[#061492] mt-2">Perfect for individuals starting out.</p>
              <p className="text-2xl font-bold text-[#061492] mt-4">$0/month</p>
            </div>
            <div className="border-2 border-[#061492]  p-5 rounded-lg bg-[#061492]  text-white">
              <h3 className="text-3xl font-bold">Pro Plan</h3>
              <p className="text-xl mt-2">Ideal for creators and influencers.</p>
              <p className="text-2xl font-bold mt-4">$9/month</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <img
            className="max-w-[600px] w-full mt-[20vh] mb-[10vh] rounded-lg shadow-lg transition-transform transform hover:scale-105"
            src="/pricing.png"
            alt="Pricing illustration"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-[#780016] min-h-[100vh] grid grid-cols-2 pt-20">
        <div className="flex items-center justify-center flex-col ml-[10vw]">
          <img
            className="max-w-[600px] w-full h-auto rounded-xl shadow-xl mt-[20vh] mb-[10vh] transition-transform transform hover:scale-105"
            src="/about.png"
            alt="About us illustration"
          />
        </div>
        <div className="flex justify-center flex-col mr-[10vw] gap-5">
          <p className="text-pink-400 font-bold text-6xl mt-[10vh]">About Us</p>
          <p className="text-pink-400 font-bold text-6xl">Our Story & Mission</p>
          <p className="text-pink-400 text-2xl my-4">
            At Linktree, we're passionate about helping creators, businesses, and influencers
            connect their audience with everything they do. Our mission is to simplify link
            sharing, making it easier for you to showcase your work and grow your brand.
          </p>
          <p className="text-pink-400 text-2xl">
            Founded in 2016, we've grown into a global platform supporting over 50 million users.
            Whether you're a small business, a content creator, or a large enterprise, Linktree
            is designed to help you succeed.
          </p>
          <div className="flex gap-5 mt-5">
            <div className="border-4 border-pink-700 p-4 rounded-lg bg-white shadow-md">
              <h4 className="text-xl font-bold text-bg-slate-400">Innovation</h4>
              <p className="text-bg-slate-400">Constantly evolving to meet your needs.</p>
            </div>
            <div className="border-4 border-pink-700 p-4 rounded-lg bg-white shadow-md">
              <h4 className="text-xl font-bold text-bg-slate-400">Community</h4>
              <p className="text-bg-slate-400">Empowering creators and businesses worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
