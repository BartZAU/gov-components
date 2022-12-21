import React, { useState } from "react";
import Modal from "./components/modal/Modal";

import ModalStaticContent from "./components/modal/ModalStaticContent";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <ModalStaticContent title="Lorem Ipsum" />
      </Modal>
      <button type="button" onClick={() => setModalOpen(true)}>
        open modal
      </button>
    </div>
  );
};

export default App;
