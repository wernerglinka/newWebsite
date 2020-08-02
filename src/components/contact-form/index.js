import React from "react";
import { FormWrapper } from "./contact-form-styles";

const ContactForm = () => (
  <FormWrapper>
    <h2>Contact</h2>
    <form action="/" method="post" name="contact" netlify netlify-honeypot="bot-field">
      <input type="text" id="inputName" name="name" placeholder="Name" required />
      <input type="text" id="inputEmail" name="email" placeholder="Email Address" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea id="textarea" name="comment" placeholder="Message" required />
      <p className="hidden">
        <label htmlFor="bot-field">
          Bot field: <input name="bot-field" />
        </label>
      </p>
      <div id="result" />
      <div data-netlify-recaptcha />
      <input type="submit" value="SUBMIT" className="styler_bg_color" />
    </form>
  </FormWrapper>
);

export default ContactForm;
