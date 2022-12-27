import style from '../css/DetailItem.module.scss';

const DetailItem = (props) => {
    return (
        <div>
            <div className={style.list} id={style.date}>{props.item.createdAt}</div>
            <div className={style.list} id={style.count}>{props.item.count}</div>
            <div className={style.list} id={style.memo}>{props.item.memo}</div>

        </div>
    )
}

export default DetailItem;