// import { ReactElement, useState } from "react";

// export function useMultistepForm(steps: ReactElement[]) {
//   const [currentStepIndex, setCurrentStepIndex] = useState(0);

//   function next() {
//     setCurrentStepIndex((i) => {
//       if (i >= steps.length - 1) return i;
//       return i + 1;
//     });
//   }

//   function back() {
//     setCurrentStepIndex((i) => {
//       if (i <= 0) return i;
//       return i - 1;
//     });
//   }

//   function goTo(index: number) {
//     setCurrentStepIndex(index);
//   }

//   return {
//     currentStepIndex,
//     step: steps[currentStepIndex],
//     steps,
//     isFirstStep: currentStepIndex === 0,
//     isLastStep: currentStepIndex === steps.length - 1,
//     goTo,
//     next,
//     back,
//   };
// }


import { useState } from "react";

const useMultistepForm = (getStepsFunction) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = getStepsFunction();

  const step = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const next = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prevIndex) => prevIndex + 1);
    }
  };

  const back = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prevIndex) => prevIndex - 1);
    }
  };

  return {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  };
};

export default useMultistepForm;
