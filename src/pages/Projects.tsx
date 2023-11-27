
const Projects = () => {
  return (
    <div>
      <p className="text-white clash-display text-[35px] ml-[40px] pt-[100px] md:ml-[200px]">
        Projects
      </p>

      <p className="text-[#fff] source-code text-[15px] ml-[40px] mb-[8px] mr-[40px] pt-[50px] md:ml-[200px] md:mr-[200px]">Own Projects</p>
      <div className="flex mb-[20px]">
        <a href="https://github.com/zihaarn/chat-bot" className="text-[#aaa] source-code text-underline-offset underline transition-[1s] tap-highlight cursor-pointer hover:text-[white] text-[15px] ml-[40px] md:ml-[200px]">ChatBot</a>
        <p className="text-[#aaa] source-code text-[15px] mr-[40px] pl-[15px] md:mr-[200px]">- Basic implementation of a chatbot using Python. The chatbot can learn new questions and answers from user interactions and store them in a JSON file.</p>
      </div>

      <p className="text-[#fff] source-code text-[15px] ml-[40px] mb-[8px] mr-[40px] pt-[50px] md:ml-[200px] md:mr-[200px]">College Projects</p>
      <div className="flex">
        <a href="https://github.com/zihaarn/password-generator" className="text-[#aaa] source-code text-underline-offset underline transition-[1s] tap-highlight cursor-pointer hover:text-[white] text-[15px] ml-[40px] md:ml-[200px]">PG System</a>
        <p className="text-[#aaa] source-code text-[15px] mr-[40px] pl-[15px] md:mr-[200px]">- A random password generator using python.</p>
      </div>

    </div>
  )
}

export default Projects
