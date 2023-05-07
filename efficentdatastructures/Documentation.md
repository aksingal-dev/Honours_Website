# Honours Project- Exposure to Efficient Data Structure implementations

---

- [Honours Project- Exposure to Efficient Data Structure implementations](#honours-project--exposure-to-efficient-data-structure-implementations)
  - [Development Stack](#development-stack)
  - [Session Variables](#session-variables)
  - [/components](#components)
    - [Chat\_btn.tsx](#chat_btntsx)
    - [Chat\_func.tsx](#chat_functsx)
    - [Chatbox.tsx](#chatboxtsx)
    - [CodeBox.tsx](#codeboxtsx)
    - [LeftNav.tsx](#leftnavtsx)
    - [Login.tsx](#logintsx)
    - [text.tsx](#texttsx)
  - [Images](#images)
  - [Routes](#routes)

---

This file isa  documentation of the code found under the app folder. Each level 2 heading refers to a sub folder and each level 3 heading refers to a file under that specific folder. For detailed breakdown of code take a look at the inline documentation of the specific file.

## Development Stack

Remix framework built on react [documentation](https://remix.run/)
TypeScript [documentation](https://www.typescriptlang.org/docs/)
Tailwind CSS [documentation](https://v2.tailwindcss.com/docs)
Flowbite React Components [documentation](https://flowbite-react.com/)

---

## Session Variables

| Value | Meaning                   |
|-------|---------------------------|
| 0     | General                   |
| 1     | Arrays Q1                 |
| 1.1   | Arrays A1                 |
| 2     | Arrays Q2                 |
| 2.1   | Arrays A2                 |
| 3     | Lists Q1                  |
| 3.1   | Lists A1                  |
| 4     | Lists Q2                  |
| 4.1   | Lists A2                  |
| 5     | Stacks Q1                 |
| 5.1   | Stacks A1                 |
| 6     | Stacks Q2                 |
| 6.1   | Stacks A2                 |
| 7     | Queues Q1                 |
| 7.1   | Queues A1                 |
| 8     | Queues Q2                 |
| 8.1   | Queues A2                 |
| 9     | Sorting Q1                |
| 9.1   | Sorting A1                |
| 10    | Sorting Q2                |
| 10.1  | Sorting A2                |
| 11    | Sorting Q3                |
| 11.1  | Sorting A3                |
| 12    | Trees Q1                  |
| 12.1  | Trees A1                  |
| 13    | Trees Q2                  |
| 13.1  | Trees A2                  |
| 14    | Trees Q3                  |
| 14.1  | Trees A3                  |
| 15    | Additional Problems Q1    |
| 15.1  | Additional Problems A1 (A)|
| 15.2  | Additional Problems A1 (B)|
| 16    | Additional Problems Q2    |
| 16.1  | Additional Problems A2    |
| 17    | Additional Problems Q3    |
| 17.1  | Additional Problems A3    |
| 18    | Additional Problems Q4    |
| 18.1  | Additional Problems A4    |

|Variable             | Meaning |
|---------------------|---------|
| questionNumber      | Keeps a track of the current question/code being talked about |
| map-(questionNumber)| Keeps a record of the entire conversation to send as context and rehydrate window.|

## /components

Each file under this folder is a reusable code snippet implemented throughout the webpages.

### Chat_btn.tsx

This is a button component at the bottom of the page used to show/hide the AI chat.

```javaScript
export default function Chat_btn()
```

The main function returning  button component used to access the AI chat.

### Chat_func.tsx

This is a helper function that connects to the [OpenAI API](https://platform.openai.com/docs/api-reference/chat/create) and enables chat responses.

```javascript
export async function getOpenAIRes(message: string)
```

An asynchronous function used to get a response from the OpenAI chat API.

Input:

```code
message: string - A chat message typed by the user in the chat window.
```

Output:

```code
data: json - A json object that contains the response from the API
```

```javascript
 const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <API Key>',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    });
```

Input:

```code
response: API Response json - a response from the OpenAI API
url: string - The API endpoint being used 
method: string - Most OpenAI requests are made using a POST request.
headers:
    content-Type: string - type of response being requested
    Authorization: string - your unique API key.
body: String - a string representation of the request json
    model: string - different API endpoints use different language models to respond the OpenAI documentation has more information.
    message: key-value pair - a message must have a role (string) used by OpenAI to prevent missuse and content(string) the question being asked to the chat AI.
```

### Chatbox.tsx

This component is the chat window that records user input and displays the response from the AI.

```javascript
async function getRes(event: any)
```

An asynchronous function called on button click to get a response from the AI using the getOpenAIRes function from Chat_func.tsx.

Input:

```code
event: buttonclick
```

Output: Null

```javascript
export const qHelp = (questions: String) =>
```

An arrow function used to display the preselected response for the "Tell me more" button on each question. The response is displayed in the chat window. We use a preselected response to ensure consistency related to question help and make sure the response is not an answer but rather a guide.

Input:

```code
questions: string - an identifier for the question that user is asking help for. Used to display the appropriate response.
```

Output: Null

```javascript
export default function Chatbox()
```

Main function used to render the chat box.

Input:null

Output: The chat box component.

### CodeBox.tsx

This component is a code window that uses codemirror to allow users to write their own solutions to the given problem using java. For information on codemirror refer to the [codemirror documentation](https://codemirror.net/docs/).

```javascript
export default function CodeBox()
```

Main function used to render the codespace.

Input: Null

Output: CodeBox component

### LeftNav.tsx

This component is the left hand navigation menu present throughout the website.

```javascript
export default function LeftNav()
```

Main function used to render the left hand navigation menu.

Input: Null

Output: LeftNav component

### Login.tsx

This component is the login form. It is currently unimplemented in the backend as is not displayed to the users.

```javascript
export default function Login()
```

Main function used to render the login form.

Input: Null

Output: Login Component

### text.tsx

This component contains all text nodes such as answers to practice questions, helped methods for questions, generic help message used in the chat, and preprogrammed responses to help for each practice question.

---

## Images

Images used throughout the website.

---

## Routes

All webpages are stored here.
