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
      <div>
        <h1 class="page-content">Proficiencies</h1>
        <div  class="pro-container">
          <ul class="pro-list">
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>AutoDesk Maya</li>
            <li>Cinema4D</li>
            <li>DaVinci Resolve</li>
          </ul>
          <ul class="pro-list">
            <li>HTML</li>
            <li>C</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
