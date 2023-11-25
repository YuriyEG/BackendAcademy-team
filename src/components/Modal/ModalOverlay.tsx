import React, { FC, useReducer, useEffect } from "react";

import eventEmitter from "./ModalOverlayUtils";
import styles from "./ModalOverlay.module.scss";

type OverlayState = {
  open: boolean;
  childrenShownOnce: boolean;
};

const initialState: OverlayState = {
  open: false,
  childrenShownOnce: false,
};

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "TOGGLE_MODAL_OVERLAY":
      return { ...state, open: !state.open };
    case "CHILDREN_SHOWN_ONCE":
      return { ...state, childrenShownOnce: true };
    default:
      return state;
  }
};

type ModalOverlayProps = {
  children?: React.ReactNode;
};

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickToOverlay = (event: React.BaseSyntheticEvent) => {
    if (!event.target.className.includes('modal-overlay')) return; 
    document.removeEventListener('keydown', onKeyDown);
    dispatch({ type: "TOGGLE_MODAL_OVERLAY" });
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      document.removeEventListener('keydown', onKeyDown);
      dispatch({ type: "TOGGLE_MODAL_OVERLAY" });
    };
  };

  const overlayElement = state.open ? (
    <div
      className={styles['modal-overlay']}
      onClick={(event) => onClickToOverlay(event)}
    >{children}</div>
  ) : null;

  useEffect(() => {
    if (!state.open) {
      if (localStorage.getItem('promocode-sent') !== 'true' && !state.childrenShownOnce) {
        setTimeout(() => {
          dispatch({ type: "CHILDREN_SHOWN_ONCE" });
          dispatch({ type: "TOGGLE_MODAL_OVERLAY" });
        }, 10000);
      }
    } else {
      document.addEventListener('keydown', onKeyDown);
      eventEmitter.once('promocode-form-submitted', () => {
        dispatch({ type: "TOGGLE_MODAL_OVERLAY" });
        document.removeEventListener('keydown', onKeyDown);
      });
    }
    return (() => eventEmitter.removeAllListeners());
  }, [state.open]);

  return (
    <>
      {overlayElement}
    </>
  );
};

export default ModalOverlay;
