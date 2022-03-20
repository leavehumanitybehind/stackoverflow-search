export const overlayCloseModal = (evt, closeFn) => {

    if (evt.key === `Escape`) {
      return closeFn(false)
    }
  
    const { target } = evt
  
    if (
      target.classList.contains(`closeModal`) ||
      target.classList.contains(`modalOverlay`)
    ) {
      return closeFn(false)
    }
  };