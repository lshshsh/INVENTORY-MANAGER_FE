import axios from "../../node_modules/axios/index";
import { useState, useEffect } from 'react'

const Mypage = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .get("http://www.stock-manage-api.p-e.kr/")
            .then((res) => {
                console.log(res)
                const use = [res.data.com, res.data.name, res.data.role];
                setUser(use);
            })
            .catch((e) => {
                console.error(e);
            });
    },[])


    return (
        <div>
            <div>
                {user[0]}
            </div>
            <div>
                {user[2]} {user[1]}님
            </div>
        </div>
    )
}

export default Mypage;