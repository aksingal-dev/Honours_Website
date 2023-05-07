import { java } from "@codemirror/lang-java";
import { basicSetup } from 'codemirror';
import CodeMirror from "@uiw/react-codemirror";
import {dracula} from "@uiw/codemirror-theme-dracula"

export default function CodeBox() {
    return (
      // Value:   string - placeholder data
      // height:  string - height of code window
      // width:   string - width of the code window
      //theme:    object - predefined look of the window
      //extensions: array - list of optional parameters such as language support and settup. 
        <CodeMirror
          value="try it out!"
          height="600px"
          width="896px"
          theme={dracula}
          extensions={[java(), basicSetup]}
        />
      );
}
