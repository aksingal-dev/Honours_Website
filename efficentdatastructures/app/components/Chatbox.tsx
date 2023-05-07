import {getOpenAIRes} from "~/components/Chat_func"; 
import * as text from "./Text";
import { Alert } from "flowbite-react";
import React from "react";

interface ChatLog {
     user: string;
     assistant: string;
 }

    // Define an object to hold the maps for different questions
    const chatLogs: { [key: string]: ChatLog[] } = {};
      
    // Add a new chat log to the map for a specific question
function addChatLog(question: string, chatLog: ChatLog) {
    if (!chatLogs[question]) {
        chatLogs[question] = [];
    }
    chatLogs[question].push(chatLog);

    var userq = document.createElement('li');
        userq.className = "border border-sky-600 text-white bg-sky-600 p-1 rounded-lg text-base";
        userq.innerHTML = chatLog.user;
        document.getElementById('chatLog')?.appendChild(userq);
    
    var ans = document.createElement('li');
        ans.className = "border border-gray-600 bg-gray-300 text-right p-1 rounded-lg text-base";
        ans.innerHTML = chatLog.assistant;
        document.getElementById('chatLog')?.appendChild(ans);

}

function clearLog(){
    var log = document.getElementById("chatLog");
    while(log?.firstChild){
        log.removeChild(log?.firstChild);
    }
}

