import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DribbbleIcon from "@mui/icons-material/LinkedIn";


const Footer = () => {

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center">
          React
        </h1>
        <p className="py-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          accusamus culpa tempore odio perferendis voluptate.
        </p>
        <div className="flex justify-between md:w-[100%] my-6 cursor-pointer">
          <a href="https://www.facebook.com">
            <FacebookSharpIcon size={30} />
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon size={30} />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon size={30} />
          </a>
          <a href="https://www.github.com">
            <GitHubIcon size={30} />
          </a>
          <a href="https://www.dribbble.com">
            <DribbbleIcon size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between p-5">
        <div>
          <h6 className="font-medium text-gray-200 cursor-pointer underline hover:text-[#00df9a]">
            Solutions
          </h6>
          <ul>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Anakytics</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-200 cursor-pointer underline hover:text-[#00df9a]">
            Support
          </h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-200 cursor-pointer underline hover:text-[#00df9a]">
            Company
          </h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-200 cursor-pointer underline hover:text-[#00df9a]">
            Legal
          </h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
