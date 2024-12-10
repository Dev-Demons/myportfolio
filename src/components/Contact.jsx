import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../HigherOrderComponents';
import { slideIn } from '../utils/motion';
import { email, skype, whatsapp, telegram } from "../assets";
import toast from 'react-hot-toast'


const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: [value] })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_izr201l", "template_9rnbq7r", {
      from_name: form.name,
      to_name: 'Jay Gangkun',
      from_email: form.email,
      to_email: "youngboys.dev@gmail.com",
      message: form.message
    }, "Zx_8JceEptHvtDQqS").then(() => {
      setLoading(false);
      toast.success("A humble thanks for reaching me out. I will respond to you as soon as possible.");
      setForm({
        name: '',
        email: '',
        message: '',
      }, (error) => {
        setLoading(false);
        toast.error("Sorry!! Something went wrong!!");
      })
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.heroSubText}>Get in Touch</p>
        <h3 className={styles.heroHeadText}>Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name.</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="Whats's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email.</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Whats's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message.</span>
            <textarea type="text-area" rows="7" name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading ? 'Sending...' : 'Send'}</button>

          <label className="flex items-center" align="center">
            <img src={telegram} className={'w-[30px] h-[30px] mr-2'} />
            <span className="text-white font-medium">Telegram: &nbsp;&nbsp;<a href="https://t.me/youngboy_dev" target="_blank">@youngboy_dev<span></span></a></span>
          </label>
          <label className="flex items-center" align="center">
            <img src={skype} className={'w-[35px] h-[35px] mr-2'} />
            <span className="text-white font-medium cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText('live:.cid.4b9d812105bd5f47');
              }}>Skype: &nbsp;&nbsp; live:.cid.8ccbbc06b93eb059</span>
            <span></span>
          </label>
          <label className="flex items-center" align="center">
            <img src={email} className={'w-[35px] h-[35px] mr-2'} />
            <span className="text-white font-medium"
              onClick={() => {
                navigator.clipboard.writeText('youngboys.dev@gmail.com');
              }}>Email: &nbsp;&nbsp;<a href="mailto:youngboys.dev@gmail.com" target="_blank">youngboys.dev@gmail.com</a></span>
          </label>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>



    </div>
  )
}

export default SectionWrapper(Contact, "contact");