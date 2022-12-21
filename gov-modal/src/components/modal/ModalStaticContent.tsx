import React from "react";

type ModalStaticContentProps = {
  title: string;
};

const ModalStaticContent: React.FC<ModalStaticContentProps> = ({ title }) => {
  return (
    <div className="modal-content">
      <h1 className="modal-content__title">{title}</h1>
      <p className="modal-content__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, iste!
      </p>
    </div>
  );
};

export default ModalStaticContent;
