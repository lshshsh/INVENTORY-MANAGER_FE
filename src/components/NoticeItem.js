import './NoticeItem.module.scss';
import styles from './NoticeItem.module.scss';


const NoticeItem = ({notice}) => {
    
    const {com, content, createdAt, owner, title} = notice;

    const onclick = () => {

    }

    return(
        <div className={styles.body}>
            <div onClick={onclick}>
                 {title}
            </div>
        </div>
    )
}

export default NoticeItem;