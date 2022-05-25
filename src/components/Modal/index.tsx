import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { close as _close } from "./modalSlice";

interface ModalProps {
  modalName: string;
  children: any;
}

interface ModalParts {
  children: any;
}

export const Modal: FC<ModalProps> = ({ modalName, children }) => {
  const dispatch = useDispatch();
  const { isOpen, modalName: currentModalName } = useSelector((state: any) => state.modal);

  if (currentModalName !== modalName) return null;

  const close = () => {
    dispatch(_close(modalName));
  };

  return (
    <>
      {isOpen && (
        <div className={`modal ${modalName}`} onClick={close}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close}>
              +
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export const ModalHeader: FC<ModalParts> = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

export const ModalBody: FC<ModalParts> = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

export const ModalFooter: FC<ModalParts> = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default Modal;
