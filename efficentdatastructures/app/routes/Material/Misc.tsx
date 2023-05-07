import { Tabs } from "flowbite-react";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    M1_a,
    M1_b,
    M2,
    M3,
    M4,
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import chaticon from "~/images/chaticon.png";
import Chatbox, { qHelp } from "~/components/Chatbox";

export default function Miscellaneous(){
    
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
     // Display help message for question 1
     function question1(){
        showchat(true);
        setTimeout(() => {
            qHelp("m1");
        },10)
        
      }

      // Display help message for question 2
      function question2(){
        showchat(true);
        setTimeout(() => {
            qHelp("m2");
        },10)
        
      }

      // Display help message for question 3
      function question3(){
        showchat(true);
        setTimeout(() => {
            qHelp("m3");
        },10)
        
      }

      // Display help message for question 4
      function question4(){
        showchat(true);
        setTimeout(() => {
            qHelp("m4");
        },10)
        
      }
      function answer1(){
        if(!toggle){
            showchat(true);
        }
        setTimeout(() => {
            qHelp("m1_a_code");
        },10)
        
        }
        function answer2(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("m1_b_code");
            },10)
            
            }
        function answer3(){
                if(!toggle){
                    showchat(true);
                }
                setTimeout(() => {
                    qHelp("m2code");
                },10)
                
                }
        function answer4(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("m3code");
            },10)
                    
            }
        function answer5(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("m4code");
            },10)
                
        }
    return (<>
    <div className="flex">
        <div className="ml-72 relative py-8 px-8">
        <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Additional Coded Examples</h1>
            </header>
            <p>The problems below are a mixed bag from Abstract data types, Sorting, Searching and Scheduling. You can go through them at any pace and order to practice.</p>

        <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

        <ul className="list-decimal ml-4 px">
            <li>
            <b>Professional Life: </b>You are trying to implement a self checking system that works on the principle of target matching in an array. Assume you are given an Array of integers <b>arr</b> and a target value <b>target</b> return true if two numbers in the array add up to the target value. If no such pair exists, return false.
            <br/>   <b>Example: Input:</b> nums = [2,7,11,15], target = 9<br/>
                            <b>Output:</b> true<br/> 
                            <b>Explanation:</b> Because nums[0] + nums[1] == 9, we return true. <br/>

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-M1" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            This problem has been inspired from <a href ="https://leetcode.com/problems/two-sum/description/"><u>Leetcode</u></a>. There are two ways of approaching this problem. The easiest method is to use a nested loop to check through each combination of the numbers present to see if their sum matches the value needed.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={M1_a}
                                height="600px"
                                width="896px"
                                theme={dracula}
                                extensions={[java(), basicSetup]}
                                readOnly={true}
                            />
                            </div>
                            <div>
                            If your objective is to write a code that is as space efficient as possible without worrying about runtime then this is undoubtably the right approach to take. Instead if you with to make a more time efficient code at the cost of space then Hash tables are your best friend.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={M1_b}
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
            <b>Personal Life: </b>You are in the process of trying to plan out your year of classes. In order to graduate, you have to take an integer <b>courses</b> number of courses. Some of these courses also have prerequisites defined as <b>prereq[i] = [a,b]</b>, which means you need to take course b in order to take course a. Develop a program that takes in the number of courses and a 2d array of all prerequisites to check if you can finish your degree this year (true) or not (false). All the pairs of prereq are unique.
            <br/>   <b>Example: Input:</b>courses = 2, prereq = [[1,0]]<br/>
                            <b>Output:</b> true<br/> 
                            <b>Explanation:</b> There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible. <br/>
                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-M2" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            This problem has been inspired from <a href ="https://leetcode.com/problems/course-schedule/description/"><u>Leetcode</u></a>. While it may not look like it, this problem hinges on the same ideas as any other graph problem as it boils down to an adjacency graph of all the classes you need to take and their prerequisites. As a result, the solution to this problem uses Hash Maps and Queues just like other graph problems.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer3()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={M2}
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
            <b>Professional Life: </b>Given a characters array <b>tasks</b>, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in <b>one unit of time</b>. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer <b>n</b> that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.
            <br/>   <b>Example: Input:</b>tasks = ["A","A","A","B","B","B"], n = 2<br/>
                            <b>Output:</b> 8<br/> 
                            <b>Explanation:</b> a-b-idle-a-b-idle-a-b <br/> There is at least 2 units of time between any two same tasks. <br/>

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question3()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-M3" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            This problem has been taken from <a href ="https://leetcode.com/problems/task-scheduler/description/"><u>Leetcode</u></a>. The idea behind this problem is to implement a greedy algorithm using the properties of the question. Since the time taken to complete each task is the same, our bottleneck is finding out which task occurs the most number of times. If we are able to space that task out correctly we can space every other task out as well and find the least time taken.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer4()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={M3}
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
            <b>Personal Life: </b>You are given the root of a binary tree where each node represents the distance between two points on a journey and a maximum time that your journey can take. Return all root-to-leaf paths where the sum of the node values in the path equals Maximum time to help plan your journey. Each path should be returned as a list of the node values, not node references.
            <br/>   <b>Example: Input:</b>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], maxtime = 22<br/>
                            <b>Output:</b> [[5,4,11,2],[5,8,4,5]]<br/> 
                            <b>Explanation:</b> There are two paths whose sum equals maxtime: <br/> 5 + 4 + 11 + 2 = 22 <br/> 5 + 8 + 4 + 5 = 22 <br/>
                        
                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question4()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>

                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-M4" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            This problem has been inspired from <a href ="https://leetcode.com/problems/path-sum-ii/description/"><u>Leetcode</u></a>. As the problem suggests, its solution is based upon a search through the graph to find the right paths. The solution below uses a DFS where result is the list of all possible paths.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer5()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={M4}
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
        </ul>
        
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