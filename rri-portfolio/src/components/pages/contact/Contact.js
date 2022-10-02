import React from 'react';

export default function Contact() {

  const handleMouseLeave = () => {
    const forms = document.getElementById('myField');
    if (forms.checkValidity()){
      return
    } else {
      document.getElementById("submitBtn").click();
    }
    
}

  return (
  <div>
      <div class="page-container">
        <p class="page-content">
          If you would like to contact me, you can fill out the form below and i'll get back to you.
        </p>
      </div>
      <section>
        <form id="myForm" class="contact-form" autocomplete="chrome-off off false">
          <input id="myField" onMouseLeave={() => handleMouseLeave()} autocomplete="chrome-off off false" class="form-color" type="text" required placeholder="First Name" name="First-Name"></input>
          <input id="myField" onMouseLeave={() => handleMouseLeave()} autocomplete="chrome-off" class="form-color" type="text" required placeholder="Last Name" name="Last-Name"></input>
          <input id="myField" onMouseLeave={() => handleMouseLeave()} autocomplete="chrome-off" class="form-color" type="email" required placeholder="email@" name="Email"></input>
          <textarea class="form-color" rows="6" required placeholder="Message"></textarea>
          <button type="reset">Reset</button>
          <button id="submitBtn" type="submit">Submit</button>
        </form>
    </section>
  </div>
  );
}
