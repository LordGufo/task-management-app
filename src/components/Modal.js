import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children, show, onHide, title }) => {
  const handleClose = () => {
    onHide();
  };

  if (!show) {
    return null;
  }

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="flx-between">
            <span className="modal-title">{title}</span>
            <span className="close" onClick={handleClose}>
              <AiOutlineClose />
            </span>
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.getElementById("root-modal")
  );
};

export default Modal;

