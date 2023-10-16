import  { useRef, FormEvent,useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormContainer } from './Contact.styled';
import { StyleButton } from '../styles/Header.style';

export const ContactForm = () => {

  const [ nameVal ,setNameVal ] = useState<string>('')
  const [ emailVal ,setEmailVal ] = useState<string>('')
  const [ messageVal ,setMessageVal ] = useState<string>('')

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      setNameVal('')
      setEmailVal('')
      setMessageVal('')

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
        
        <input type="text" name="user_name" onChange={(e) => setNameVal(e.target.value)} value={nameVal} placeholder='Name hwllo test'/>
       
        <input type="email" name="user_email" onChange={(e) => setEmailVal(e.target.value)} value={emailVal} placeholder='Email' />
        
        <textarea name="message" rows={11} cols={40} onChange={(e) => setMessageVal(e.target.value)} value={messageVal} placeholder='Send me a message...' />
      
        <StyleButton as='button' type='submit' value='send'>SEND MESSAGE</StyleButton>
        </form>
    </FormContainer>

  );
};
