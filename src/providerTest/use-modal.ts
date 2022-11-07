import { useContext, useCallback, useEffect, useRef } from 'react';
import { ShowFn } from './types';

import ModalContext from './modal-context';
import { uid } from './utils';

export interface UseModalOptions {
  disableAutoDestroy?: boolean;
}

const defaultOptions: UseModalOptions = {
  disableAutoDestroy: false,
};

export default function useModal(options: UseModalOptions = defaultOptions) {
  const { disableAutoDestroy } = { ...defaultOptions, ...options };
  const {
    showModal,
    destroyModalsByRootId: destroy,
    hideModal: hide,
    ...otherContextProps
  } = useContext(ModalContext);
  const id = useRef<string>(uid(6));

  useEffect(
    () => () => {
      if (!disableAutoDestroy) {
        destroy(id.current);
      }
    },
    [disableAutoDestroy, destroy]
  );

  console.log(id, options)

  return {
    showModal: useCallback<ShowFn>(
      (component, hide, props, options) =>
        showModal(component, hide, props, { rootId: id.current, ...options }),
      [showModal]
    ),
    ...otherContextProps,
  };
}