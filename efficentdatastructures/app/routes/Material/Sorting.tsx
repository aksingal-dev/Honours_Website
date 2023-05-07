import { Navbar, Tabs, Tooltip } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import CodeBox from "~/components/CodeBox";
import CodeMirror from "@uiw/react-codemirror"
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
    So1,
    So2,
    So3
} from "~/components/Text"
import { java } from "@codemirror/lang-java";
import { basicSetup } from "codemirror";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import chaticon from "~/images/chaticon.png";
import Chatbox, { qHelp } from "~/components/Chatbox";

export default function Sorting(){
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
            qHelp("so1");
        },10)
        
      }

      // Display help message for question 2
      function question2(){
        showchat(true);
        setTimeout(() => {
            qHelp("so2");
        },10)
        
      }

      // Display help message for question 3
      function question3(){
        showchat(true);
        setTimeout(() => {
            qHelp("so3");
        },10)
        
      }
      function answer1(){
        if(!toggle){
            showchat(true);
        }
        setTimeout(() => {
            qHelp("so1code");
        },10)
        
        }
        function answer2(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("so2code");
            },10)
            
            }
        function answer3(){
            if(!toggle){
                showchat(true);
            }
            setTimeout(() => {
                qHelp("so3code");
            },10)
                
        }
                
    return (<>
    <div className="flex">
        <div className="ml-72 relative py-8 px-8 ">
        <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Sorting</h1>

            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#Choosing_sorting">Choosing the right Sorting method</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to="#Presence_Sorting">Where do we see Sorting</NavHashLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavHashLink to= "#CodedExamples_Sorting">Coded examples</NavHashLink>
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

            <p>Sorting data is the bread and butter of a programmer. For a refresher on different sorting techniques and the basics take a look at the appendix</p>

            <section>
                <article id="choosing_Sorting">
                    <div className="flex flex-row">
                <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Choosing The Right Sorting Algorithm</h3>
                <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                <p>While both Merge sort and Quick sort have the same time complexity of O(Nlog(n)) and the same problem may be solved by either, Some problems may suit one sorting algorithm better than the other (you may want to use a quick sort rather than a merge sort if space is an issue). To choose the right algorithm you may want to consider the following criteria.</p>
                <ul className="list-disc ml-4 px">
                    <li>
                    <b>How important is the ease of implementation for the algorithm?</b>
                    <br/>If you are working on a quick mock-up of an idea or testing a solution you might prefer to use an algorithm such as bubble sort that is quick to implement but might take longer to process information when compared to a bucket sort. This is a completely valid trade-off to make and often used to create a functional proof of concept for an idea where the sorting algorithm is just a helper rather than the focus.
                    </li>
                    <li>
                    <b>How much time/memory does the algorithm have to run/use?</b>
                    <br/>If your program needs to be extremely time efficient such as in the case of critical infrastructure, customer faced page loading and API calls, it makes sense to use an algorithm that gives you the quickest solution such as the aptly named Quick sort or the Radix sort. Instead, if the bottleneck is space rather than time such as the case in small onboard processors found in toys or Arduinos, you would rather use the slower but more space efficient bubble sort or Heap Sort.
                    </li>
                    <li>
                        <b>What Sort of data do you have to process</b>
                        <br/>This is perhaps the most important consideration to make. Does the data need to maintain stability? You'll need to modify the usual implementation of heap sort. Does the data consist of only numbers? Radix sort might be your best friend. On the other hand, if you're sorting nodes on a graph, there is little better than a topological sort.
                    </li>
                    <li>
                        <b>What Data Structure is used to store the information</b>
                        <br/>If the data is a part of an Array a selection based sorting system might be a lot better than an insertion based. On the other hand, the opposite is true for data stored as a linked list (See <Link to ="..\ArraysAndLists.tsx">Arrays and Linked Lists </Link> for more information).
                    </li>
                </ul>
                </article>

                <article id="Presence_Sorting">
                    <div className="flex flex-rpw">
                    <Tooltip content="This section contains some common use cases for Sorting in our surroundings for you to read." placement="right">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Where do we see Sorting?</h3>
                    </Tooltip>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <p>Sorting is perhaps the easiest to see in our everyday life. Some key characteristics of situations where one might encounter sorting are:</p>

                    <ul className="list-disc ml-4 px">
                        <li>
                        Whenever you see data in a hierarchy. For e.g, (List of classes taken by you are sorted based on year on the SSC.)
                        </li>
                        <li>
                        Whenever data needs to be analyzed, (Data from studies is often sorted based on when it was collected and what conditions the participant went through)
                        </li>
                        <li>
                        Other common areas of use of sorting are:
                        </li>
                        <ul className="list-disc ml-6 px">
                        <li>
                        Leaderboards on games
                        </li>
                        <li>
                        Your feed on social media is sorted and displayed based on your tendency to interact with it,
                        </li>
                        <li>
                        Posts on a online blog are often sorted based on upvotes and date.
                        </li>
                        <li>
                        Your student number itself is a result of the need to sort students based on when they were admitted and in what program.
                        </li>
                        </ul>
                    </ul>
                </article>

                <article id="CodedExamples_Sorting"> 
                <Tooltip content="This section contains some coded examples or personal and professional scenarios where you may need to implement sorting. Try it out yourself before taking a look at the solution." placement="right">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Coded Examples</h3>
                    </Tooltip>
                    <ul className="list-decimal ml-4 px">
                    <li>
                    <b>Professional Life: </b>You are trying to improve the music player application you were working on in the Arrays and Linked Lists page. To do so, you want to sort songs based on the number of times they are played. Each song is represented by a node in a linked list that contains <b>data</b> the song itself, <b>plays</b> an integer number of times the song has ben played. Design a method that sorts (ascending) the linked list in an efficient manner (based on time and space) and returns the head of the new list to enable this feature. You are provided the head node of the list. each data, plays pair is unique.
                    <br/>   <b>Example: Input:</b> list = [[a, 5],[b, 2], [c, 7]] <br/>
                            <b>Output:</b> list = [b, a, c] <br/> 
                            <b>Explanation:</b> Your function should return return the head of the sorted list. <br/>

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question1()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-So1" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                            <div>
                            The main focus of this problem is to encourage thinking about how the data structure of the information provided changes your choice of algorithm use. For the purpose of this solution we are using an insertion sort to make use of the efficient insertion property of a linked list.
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer1()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            </div>
                            <div>
                            <CodeMirror
                                value={So1}
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
                    <b>Professional Life: </b>You are a program manager in-charge of a group of developers. You have a list of <b>n</b> integers, <b>tasks</b> where tasks[i] represents the time taken to complete the ith job. You also have another list of <b>m</b> integers, <b>time</b> where time[i] represents the amount of work time the ith developer has. You can assign a task to a developer as long as the time they have is more than or equal to the time taken to complete the job. Each developer can only complete one job in the day. Write a program to find the maximum number of jobs you can make the developers do.
                    <br/>   <b>Example: Input:</b> tasks = [1,2,3], time = [1,1] <br/>
                            <b>Output:</b> 1 <br/> 
                            <b>Explanation:</b> You have 3 tasks but only one of them can be completed with the time that your developers have. As a result, you return 1. <br/>
                        
                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question2()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-So3" style="default">
                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                        This problem has been inspired from <a href="https://leetcode.com/problems/assign-cookies/"><u>leetcode 455</u></a>. The idea behind this problem may sound confusing but it essentially hinges on sorting two arrays and then comparing the to see how many jobs can be completed. In real life, the size of the data might dictate what method you use to compare the time taken as well as the format in which the time is supplied to you. For the purpose of the solution we are assuming that there isn't a lot of data and the time is provided as an integer number of hours. As such an Arrays.sort can be used.  
                        <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer2()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            <CodeMirror
                                value={So3}
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
                    <b>Personal Life: </b>You are given an array of strings <b>Item</b>, and an array <b>Cost</b> that consists of distinct positive integers. Both arrays are of length n. For each index i, Item[i] and Cost[i] denote the item name and cost for a list of gifts. Return names sorted in descending order by the cost to find out what the maximum number of gifts you can buy is with the money you have. You may use additional memory space to solve the problem.
                    <br/>   <b>Example: Input:</b>  items = ["tea","coffee","sugar"], costs = [180,165,170] <br/>
                            <b>Output:</b> ["tea","sugar","coffee"] <br/> 
                            <b>Explanation:</b> tea is the most expensive followed by sugar and then coffee. <br/>

                        {/* Help Button */}
                        <div id="Help">
                            <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => question3()}><img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                        </div>
                    <Tabs.Group className="mx-auto max-w-4xl " aria-label="Solutions-So2" style="default">

                        {/* User input code box */}
                        <Tabs.Item title="Try it Out!">
                            <CodeBox />
                        </Tabs.Item>
                        <Tabs.Item title="Solution">
                        This problem has been inspired from <a href="https://leetcode.com/problems/sort-the-people/"><u>leetcode 2418</u></a> . The idea behind this problem and many other problems of a similar nature is to sort one array based on the data from another array. There are 2 ways of solving this problem. The method that might come to mind first for most people is a brute force method. Yhe quicker method, however takes advantage of Java hashmaps and the ability for quicksport to be really efficient on numbers to provide an on average of 66% improvement in performance. (based on comparision of solutions to similar problems).<br/>
                        For more information on hash maps consider taking a look <a href = "https://www.w3schools.com/java/java_hashmap.asp">Here</a>   
                        <button className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center h-6"onClick={() => answer3()}> <img src={chaticon} alt="ask questions" height={20} width={20}/><span>Chat about this</span></button>
                            <CodeMirror
                                value={So2}
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
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Further Readings on Sorting</h3>
                    <p>If you're interested in learning more check out the following resources:</p>
                    <ul className="list-disc ml-4 px">
                        <li>
                            <a href="https://cs.lmu.edu/~ray/notes/sorting/"><u>This article</u></a> has some great information on different sorting techniques (including some fun but impractical ones).
                        </li>
                        <li>
                           Your class Notes for COSC 222 might be a great place to start.
                        </li>
                        <li>
                        An analysis of when to use common sorting algorithms is found <a href="https://medium.com/@kaustubhdwivedi1729/when-to-use-which-sorting-algorithm-125897e40295"><u>here</u></a>.
                        </li>
                    </ul>
                </article>
            </section>
            
            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />
            
            <section>
                <article>
                <h2 className="text-2xl py-4 font-bold text-sky-400 hover:text-gray-400">Appendix</h2>
                </article>

                <article id="What_Sorting">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">What is Sorting?</h3>
                    <p>Sorting is the practice of rearranging elements based on an arbitrary comparasion. This comparison may be based on importance, size, precedence etc.</p>
                </article>

                <article id="Types_Sorting">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Classification of Sorting algorithms</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                        </button>
                    </div>
                    <ul className="list-disc ml-4 px">
                        <li>
                        <b>Stable vs Unstable</b>: whether the sorting algorithm displays identical elements in the same order as the input.
                        </li>
                        <li>
                        <b>Internal vs External</b>: Based on the location of the data (Internal memory or Hard drives).
                        </li>
                        <li>
                        <b>Type of sorting</b> Comparison based sorting uses a comparator to define the ordering of elements. Examples include Merge sort, quick sort. Counting based sorting makes assumptions about the data being sorted and is often used to sort integers. Examples include Radix sort, Counting sort.
                        </li>
                        <li>
                            <b>In-place and Not-In-place</b> In place sorting does not use additional memory and instead does all processing on the input data itself. Not-In-place sorting requires additional memory space for processing.
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