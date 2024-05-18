import ReactFlow, { Edge, MiniMap, Node } from "reactflow";
import { Controls, applyNodeChanges, applyEdgeChanges } from "reactflow";
import { useState, useCallback, useEffect } from "react";
import nodeTypes from "../nodes";
import edgeTypes from "@/edges";
import "reactflow/dist/style.css";
import { useSetRecoilState, useRecoilState } from "recoil";
import isModalOpen from "@/store/isModalOpen";
import activeNodeType from "@/store/activeNodeType";
import addNewNodeFunction from "@/store/addNewNodeFunction";

const initialNodes = [
  {
    id: "1",
    type: "AddBlock",
    position: { x: 150, y: 400 },
    data: {},
  },
  {
    id: "2",
    type: "SourceBlock",
    position: { x: 100, y: 100 },
    data: {},
  },
  {
    id: "3",
    type: "SequenceStart",
    position: { x: 100, y: 300 },
    data: {},
  },
] satisfies Node[];

const initialEdges = [
  // { id: "testedge", type: "step", source: "2", target: "3" },
] satisfies Edge[];
function VisualEditor() {
  const setModalOpen = useSetRecoilState(isModalOpen);
  const [activeNode, setActiveNodeType] = useRecoilState(activeNodeType);
  const setAddNewNodeFunction = useSetRecoilState(addNewNodeFunction);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    //@ts-expect-error typeerror to be fixed
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    //@ts-expect-error typeerror to be fixed
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    console.log(node);
    setActiveNodeType(node);
    setModalOpen(true);
  };

  const addNewNode = useCallback(
    (nodeType: string) => {
      if (activeNode) {
        const newNodeId = (nodes.length + 1).toString();

        const newNode = {
          id: newNodeId.toString(),
          data: {},
          position: {
            x: activeNode.position.x - 150,
            y: activeNode.position.y + 100,
          },
          type: nodeType,
        };

        const updatedAddLeadSourceNode = {
          ...activeNode,
          position: {
            x: activeNode.position.x + 150,
            y: activeNode.position.y,
          },
        };
        // @ts-expect-error typeerror in setnodes will fix that later
        setNodes((nds) =>
          nds
            .map((nd) =>
              nd.id === activeNode.id ? updatedAddLeadSourceNode : nd
            )
            .concat(newNode)
        );

        let lastNodeId;
        if (activeNode.id === "2") {
          lastNodeId = "3";
        } else {
          lastNodeId = nodes[nodes.length - 1].id;
        }
        //@ts-expect-error type error. requires fix
        setEdges((eds) => [
          ...eds,
          {
            id: `edge-${activeNode.id}-${newNodeId}`,
            source: lastNodeId.toString(),
            target: newNodeId,
            type: "step",
          },
        ]);
        console.log(nodes);
        setModalOpen(false); // Close modal after adding node
      }
    },
    [activeNode, nodes, setModalOpen]
  );

  useEffect(() => {
    setAddNewNodeFunction(() => addNewNode);
  }, [setAddNewNodeFunction, addNewNode]);

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
        edgeTypes={edgeTypes}
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
