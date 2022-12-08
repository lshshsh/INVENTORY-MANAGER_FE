import './SignUp.module.scss';
import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss"

const SignUp = () => {
    let comNameRef = useRef();
    let nameRef = useRef();
    let idRef = useRef();
    let pwRef = useRef();
    let repwRef = useRef();

    const [msg1, setMsg1] = useState();
    const [msg2, setMsg2] = useState();
    const [msg3, setMsg3] = useState();
    const [color3, setColor3] = useState('red');
    const [able, setAble] = useState(true);
    const [btnColor, setBtnColor] = useState();
    const [check, setCheck] = useState({a:0, b:0, c:0});

    const navigate = useNavigate();

    //id조건 확인 함수
    const check_id = () => {
        let id = document.getElementById('id').value;

        //특수문자 있으면 안됨
        const SC = ["!", "@", "#", "$", "%", "~", "^", "&", "*", "(", ")", "-", "+", "="];
        let check_SC = 0;


        //길이 확인
        if (id.length === 0) {
            setMsg1("");
            setCheck({...check, a: 0});
        }
        else {
            // 1. 6자 미만 또는 12자 초과시 빨간색 오류메세지 출력
            if (id.length < 6 || 12 < id.length) {
                setMsg1("아이디는 6글자 이상, 12글자 이하로 입력해주세요");
                setCheck({...check, a: 0});
            }
            else {
                // 2. 6 ~ 12글자인데 특수문자 포함된 경우
                setMsg1("");
                for (let i = 0; i < SC.length; i++) {
                    if (id.indexOf(SC[i]) !== -1) {
                        check_SC = 1;
                    }
                }
                if (check_SC > 0) {
                    setMsg1('특수문자를 포함할 수 없습니다.');
                    setCheck({...check, a: 0});
                } else {
                    setMsg1("");
                    setCheck({...check, a: 1});
                }
            }
        }
        check_final();
    }


    // 비밀번호 조건 확인 함수
    const check_pw = () => {

        let pw = document.getElementById('pw').value;
        const SC = ["!", "@", "#", "$", "%", "~"];
        let check_SC = 0;


        if (pw.length === 0) {
            setMsg2("");
            setCheck({...check, b: 0});
        } else {
            if (pw.length < 8 || pw.length > 16) {
                setMsg2("비밀번호는 8글자 이상, 16글자 이하로 입력해주세요.");
                setCheck({...check, b: 0});
            } else {
                setMsg2("");
                for (var i = 0; i < SC.length; i++) {
                    if (pw.indexOf(SC[i]) !== -1) {
                        check_SC = 1;
                    }
                }
                if (check_SC === 0) {
                    setMsg2("특수문자가 포함되어있지 않습니다.");
                    setCheck({...check, b: 0});
                } else {
                    setMsg2("");
                    setCheck({...check, b: 1});
                }
            }


        }
        check_final();

    }

    const check_same = () => {
        let pw = document.getElementById('pw2').value;

        if (pw.length === 0) {
            setMsg3("");
            setCheck({...check, c: 0});
        } else {
            if (document.getElementById('pw').value !== '' && pw !== '') {
                if (document.getElementById('pw').value === pw) {
                    setColor3('blue');
                    setMsg3("비밀번호가 일치합니다.");
                    setCheck({...check, c: 1});
                }
                else {
                    setMsg3("비밀번호가 일치하지 않습니다.");
                    setColor3('red');
                    setCheck({...check, c: 0});
                }
            }
        }

        check_final();
    }

    const check_final = () => {
        console.log(check)
        //아이디 조건 성립, 비밀번호 확인까지 일치 시 제출버튼 활성화
        if (document.getElementById("comName").value && document.getElementById("name").value && check.a && check.b && check.c) {
            setAble(false);
            setBtnColor('#000000');
        }else{
            setAble(true);
        }
    }

    const handleSingup = (e) => {
        e.preventDefault();

        axios
            .post("http://www.stock-manage-api.p-e.kr/signup/admin", {
                comName: comNameRef.current.value,
                name: nameRef.current.value,
                id: idRef.current.value,
                password: pwRef.current.value,
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    navigate("/");
                } else {
                    alert(res.error);
                    comNameRef.current.value = "";
                    nameRef.current.value = "";
                    idRef.current.value = "";
                    pwRef.current.value = "";
                    repwRef.current.value = "";
                }

            })
            .catch((e) => {
                console.error(e);
            });

    }

    return (
        <div className={styles.body}>
            <h1 align="center"> Inventory - Manager</h1>
            <div id={styles.mainBox}>
                <form className={styles.registForm} onInput={check_final}>

                    <h3>회원가입</h3>

                    <p className={styles.name}>회사명</p>
                    <div className={styles.textform}>
                        <input ref={comNameRef} id="comName" className={styles.textin} type="text" placeholder="ex)삼성전자" />
                    </div>
                    <p className={styles.name}>이름</p>
                    <div className={styles.textform}>
                        <input ref={nameRef} id="name" className={styles.textin} type="text" placeholder="ex)홍길동" />
                    </div>

                    <p className={styles.name}>아이디</p>
                    <div className={styles.textform}>
                        <input ref={idRef} className={styles.textin} type="text" id="id" placeholder="6자리 이상 12자리 이하 영문/숫자"
                            onInput={check_id} /><span className={styles.warn} id={styles.check1}>{msg1}</span>
                    </div>

                    <p className={styles.name}>비밀번호</p>
                    <div className={styles.textform}>
                        <input ref={pwRef} className={styles.textin} type="password" id="pw" placeholder="8자리 이상 16자리 이하 영문/숫자/특수문자"
                            onInput={check_pw} /><span className={styles.warn} id={styles.check2}>{msg2}</span>
                    </div>
                    <p className={styles.name}>비밀번호 확인</p>
                    <div className={styles.textform}>
                        <input ref={repwRef} className={styles.textin} type="password" id="pw2" placeholder="비밀번호를 다시 입력해주세요"
                            onInput={check_same} /><span className={styles.warn} id={styles.check3} style={{ color: color3 }}>{msg3}</span>
                    </div>

                    <p className={styles.name}>관리자 일반 사용자 선택</p>
                    <p id={styles.explain}>본인의 유형을 선택해 주세요.</p>
                    <div className={styles.selection}>
                        <label><input type="radio" name="employee" value="admin" />관리자</label>
                        <label><input type="radio" name="employee" value="normal" />일반</label>
                    </div>
                    <input id={styles.completion} type="submit" className={styles.btn} value="가입" onClick={handleSingup} style={{ backgroundColor: btnColor }} disabled={able} />
                </form>
            </div>
        </div>
    )
}

export default SignUp;