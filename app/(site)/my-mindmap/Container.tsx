"use client";
import React from "react";
import { ReactFlowProvider } from "reactflow";
import Header from "./component/Header/Header";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Mindmap from "./component/Mindmap/Mindmap";
export default function Container() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <div className="relative mx-auto mt-22 max-w-c-1390 px-4  md:px-8 2xl:px-0">
          <Header />
          <ReactFlowProvider>
            <Mindmap />
          </ReactFlowProvider>
        </div>
      </NextUIProvider>
    </Provider>
  );
}
