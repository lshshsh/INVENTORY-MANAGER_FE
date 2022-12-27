import React, { useEffect, useState } from 'react';
import '../css/ShowTime.scss'

const ShowTime = () => {

    const getTime = () => {
        let dt = new Date();
        let year = dt.getFullYear();
        let month = dt.getMonth() + 1;
        let date = dt.getDate();
        let hour = dt.getHours();
        let min = dt.getMinutes();
        let sec = dt.getSeconds();

        month >= 10 || (month = '0' + month);
        date >= 10 || (date = '0' + date);
        hour >= 10 || (hour = '0' + hour);
        min >= 10 || (min = '0' + min);
        sec >= 10 || (sec = '0' + sec);

        let nowDate = year + '/' + month + '/' + date;
        let nowTime = hour + ':' + min + ':' + sec;

        return [nowDate, nowTime];
    }

    const [date, setDate] = useState(getTime()[0]);
    const [time, setTime] = useState(getTime()[1]);

    useEffect(() => {
        setInterval(() => {
            setTime(getTime()[1]);
            setDate(getTime()[0]);
        }, 1000);
    })

    return (
        <div className="nowTime">
            {date}<br />
            {time}       
        </div>
    )
}

export default ShowTime;