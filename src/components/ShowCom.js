import { useEffect } from 'react';
import './ShowCom.scss'

const ShowCom = ({ user }) => {
    console.log(user);
 
    return (
        <div className="comInfo">           
            {user[0]}<br />
            {user[2]} {user[1]}님
        </div>
    )
}

export default ShowCom;