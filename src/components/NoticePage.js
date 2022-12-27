import '../css/NoticePage.scss';
import NoticeItem from "./NoticeItem.js"
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const NoticePage = ({ notices }) => {
    const navigate = useNavigate();
    console.log(notices)

    const GotoAdd = () => {
        navigate("/AddNotice")
    }

    return (
        <div className="notices">
            <div>
                <b>Notice</b>
                {notices && notices.map((notice, index) => (
                    <NoticeItem key={index} notice={notice}></NoticeItem>
                ))}
            </div>
            <div>
                <button onClick={GotoAdd}>공지 등록</button>
            </div>
        </div>
    )
}

export default NoticePage;