import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from "./Link";

function CardIconFooter() {
  return (
    <footer className="flex flex-row justify-evenly text-indigo-700 mx-auto my-6 px-12">
      <Link to="#">
        <FaGithub />
      </Link>
      <Link to="#">
        <FaLinkedin />
      </Link>
      <Link to="#">
        <RiInstagramFill />
      </Link>
      <Link to="#">
        <FaXTwitter />
      </Link>
    </footer>
  );
}

export default CardIconFooter;
