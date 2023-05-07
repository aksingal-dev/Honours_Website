import { Navbar, Tabs, Tooltip } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    T1_q,
    T1,
    T2_q,
    T2,
    T3
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import chaticon from "~/images/chaticon.png";
import Chatbox, { qHelp } from "~/components/Chatbox";
export default function Trees(){

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
            qHelp("t1");
        },10)
        
      }

      // Display help message for question 2
      function question2(){
        showchat(true);
        setTimeout(() => {
            qHelp("t2");
        },10)
        
      }

      // Display help message for question 3
      function question3(){
        showchat(true);
        setTimeout(() => {
            qHelp("t3");
        },10)
        
      }
        function answer1(){
        if(!toggle){
            showchat(true);
        }
        setTimeout(() => {
            qHelp("t1code");
        },10)
        
        }
        function answer2(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("t2code");
            },10)
            
        }
        function answer3(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("t3code");
            },10)
                
            }
               
    return (<>
    <div className="flex">
        <div className="ml-72 relative py-8 px-8 ">
        <header id="top">
            <h1 id="top" className="relative text-center text-sky-400 text-3xl h-12">Trees</h1>

            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#Presence_Trees">Where do we see Trees</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to= "#CodedExamples_Trees">Coded examples</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to="#Further_Reading">Further Reading</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to="#Appendix">Appendix</NavHashLink>
                </Navbar.Link>
                </Navbar.Collapse>
                
            </Navbar>
            </header>
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <p>Trees are a type of abstract data structures used to store data using nodes. For a quick refresher on trees and their common types take a look at the appendix</p>

            <section>

                <article id="Presence_Trees">
                    <div className="flex flex-row">
                    <Tooltip content="This section contains some common use cases for Trees in our surroundings for you to read." placement="right">
                        <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Where do we see Trees?</h3>
                    </Tooltip>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>In everyday life, trees are often used to store data in a hierarchical manner. Some common characteristics of situations where one might encounter trees are:</p>

                    <ul className="list-disc ml-4 px">
                        <li>
                        Whenever data has a <b>parent-child relationship</b>- Classes and their super-classes in a program are stored as a heap which is a type of a tree. Other examples include folder structures on computers, tags in HTML pages, or recording possible moves in a game.
                        </li>
                        <li>
                        Recursive functions are often implemented using trees. This behaviour can be commonly seen when blurring images (each section of an image is divided into smaller child nodes and then the blurred result of these child sections are stored in the parent). Another example can be the implementation of any location or range based queries..
                        </li>
                        <li>
                        Most <b>machine learning</b> algorithms are possible only due to the use of decision trees.
                        </li>
                        <li>
                        Many everyday actions would not be possible without a tree such as:
                        </li>
                        <ul className="list-disc ml-6 px">
                        <li>
                        <b>Collision detection</b> in games is possible by dividing the entire level into smaller segments that can be easily processed. each node in a tree contains a smaller area where it's parent node is the combined area of all the child nodes.
                        </li>
                        <li>
                        <b>Prefix and suffix lookups</b> use trees or tries to store a dictionary of words for efficient searching.
                        </li>
                        <li>
                        <b>Navigation tools</b> such as "Find all x within 2 KM of my location" use trees to store geographical location.
                        </li>
                        </ul>
                        <li>
                        Most <b>graph based problems</b> use a heap, which is a complete binary tree, to find solutions. Examples of some common problems solved using these methods include Dijkstra's Algorithm, Prim's Algorithm, and implementation of priority queues.
                        </li>
                        <li>
                        Trees are often used for <b>pattern searching</b> in a given text. This is the same technique that allows gmail to complete your sentences for you while writing an email or your phone's keyboard to provide you with suggestions for the next word while typing.
                        </li>
                        <li>
                        Trie, a special kind of tree, is used to implement <b>dictionaries and hashtables</b> in computers as it allows for extremely efficient key based searches.
                        </li>
                    </ul>
                </article>

                <article id="CodedExamples_Trees"> 
                <Tooltip content="This section contains some coded examples or personal and professional scenarios where you may need to implement a tree. Try it out yourself before taking a look at the solution." placement="right">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Coded Examples</h3>
                    </Tooltip>
                    <ul className="list-decimal ml-4 px">
                    <li>
                    <b>Professional Life: </b>You are given the root of a binary tree where each node represents a location on the map of a park. You are trying to install trash cans in the ground in such a way that the entire park is covered. A trash can installed on a node can cover its parent, itself and its immediate children. Return the minimum number of trash cans required to cover the entire park.
                    <br/>   <b>Example: Input:</b>  root = [0,0,null,0,null,0,null,null,0]<br/>
                            <b>Output:</b> 2 <br/> 
                            <b>Explanation: </b> a minimum of 2 trash cans will be needed. A valid configuration would be at index 1 and 5
                    <br/> The Node class is given below.<br/>
                    <CodeMirror
                                value={T2_q}
                                height="400px"
                                width="696px"
                                theme={dracula}
                                extensions={[java(), basicSetup]}
                                readOnly={true}
                            />
                    
                    {/* Help Button */}
                    <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                    </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-T2" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                        This problem has been inspired from <a href="https://leetcode.com/problems/binary-tree-cameras/"><u>leetcode 968</u></a> . Their are two possible solutions to this problem, The one below uses a greedy depth first search and relies upon the idea that if the children of a node are covered and the node has a parent then place the trash can with the parent. Else place the trash can at the node.  
                        <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            <CodeMirror
                                value={T2}
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
                    <b>Personal Life: </b>There seems to be something wrong with your new router. You need to check if the indexes in the router, stored as a Binary Search Tree, are correct. Write a program that takes the root of the tree as well as an integer value <b>val</b> and finds the node where the node value equals <b>val</b>. <b>Return a subtree rooted at that node</b> if the program is unable to find any such node return <b>null</b>.
                    <br/>   <b>Example: Input:</b>  root = [0,1,1,2,3,5,7,12,19], val= 7<br/>
                            <b>Output:</b> [7, 12, 19] <br/> 
                            <b>Explanation: </b> the value was found at index 6. A subtree rooted at 6 was returned.
                            <br/> The Node class is given below.<br/>
                    <CodeMirror
                                value={T1_q}
                                height="400px"
                                width="696px"
                                theme={dracula}
                                extensions={[java(), basicSetup]}
                                readOnly={true}
                            />

                    {/* Help Button */}
                    <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                    </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-T1" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            The idea behind this solution is extremely simple and asks you to search through a tree for a given value.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={T1}
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
                    <b>Personal Life: </b>You are trying to make it easier to search through commonly used terms in one of your courses to find a valid acronym. In order to do so, you need to make a dictionary of all possible acronyms and show which ones are valid. Write a program that allows for these acronyms to be stored and searched through. You don't need to worry about insertion or deletion. The maximum number of symbols used in an acronym is 20.

                    {/* Help Button */}
                    <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question3()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                    </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-T3" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                        The ability to solve this problem hinges on whether or not you are able to figure out that you need to implement a <b>trie</b> as indicated by the use of the word <b>dictionary</b>. A standard implementation for a trie is given below.  
                        <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer3()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            <CodeMirror
                                value={T3}
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

                <article id="FurtherReadings">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Further Readings on Trees</h3>
                    <p>If you're interested in learning more check out the following resources:</p>
                    <ul className="list-disc ml-4 px">
                        <li>
                            <a href="https://www.geeksforgeeks.org/applications-of-tree-data-structure/"><u>Common Types of Trees</u></a>
                        </li>
                        <li>
                           Your class Notes for COSC 222 and COSC 221 might be a great place to start.
                        </li>
                        <li>
                        If you're interesting in some more uses of trees in our surroundings consider this <a href="https://levelup.gitconnected.com/8-real-life-applicable-trees-data-structures-for-your-toolkit-7c0931ebe0c1"><u>article</u></a>.
                        </li>
                    </ul>
                </article>
            </section>
            
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />
            
            <section>
                <article>
                <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Appendix</h2>
                </article>

                <article id="What_Trees">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">What Are Trees?</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <p>Trees are a node based abstract data structure used to preserve the logical relationship between two data nodes when stored and displayed. Some common terminology that you may have heard around trees include:</p>
                    <ul className="list-disc ml-4 px">
                        <li>
                        <b>Node</b>: The basic building block of a tree, each node contains data as well as pointers that store information about each of its child nodes.
                        </li>
                        <li>
                        <b>Root Node</b>: The base node of a tree.
                        </li>
                        <li>
                        <b>leaf node</b>: the nodes at the very end of the tree that do not have any child nodes.
                        </li>
                    </ul>
                </article>

                <article id="Types_Trees">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Common Types of Trees</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <ul className="list-disc ml-4 px">
                        <li>
                        <b>Self Balancing Search trees</b>: As the name suggests they are primarily used to make searching more efficient. These trees are always created in such a way that the difference between the  sums of all nodes on either side of a parent node never crosses a bound. For example: AVL, Red-Black Tree.
                        </li>
                        <li>
                        <b>Heap</b>: A heap is a tree based data strucutre primarily used to implement a priority queue.
                        </li>
                        <li>
                        <b>Spanning trees</b> are used to find shortest paths while routing data through the internet.
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