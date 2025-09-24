import { useEffect, useState, type ReactNode } from "react";
import ReactModal from 'react-modal';
import Button from "../01-atoms/Button";

interface Modal {
  children?: ReactNode
  isOpen: boolean,
  closeModal: Function,
  label: string,
}

type ModalElement = HTMLDivElement|undefined;

const getDefaultTransitionDuration = (): number => {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--default-transition-duration');
  // Remove 'ms', trim, and parse as number
  return parseInt(value.replace('ms', '').trim(), 10) || 400;
};

export const ModalTransitionTime: number = getDefaultTransitionDuration();

export default ({ isOpen = false, closeModal, label, children }: Modal) => {
  const [overlayElement, setOverlayElement] = useState<ModalElement>();
  const [contentElement, setContentElement] = useState<ModalElement>();

  useEffect(() => {
    if (!overlayElement) return;

    overlayElement.addEventListener('click', (e: Event) => {
      if (e?.target instanceof Node && contentElement?.contains(e.target)) return;
      closeModal();
    })
  }, [overlayElement, contentElement])

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={ModalTransitionTime}
      contentLabel={label}
      style={{ 'content': { overflow: '', border: '', padding: '', background: '', borderRadius: '', position: 'relative', inset: '' }, 'overlay': { background: '' }}}
      appElement={document.querySelectorAll('app-root')}
      bodyOpenClassName="overflow-y-hidden"
      overlayRef={overlay => setOverlayElement(overlay)}
      contentRef={content => setContentElement(content)}
    >
      {/* <div className="bg-nearblack border-0 shadow-xl mt-2 ml-auto mr-auto p-1 pl-2 pr-2 rounded-xl w-full max-w-6xl transition -translate-y-full overflow-auto max-h-[calc(100vh-(var(--spacing)*4))]"> */}
        {children}
        <div className="flex justify-center gap-1 mt-1 md:mt-3">
          <Button small onclick={closeModal}>Close</Button>
        </div>
      {/* </div> */}

    </ReactModal>
  )
};

