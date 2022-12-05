import React, { ReactNode } from "react";
import "./Modal.css";

interface Props {
  children: ReactNode;
  title: string;
  width: string;
  close: any;
}

const Modal: React.FC<Props> = ({ children, title, width, close }) => {
  return (
    <div className="container">
      <div className="modal" style={{ maxWidth: width }}>
        <div className="title">
          <h1>{title}</h1>
          <div className="close" onClick={close}>
            <h1>x</h1>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
