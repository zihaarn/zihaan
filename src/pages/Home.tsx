import { useNavigate } from 'react-router-dom'
import { SetStateAction, useState } from 'react';
import '../App.css'
import '../index.css'
{/*home*/}
const Home = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  console.log ("Subscription successful!")

  const handleSubscribe = () => {
    setEmail('');
  };

  return (
    <div>
      <p className="text-white clash-display text-[35px] ml-[40px] pt-[100px] md:ml-[200px]">
        Abdulla Zihaan
      </p>

      <p className="text-[#aaa] source-code text-[15px] ml-[40px] mr-[40px] pt-[50px] md:ml-[200px] md:mr-[200px]">
        Hello! <br />
        I am a passionate Full Stack Software Developer besed in the serene beauty of the Maldives. <br />
        Specializing in crafting intricate backends and venturing into the realms of machine learning. <br />
        This is my digital haven, a personal website where I showcase a symphony of projects, experiments, and researches, inviting visitors to explore the fusion of code and creativity that defines my digital journey.
      </p>

      <div className='flex'>
        <a href="https://github.com/zihaarn" className="text-[#aaa] source-code text-underline-offset underline transition-[1s] tap-highlight cursor-pointer hover:text-[white] text-[15px] ml-[40px] md:ml-[200px]">source</a>
        <a onClick={() => navigate('/projects')} className="text-[#aaa] source-code text-underline-offset underline transition-[1s] tap-highlight cursor-pointer hover:text-[white] text-[15px] ml-[40px] md:ml-[40px]">projects</a>
      </div>

      <div className="flex justify-center items-center mt-[70px] mb-[70px]">
        <div className="bg-[#343434] h-[2.5px] w-[80px] rounded-[50px]">
        </div>
      </div>

      <a href="https://twitter.com/zihaarn" className="text-[#aaa] source-code text-underline-offset underline transition-[1s] tap-highlight cursor-pointer hover:text-[white] text-[15px] ml-[40px] md:ml-[200px]">Twitter</a>

      <p className='text-[#aaa] source-code text-[15px] ml-[40px] mr-[40px] mt-[30px] md:ml-[200px] md:mr-[200px]'>
        Subscribe to my newsletter to <br />receive the latest updates directly to your inbox.
      </p>

      <div className='md:ml-[200px] mt-[15px] mb-[15px] flex items-center justify-center md:justify-start'>
        <input type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder='your@domain.com'
        className='bg-[#151515] text-white outline-none border-none pl-[15px] pt-[10px] pb-[10px] w-[300px] h-[40px] md:w-[300px] rounded-[5px] placeholder-[#494949] text-[14px] source-code'/>
      </div>
      <div className='mb-[50px] flex items-center justify-center md:justify-start md:ml-[200px]'>
        <button 
        onClick={handleSubscribe}
        className='bg-white text-black pl-[15px] pr-[15px] rounded-[5px] h-[40px] w-[300px] source-code text-[15px] tap-highlight transition-[1s] hover:bg-[#aaa]'>Subscribe</button>
      </div>

      <p className='ml-[40px] md:ml-[200px] text-[#343434] mb-[100px]'>
        2023 © Zihaan
      </p>
    </div>
  )
}

export default Home
