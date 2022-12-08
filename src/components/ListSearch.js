import './ListSearch.scss';
import {MdManageSearch} from 'react-icons/md'
import React, {useState} from 'react';

const ListSearch = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className = "searchGroup">
            <span>
                <MdManageSearch/>
            </span>
            <div>
                <input type="text" value={search} onChange={onChange}></input>
            </div>
        </div>
    )
}

export default ListSearch;