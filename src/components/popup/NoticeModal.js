import axios from '../../../node_modules/axios/index';
import '../../css/NoticeModal.module.scss'
import style from '../../css/NoticeModal.module.scss'
import {useNavigate} from 'react-router-dom'


const NoticeModal = (props) => {
    const { open, close, notice } = props;



    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <main>
                        <div className={style.content}>
                            {notice.content}
                        </div>
                        <div className={style.time}>
                            {notice.createdAt}
                        </div>
                    </main>
                    <footer>
                        <button className={style.close} onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    )
}

export default NoticeModal;