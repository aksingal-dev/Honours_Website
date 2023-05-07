import { Navbar, Tabs, Tooltip } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    Q1,
    Q2
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import chaticon from "~/images/chaticon.png";
import Chatbox, { qHelp } from "~/components/Chatbox";

export default function Queues(){
    // Google Analytics pageview count.
    useEffect(() =>{
        ReactGA.initialize("G-9F3RXX9YGW");
        ReactGA.send({hitType: "pageview", page: window.location.pathname})
      }, [])

      //State Hook to enable/disable chatbox
      const [toggle, showchat] = useState(false);
      function chat(){
        showchat(!toggle);
        sessionStorage.setItem('questionNumber', '0');

    }
    function topic(){
        if(!toggle){
            showchat(true);
        }
        sessionStorage.setItem('questionNumber', '0');
    }
      // Display help message for question 1
       function question1(){
          showchat(true);
          setTimeout(() => {
              qHelp("q1");
          },10)
          
        }

        // Display help message for question 2
        function question2(){
          showchat(true);
          setTimeout(() => {
              qHelp("q2");
          },10)
          
        }
        function answer1(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("q1code");
            },10)
            
            }
        function answer2(){
            if(!toggle){
              showchat(true);
            }
            setTimeout(() => {
                 qHelp("q2code");
            },10)
                
        }
    return(<>
    <div className="flex">
    <div className="ml-72 relative py-8 px-8 ">
        <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Stacks</h1>

            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#Queues">The Basics</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#Presence_Queues">Where do we see them?</NavHashLink>   
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#RealLifeExamples_Queues">Coded Examples</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#FurtherReadings_Queues">Additional Material</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                <NavHashLink to="#Appendix">Appendix</NavHashLink>
                </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </header>

            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <p>While both an Array and a Linked List can be used to implement Queues. Since removing data from the front of an array is less efficient than in linked lists, we will be taking a look at the linked list implementations only.</p>

            <section>
                <article id="Queues">
                    <p>For a quick refresher on Queues take a look at the Appendix</p>
                </article>

                <article id="Presence_Queues">
                    <div className="flex flex-row">
                    <Tooltip content="This section contains some common use cases for Queues in our surroundings for you to read." placement="top">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Where Do We See Queues</h3>
                    </Tooltip>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <p>Queues are often used in real life when data needs to be processed in a sequential manner. Some common uses of queues are:</p>
                    <ul className="list-disc ml-4 px">
                        <li>
                        In a supermarket, Queues can be used to serve customers at the checkout counter based on the first-come-first-serve principle.
                        </li>
                    <li>
                        Queues are used whenever we need to transfer data and the date of upload is greater than download such as:
                        <ul className="list-disc ml-6 px">
                            <li>
                            Transferring files from one location to anither.
                            </li>
                            <li>
                            Sending packets across a network
                            </li>
                            <li>
                            Buffering videos/songs.
                            </li>
                        </ul>
                    </li>
                    <li>
                    Queues are also used whenever we need to asynchronously transfer data. Such as:
                        <ul className="list-disc ml-6 px">
                            <li>
                            Messages sent over whatsapp/facebook messenger etc. are stored in a queue if the recipient isn't connected to the enternet.
                            </li>
                            <li>
                            Scheduling mails for the future. In many email services (gmail, outlook etc. if an email fails to reach the recipient it is put in a queue to be sent again. If the email fails a second time it goes back to the end of the queue and waits it's turn to be sent again. This keeps on happening until the email is revieved by its target or the server has reached the maximum allowed attempts.)
                            </li>
                            <li>
                            CPU task scheduling. While CPU task scheduling can be done through various methods, one of the most common ways of doing it is the FIFO method which uses a queue.
                            </li>
                        </ul>
                    </li>
                    </ul>
                </article>

                <article id="RealLifeExamples_Queues"> 
                <Tooltip content="This section contains some coded examples or personal and professional scenarios where you may need to implement Queues. Try it out yourself before taking a look at the solution." placement="right">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Coded Examples</h3>
                    </Tooltip>
                    <ul className="list-decimal ml-4 px">
                    <li>
                        <p><b>Professional Life: </b>Given an integer <b>n</b> return a list of all binary numbers from 1 to n with their bits fliped.
                        <br/><b>Example: Input:</b> if the number is <b>4</b>.<br/>
                         <b>Output:</b> 1, 0, 01, 00<br/>
                         <b>Explanation: </b> The first 4 binary numbers are 0 (zero), 1(one), 10(two), 11(three) the result should be the opposite of 0, 1, 10, 11</p>

                         {/* Help Button */}
                         <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                        <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-L2" style="default">
                            {/* User input code box */}
                            <Tabs.Item title="Try it Out!">
                                <CodeBox />
                            </Tabs.Item>
                            <Tabs.Item title="Solution">
                               <p> This question has been adapted from <a href="https://www.techiedelight.com/generate-binary-numbers-1-n/"><u>this website</u></a>.The idea behind this solution is to start with a queue that only contains the element 0 (the opposite of 1) and use that to generate the other numbers by adding a 1 and 0 to the previous element and then remove the element.  </p>
                               <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                                <CodeMirror
                                value={Q2}
                                height="600px"
                                width="896px"
                                theme={dracula}
                                extensions={[java(), basicSetup]}
                                readOnly={true}
                                />
                            </Tabs.Item>

                        </Tabs.Group>
                    </li>
                    <li>
                    <b>Personal Life: </b>Create a <b>RecentCalls</b> class that keeps a track of the number of calls within a time frame.
                    <ul className="list-disc ml-6 px">
                        <li>
                        The class needs to have an initializer to reset the counter named recentCalls
                        </li>
                        <li>
                        The class needs to have a method <b>int ring(int t)</b> which adds a new call log at time <b>t</b> (where t represents the time in minutes.) and returns the number of requests that happened in the past day (1440 Minutes) including the new call.
                        </li>
                    </ul>
                       <b>Example: Input:</b>  ["recentCalls", "ring(1)", "ring(100)", "ring(1441)", "ring(1442)"] <br/>
                            <b>Output:</b> [null, 1, 2, 3, 3] <br/> 
                            <b>Explanation: </b>RecentCalls recentCalls = new RecentCalls(); <br/>
                                                recentCalls.ring(1);     // requests = [1], range is [-1439,1], return 1 <br/>
                                                recentCalls.ring(100);   // requests = [1, 100], range is [-1339,100], return 2 <br/>
                                                recentCalls.ring(1441);  // requests = [1, 100, 1441], range is [1,1441], return 3 <br/>
                                                recentCalls.ring(1442);  // requests = [1, 100, 1441, 1442], range is [2,1442], return 3 <br/>
                        
                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                        <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-L1" style="default">
                            {/* User input code box */}
                            <Tabs.Item title="Try it Out!">
                                <CodeBox />
                            </Tabs.Item>
                            <Tabs.Item title="Solution">
                                <p>This problem has been adapted from <a href="https://leetcode.com/problems/number-of-recent-calls/"><u>Leetcode 933</u></a>. The idea behind this problem is iterate over an ordered list by adding new things at the end of the list and removing old ones from the front, Commonly, these problems are referred to as <b>sliding window</b> and are extremely popular during job interviews. We can solve this problem by adding every new call log to a list and iterating backwards to find the falls that fall within the range <b>(t-1440, t)</b>. When a log falls outisde this window we remove it from the queue to reduce the mamory used.</p>
                                <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                                <CodeMirror
                                    value={Q1}
                                    height="600px"
                                    width="896px"
                                    theme={dracula}
                                    extensions={[java(), basicSetup]}
                                    readOnly={true}
                                />
 
                            </Tabs.Item>

                        </Tabs.Group>
                    </li>
                    </ul>
                </article>

                <article id="FurtherReadings_Queues">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Further Readings on Queues</h3>
                    <p>If you're interested in learning more check out the following resources:</p>
                    <ul className="list-disc ml-4 px">
                    <li>
                        The Basics of Queues can be found <a href="https://www.javatpoint.com/data-structure-queue"><u>here</u></a>
                    </li>
                    <li>
                    Your class Notes for COSC 222 and COSC 121 might be a great place to start.
                    </li>
                    <li>
                        Additional Practice Problems can be found <a href="https://medium.com/techie-delight/queue-data-structure-practice-problems-and-interview-questions-f459bf0578db"><u>here</u></a> I specifically suggest Problems number 8, 18, and 32.
                    </li>
                    </ul>
                </article>
            </section>

            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <section id="Appendix">
                <article>
                <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Appendix</h2>
                </article>
                <article id="What_Queues">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">What are Queues?</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <p>Queues are abstract data structures that are commonly implemented using linked lists. As the name suggests, a great representation of a queue is people standing in line for enterence to a venue.
                    <br/>There are 4 major types of queues that are commonly used.
                    </p>
                    <ul className="list-disc ml-4 px">
                        <li>
                        <b>Simple/Linear Queue</b> is what comes to mind for most of us when we hear the word queue. Insertion takes place only at one end (Commonly refered to as the rear) and deletion only takes place at the other end (commonly refered to as the front).  
                        <br/> For more information on simple queues <a href="https://www.javatpoint.com/data-structure-queue"><u>Click Here</u></a>
                        </li>
                        <li>
                        <b>Priority Queue</b> is a queue where the removal of data is based on the priority of the object. In a priority queue, addition takes place on the bases of first come first serve but once added, the queue is arranged in either ascending or descending order before elements are removed from the front of the queue.
                        <br/> For more information on simple queues <a href="https://www.javatpoint.com/ds-priority-queue"><u>Click Here</u></a>
                        </li>
                        <li>
                        <b>Circular Queue</b> is a type of queue where the object at the end of the queue (the last object to enter the queue at any point) has a pointer that refers to the front of the queue. Whenever an object is added or removed from the queue, the object refered to by this pointer also changes. A key advantage of this approach is better memory utilization as compared to a simple queue.
                        <br/>For more information on circular queues <a href="https://www.javatpoint.com/circular-queue"><u>Click Here</u></a>
                        </li>
                        <li>
                        <b>DEQue (Double Ended Queue)</b> is a type of queue where insertion and deletion may happen from both ends. Depending on the restricitions on what ends can be used to add or remove elements from the queue, there are three types of DEQueues.
                        <ul className="list-disc ml-6 px">
                            <li>
                            An <b>input restricted queue</b> allows for <b>deletion</b> at both ends and insertion at only one.
                            </li>
                            <li>
                            An <b>output restricted queue</b> allows for <b>insertion</b> at both ends and deletion at only one.   
                            </li>
                        </ul>
                        For more information on double ended queues <a href="https://www.javatpoint.com/ds-deque"><u>Click Here</u></a>
                        </li>
                    </ul>
                </article>

                <article id="characteristics_Queues">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Reasoning behind common characteristics of Queues</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <ul className="list-disc ml-4 px">
                        <li>
                        Queues use First In First Out (FIFO) pattern to access data.
                        <br/>Since queues keep track of both the front and the rear node, and these are the only nodes available to the program outside of the queue implementation, the program is omly able to acces these two nodes. Since queue's are used to solve problems that need sequential processing of data, it is conventional to only read data using the front node to preserve sequential dta access.
                        </li>
                        <li>
                        Queues are very efficient for insertion and deletion.
                        <br/>Just like stacks, since queues are also built on the basis of linked lists, they allow for very efficient insertion and deletion of nodes. Both insertion and deletion have the time complexity of O(1) for queues.
                        <br/>Do keep in mind that depending on the type of queue, insertion may take place at the <b>rear OR both front and rear</b> of the queue. Similarly, deletion may take place at the <b>front OR the front and rear</b> of the queue.
                        </li>
                    </ul>
                </article>
            </section>
            
            {/* Regular chatbox at the bottom right of the page */}
            <div id="chatbox" className="fixed bottom-28 left-6">
                {/* Display chatbox based on togle value */}
                {/* {[toggle && <Chatbox/>]} */}
                <button type="button" id="startChat" className="fixed bottom-8 left-6 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2" onClick={() => chat()}>
                    <img src={chaticon} alt="ask questions" height={50} width={50}/>
                    <span className="sr-only">Start a chat</span>
                </button>
            </div>
    </div> 
    {[toggle && <div className="sticky h-screen bg-white absolute inset-y-0 right-0 w-96"><Chatbox/></div>]}
    </div>       
    </>)
}