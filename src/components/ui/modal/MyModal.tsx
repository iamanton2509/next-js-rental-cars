import {FC} from 'react';
import styles from './MyModal.module.scss';

interface IModal {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (bool: boolean) => void;
}

const MyModal: FC<IModal> = ({children, visible, setVisible}) => {
    const rootClass = [styles.modal];
    if (visible){
        rootClass.push(styles['active']);
    }

    return (
        <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;