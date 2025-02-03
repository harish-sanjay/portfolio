import React from 'react'

const ToolTip = ({text, children}) => {
  return (
    <div className="relative inline-block group">
        {children}
    <div className="absolute bg-black text-white
    py-4 px-2 rounded-xl text-sm z-10 hidden
    ">{text}</div>
  </div>
  );
}

export default ToolTip