async function getRes(event: any){
    event.preventDefault();
    console.log(event.target.chatmessage.value);
    
    // Checking for edge case of empty message being sent over to the API.
    if(!(event.target.chatmessage.value == "")){
        // Takes the user input and displays it in the chat window by creating a new list element and appending it to the document. 
        // var userq = document.createElement('li');
        // userq.className = "border border-sky-600 text-white bg-sky-600 p-1 rounded-lg text-base";
        // userq.innerHTML = event.target.chatmessage.value;
        // document.getElementById('chatLog')?.appendChild(userq);
        
        //Get response from OpenAI
        var temp = sessionStorage.getItem('questionNumber')
        var questionNumber = temp? parseInt(temp) :0;
        const prevContext = JSON.parse(sessionStorage.getItem(`map-${questionNumber}`) || '{}');
        const response = await getOpenAIRes(event.target.chatmessage.value, prevContext);

        //Display the response to the user in the chat window by creating a new list element and appending it to the document.
        console.log(response.choices[0].text.content);
        console.log(response.choices[0].text);
        // var ans = document.createElement('li');
        // ans.className = "border border-gray-600 bg-gray-300 text-right p-1 rounded-lg text-base";
        // ans.innerHTML = response.choices[0].message.content;
        // document.getElementById('chatLog')?.appendChild(ans);

        addChatLog(questionNumber.toString(), {
            user: event.target.chatmessage.value,
            assistant: response.choices[0].text
        });

        // Update the session variable with the new map
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));

    }
}
export const qHelp = (questions: String) => {
    var temp = sessionStorage.getItem('questionNumber');
    var questionNumber = temp? parseInt(temp) :0;
    //Displays the generic help message in the chat by creating a new list element and appending it to the document.
    // var userq = document.createElement('li');
    // userq.className = "border border-sky-600 text-white bg-sky-600 p-1 rounded-lg text-base";
    // userq.innerHTML = help;
    // document.getElementById('chatLog')?.appendChild(userq);
    // console.log(help);

    //Display the preprogrammed answer based on question id in the chat by creating a new list element and appending it to the document.
   // var caller = document.createElement('li');
    //caller.className = "border border-gray-600 p-1 rounded-lg text-base";
    // Identify the right string using question ID and change the content of the display element 
    //arrays
    if(questions === "a1"){
        //caller.innerHTML = a1Help;
       // console.log(questionNumber);
       if(questionNumber !== 1){
          <div> This will delete your current progress</div>
            clearLog();}
            questionNumber = 1;
            addChatLog(questionNumber.toString(), {
                user: text.A1Q,
                assistant: text.a1Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
      
      
       
    }
    else if(questions === "a1code"){
        if (questionNumber !== 1.1){
            clearLog();}
            questionNumber = 1.1;
            addChatLog(questionNumber.toString(), {
                user: "explain this code to me please" + text.A1,
                assistant: text.A1CodeExp
            });
        
        
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "a2"){
      //  caller.innerHTML = a2Help;
        console.log(questionNumber);
        if(questionNumber !== 2){
            clearLog();}
            questionNumber = 2;
            addChatLog(questionNumber.toString(), {
                user: text.A2Q,
                assistant: text.a2Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "a2code"){
        if (questionNumber !== 2.1){
            clearLog();}
            questionNumber = 2.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.A2,
            assistant: text.A2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //lists
    else if(questions === "l1"){
      //  caller.innerHTML = l1Help;
        if(questionNumber !== 3){
                clearLog();}
                questionNumber = 3;
                addChatLog(questionNumber.toString(), {
                    user: text.L1Q,
                    assistant: text.l1Help
                });
        
                sessionStorage.setItem('questionNumber',questionNumber.toString());
                sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        

    }
    else if(questions === "l1code"){
        if (questionNumber !== 3.1){
            clearLog();}
            questionNumber = 3.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.L1,
            assistant: text.L1CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "l2"){
      //  caller.innerHTML = l2Help;
        if(questionNumber !== 4){
            clearLog();}
            questionNumber = 4;
            addChatLog(questionNumber.toString(), {
                user: text.L2Q,
                assistant: text.l2Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "l2code"){
        if (questionNumber !== 4.1){
            clearLog();}
            questionNumber = 4.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.L2,
            assistant: text.L2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //stacks
    else if(questions === "s1"){
      //  caller.innerHTML = s1Help;
        if(questionNumber !== 5){
            clearLog();}
                questionNumber = 5;
                addChatLog(questionNumber.toString(), {
                    user: text.S1Q,
                    assistant: text.s1Help
                });
        
                sessionStorage.setItem('questionNumber',questionNumber.toString());
                sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "s1code"){
        if (questionNumber !== 5.1){
            clearLog();}
            questionNumber = 5.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.S1,
            assistant: text.S1CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "s2"){
      //  caller.innerHTML = s2Help;
        if(questionNumber !==6){
            clearLog();}
            questionNumber = 6;
            addChatLog(questionNumber.toString(), {
                user: text.S2Q,
                assistant: text.s2Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "s2code"){
        if (questionNumber !== 6.1){
            clearLog();}
            questionNumber = 6.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.S2,
            assistant: text.S2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //queues
    else if(questions === "q1"){
      //  caller.innerHTML = q1Help;
        if(questionNumber !== 7){
            clearLog();}
                questionNumber = 7;
                addChatLog(questionNumber.toString(), {
                    user: text.Q1Q,
                    assistant: text.q1Help
                });
        
                sessionStorage.setItem('questionNumber',questionNumber.toString());
                sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "q1code"){
        if (questionNumber !== 7.1){
            clearLog();}
            questionNumber = 7.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.Q1,
            assistant: text.Q1CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "q2"){
       // caller.innerHTML = q2Help;
        if(questionNumber !== 8){
            clearLog();}
            questionNumber = 8;
            addChatLog(questionNumber.toString(), {
                user: text.Q2Q,
                assistant: text.q2Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "q2code"){
        if (questionNumber !== 8.1){
            clearLog();}
            questionNumber = 8.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.Q2,
            assistant: text.Q2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //sorting
    else if(questions === "so1"){
      //  caller.innerHTML = so1Help;
        if(questionNumber !== 9){
            clearLog();}
                questionNumber = 9;
                addChatLog(questionNumber.toString(), {
                    user: text.So1Q,
                    assistant: text.so1Help
                });
        
                sessionStorage.setItem('questionNumber',questionNumber.toString());
                sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "so1code"){
        if (questionNumber !== 9.1){
            clearLog();}
            questionNumber = 9.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.So1,
            assistant: text.So1CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "so2"){
      //  caller.innerHTML = so2Help;
        if(questionNumber !== 10){
            clearLog();}
                questionNumber = 10;
                addChatLog(questionNumber.toString(), {
                    user: text.So2Q,
                    assistant: text.so2Help
                });
        
                sessionStorage.setItem('questionNumber',questionNumber.toString());
                sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "so2code"){
        if (questionNumber !== 10.1){
            clearLog();}
            questionNumber = 10.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.So2,
            assistant: text.So2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "so3"){
      //  caller.innerHTML = so3Help;
        if(questionNumber !== 11){
            clearLog();}
            questionNumber = 11;
            addChatLog(questionNumber.toString(), {
                user: text.So3Q,
                assistant: text.so3Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "so3code"){
        if (questionNumber !== 11.1){
            clearLog();}
            questionNumber = 11.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.So3,
            assistant: text.So3CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //Trees
    else if(questions === "t1"){
       // caller.innerHTML = t1Help;
        if(questionNumber !== 12){
            clearLog();}
            questionNumber = 12;
            addChatLog(questionNumber.toString(), {
                user: text.T1Q,
                assistant: text.t1Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "t1code"){
        if (questionNumber !== 12.1){
            clearLog();}
            questionNumber = 12.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.T2,
            assistant: text.T2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "t2"){
      //  caller.innerHTML = t2Help;
        if(questionNumber !== 13){
            clearLog();}
            questionNumber = 13;
            addChatLog(questionNumber.toString(), {
                user: text.T2Q,
                assistant: text.t2Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "t2code"){
        if (questionNumber !== 13.1){
            clearLog();}
            questionNumber = 13.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.T1,
            assistant: text.T1CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "t3"){
       // caller.innerHTML = t3Help;
        if(questionNumber !== 14){
            clearLog();}
            questionNumber = 14;
            addChatLog(questionNumber.toString(), {
                user: text.T3Q,
                assistant: text.t3Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "t3code"){
        if (questionNumber !== 14.1){
            clearLog();}
            questionNumber = 14.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.T3,
            assistant: text.T3CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //Additional questions
    else if(questions === "m1"){
      //  caller.innerHTML = m1Help;
        if(questionNumber !== 15){
            clearLog();}
            questionNumber = 15;
            addChatLog(questionNumber.toString(), {
                user: text.M1Q,
                assistant: text.m1Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "m1_a_code"){
        if (questionNumber !== 15.1){
            clearLog();}
            questionNumber = 15.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.M1_a,
            assistant: text.M1aCodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "m1_b_code"){
        if (questionNumber !== 15.2){
            clearLog();}
            questionNumber = 15.2;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.M1_b,
            assistant: text.M1bCodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "m2"){
      //  caller.innerHTML = m2Help;
        if(questionNumber !== 16){
            clearLog();}
            questionNumber = 16;
            addChatLog(questionNumber.toString(), {
                user: text.M2Q,
                assistant: text.m2Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "m2code"){
        if (questionNumber !== 16.1){
            clearLog();}
            questionNumber = 16.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.M2,
            assistant: text.M2CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "m3"){
     //   caller.innerHTML = m3Help;
        if(questionNumber !== 17){
            clearLog();}
                questionNumber = 17;
                addChatLog(questionNumber.toString(), {
                    user: text.M3Q,
                    assistant: text.m3Help
                });
        
                sessionStorage.setItem('questionNumber',questionNumber.toString());
                sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
        
    }
    else if(questions === "m3code"){
        if (questionNumber !== 17.1){
            clearLog();}
            questionNumber = 17.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.M3,
            assistant: text.M3CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "m4"){
      //  caller.innerHTML = m4Help;
        if(questionNumber !== 18){
            clearLog();}
            questionNumber = 18;
            addChatLog(questionNumber.toString(), {
                user: text.M4Q,
                assistant: text.m4Help
            });
    
            sessionStorage.setItem('questionNumber',questionNumber.toString());
            sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    else if(questions === "m4code"){
        if (questionNumber !== 18.1){
            clearLog();}
            questionNumber = 18.1;
        addChatLog(questionNumber.toString(), {
            user: "explain this code to me please" + text.M4,
            assistant: text.M4CodeExp
        });
        sessionStorage.setItem('questionNumber',questionNumber.toString());
        sessionStorage.setItem(`map-${questionNumber}`, JSON.stringify(chatLogs[questionNumber.toString()]));
    }
    //Append to chat window.
   // document.getElementById('chatLog')?.prepend(caller);
   // console.log(caller.innerHTML);

}
export default function Chatbox() {
    //Const variables
    var temp = sessionStorage.getItem('questionNumber');
    var questionNumber = temp? parseInt(temp) :0;
    return(
        <div className="w-full max-w-md h-screen bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
        {/* <div className="flex items-center justify-between mb-4"> */}
            <h5 className="text-2xl text-center font-bold leading-none bg-white text-gray-900 dark:text-white w-80 -mt-8 py-1">Chat</h5>
        {/* </div> */}
        {/* Chat window propogated using getRes and qhelp */}
        <div className="flow-root mb-4 pt-6" >
            <ul role="list" id="chatLog" className="divide-y divide-gray-200 dark:divide-gray-700 text-base">
            {chatLogs[`map-${questionNumber}`]?.map((chatLog, index) => (
            <li key={index} className={`chatlog-${index}`}>
              <div className="border border-sky-600 text-white bg-sky-600 p-1 rounded-lg text-base">{chatLog.user}</div>
              <div className="border border-gray-600 bg-gray-300 text-right p-1 rounded-lg text-base">{chatLog.assistant}</div>
            </li>
          ))}
            </ul>
        </div>
        <div className="absolute bottom-0 pt-2">
            
            {/* User Chat Input */}
            <form onSubmit={getRes} className="flex flex-row"> 
            <input type="text" name="chatmessage" className=" rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-56 text-sm p-2.5" placeholder="Ask the Bot"/>
            <button type="submit" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send</button>
            </form>
        </div>
        </div>
    )
}
