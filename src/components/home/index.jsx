import React, { useEffect, useState } from 'react';
import '../home/index.css';  
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [app, setApp] = useState([]);

  async function getApi(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setApp(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi('https://cars-pagination.onrender.com/products');
  }, []);

  function otkaz(id) {
    navigate(`/about/${id}`);
  }

  return (
    <div className='box'>
      {app.map((apps) => (
        <div key={apps.id} className="carddf">
          <div onClick={() => otkaz(apps.id)} className='card'>
            <img src={apps.image} alt="" />
            <h1>{apps.name}</h1>
            <h4><span>OldPrice: {apps.oldPrice}</span> <br /> <span>NewPrice: {apps.newPrice}</span></h4>
            <h4>comments: {apps.comments}</h4>
            <p>category: {apps.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
