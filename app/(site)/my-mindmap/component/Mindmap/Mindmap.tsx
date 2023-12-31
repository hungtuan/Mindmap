import React, { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  ControlButton,
  useReactFlow,
  BackgroundVariant,
} from "reactflow";

import "reactflow/dist/style.css";
import "./text-updater-node.css";
import TextUpdaterNode from "./TextUpdaterNode";
import { useDispatch, useSelector } from "react-redux";
import { chartSlice } from "@/redux/slice/chartSlice";

// Data
const initialNodes = [
  {
    id: "0",
    data: {
      label: "My mindmap",
    },
    position: {
      x: 100,
      y: 100,
    },
    type: "textUpdater",
  },
];

const initialEdges = [];

let id = 1;
const getId = () => `${id++}`;

// Text update
const nodeTypes = { textUpdater: TextUpdaterNode };
// Action
const { setNodeData, setEdgesData } = chartSlice.actions;

const Mindmap = () => {
  // Hook
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const dispatch = useDispatch();

  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback((params) => {
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          type: "textUpdater",
          data: { label: `Text ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectingNodeId.current as string,
            target: id,
          })
        );
      }
    },
    [screenToFlowPosition]
  );

  useEffect(() => {
    dispatch(setNodeData(nodes));
    dispatch(setEdgesData(edges));
  }, [dispatch, nodes, edges]);

  return (
    <div
      style={{ width: "100%", height: "70vh", border: "1px solid white" }}
      className="wrapper"
      ref={reactFlowWrapper}
    >
      <p>Mô tả</p>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        nodeTypes={nodeTypes}
      >
        <Controls
          showZoom={false}
          showFitView={false}
          showInteractive={false}
          position="top-right"
        />
        <Controls></Controls>
        <MiniMap />

        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Mindmap;
