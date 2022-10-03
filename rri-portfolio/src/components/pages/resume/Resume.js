import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import dlResume from '../resume/resume.txt'

export default function Resume() {
  return (
    <div>
      <div class="page-container">
        <p class="page-content">
          Download my resume below.
        </p>
        <a class="resume-download"  href={dlResume} download="Resume"><AiOutlineDownload /></a>
      </div>
    </div>
  );
}
