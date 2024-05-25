
import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";



// import "./styles.css";
interface EditorProps{
  handleEditorChange: (value: string) => void
}
export const Editor: React.FC<EditorProps> = ({handleEditorChange}) => {
  const [state, setState] = React.useState({ value: null });
  // @ts-expect-error ignore
  const handleChange = value => {
    setState({ value });
    handleEditorChange(HTMLPartToTextPart(value))
  };
  
  // @ts-expect-error ignore
  const HTMLPartToTextPart = (HTMLPart) => (
    HTMLPart
      .replace(/\n/ig, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style[^>]*>/ig, '')
      .replace(/<head[^>]*>[\s\S]*?<\/head[^>]*>/ig, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script[^>]*>/ig, '')
      .replace(/<\/\s*(?:p|div)>/ig, '\n')
      .replace(/<br[^>]*\/?>/ig, '\n')
      .replace(/<[^>]*>/ig, '')
      .replace('&nbsp;', ' ')
      .replace(/[^\S\r\n][^\S\r\n]+/ig, ' ')
  );

  
  return (
    <div className="text-editor  rounded-t-none rounded-lg bg-white overflow-y-auto">
      <EditorToolbar/>
      <ReactQuill
        theme="snow"
        // @ts-expect-error ignore
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        className=""
      />
    </div>
  );
};

export default Editor;