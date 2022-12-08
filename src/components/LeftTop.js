import './LeftTop.scss';

const LeftTop = () => {
    return (
        <div className="buttonBox">
            <div className="myPage">
                <button >마이페이지</button>
            </div>
            <div className="logOut">
                <button >로그아웃</button>
            </div>
        </div>
    )
}

export default LeftTop;