import { Navbar, Tabs, Tooltip } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    S1,
    S2
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import chaticon from "~/images/chaticon.png";
import Chatbox, { qHelp } from "~/components/Chatbox";
export default function Stacks(){

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
              qHelp("s1");
          },10)
          
        }

        // Display help message for question 2
        function question2(){
          showchat(true);
          setTimeout(() => {
              qHelp("s2");
          },10)
          
        }
        function answer1(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("s1code");
            },10)
            
            }
            function answer2(){
                if(!toggle){
                    showchat(true);
                }
                setTimeout(() => {
                    qHelp("s2code");
                },10)
                
                }
    return (<>
    <div className="flex">
        <div className="ml-72 relative py-8 px-8 ">
        <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Stacks</h1>

            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#Stacks">The Basics</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#Presence_Stacks">Where do we see them?</NavHashLink>   
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#RealLifeExamples_Stacks">Coded Examples</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#FurtherReadings_Stacks">Additional Material</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                <NavHashLink to="#Appendix">Appendix</NavHashLink>
                </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </header>
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <p>While both an Array and a Linked List can be used to implement stacks. Since adding data to the front of an array is less efficient than in linked lists, we will be taking a look at the linked list implementations only.</p>

            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />
            <section>

                <article id="Stacks">
                    <p>For a quick refresher on Stacks take a look at the Appendix</p>
                </article>

                <article id="Presence_Stacks">
                    <div className="flex flex-row">
                    <Tooltip content="This section contains some common use cases for Stacks in our surroundings for you to read." placement="right">
                        <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Where do we see Stacks?</h3>
                    </Tooltip>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>Stacks are seen in everyday life whenever we need to access data in the opposite order of addition. Some examples are:</p>

                    <ul className="list-disc ml-4 px">
                        <li>
                            The back button on your browser (Visited pages are added to the stack and pressing the back button <b>pops</b> the last visited page back to the browser).
                        </li>
                        <li>
                            When compiling a program, function calls are scheduled using a stack. The last function to be called is the first function to be executed. This behaviour is exactly why nested function calls work.
                        </li>
                        <li>
                            Efficient implementation of depth first search relies on stacks.
                        </li>
                        <li>
                            Backtracking is implemented by storing all possible states in a stack.- Backtracking is a major component of rudimentary AI programs such as maze solvers and chess playing algorithms.
                        </li>
                    </ul>
                </article>

                <article id="RealLifeExamples_Stacks"> 

                <Tooltip content="This section contains some coded examples or personal and professional scenarios where you may need to implement an Stack. Try it out yourself before taking a look at the solution." placement="right">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Coded Examples</h3>
                    </Tooltip>
                    <ul className="list-decimal ml-4 px">
                    <li>
                    <b>Professional Life: </b>You are writing a debugger for a program that checks if the programmer has provided the right number of brackets and in the correct order. Given a string **input** that only contains <b>(</b>,<b>)</b>,<b> {'{'} </b>,<b>{'}'}</b>,<b>{'['}</b>, or <b>{']'}</b>. Write a method to check if the given string is valid. A string is valid if:
                    <ul className="list-decimal ml-4 px">
                        <li>
                        Every opening bracket has a corresponding closing bracket of the same type and vice versa.
                        </li>
                        <li>
                        The brackets are closed in the correct order. That is, if a square bracket is opened before a regular one, the regular bracket needs to close before the square one.
                        </li>    
                    </ul>
                       <b>Example: Input:</b>  input = "()" <br/>
                            <b>Output:</b> true <br/> 
                            <b>Example: Input:</b>  input = "(]" <br/>
                            <b>Output:</b> false <br/> 

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-S1" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            This problem has been adapted from <a href="https://leetcode.com/problems/valid-parentheses/"><u>Leetcode 20</u></a>. If we were to use a simple array to solve the problem, we would have to iterate through the entire array to see if the number and order of brackets is correct everytime a new bracket is added. This will require a lot of space and comutation. We can use the FILO and dynamic size characteristics of a linked list stack to make our life easier by moving across the string and adding every opening bracket to the stack. For every closing bracket we encounter, we compare it to the top of the stack. If the brackets match, the top is poped out of the stack and we move on to the next value in the string, if the brackets don't match, we end the program as the string is invalid (Brackets are not closed in the correct order.)
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={S1}
                                height="600px"
                                width="896px"
                                theme={dracula}
                                extensions={[java(), basicSetup]}
                                readOnly={true}
                            />
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
                    </li>
                    <li>
                    <b>Personal Life: </b>You want to maximize the time you spend at the beach during your holiday so you're looking for the longest group of days where the temperature is hot. Given an array of daily temperatures, return an array <b>result</b> such that each value in result represents the number of days one has to wait for a temperature lower than the corresponding temperature in the temperature array. If there is no such day, the result array should store a -1.
                    <br/>   <b>Example: Input:</b>  temps = "[[30,40,20,60]]" <br/>
                            <b>Output:</b> [2,1, -1, -1] <br/> 

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-S2" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                        This question has been adapted from <a href="https://leetcode.com/problems/daily-temperatures/"><u>leetcode 739</u></a> . The idea behind this approach is to look through the array of temperatures using the index. If the stack is empty add the current <b>index</b> to the stack. Otherwise if the temperature at the current index is more than that at that top of the stack we add it to the stack, else, we update the value for result and pop the stack.  
                        <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            <CodeMirror
                                value={S2}
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

                <article id="FurtherReadings_Stacks">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Further Readings on Stacks</h3>
                    <p>If you're interested in learning more check out the following resources:</p>
                    <ul className="list-disc ml-4 px">
                        <li>
                            <a href="https://www.javatpoint.com/java-stack"><u>Basics of Stacks</u></a>
                        </li>
                        <li>
                           Your class Notes for COSC 222 and COSC 121 might be a great place to start.
                        </li>
                        <li>
                            Additional Practice Problems can be found <a href="https://medium.com/techie-delight/stack-data-structure-practice-problems-and-interview-questions-9f08a35a7f19"><u>here</u></a> I specifically suggest Problems number 10, 21, and 24.
                        </li>
                    </ul>
                </article>
            </section>
            
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />
            
            <section id="Appendix">
                <article>
                <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Appendix</h2>
                </article>

                <article id="What_Stacks">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">What Are Stacks?</h3>
                    <p>Stacks are abstract data structures commonly implemented using a linked list. A great representation of a stack would be a pile of books on a table.</p>
                </article>

                <article id="characteristics_Stacks">
                     <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Reasoning behind common characteristics of Stacks</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <ul className="list-disc ml-4 px">
                        <li>
                        Stacks use a First In Last out (FILO) pattern to access data.
                        <br/> The implementation of a stack relies on using a singke pointer to keep track of the top of the stack at any point. As the only variable available to the program outside of the stack is this <b>top</b> variable, Only the data refered to by this top variable can be accessed.
                        </li>
                        <li>
                        Stacks are very efficient for insertion and deletion.
                        <br/>Since most implementations of stacks are based on linked lists and pointers are extremely efficient when it comes to addition and deletion, Stacks have an O(1) time complexity for insertion and deletion.
                        <br/>Do keep in mind that both insertiona and deletion takes place at the top of the stack.
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
    </>
    )
}