import { useEffect } from 'react';
import '../css/ShowCom.scss'

const ShowCom = ({ user }) => {
    console.log(user);
 
    return (
        <div className="comInfo">           
            <b>{user[0]}</b><br />
            <b>{user[2]} {user[1]}</b>님
        </div>
    )
}

export default ShowCom;