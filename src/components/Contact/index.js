import React from "react";
import emailjs from "emailjs-com";
import {
  ContactContainer,
  ContactWrap,
  ContactRow,
  Column1,
  Heading,
  Column2,
  ImgWrap,
  Img,
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactMessage,
  ContactBtn,
  Subtitle,
  FormContainer,
} from "./ContactElements";

import img from "../../images/contact.svg";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_send_email",
        "template_fjxckyo",
        e.target,
        "user_UTTTvD29MQhK9PZPZAreQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <ContactContainer id="contact">
      <ContactWrap>
        <ContactRow>
          <Column1>
            <Heading>Contact</Heading>
            <Subtitle>
              If you would like any additional information. Please don't
              hesitate to contact us.
            </Subtitle>
            <ContactForm onSubmit={sendEmail}>
              <ContactInput type="hidden" name="contact_number" />
              <FormContainer>
                <ContactLabel>Email</ContactLabel>
                <ContactInput type="email" name="user_email" />
              </FormContainer>
              <FormContainer>
                <ContactLabel>Name</ContactLabel>
                <ContactInput type="text" name="user_name" />
              </FormContainer>
              <FormContainer>
                <ContactLabel>From</ContactLabel>
                <ContactInput type="text" name="user_from" />
              </FormContainer>
              <ContactLabel>Message</ContactLabel>
              <ContactMessage name="message" /> <br />
              <ContactBtn type="submit" value="Send email" />
            </ContactForm>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="test img 1" />
            </ImgWrap>
          </Column2>
        </ContactRow>
      </ContactWrap>
    </ContactContainer>
  );
};

export default Contact;
