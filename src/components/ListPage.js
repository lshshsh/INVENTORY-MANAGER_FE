import './ListPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import StockItem from './StockItem'


const ListPage = ({items}) => {
    const navigate = useNavigate();
    
    const InsertStock = () => {
        navigate("/StockInsert");
    }

    return (
        <div className="ListPage">
            <div className="sortBy">
                <div>No.</div>
                <div>제조사</div>
                <div>품명</div>
                <div>규격</div>
                <div>수량</div>
                <div>단위</div>
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