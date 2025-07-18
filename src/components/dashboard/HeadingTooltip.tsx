import React from "react";

interface HeadingTooltipProps {
  description: string;
  children: React.ReactNode;
}

const HeadingTooltip: React.FC<HeadingTooltipProps> = ({ description, children }) => (
  <span className="relative group inline-flex items-center">
    {children}
    <span className="ml-1 cursor-help text-blue-400 group-hover:text-blue-700">
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline align-middle">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">?</text>
      </svg>
    </span>
    <span className="absolute left-1/2 bottom-full z-20 hidden group-hover:flex w-max min-w-[180px] max-w-xs -translate-x-1/2 mb-2 px-3 py-2 rounded bg-black text-white text-xs shadow-lg transition-all duration-200" style={{ pointerEvents: 'auto', whiteSpace: 'normal' }}>
      {description}
    </span>
  </span>
);

export default HeadingTooltip;
