import { Sidebar } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";

export default function LeftNav() {
    return  (
    <nav className="flex h-screen shadow-md absolute">
      {/* Left hand navigation menu 
      NOTE: NavHashLink may not work perfectly on all browsers.*/}
        <Sidebar aria-label="Sidebar" className=" text-lg py-12 px-0 break-words text-gray-700 text-ellipsis whitespace-wrap rounded">
    <Sidebar.Items>
      {/* Return to home */}
      <Sidebar.ItemGroup className="break-words bg-sky-200 text-gray-700 text-ellipsis whitespace-wrap rounded transition duration-300 ease-in-out">
        <Sidebar.Item 
          href="../../"
        >
          Practicing Data Structures
        </Sidebar.Item >
        {/* Dropdown for all page related to arrays and lists */}
        <Sidebar.Collapse 
          label="Arrays and Lists"
        >
          {/* Arrays */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Arrays/#top">
            Arrays</NavHashLink>
          </Sidebar.Item>
          {/* Lists */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Lists/#top">
            Lists</NavHashLink>
          </Sidebar.Item>
          {/* Arrays or Lists */}
          <Sidebar.Item>
            <NavHashLink to="../Material/ArraysorLists/#top">
            Arrays VS Lists</NavHashLink>
          </Sidebar.Item>
          {/* Dropdown for all pges related to stacks and queues  */}
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Stacks and Queues">
            {/* Stacks */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Stacks/#top">
            Stacks</NavHashLink>
          </Sidebar.Item>
          {/* queues */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Queues/#top">Queues</NavHashLink>
          </Sidebar.Item>
          </Sidebar.Collapse>
          {/* trees */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Trees/#top">
            Trees</NavHashLink>
          </Sidebar.Item>
          {/* sorting */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Sorting/#top">
            Sorting</NavHashLink>
          </Sidebar.Item>
          {/* Practice Problems */}
          <Sidebar.Item>
            <NavHashLink to="../Material/Misc/#top">
            Additional Practice Problems</NavHashLink>
          </Sidebar.Item>
        {/* <Sidebar.Item 
          href="#"
        >
          Feedback
        </Sidebar.Item>
        <Sidebar.Item 
          href="#"
        >
         Help
        </Sidebar.Item> */}
      </Sidebar.ItemGroup>
    </Sidebar.Items>
      </Sidebar>
        
           </nav> 
    )
}