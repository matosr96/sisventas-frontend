import { MouseEvent, useCallback, useEffect } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

interface Props {
    className?: string;
    testid?: string;
    variant?: string;
    width?: number;
    withCloseIcon?: boolean;
    isOpen: boolean;
    setIsOpen: Function;
    onClose?: Function;
    renderLink?: Function;
    renderContent: Function;
}

const Modal = ({
    className,
    testid,
    variant,
    width,
    withCloseIcon,
    isOpen,
    setIsOpen,
    onClose: tellParentToClose,
    renderLink,
    renderContent,
}: Props) => {
    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleModalClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, [])
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isOpen]);
    return (
        <>
            {isOpen &&
                ReactDOM.createPortal(
                    <div className={styles.scroll_overlay}>
                        <div
                            onClick={() => setIsOpen(false)}
                            className={`${styles.clickable_overlay} ${styles.center_overlay}`}
                        >
                            <div
                                style={{
                                    width: width,
                                }}
                                className={`${styles.styles_modal} ${styles.center}`}
                                onClick={handleModalClick}
                            >
                                {renderContent({ close: closeModal })}
                            </div>
                        </div>
                    </div>,
                    document.getElementById('root')!,
                )}
        </>
    );
};

export default Modal;
