// QuizComponent.tsx
"use client";
import React, { useState } from "react";

interface Option {
  id: number;
  text: string;
  subtext?: string;
  description?: string;
  icon?: string;
}

const QuizComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const steps: any = [
    {
      question: "Which of these is more important to you?",
      options: [
        {
          id: 1,
          text: "Gain the most new customers",
          icon: "/icons/customers.svg",
        },
        {
          id: 2,
          text: "Get DoorDash solutions",
          icon: "/icons/cost-saving.svg",
        },
      ],
    },
    {
      question: "What is your primary business goal?",
      options: [
        {
          id: 3,
          text: "Increase brand awareness",
          icon: "/icons/awareness.svg",
        },
        {
          id: 4,
          text: "Enhance customer satisfaction",
          icon: "/icons/loyalty.svg",
        },
        {
          id: 5,
          text: "Expand market penetration",
          icon: "/icons/market.svg",
        },
      ],
    },
    {
      question: "How do you measure success?",
      options: [
        {
          id: 6,
          text: "Revenue growth",
          subtext: "profitability",
          description: "(about 1 per day)",
        },
        {
          id: 7,
          text: "Customer retention",
          subtext: "repeat business",
          description: "(about 1 per day)",
        },
        {
          id: 8,
          text: "Employee satisfaction",
          subtext: "team morale",
          description: "(about 1 per day)",
        },
        {
          id: 9,
          text: "Environmental impact",
          subtext: "sustainability",
          description: "(about 1 per day)",
        },
      ],
    },
  ];

  const totalSteps = steps.length;

  const handleContinue = () => {
    if (selectedOption !== null && currentStep < totalSteps - 1) {
      setSelectedOption(null);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        Take our short quiz to identify the right solution for you
      </h1>

      <h2 className="text-xl text-center mb-2">
        {steps[currentStep].question}
      </h2>
      <p className="text-center mb-8">Select one</p>

      <div className="flex justify-center gap-6 mb-8 flex-wrap w-full">
        {steps[currentStep].options.map((option: any) => (
          <div
            key={option.id}
            className={`flex flex-col items-center border-2 rounded-xl p-6 cursor-pointer transition-all transform hover:shadow-lg hover:-translate-y-1 ${
              selectedOption === option.id
                ? "border-red-500 shadow-md scale-105"
                : "border-gray-200"
            } w-64 h-64 bg-white`} // Set uniform size for all steps
            onClick={() => setSelectedOption(option.id)}
          >
            {option.icon && (
              <div className="w-20 h-20 mb-4">
                <img src={option.icon} alt="icon" className="w-full h-full" />
              </div>
            )}
            <h1 className="text-lg font-semibold text-center">{option.text}</h1>
            {option.subtext && (
              <h3 className="text-base text-center">{option.subtext}</h3>
            )}
            {option.description && (
              <p className="text-sm text-center text-gray-500">
                {option.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            ← Back
          </button>
        )}

        <p className="text-gray-600 mx-auto">{`${
          currentStep + 1
        } / ${totalSteps}`}</p>

        <button
          onClick={handleContinue}
          className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
          disabled={selectedOption === null}
        >
          {currentStep === totalSteps - 1 ? "Finish" : "Continue →"}
        </button>
      </div>

      <div className="flex justify-center">
        <div className="w-full bg-gray-300 rounded h-1">
          <div
            className="bg-red-500 h-1 rounded"
            style={{
              width: `${((currentStep + 1) / totalSteps) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
