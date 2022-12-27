import { useEffect } from "react";
import { useState } from "react";
import axios from "../../node_modules/axios/index";
import "../css/StockItem.scss"
import DetailModal from './popup/DetailModal'

const StockItem = (item) => {
    const { costUpdateAt, count, createdAt, dep, name, number, origin, price, size, type, unit } = item.item;
    const [modalOpen, setModalOpen] = useState(false);
    const [detail, setDetail] = useState();

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        console.log(item.item.type)
        console.log(item.item.numberIntype)
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .get("http://www.stock-manage-api.p-e.kr/?type=" + item.item.type + "&stock=" + item.item.numberInType + "", {
            })
            .then((res) => {
                if (res.status === 200) {
                    setDetail(res.data.result);
                } else {
                    alert(res.error);
                }
            })
            .catch((e) => {
                console.error(e);
            });
    },[])


    return (
        <div>
            <div className="sortBy" onClick={openModal}>
                <div >
                    {number}
                </div>
                <div>
                    {origin}
                </div>
                <div>
                    {name}
                </div>
                <div>
                    {size}
                </div>
                <div>
                    {count}
                </div>
                <div>
                    {unit}
                </div>
            </div>
            <DetailModal item={detail} open={modalOpen} close={closeModal}></DetailModal>
        </div>

    )
}

export default StockItem;