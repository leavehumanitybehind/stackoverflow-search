import { useCallback, useEffect } from "react";

export const useCloseModal = (closeModal) => {
  const escKeyDownHandler = useCallback((evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      closeModal(evt);
      document.removeEventListener(`keydown`, escKeyDownHandler);
    }
  }, [closeModal])


  const closeHandler = (evt) => {
    closeModal(evt);
    document.removeEventListener(`keydown`, escKeyDownHandler);
  }

  useEffect(() => {
    document.addEventListener(`keydown`, (evt) => escKeyDownHandler(evt));
    return document.removeEventListener(`keydown`, escKeyDownHandler);
  }, [escKeyDownHandler]);

  return [closeHandler];
}
