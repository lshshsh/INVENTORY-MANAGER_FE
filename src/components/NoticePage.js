import './NoticePage.scss';
import NoticeItem from "./NoticeItem.js"

const NoticePage = ({notices}) => {

    return (
        <div className="notices">
            <div>
                <b>Notice</b>
                {notices && notices.map((notice,index) => (
                    <NoticeItem key={index} notice={notice}></NoticeItem>
                ))}
            </div>
        </div>
    )
}

export default NoticePage;