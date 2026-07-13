import React, { useState } from "react";

const Accordian = () => {
  const accordionData = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces using reusable components.",
    },
    {
      id: 2,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside React components.",
    },
    {
      id: 3,
      question: "What are React Hooks?",
      answer:
        "Hooks are special functions that let you use state and other React features in functional components.",
    },
    {
      id: 4,
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight copy of the real DOM that React uses to efficiently update the UI.",
    },
    {
      id: 5,
      question: "What is the purpose of useState?",
      answer:
        "The useState hook allows you to add and manage state in a functional React component.",
    },
    {
      id: 6,
      question: "What is useEffect used for?",
      answer:
        "The useEffect hook is used to handle side effects such as fetching data, updating the DOM, or setting up event listeners.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultipleSelection(id) {
    let copyMultiple = [...multiple];
    const index = copyMultiple.indexOf(id);

    if (index > -1) {
      copyMultiple.splice(index, 1);
    } else {
      copyMultiple.push(id);
    }

    setMultiple(copyMultiple);
  }

  function toggleSelectionMode() {
    if (enableMultiSelection) {
      // Multi -> Single
      setEnableMultiSelection(false);
      setMultiple([]);
    } else {
      // Single -> Multi
      setEnableMultiSelection(true);
      setSelected(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <button
          onClick={toggleSelectionMode}
          className="mb-6 w-full rounded-lg bg-emerald-600 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>

        <div className="space-y-4">
          {accordionData.length > 0 ? (
            accordionData.map((accordionItem) => {
              const isOpen = enableMultiSelection
                ? multiple.includes(accordionItem.id)
                : selected === accordionItem.id;

              return (
                <div
                  key={accordionItem.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div
                    onClick={() =>
                      enableMultiSelection
                        ? handleMultipleSelection(accordionItem.id)
                        : handleSingleSelection(accordionItem.id)
                    }
                    className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {accordionItem.question}
                    </h3>

                    <span className="text-2xl font-bold text-blue-600">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="border-t border-gray-200 px-5 py-4">
                      <p className="text-gray-600 leading-7">
                        {accordionItem.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-500">No data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;