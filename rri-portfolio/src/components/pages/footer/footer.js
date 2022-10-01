import React from 'react';
import { VscGithub } from "react-icons/vsc";
// import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"

export default function Footer() {
  return (
    <div>
      <div class="footer">
        <a class="icon" href="https://github.com/r-r-i" target="_blank" rel="noreferrer noopener">
            <VscGithub />
        </a>
        {/* <a class="icon" href="https://stackoverflow.com/users/19005519/r-r-i" target="_blank" rel="noreferrer noopener">
          <FaStackOverflow />
        </a> */}
      </div>
    </div>
  );
}
