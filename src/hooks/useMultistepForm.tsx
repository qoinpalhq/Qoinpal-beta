import React, { useState } from "react";

export default function useMultistepForm(steps: React.ReactElement[]) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const goToStep = (step: number) => {
    setActiveStepIndex(step);
  };

  const nextStep = () => {
    setActiveStepIndex((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setActiveStepIndex((prevStep) => Math.max(prevStep - 1, 0));
  };

  return {
    activeStepIndex,
    goToStep,
    nextStep,
    prevStep,
    currentStepContent: steps[activeStepIndex],
    isFirstStep: activeStepIndex === 0,
    isLastStep: activeStepIndex === steps.length - 1,
    steps,
  };
}
