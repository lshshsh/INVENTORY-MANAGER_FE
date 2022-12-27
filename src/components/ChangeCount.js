import axios from '../../node_modules/axios/index';
import { useRef, useState } from 'react';
import style from '../css/ChangeCount.module.scss'

const ChangeCount = (props) => {
    const { item, open, close } = props;
    const countValue = useRef();
    const memoRef = useRef();
    console.log(item.type)

    const ChangeHandler = (e) => {
        let dt = new Date();
        let date = dt.getFullYear()+'/'+(dt.getMonth()+1)+'/'+dt.getDate();
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .post("http://www.stock-manage-api.p-e.kr/stock/history?type=" + item.type + "&stock=" + item.numberInType + "", {
                "count": Number(countValue.current.value),
                "memo": memoRef.current.value,
                "day": date,
            })
            .then((res) => {
                close();
            })
            .catch((e) => {
                console.error(e);
            });
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <main>
                        <form id={style.forms} onSubmit={ChangeHandler}>
                            <input className={style.count} ref={countValue} type="number" placeholder="수량">
                            </input>
                            <input className={style.memo} ref={memoRef} type="text" placeholder="메모">
                            </input>
                            <input type="submit" >

                            </input>
                        </form>
                    </main>
                    <footer>
                        <button className={style.close} onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null
            }
        </div >

    )
}

export default ChangeCount;