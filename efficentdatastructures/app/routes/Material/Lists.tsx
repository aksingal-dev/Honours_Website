import { Alert, Dropdown, Navbar, Tabs, Tooltip } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    L1,
    L2
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import Chatbox, { qHelp } from "~/components/Chatbox";
import chaticon from "~/images/chaticon.png";
export default function Lists(){
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
              qHelp("l1");
          },10)
          
        }

        // Display help message for question 2
        function question2(){
          showchat(true);
          setTimeout(() => {
              qHelp("l2");
          },10)
          
        }
        function answer1(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("l1code");
            },10)
            
            }
            function answer2(){
                if(!toggle){
                    showchat(true);
                }
                setTimeout(() => {
                    qHelp("l2code");
                },10)
                
                }
    return(
        <>
        <div className="flex">
        <div className="ml-72 relative py-8 px-8 ">
            <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Linked Lists.</h1>

            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#L_List">The Basics</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to="#Presence_Lists">Where do we see them?</NavHashLink>   
                </Navbar.Link>
                <Navbar.Link>    
                    <NavHashLink to="#RealLifeExamples_Lists">Coded Examples</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>    
                    <NavHashLink to="#FurtherReadings_Lists">Additional Material</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to="#Appendix">Appendix</NavHashLink>
                </Navbar.Link>
                </Navbar.Collapse>    
            </Navbar>
            </header>
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />
            <section>
                <article id="L_List">
                    <p>For a quick refresher on Linked Lists take a look at the Appendix</p>
                </article>

                <article id="Presence_Lists">
                    <div className="flex flex-row">
                    <Tooltip content="This section contains some common use cases for Linked Lists in our surroundings for you to read." placement="top">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Where Do We See Linked Lists</h3>
                    </Tooltip>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>We come across linked lists in our lives more often than we realize. Some common areas where we might encounter them are:</p>
                    <ul className="list-disc ml-4 px">
                    <li>
                        As the name might clue you, Hyperlinks in webpages are examples of a linked list.
                    </li>
                    <li>
                        Anytime an application allows us to use the undo and redo button, we are experiencing the use of a linked list.
                    </li>
                    <li>
                        Both Stacks and Queues are implemented using linked lists.
                    </li>
                    </ul>
                </article>

                <article id="RealLifeExamples_Lists"> 
                    <Tooltip content="This section contains some coded examples or personal and professional scenarios where you may need to implement a linked List. Try it out yourself before taking a look at the solution." placement="top">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Coded Examples</h3>
                    </Tooltip>
                    <ul className="list-decimal ml-4 px">
                    <li>
                        <b>Professional Life: </b>You are designing a plugin for a music player that takes the head from a list and automatically skips over duplicate songs added to the list (in alphabetical order). Design a method that removes duplicate songs from the list and returns the head. You may only traverse the list once and the method is provided the starting song of the list.
                        <br/>   <b>Example: Input:</b> list = [a,a,b, c] <br/>
                            <b>Output:</b> list = [a,b,c] <br/> 
                            <b>Explanation:</b> Your function should return return the head of the list with the duplicate removed.<br/>

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                        <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-L1" style="default">
                            {/* User input code box */}
                            <Tabs.Item title="Try it Out!">
                                <CodeBox />
                            </Tabs.Item>
                            <Tabs.Item title="Solution">
                                <p>This problem has been adapted from <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/"><u>Leetcode 83</u></a>. The idea behind the solution is to traverse through the linked list one by one to look for duplicates by comparing each node to the node after it. If we find a duplicate value we simply unlink the old node from the linked list.</p>
                                <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                                <CodeMirror
                                    value={L1}
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
                        <p><b>Personal Life: </b>You have a double linked list that represents the most recently used applications on your friend's computer (from first to last) which somehow broke. to find out what application caused the error, you are tying to reverse the order in which the applications were used. To do so, you need to reverse the data in the linked list. You are provided with the starting node and each application is represented by an ID.
                        <br/>For example if the <b>original Double linked list</b> is: 10{"<"}-{">"}11{"<"}-{">"}12{"<"}-{">"}13{"<"}-{">"}14
                        <br/>The list <b>after running</b> your method should be: 14{"<"}-{">"}13{"<"}-{">"}12{"<"}-{">"}11{"<"}-{">"}10</p><br/>
                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                        <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-L2" style="default">
                            {/* User input code box */}
                            <Tabs.Item title="Try it Out!">
                                <CodeBox />
                            </Tabs.Item>
                            <Tabs.Item title="Solution">
                               <p> This question has been adapted from <a href="https://leetcode.com/problems/reverse-linked-list-ii/"><u>Leetcode 92</u></a>. The idea behind the solution is to traverse through the linked list and swap the next and previous pointers for the node using a temporary node.</p>
                               <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                                <CodeMirror
                                value={L2}
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

                <article id="FurtherReadings_Lists">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Further Readings on Linked Lists</h3>
                    <p>If you're interested in learning more check out the following resources:</p>
                    <ul className="list-disc ml-4 px">
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Linked_list"><u>Linked Lists (Wikiedia)</u></a>
                    </li>
                    <li>
                        <a href="https://www.javatpoint.com/singly-linked-list"><u>Linked Lists in Java</u></a>
                    </li>
                    <li>
                        Additional Practice Problems can be found <a href="https://medium.com/techie-delight/linked-list-interview-questions-and-practice-problems-55f75302d613"><u>here</u></a> I specifically suggest Problems number 14, 16, and 21.
                    </li>
                    </ul>
                </article>
            </section>

            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <section id="Appendix">
                <article>
                    <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Appendix</h2>
                </article>
                <article id="what_Lists">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">What are Linked Lists?</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>Linked lists are data structures that have a collection of nodes that are stored <b>randomly</b> in the memory. Each node contains the <b>data</b> as well as a reference to the <b>location of the next node</b>.
                    <br /> In case of a <b>Single-Linked List</b> the node will contain the data and the reference to the <b>next</b> node in the chain. 
                    <br /> In the case of a <b>Double-Linked List</b> the node will contain the data and the references to <b>next</b> as well as the <b>previous</b> node in the chain.
                    <br /> In case of a <b>Circular-Linked List</b> the <b>last</b> node of a Linked List is connected to the first node on the list.</p>
                </article>

                <article id="characteristics_Lists">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Reasoning behind common characteristics of Linked Lists</h3>
                        <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <ul className="list-disc ml-4 px">
                        <li>
                            Linked lists need to store both the data and the location of the next data value for each element. <br/>
                            Since the elements in a linked list are stored <b>non-sequentially</b>, the program needs to be told where each element is located in the memory. Hence each element of a linked list contains the data as well as the location of the next element(in a single linked list) or the next and previous elements(in a double linked list).
                        </li>
                        <li>
                            The amount of memory used by a Linked List is not fixed.
                            Memory for elements is allocated when an element is created. As a result, the amount of memory that will be used for the linked list depends on the number of elements in the List and the size of each element.
                            <br/>Size of a linked list = (size of each element)*(number of elements)
                            <br/> <b>In case of Singly-linked list:</b> size of element = (size of data type) + (size of the address of next element)
                            <br/><b>In case of Doubly-Linked list:</b> size of element = (size of data type) + (size of the address of next element) + (size of the address of the previous element).
                            <Alert color="info">
                                <span className="text-normal">
                                    Since the address of elements is always an int type, it will always use 4 bytes.
                                    <br/>Therefore: Size of element in Singly-Linked list = (size of data type) + 4
                                    <br/>Size of element in Doubly-Linked list = (size of data type) + 4 + 4
                                </span>
                            </Alert>
                        </li>
                        <li>
                        Elements in linked list cannot be accessed independently.
                        <br/>Since the location of each individual element (Other than the first one) is not known to the program, they cannot be accessed individually. Accessing an element needs the program to travel traverse through each element to find the required one.
                        </li>
                        <li>
                        Inserting or removing an element into a linked list is generally very efficient due to the low overhead time needed to move from one location to the next when compared to copying data from one location to the next.
                        <ul className="list-disc ml-6 px">
                            <li>
                            In the case of inserting or removing an element in the start of the list, since we simply need to change the node, the time efficiency is O(1).  
                            </li>
                            <li>
                            In the case of the middle of the list,
                            <ul className="list-disc ml-8 px">
                                <li>
                                For Singly linked list, we first need to travel to that location <b>from the start</b> and as a result the time efficiency is O(n).
                                </li>
                                <li>
                                For doubly linked list, we first need to travel to that location <b>from the start or end</b> and as a result the time efficiency is O(n).
                                </li>
                            </ul>
                            </li>
                            <li>
                            In the case of the end of the list,
                            <ul className="list-disc ml-8 px">
                                <li>
                                For Singly Linked list, since we need to travel to that location <b>from the start</b>, the time efficiency is O(n).
                                </li>
                                <li>
                                For doubly Linked list, since we can travel backwards, the time efficiency is o(1)
                                </li>
                            </ul>
                            </li>
                        </ul>
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