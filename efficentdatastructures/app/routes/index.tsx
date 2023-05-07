import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Chatbox from "~/components/Chatbox";
import chaticon from "~/images/chaticon.png";
export default function Index() {
  // Google Analytics pageview count.

  useEffect(() =>{
    ReactGA.initialize("G-9F3RXX9YGW");
    ReactGA.send({hitType: "pageview", page: window.location.pathname})
  }, [])
  const [toggle, showchat] = useState(false);
  function chat(){
    showchat(!toggle);
    sessionStorage.setItem('questionNumber', '0');

}
  return(
    <div className="flex">
      
    <div className="ml-72 relative py-8 px-4">
      <h1 className="relative text-center text-sky-400 text-3xl h-12">Practicing Data Structures </h1>
      <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />
      <section id="About">
      <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">About the project.</h2>
      <p> The objective of this Honours project is to examine if exposure to real life examples for efficient uses of data structures and algorithms has an impact on ones ability to implement algorithms more efficiently to solve problems. The articles can be found on the left menu and a guide on how best to use them is available below.</p>
     
      </section>
      <section id="HowTo">
      <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Navigating the Articles.</h2>
      <p>Each article and topic is divided into multiple sections. 
        <ul className="list-decimal ml-4 px">
          <li><b>Short description</b>- A one line description of the topic</li>
          <li><b>Uses in everyday Life</b>- A list of common areas where you might see the data structure or technique in question be implemented in our surroundings. This should give you a great insight into just how prominent some of the most basic data structures we learn are.</li>
          <li><b>Coded Examples</b>- These are example questions solved using the topic discussed. You are encouraged to try and program them using the inbuilt IDE but answers along with an explanation are provided for you to review. It'll be immensely helpful for you to go through the answers and compare them to how you may have solved the same problem.</li>
          <li><b>Further Reading</b>- A collection of links to additional material such as a refresher on the basics, additional practice questions and general knowledge about the topic</li>
          <li><b>Characteristics</b>- Most articles contain a section that talks about the reasoning behind some common characteristics of each data structure discussed. If you find yourself wondering why a particular data structure was used to solve a problem, this might be a great section to spend some time on.</li>
          <li><b>Appendix</b>- This section contains some additional information along with a refresher on how some of the data strucutres discussed are implemented. It's not imperitive that you go through them but it should be a great place to start if you find yourself needing a refresher</li>
          <li><b>Chat</b>- Throughout the website you can levergae ChatGPT to lean more about a specific topic or code snippet. Please be sure to provide context along with your questions to get the best response.</li>
        </ul>
      </p>
      </section>
      <section id="Help">
      <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Help and Feedback</h2>
      <p> In case of any issue in navigating the website or to report any bugs or faulty answers please reach out at <a href="mailto:akshat00@student.ubc.ca"><u>akshat00@student.ubc.ca</u></a></p>
      </section>

      {/* Chatbox at the bottom Right of the webpage */}
      <div id="chatbox" className="fixed bottom-28 left-6">
            {/* {[toggle && <Chatbox/>]} */}
            <button type="button" id="startChat" className="fixed bottom-8 left-6 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2" onClick={() => chat()}>
               <img src={chaticon} alt="ask questions" height={50} width={50}/>
                <span className="sr-only">Start a chat</span>
            </button>
            </div>
    </div>
    {[toggle && <div className="sticky h-screen bg-white absolute inset-y-0 right-0 w-96"><Chatbox/></div>]}
    </div>
  )
}