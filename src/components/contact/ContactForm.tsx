import  { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FormContainer } from './Contact.styled';
import { StyleButton } from '../styles/Header.style';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_lcc0pg9', 'template_3amweqa', form.current, 'v10rsF42vEO4HbXtS')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
        
        <input type="text" name="user_name" placeholder='Name'/>
       
        <input type="email" name="user_email" placeholder='Email' />
        
        <textarea name="message" rows={11} cols={40} placeholder='Send me a message...' />
      
        <StyleButton as='button' type='submit' value='send'>SEND MESSAGE</StyleButton>
        </form>
    </FormContainer>

  );
};
