import { useNavigate } from 'react-router-dom';
import '../css/LeftTop.scss';

const LeftTop = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate("/");
    }

    const gotoMypage = () => {
        navigate("/Mypage");
    }

    return (
        <div className="buttonBox">
            <div className="myPage">
                <button onClick={gotoMypage}>마이페이지</button>
            </div>
            <div className="logOut">
                <button onClick={handleLogout}>로그아웃</button>
            </div>
        </div>
    )
}

export default LeftTop;