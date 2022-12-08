import MainTemplate from '../components/MainTemplate';
import ShowTime from '../components/ShowTime';
import NoticePage from '../components/NoticePage';
import ShowCom from '../components/ShowCom';
import LeftTop from '../components/LeftTop';
import ListSearch from '../components/ListSearch';
import LeftPage from '../components/LeftPage';
import RightPage from '../components/RightPage';
import ListPage from '../components/ListPage';
import axios from '../../node_modules/axios/index';
import { useEffect } from 'react';
import { useState } from 'react';

const MainPage = () => {
  const [items, setItems] = useState();
  const [notices, setNotices] = useState();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
    axios
      .get("http://www.stock-manage-api.p-e.kr/")
      .then((res) => {
        const obj = res.data.result;
        setItems(obj);
        const not = res.data.notices;
        setNotices(not);
        const use = [res.data.com, res.data.name, res.data.role];
        setUser(use);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [])

  return (
    <MainTemplate>
      <LeftPage>
        <LeftTop></LeftTop>
        <ShowCom user={user}></ShowCom>
        <ShowTime></ShowTime>
        <NoticePage notices={notices}></NoticePage>
      </LeftPage>
      <RightPage>
        <ListSearch></ListSearch>
        <ListPage items={items} ></ListPage>
      </RightPage>
    </MainTemplate>
  )
}

export default MainPage;