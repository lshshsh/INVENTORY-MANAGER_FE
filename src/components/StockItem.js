import { useEffect } from "react";
import "./StockItem.scss"

const StockItem = (item) => {
    const {costUpdateAt, count, createdAt,dep,name,number,origin,price,size,type,unit} = item.item;
    
   
    return(
        <div className="sortBy">
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
    )
}

export default StockItem;