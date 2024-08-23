import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  count?: number;
}

interface ControlTabsProps {
  tabs: Tab[];
}

const ControlTabs: React.FC<ControlTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <nav className="flex space-x-8 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === tab.id
                  ? "border-[#5FB6BE] text-[#5FB6BE]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-2 bg-gray-100 text-gray-900 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
      <AnimatePresence mode="wait">
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {tab.content}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default ControlTabs;
