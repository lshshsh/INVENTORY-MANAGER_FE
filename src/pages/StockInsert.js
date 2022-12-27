import React, { useRef } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate } from 'react-router-dom';
import style from '../css/StockInsert.module.scss'

const StockInsert = () => {
    const type = useRef();
    const origin = useRef();
    const name = useRef();
    const size = useRef();
    const unit = useRef();
    const price = useRef();
    const dep = useRef();
    let navigate = useNavigate();


    const InsertStock = (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .post("http://www.stock-manage-api.p-e.kr/stock", {
                "type": type.current.value, // 분류
                "origin": origin.current.value, // 제조사
                "name": name.current.value, // 품명
                "size": size.current.value, // 규격
                "unit": unit.current.value, // 단위
                "price": price.current.value, // 단가
                "dep": dep.current.value // 감가상각률
            })
            .then((res) => {
                if (res.status === 200) {
                    navigate(-1);
                } else {
                    alert(res.error);
                }
            })
            .catch((e) => {
                console.error(e);
            });
    }


    return (
        <div>
            <h1 align="center"> Apple</h1>
            <form className="registForm">
                <div id={style.mainbox}>
                    <h3>재고 추가</h3>

                    <p className={style.labels}>분류</p>
                    <div className="textform">
                        <input ref={type} id="comName" className={style.textin} type="text" />
                    </div>
                    <p className={style.labels}>제조사</p>
                    <div className="textform">
                        <input ref={origin} id="name" className={style.textin} type="text" />
                    </div>

                    <p className={style.labels}>품명</p>
                    <div className="textform">
                        <input ref={name} className={style.textin} type="text" id="id" /><span id="check1"></span>
                    </div>

                    <p className={style.labels}>규격</p>
                    <div className="textform">
                        <input ref={size} className={style.textin} type="text" id="pw" /><span id="check2"></span>
                    </div>
                    <p className={style.labels}>단위</p>
                    <div className="textform">
                        <input ref={unit} className={style.textin} type="text" id="pw2" /><span id="check3"></span>
                    </div>

                    <p className={style.labels}>단가</p>
                    <div className="textform">
                        <input ref={price} className={style.textin} type="number" id="pw2" placeholder='원 단위' /><span id="check3"></span>
                    </div>

                    <p className={style.labels}>감가상각률</p>
                    <div className="textform">
                        <input ref={dep} className={style.textin} type="number" id="pw2" placeholder='감가상각이 없는 제품이라면 0을 입력해주세요(%)' /><span id="check3"></span>
                    </div>

                    <input onClick={InsertStock} id="completion" type="submit" className="btn" value="등록" />
                </div>
            </form>
        </div>
    );
};

export default StockInsert;