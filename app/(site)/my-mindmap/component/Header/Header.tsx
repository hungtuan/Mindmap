import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

import { useState, useEffect } from "react";
import ToasterContext from "@/app/context/ToastContext";
import toast from "react-hot-toast";

const Header = () => {
  const nodes = useSelector((state: RootState) => state.chart.nodes);
  const edges = useSelector((state: RootState) => state.chart.edges);

  const handleSave = async (e) => {
    try {
      const apiUrl = "https://rygnft-8080.csb.app/files";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      if (response.ok) {
        // Request was successful
        console.log("Data saved successfully!");
      } else {
        // Request failed
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {}
  };

  return (
    <div className="flex justify-between">
      <p className="text-2xl mb-3 font-bold text-black">Mindmap của tôi</p>
      <button
        onClick={handleSave}
        className="border-2 inline-flex items-center mb-1 mr-1  py-1 px-2 text-sm rounded text-white border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700"
      >
        <FontAwesomeIcon icon={faSave} />
        <span className="ml-2">Lưu thay đổi</span>
      </button>
    </div>
  );
};

export default Header;
