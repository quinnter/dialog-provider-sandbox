import React from 'react'

const useDialogSteps = () => {
  const [step, setStep] = React.useState(1)
  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  return {
    nextStep,
    prevStep,
    step,
    setStep,
  }
}

export default useDialogSteps