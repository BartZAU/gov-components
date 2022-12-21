import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import Modal from "./Modal";

import ModalStaticContent from "./ModalDemoContent";

describe("Modal test suite", () => {
  test("modal shows the children and a close button", () => {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = jest.fn();

    const { getByText } = render(
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <ModalStaticContent title="Lorem Ipsum" />
      </Modal>
    );

    expect(getByText(/Lorem Ipsum/i)).toBeTruthy();
    fireEvent.click(getByText(/close/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
