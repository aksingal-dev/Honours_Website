import { Accordion, Navbar, Tabs, Tooltip } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    A1,
    A2
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import Chatbox, { qHelp } from "~/components/Chatbox";
//import {qHelp}  from "~/components/Chatbox";
import chaticon from "~/images/chaticon.png";

export default function Arrays(){
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
        if(!toggle){
            showchat(true);
        }
        setTimeout(() => {
            qHelp("a1");
        },10)
        
        }
    //   // Display help message for question 2
      function question2(){
        if(!toggle){
            showchat(true);
        }
        setTimeout(() => {
            qHelp("a2");
        },10)
        
      }
      function answer1(){
        if(!toggle){
            showchat(true);
        }
        setTimeout(() => {
            qHelp("a1code");
        },10)
        
        }
        function answer2(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("a2code");
            },10)
            
            }
    return (<>
    <div className="flex">
        <div className={"ml-72 relative py-8 px-8 " }>
            <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Arrays</h1>

            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#Arrays">The Basics</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#Presence_Arrays">Where do we see them?</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>   
                    <NavHashLink to="#RealLifeExamples_Arrays">Coded Examples</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#FurtherReadings_Arrays">Additional Material</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                <NavHashLink to="#Appendix">Appendix</NavHashLink>
                </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </header>

            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <section>

                <article id="Arrays">
                    <p>For a quick refresher on Arrays take a look at the Appendix</p>
                </article>

                <article id="Presence_Arrays">
                    <div className="flex flex-row">
                    <Tooltip content="This section contains some common use cases for Arrays in our surroundings for you to read." placement="top">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Where do we see an Array?</h3>
                    </Tooltip>
                        <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <p>We encounter and use arrays in various places in our daily lives. Some key characteristics of areas where we might encounter arrays are:</p>     
                    <ul className="list-disc ml-4 px">
                        <li>The sequence of events is fixed (eg: This list is an example of an array, the leaderboard in a game, list of moves in a chess game)</li>
                        <li>All the data we are viewing is of the same type (eg: computer screens are essentially a 2D array of variables where each variable contains the RGB value of the pixels )</li>
                        <li>Some other examples of where you might encounter arrays:
                        <ul className="list-disc ml-6 px">
                            <li>A lot of graphical processing when playing games relying on your GPU computing arrays.</li>
                            <li>Images are stored as a 2D array.</li>
                        </ul>
                        </li>
                    </ul>
                </article>

                <article id="RealLifeExamples_Arrays">
                    <div className="flex flex-row">
                    <Tooltip content="This section contains some coded examples or personal and professional scenarios where you may need to implement an Array. Try it out yourself before taking a look at the solution." placement="top"> 
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Coded Examples</h3>
                    </Tooltip>
                    </div>
                    <ul className="list-decimal ml-4 px">
                    <li>
                    <b>Professional Life: </b>The billing system for a company you work at has gone haywire. It is adding multiple copies of the same transactions and causing errors. The transaction ids are stored in an array of size <b>n</b> in ascending order. write a java method to remove the duplicate transactions from the array. You are allowed to use additional memory to solve this problem and the method returns an integer (number of unique transactions).
                    NOTE: You have to display unique transactions from the original array NOT return a new array with the unique transactions.
                    <br/>   <b>Example: Input:</b> transaction = [1,1,2] <br/>
                            <b>Output:</b> 2, transaction = [1,2,_] <br/> 
                            <b>Explanation:</b> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. <br/>
                                    <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        {/* Help Button */
                        /* <div id="Help">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"onClick={() => question1()}>Tell Me More</button>
                        </div> */}

                    <Tabs.Group className="mx-auto max-w-4xl" aria-label="Solutions-A1" style="default" >
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox /> 
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            This problem has been adapted from <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/"><u>Leetcode 26</u></a>. The idea behind the solution is to copy the unique elements from the array to a temporary array and then move them to the start of the original array so that they can be displayed together. To do this, we need to move the values and keep a track of the number of unique values. Our method will return this number that the main function can use to display only the unique values.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={A1}
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
                    <b>Personal Life: </b>Many modern computers use parity bits as a way of finding out if data is corrupted and recovering corrupted data. Write a method that takes a binary Array and a parity value, and returns an array with the value at the last index fixed to match the parity.
                    Your method will get the following as inputs
                    <ul className="list-disc ml-6 px">
                        <li>
                            An array <b>arr</b> where each element is either 0 or 1.
                        </li>
                        <li>
                            An integer <b>n</b> which is the size of the array.
                        </li>
                        <li>
                            An integer <b>parity</b> which will be 1 or 0.
                            <ul className="list-disc">
                                <li>
                                    If parity is 1, the array should have an <b>odd</b> number of 1s.    
                                </li>
                                <li>
                                    If parity is 0, the array should have an <b>even</b> number of 1s.       
                                </li>   
                            </ul>                   
                        </li>
                    </ul>
                    <b>Example: Input:</b> arr=[11001], n=5, 0 <br/>
                                    <b>Output: </b> arr=[11000] <br/>
                                    <b>Explaination: </b> Since the number of 1s in the array are odd (3) but the parity bit indicates we need an even number of 1s, we convert the last digit to 0 as it was a one. If the last digit was 0, we would have converted it to a 1. <br/>
                        
                                    <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>

                        
                        {/* Help Button */
                        /* <div id="Help">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"onClick={() => question2()}>Tell Me More</button>
                        </div> */}

                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-A2" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            The idea behind solving this problem is to keep a running count of the number of 1s in the array and then changing the last value to match the right number of 1s. This is the same concept that is used by our processors to ensure we can recover lost files and many servers use something known as Raid to ensure the a certain amount of data currption protection.
                                <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            <CodeMirror
                                value={A2}
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

                <article id="FurtherReadings_Arrays">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Further Readings on Arrays</h3>
                    <p>If you're interested in learning more check out the following resources:</p>
                    <ul className="list-disc ml-4 px">
                        <li>
                            <a href="https://en.wikipedia.org/wiki/Array_(data_structure)"><u>Arrays (Wikiedia)</u></a>
                        </li>
                        <li>
                            <a href="https://www.w3schools.com/java/java_arrays.asp"><u>Arrays in Java</u></a>
                        </li>
                        <li>
                            Additional Practice Problems can be found <a href="https://leetcode.com/tag/array/"><u>here</u></a> I specifically suggest Problems number 1470, 1480, and 1588.
                        </li>
                    </ul>
                </article>
            </section>
            
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <section id="Appendix">
                <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Appendix</h2>

                <article id="What_Arrays">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">What Are Arrays?</h3>
                    <p>Arrays are data structures that store a collection of elements of the <b>same</b> data type <b>sequentially</b> in memory. They are declared by specifying a fixed size and once created their size cannot be changed.</p>
                </article>

                <article id="characteristics_Arrays">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Reasoning behind common characteristics of Arrays</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <ul className="list-disc ml-4 px">
                        <li>
                        The size of an Array is fixed.
                        <br/>The reason for this behavior is because at the time of memory allotment, the processor allocates a continuous chunk of memory for the array and it is more than likely that the memory next to where the array was created is occupied by some other data.
                        </li>
                        <li>
                        The amount of heap memory that two arrays of same size take can be different.
                        <br/>Since the amount of heap memory used by arrays is dependent on the number of elements as well as the data type, the amount of memory taken up by a boolean array will be about a fourth that of an int array.
                        </li>
                        <li>
                        Each element in an array can be referenced independently.
                        <br/>The reason for this behavior is that once continuous memory is allocated to an array, it is easy to find the position of any variable in the space by calculating the **offset**.
                        <br/>The offset is calculated using the index number we supply when trying to access the value, the size of the value as well as the starting address which is stored in the name of the array. The formula used is:
                        <br/>(Required Address) = (starting address) + ((index value)*(size of one variable))
                        </li>
                        <li>
                        Accessing a known value in an array is very efficient
                        <br />Since we can use the offset formula to find the location of any element in an array using simple maths, accessing an element at a known index is always O(1) in an array.
                        </li>
                        <li>
                        The time efficiency of inserting an element into an unsorted array depends on the situation
                        <ul className="list-decimal ml-6 px">
                            <li>
                            The Array has space for the new element
                            <ul className="list-disc ml-8 px">
                                <li>
                                Inserting an element at the beginning of an array- To add an element we will first have to move all existing elements of the array down one space. Since this requires us to traverse down the array it is O(n).
                                </li>
                                <li>
                                Inserting an element to the middle of an array- To add an element to the middle of the array we would have to shift all the elements from the second half of the array down one space. Since this requires us to traverse down the array it is O(n).
                                </li>
                                <li>
                                Inserting an element to the end of the array- An element can be added to the end by directly accessing it using the index. Hence it has a constant efficiency O(1).
                                </li>
                            </ul>
                            </li>
                            <li>
                            The Array does not have space for the new element. <br/> Since the array does not have space for the new element, All existing elements need to be copied into a new array with the required space. As a result, the time complexity is O(n).
                            </li>
                        </ul>
                        </li>

                    </ul>
                </article>
            </section>

            {/* Regular chatbox at the bottom right of the page */}
            <div id="chatbox" className="fixed bottom-28 left-6">
                {/* Display chatbox based on togle value */}
                {/*[toggle && <Chatbox/>]}*/}
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