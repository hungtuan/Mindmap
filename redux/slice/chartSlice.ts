import { createSlice } from "@reduxjs/toolkit";

type DataMindMap = {
  nodes: null;
  edges: null;
};

const initialState: DataMindMap = {
  nodes: null,
  edges: null,
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setNodeData: (state, action) => {
      state.nodes = action.payload;
    },

    setEdgesData: (state, action) => {
      state.edges = action.payload;
    },
  },
});
