import { useState } from "react";
import Chatbox from "./Chatbox";
import chaticon from "~/images/chaticon.png";

export default function Chat_btn(){
    // A state hook used to show/hide the chat window. The window is hidden by default (toggle=false). This value is changed as an onClick event on the Chat_btn.
    const [toggle, showComp] = useState(false);
    return(
        <>
        <div id="chatbox" className="fixed bottom-28 right-6">
            {/* Render/hide the Chatbox component based on the value of the toggle. */}
            {[toggle && <Chatbox/>]}
            <button type="button" id="startChat" className="fixed bottom-8 right-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => showComp(!toggle)}>
               <img src={chaticon} alt="ask questions" height={50} width={50}/>
                <span className="sr-only">Start a chat</span>
            </button>
            </div>
        </>
    )
}