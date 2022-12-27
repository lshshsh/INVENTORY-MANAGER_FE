import axios from "../../node_modules/axios/index";
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../css/AddNotice.module.scss'

const AddNotice = () => {
    const titleRef = useRef();
    const contentRef = useRef();
    const navigate = useNavigate();

    const AddNotice = (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        axios
            .post("http://www.stock-manage-api.p-e.kr/notice", {
                "title": titleRef.current.value,
                "content": contentRef.current.value,
            })
            .then((res) => {
                console.log(res)
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
        <div id={style.body}>
            <h1 id={style.door}>공지 등록</h1>
            <div id={style.containor}>
                <div>
                    <label>
                        제목
                    </label>
                    <input id={style.title} ref={titleRef} type='text'>

                    </input>
                </div>
                <span>
                    <label id={style.contlabel}>내용</label>
                    <textarea id={style.content} ref={contentRef} type='text'>
                    </textarea>
                </span>
                <span>
                    <button onClick={AddNotice}>
                        등록
                    </button>
                </span>
            </div>
        </div>
    )
}

export default AddNotice;