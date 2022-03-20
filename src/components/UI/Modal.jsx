import { useCloseModal } from "../../hooks/use-close-modal";
import classes from "./UI.module.css"

const Modal = ({ children, onClose }) => {
    useCloseModal(onClose)
    return (
        <div className={classes.modalOverlay}
            onClick={onClose}>
            <div className={classes.modalContentWrapper} >
                <div className={classes.modalContent}>
                    {children}
                </div>

                <button onClick={onClose} className={classes.button} />

            </div>
        </div>
    )
}

export default Modal;
