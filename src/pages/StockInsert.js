import React from 'react';

const StockInsert = () => {
    return(
        <div>
            <h1 align="center"> Apple</h1>
            <form className="registForm">
                <div id="mainBox">
                    <h3>재고 추가</h3>

                    <p className="comName">분류</p>
                    <div className="textform">
                        <input id="comName" className="textin" type="text"/>
                    </div>
                    <p className="name">제조사</p>
                    <div className="textform">
                        <input id="name" className="textin" type="text"/>
                    </div>

                    <p className="name">품명</p>
                    <div className="textform">
                        <input className="textin" type="text" id="id"/><span id="check1"></span>
                    </div>

                    <p className="name">규격</p>
                    <div className="textform">
                        <input className="textin" type="password" id="pw"/><span id="check2"></span>
                    </div>
                    <p className="name">단위</p>
                    <div className="textform">
                        <input className="textin" type="password" id="pw2"/><span id="check3"></span>
                    </div>

                    <p className="name">단가</p>
                    <div className="textform">
                        <input className="textin" type="number" id="pw2" placeholder='원 단위'/><span id="check3"></span>
                    </div>

                    <p className="name">감가상각률</p>
                    <div className="textform">
                        <input className="textin" type="number" id="pw2" placeholder='감가상각이 없는 제품이라면 0을 입력해주세요(%)'/><span id="check3"></span>
                    </div>

                    <input id="completion" type="submit" className="btn" value="등록" />
                </div>
            </form>
        </div>
    );
};

export default StockInsert;