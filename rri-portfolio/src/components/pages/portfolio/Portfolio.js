import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { FiGlobe } from "react-icons/fi";

export default function Portfolio() {
  return (
    <div>
      <div class="page-container">
        <p class="page-content">
          These are some projects i've worked on recently.
        </p>
      </div>
      <div class="row">
        <div class="column">
          <div class="card cocktail-card">
            <h3 class="card-head">Cocktail App</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/r-r-i/Project-1-Cheap-Date" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://nessjade96.github.io/cheap-date/index.html" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card workout-card">
            <h3 class="card-head">Workout App</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/r-r-i/do-you-lift" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://salty-ridge-96244.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card text-card">
            <h3 class="card-head">Text Editor</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/r-r-i/PWA-Text-Editor" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://quiet-tor-93485.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card blog-card">
            <h3 class="card-head">Tech Blog</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/r-r-i/MVC-Blog" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://agile-bastion-55945.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="card password-card">
            <h3 class="card-head">Random Password</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/r-r-i/Random-Password-Generator" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://r-r-i.github.io/Random-Password-Generator/" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card weather-card">
            <h3 class="card-head">Weather Dash</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/r-r-i/Weather-Dashboard" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://r-r-i.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
