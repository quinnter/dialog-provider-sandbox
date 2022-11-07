import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogProps,
} from "@mui/material";
import useDialogSteps from "../hooks/useDialogSteps";

interface StepperDialogProps extends DialogProps {
  title: string;
}

type StepOneProps = {
  nextStep: () => void;
  handleCancel: () => void;
};

type StepTwoProps = {
  prevStep: () => void;
  handleConfirm: () => void;
  handleCancel: () => void;
};

function StepOne({ nextStep, handleCancel }: StepOneProps) {
  return (
    <div>
      <DialogContent>Im Page One</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={nextStep}>Next Step</Button>
      </DialogActions>
    </div>
  );
}

function StepTwo({ prevStep, handleConfirm, handleCancel }: StepTwoProps) {
  return (
    <div>
      <DialogContent>Im Page Two</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </div>
  );
}

export default function StepperDialog({ title, ...props }: StepperDialogProps) {
  const { step, nextStep, prevStep } = useDialogSteps();

  const handleConfirmHere = () => {
    console.log("confirming");
    props.onClose();
  };

  const renderContent = () => {
    switch (step) {
      default:
        return <DialogContent>There was a problem.</DialogContent>;
      case 1:
        return (
          <StepOne nextStep={nextStep} handleCancel={() => props.onClose()} />
        );
      case 2:
        return (
          <StepTwo
            prevStep={prevStep}
            handleCancel={() => props.onClose()}
            handleConfirm={handleConfirmHere}
          />
        );
    }
  };

  return (
    <Dialog {...props}>
      <DialogTitle>{title}</DialogTitle>
      {renderContent()}
    </Dialog>
  );
}
