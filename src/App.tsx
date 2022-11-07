import React from "react";
import { useModal } from "mui-modal-provider";
import "./App.css";
import { Button } from "@mui/material";
import DisplayToastDialog from "./dialogs/DisplayToastDialog";
import StepperDialog from "./dialogs/StepperDialog";
// import useModal from './providerTest/use-modal'

function App() {
  const { showModal } = useModal();

  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div className="App">
      <Button
        onClick={() =>
          showModal(DisplayToastDialog, {
            title: "Create A Toast Message",
            handleClick: handleClick,
          })
        }
      >
        Click Me
      </Button>
      <Button
        onClick={() =>
          showModal(StepperDialog, {
            title: "Stepper Two",
          })
        }
      >
        Step Me Two
      </Button>
    </div>
  );
}

export default App;
