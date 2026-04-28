import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';

const Window = ({ id, title, icon: Icon, children, onClose, isActive, onFocus }) => {
  const [position, setPosition] = useState({ x: 50 + Math.random() * 50, y: 50 + Math.random() * 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    onFocus(id);
    if (isMaximized) return;
    
    // Only drag from header
    if (e.target.closest('.window-header')) {
      setIsDragging(true);
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      ref={windowRef}
      onMouseDown={handleMouseDown}
      className={`absolute flex flex-col bg-[#f0f0f0] border border-gray-400 window-shadow overflow-hidden transition-all duration-200 ease-out ${
        isActive ? 'z-40' : 'z-30'
      } ${
        isMaximized 
          ? 'top-0 left-0 w-full h-[calc(100vh-48px)] rounded-none' 
          : 'w-[800px] max-w-[90vw] h-[600px] max-h-[80vh] rounded-md'
      }`}
      style={!isMaximized ? { left: position.x, top: position.y } : {}}
    >
      {/* Window Header */}
      <div className={`window-header h-8 flex items-center justify-between px-2 select-none ${isActive ? 'bg-[#0078D7] text-white' : 'bg-gray-300 text-gray-500'}`}>
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} />}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-white/20 rounded-sm">
            <Minus size={16} />
          </button>
          <button onClick={toggleMaximize} className="p-1 hover:bg-white/20 rounded-sm">
            <Square size={14} />
          </button>
          <button onClick={() => onClose(id)} className="p-1 hover:bg-red-500 hover:text-white rounded-sm">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto bg-white p-4 cursor-default">
        {children}
      </div>
    </div>
  );
};

export default Window;
