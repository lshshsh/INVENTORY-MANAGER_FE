import React, { useRef, useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate, useLocation } from 'react-router-dom';
import style from '../css/StockInsert.module.scss'

const EditStock = () => {
    const count = useRef();
    const origin = useRef();
    const name = useRef();
    const size = useRef();
    const unit = useRef();
    const price = useRef();
    const dep = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const item = location.state.item;

    console.log(item)

    const onClick = (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .put("http://www.stock-manage-api.p-e.kr/stock/edit?type=" + item.type + "&stock=" + item.number + "", {
                "origin": origin.current.value, // 제조사
                "name": name.current.value, // 품명
                "size": size.current.value, // 규격
                "unit": unit.current.value, // 단위
                "price": price.current.value, // 단가
                "count": count.current.value,
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

    const [inputs, setInputs] = useState({
        origin: item.origin,
        name: item.name,
        size: item.size,
        unit: item.unit,
        price: item.price,
        count: item.count,
        dep: item.dep,
    });

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    return (
        <div>
            <h1 align="center"> Apple</h1>
            <form className="registForm">
                <div id={style.mainbox}>
                    <h3>재고 수정</h3>

                    <p className={style.labels}>제조사</p>
                    <div className="textform">
                        <input onChange={onChange} name="origin" ref={origin} id="comName" className={style.textin} type="text" value={inputs.origin} />
                    </div>
                    <p className={style.labels}>품명</p>
                    <div className="textform">
                        <input onChange={onChange} name="name" ref={name} id="name" className={style.textin} type="text" value={inputs.name} />
                    </div>

                    <p className={style.labels}>규격</p>
                    <div className="textform">
                        <input onChange={onChange} name="size" ref={size} className={style.textin} type="text" id="id" value={inputs.size || 0} /><span id="check1"></span>
                    </div>

                    <p className={style.labels}>단위</p>
                    <div className="textform">
                        <input onChange={onChange} name="unit" ref={unit} className={style.textin} type="text" id="pw" value={inputs.unit} /><span id="check2"></span>
                    </div>
                    <p className={style.labels}>단가</p>
                    <div className="textform">
                        <input onChange={onChange} name="price" ref={price} className={style.textin} type="text" id="pw2" value={inputs.price} /><span id="check3"></span>
                    </div>

                    <p className={style.labels}>수량</p>
                    <div className="textform">
                        <input onChange={onChange} name="count" ref={count} className={style.textin} type="number" value={inputs.count} /><span id="check3"></span>
                    </div>

                    <p className={style.labels}>감가상각률</p>
                    <div className="textform">
                        <input onChange={onChange} name="dep" ref={dep} className={style.textin} type="number" id="pw2" value={inputs.dep} placeholder='감가상각이 없는 제품이라면 0을 입력해주세요(%)' /><span id="check3"></span>
                    </div>

                    <input onClick={onClick} id="completion" type="submit" className="btn" value="수정" />
                </div>
            </form>
        </div>
    )
}

export default EditStock;