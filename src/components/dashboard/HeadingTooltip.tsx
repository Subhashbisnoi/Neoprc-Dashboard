import React, { useRef, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

interface HeadingTooltipProps {
  description: string;
  children: React.ReactNode;
}

const HeadingTooltip: React.FC<HeadingTooltipProps> = ({ description, children }) => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (show && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2,
        top: rect.top,
      });
    }
  }, [show]);

  return (
    <span
      className="relative inline-flex items-center"
      ref={triggerRef}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      <span className="ml-1 cursor-help text-blue-400 hover:text-blue-700 focus:text-blue-700">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline align-middle">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">?</text>
        </svg>
      </span>
      {show && coords && ReactDOM.createPortal(
        <span
          className="fixed z-[99999] w-max min-w-[180px] max-w-xs px-3 py-2 rounded bg-black text-white text-xs shadow-lg transition-all duration-200"
          style={{
            left: coords.left,
            top: coords.top - 12,
            transform: 'translate(-50%, -100%)',
            pointerEvents: 'auto',
            whiteSpace: 'normal',
          }}
        >
          {description}
        </span>,
        document.body
      )}
    </span>
  );
};

export default HeadingTooltip;
