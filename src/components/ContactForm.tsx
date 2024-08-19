import { FormEvent, useContext, useRef, useState } from "react";

import { ThemeContext } from "../store/ThemeContextProvider";

import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Element } from 'react-scroll';

const ContactForm: React.FC = ()=>{
    
    const formRef = useRef<HTMLFormElement>(null);
    const[formSubmiting,setIsFormSubmitting] = useState<boolean>(false);
    const{ theme } = useContext(ThemeContext);

    const handleFormSubmit = (e:FormEvent)=>{
        e.preventDefault();

        if(formRef.current){
            setIsFormSubmitting(true);
            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,formRef.current,{
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
                limitRate:{
                    id: 'portfolioContactForm'+Math.floor(Math.random()*1000),
                    throttle: 40 * 60 * 1000
                }
            })
            .then(()=>{
                toast.success('Message sent 👍',{
                    pauseOnHover: false,
                    autoClose: 3500,
                    closeOnClick: true,
                    theme
                })
            })
            .catch((err)=>{
                toast.error('An error occured 😢',{
                    pauseOnHover: false,
                    autoClose: 3500,
                    closeOnClick: true,
                    theme
                })
                err;
            })
            .finally(()=>{
                setIsFormSubmitting(false);
                formRef.current?.reset();
            })
        }
    }

    return (
        <Element name="contact-form">
            <h1 className="text-center text-2xl mb-6">Contact Me</h1>
            <p className="text-center">You can contact me directly at <a className="underline" href="mailto:guleriaanurag84@gmail.com">guleriaanurag84@gmail.com</a> or through this form
            </p>
            <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col pt-[3%] pb-[4%] gap-4 items-center w-[40%] max-lg:w-[80%] mx-auto">
                <input type="text" name="user_name" placeholder="Your name..." className="py-2 px-4 w-full rounded-lg border border-black text-black outline-none"/>
                <input type="email" name="user_email" placeholder="Your email..." className="py-2 px-4 rounded-lg w-full border border-black text-black outline-none"/>
                <textarea name="message" id="" cols={30} rows={10} placeholder="Message..." className="py-2 px-4 w-full border border-black rounded-lg text-black outline-none"></textarea>
                <button disabled={formSubmiting} className="py-2 px-4 text-lg w-auto rounded-lg border transition-colors duration-300 hover:bg-stone-200 border-black text-blue-600 dark:bg-stone-500 dark:text-cyan-500 dark:hover:bg-stone-600">{formSubmiting === true ? 'Submitting' : 'Send Message'}</button>
            </form>
        </Element>
    );
}

export default ContactForm;