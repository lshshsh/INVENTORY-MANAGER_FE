import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.module.scss";
import { Link } from 'react-router-dom';
import styles from "../css/Login.module.scss"

const Login = () => {
    const idRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (idRef.current.value === "" || idRef.current.value === undefined) {  //id값 비었을 시
            alert("아이디를 입력하세요");
            idRef.current.focus();
            return false;
        }
        if (pwRef.current.value === "" || pwRef.current.value === undefined) {  //pw값 비었을 시
            alert("패스워드를 입력하세요");
            pwRef.current.focus();
            return false;
        }

        console.log(
            "LoginForm:window.sessionStorage(login_id) =>",
            window.sessionStorage.getItem("id")
        );

        axios
            .post("http://www.stock-manage-api.p-e.kr/login", {
                "id": idRef.current.value,
                "password": pwRef.current.value,
            })
            .then((res) => {
                console.log("handleLogin =>", res);
                if (res.data.code === 200) {
                    window.sessionStorage.setItem("token", res.data.token); // 세션스토리지에 key : id , value : idRef.current.value로 저장
                    // sessionsStorage는 창 닫으면 사라짐, localStorage는 안사라짐
                    navigate("/MainPage", false);
                } else {
                    alert("아이디, 패스워드가 정확하지 않습니다.");
                    idRef.current.value = "";
                    pwRef.current.value = "";
                    navigate("/");
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Welcome</h1>
                <form>
                    <div className={styles.formControl}>
                        <input type="text" name="id" ref={idRef} placeholder="아이디" required />
                    </div>

                    <div className={styles.formControl}>
                        <input type="password" name="password" ref={pwRef} placeholder="비밀번호" required />
                    </div>

                    <button type="submit" className={styles.btn} onClick={handleLogin}>로그인</button>

                    <p className={styles.text}>회원이 아니신가요? <Link to="/SignUp">회원가입</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;