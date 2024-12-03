import React, { Suspense, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message:''});
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form,[e.target.name]: e.target.value})
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    //console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID
      {
          from_name: form.name,
          to_name: "Test",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_TO_EMAIL,
          message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Public key
    )
    .then (() => {
      setIsLoading(false);
      // Show success alert and hide it
      setForm({name:'', email:'', message: ''});
    }).catch((error) =>{
      setIsLoading(false);
      console.log(error);
      // show error alert message
    })
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input 
            type="text"
            name="email"
            className="input"
            placeholder="email@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>
          <label className='text-black-500 font-semibold'>
            Your message
            <textarea 
            name="message"
            rows={4}
            className="textarea"
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>
          <button 
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov : 75,
          near: 0.5,
          far: 1000
        }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact