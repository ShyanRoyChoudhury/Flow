import ReactFlow, { Edge, MiniMap, Node } from "reactflow";
import {
  Controls,
  /*Background,
  useNodesState,
  useEdgesState,*/
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { useState, useCallback } from "react";
import nodeTypes from "../nodes";
import "reactflow/dist/style.css";
// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 0, y: 0 },
//     type: "DelayBlock",
//   },
//   {
//     id: "2",
//     data: { label: "World" },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: "3",
//     type: "SequenceStart",
//     position: { x: 100, y: 200 },
//   },
//   {
//     id: "4",
//     data: { label: "Source" },
//     position: { x: 100, y: 300 },
//     type: "SourceNode",
//   },
//   {
//     id: "5",
//     position: { x: 200, y: 300 },
//     type: "EmailBlock",
//   },
//   {
//     id: "6",
//     position: { x: 300, y: 300 },
//     type: "AddBlock",
//   },
// ] satisfies Node[];

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {},
    type: "LeadSource",
  },
  {
    id: "2",
    type: "SequenceStart",
    position: { x: 100, y: 300 },
    data: {},
  },
  {
    id: "3",
    type: "AddBlock",
    position: { x: 150, y: 400 },
    data: {},
  },
  {
    id: "4",
    type: "SourceBlock",
    position: { x: 250, y: 400 },
    data: {},
  },
] satisfies Node[];

const initialEdges = [
  { id: "2-3", source: "2", target: "3", type: "custom-add-edge" },
] satisfies Edge[];

function VisualEditor() {
  //   const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <div
      style={{ height: "80vh", width: "100%" }}
      className="border rounded-md"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        style={{
          background: "#f2f2f2",
        }}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default VisualEditor;
