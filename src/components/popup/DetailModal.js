import '../../css/DetailModal.module.scss'
import style from '../../css/DetailModal.module.scss';
import { useNavigate } from 'react-router-dom'
import axios from '../../../node_modules/axios/index';
import { useState } from 'react';
import ChangeCount from '../ChangeCount'
import { useEffect } from 'react';
import DetailItem from '../DetailItem'

const DetailModal = (props) => {
    const navigate = useNavigate();

    let { item, open, close } = props;

    console.log(item)

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const EditHandler = (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .get("http://www.stock-manage-api.p-e.kr/stock/edit?type=" + item.type + "&stock=" + item.numberInType + "", {
            })
            .then((res) => {
                if (res.status === 200) {
                    navigate('/EditStock', { state: { item: item } })
                } else {
                    alert(res.error);
                }
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const GraphHandler = (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .get("http://www.stock-manage-api.p-e.kr/graph?type=" + item.type + "&stock=" + item.numberInType + "", {
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res)
                    navigate("/Graph", {state: { name: item.name, prop: res.data }})
                } else {
                    alert(res.error);
                }
            })
            .catch((e) => {
                console.error(e);
            });
        
    }


    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section className={style.body}>
                    <main >
                        <div id='container'>
                            <div id="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th colSpan="9">품목 상세 내용</th>
                                        </tr>
                                        <tr id="itemDataMenu">
                                            <td>분류</td>
                                            <td>제조사</td>
                                            <td>물품 명</td>
                                            <td>규격</td>
                                            <td>단위</td>
                                            <td>수량</td>
                                            <td>단가</td>
                                            <td>감가상각 비율</td>
                                            <td>재고 금액</td>
                                        </tr>
                                        <tr id="itemData">
                                            <td>{item.type}</td>
                                            <td>{item.origin}</td>
                                            <td>{item.name}</td>
                                            <td>{item.size}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.count}</td>
                                            <td>{item.price}</td>
                                            <td>{item.dep}%/year</td>
                                            <td>{(item.price * item.count).toFixed()}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                        </tr>
                                        <tr >
                                            <th id={style.tit} colSpan="9">입고 일자 별 입/출고 관리
                                                <span id={style.buttonSpace}>
                                                    <button onClick={EditHandler}>물품 정보 수정</button>
                                                </span>
                                                <span>
                                                    <button onClick={openModal}>입/출고</button>
                                                </span>
                                                <span>
                                                    <button onClick={GraphHandler}>그래프</button>
                                                </span>
                                            </th>
                                        </tr>


                                        <tr>
                                            <th colSpan="4">입고날짜</th>
                                            <th colSpan="3">수량</th>
                                            <th colSpan="2">비고</th>
                                        </tr>
                                        <tr id="listSpace">
                                            <td rowSpan="100" colSpan="9">
                                                {item.history && item.history.map(item => (
                                                    <tr>
                                                        <DetailItem key={item.number} item={item}></DetailItem>
                                                    </tr>
                                                ))}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </main>
                    <footer>
                        <div className={style.cg}>
                            <ChangeCount item={item} open={modalOpen} close={closeModal}></ChangeCount>
                        </div>
                        <button className={style.close} onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    )
}

export default DetailModal;