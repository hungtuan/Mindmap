import React, { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

function TextUpdaterNode({ data, isConnectable }) {
  const [value, setNodeValue] = useState(data.label);
  const [isActive, setIsActive] = useState(false);

  const onChange = useCallback((e) => {
    setNodeValue(e.target.value);
  }, []);

  const handleFocusInput = (e) => {
    e.stopPropagation();
    setIsActive((current) => !current);
  };

  return (
    <div className="text-updater-node">
      <div>
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          className="node-top"
        />
        <input
          id="text"
          name="text"
          onChange={onChange}
          className={isActive ? "nodrag edittable" : ""}
          value={value}
          onFocus={handleFocusInput}
        />
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="node-bottom"
      />
    </div>
  );
}

export default TextUpdaterNode;
