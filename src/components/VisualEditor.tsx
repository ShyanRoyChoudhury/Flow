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
import { useSetRecoilState } from "recoil";
import isModalOpen from "@/store/isModalOpen";
import activeNodeType from "@/store/activeNodeType";

const initialNodes = [
  {
    id: "1",
    type: "SourceBlock",
    position: { x: 100, y: 100 },
    data: {},
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
] satisfies Node[];

const initialEdges = [
  { id: "2-3", source: "2", target: "3", type: "custom-add-edge" },
] satisfies Edge[];

function VisualEditor() {
  //   const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const setModalOpen = useSetRecoilState(isModalOpen);
  const setActiveNodeType = useSetRecoilState(activeNodeType);
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
  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    console.log(node);
    setActiveNodeType(node.type);
    setModalOpen(true);
  };

  return (
    <div
      style={{ height: "80vh", width: "100%" }}
      className="border rounded-md"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
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
