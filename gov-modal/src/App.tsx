import React, { useState } from "react";
import Modal from "./components/modal/Modal";

import ModalDemoContent from "./components/modal/ModalDemoContent";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="main">
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <ModalDemoContent title="Lorem Ipsum" />
      </Modal>
      <button type="button" onClick={() => setModalOpen(true)}>
        open modal
      </button>
    </div>
  );
};

export default App;
