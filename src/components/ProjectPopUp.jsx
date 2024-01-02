import {ReactModal} from 'react-modal';
import React, { useState } from 'react';
 
function ProjectPopUp() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={setIsOpen}>Open Modal</button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="ProjectPopUp Modal"
      >
        This is the content of the modal.
      </ReactModal>
    </div>
  );
}
 
export default ProjectPopUp;


// this component is not used anywhere.