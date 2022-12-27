import '../css/NoticeItem.module.scss';
import styles from '../css/NoticeItem.module.scss';
import React, { useState } from 'react';
import NoticeModal from './popup/NoticeModal'


const NoticeItem = ({ notice }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.body}>
            <div onClick={openModal}>
                <b>{notice.title}</b>
            </div>
            <NoticeModal notice={notice} open={modalOpen} close={closeModal}></NoticeModal>
        </div>
    )
}

export default NoticeItem;