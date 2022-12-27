import '../css/ListPage.scss';
import { useNavigate } from "react-router-dom";
import React from 'react';
import StockItem from './StockItem'


const ListPage = ({items}) => {
    console.log(items);
    
    const navigate = useNavigate();
    
    const InsertStock = () => {
        navigate("/StockInsert");
    }

    return (
        <div className="ListPage">
            <div className="sortBy">
                <div><b>No.</b></div>
                <div><b>제조사</b></div>
                <div><b>품명</b></div>
                <div><b>규격</b></div>
                <div><b>수량</b></div>
                <div><b>단위</b></div>
            </div>
            <div className="list">
                {items && items.map(item => (
                    <StockItem key={item.number} item={item}></StockItem>
                ))}
            </div>
            <div><button onClick={InsertStock}>재고추가</button></div>
        </div>
    )
}

export default ListPage;