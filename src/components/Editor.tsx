
import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
// import "./styles.css";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  // @ts-expect-error ignore
  const handleChange = value => {
    setState({ value });
  };
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