import { Alert, Navbar } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import chaticon from "~/images/chaticon.png";
import Chatbox from "~/components/Chatbox";
 
export default function ArraysorLists(){
    // Google Analytics pageview count.
    useEffect(() =>{
        ReactGA.initialize("G-9F3RXX9YGW");
        ReactGA.send({hitType: "pageview", page: window.location.pathname})
      }, [])
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
      //State Hook to enable/disable chatbox
      const [toggle, showchat] = useState(false);

    return(<>
    <div className="flex">
    <div className="ml-72 relative py-8 px-8 ">
            <header id="top">
            <h1 className="relative text-center text-sky-400 text-3xl h-12">Should I use an Array or a Linked List?</h1>
            {/* Top navigation menu */}
            <Navbar fluid={true} rounded={true} className="flex flex-row">
                <Navbar.Collapse>
                <Navbar.Link>
                    <NavHashLink to="#WhichToUse">Which ones should I use</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#dataEff">Based on data efficiency</NavHashLink>   
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#sorting">For Sorting</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#searching">For Searching</NavHashLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavHashLink to="#InsDel">For Insertion and Deletion</NavHashLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </header>

            <hr className="h-0.5 px my-8 bg-sky-600 border-0 dark:bg-sky-400" />

            <section>

                <article id="WhichToUse">
                    <p>Deciding on what data structure to use depends on the problem you are trying to solve. Both Arrays and Linked lists have their own strong suits as discussed above</p>
                </article>

                <article id="dataEff">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Based on Data efficiency</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>An array makes sense to use when we know the exact number of elements and the size of each element we wish to store as we can make use of the efficiency of continuous memory.</p>
                    <Alert color="info">
                        <span>
                        While it may look like an ArrayList in java allows us to define an array without specifying the size, whenever we insert an element to a filled ArrayList, it simply copies the Array into a new list with a higher allocated space.
                        </span>
                    </Alert>
                    <p>
                    However, when we don't know the exact number of elements that would be store Linked Lists make the most sense as we can free up the space that would otherwise be wasted.

                    As the size of each element increases, the benefit gained from the dynamic nature of linked lists also increases.<br/> For example: Assuming each element is 24 bytes long, and we expect to have at most 30 elements. An Array will allocate 24*30 = 720 Bytes.
                    <br/><b>In case of a Linked list, If all elements are stored:</b>
                    <br/>Singly-Linked list = (24+4)*30 = 840 Bytes.
                    <br/>Doubly-Linked list = (24+4+4)*30 = 960 Bytes.
                    <br/><b>In case of a Linked list, If only half the elements are filled</b>
                    <br/>Singly-Linked list = (24+4)*15 = 420 Bytes
                    <br/>Doubly-Linked list = (24+4+4)*15 = 480 Bytes.
                    </p>
                </article>

                <article id="sorting">

                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Based on Sorting efficiency</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>
                        When it comes to sorting algorithms, there is no clear winner between Arrays and linked lists for all algorithms.
                        Quicksort or other in-place searching algorithms that benefit from random access nature of an Array will work better on Arrays than on Linked Lists. While Merge sort or other searching algorithms that depend on the ability to insert data in the middle of a data structure will be better on Linked lists as data doesn't need to be copied to allow for insertion in the middle.
                    </p>
                </article>

                <article id="searching">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Based on Searching efficiency</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>
                        Searching is an area where Arrays almost always perform the same if not better than a Linked list. A notable exception being that searching backwards is quicker on a Circular list than it is on an Array as we can traverse backwards rather than having to run through an array again and again.
                    </p>
                </article>

                <article id="InsDel">
                    <div className="flex flex-row">
                    <h3 className="text-xl py-2 font-medium text-sky-400 hover:text-gray-400">Based on data insertion and deletion efficiency</h3>
                    <button type="button" id="startChat" className="self-center text-white filter grayscale hover:filter-none hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-6" onClick={() => topic()}>
                            <img src={chaticon} alt="ask questions" height={20} width={20}/>
                            <span>Chat about this</span>
                    </button>
                    </div>
                    <p>
                        Inserting and deleting is on average easier on a Linked list than on an Array as the overhead needed to change the pointers is much less than that needed to copy and paste data from one array to another.
                    </p>
                </article>
            </section>

            {/* Regular chatbox at the bottom right of the page */}
            <div id="chatbox" className="fixed bottom-28 left-6">
                
                {/* Display chatbox based on togle value */}
                {/* {[toggle && <Chatbox/>]}  */}
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