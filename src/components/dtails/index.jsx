import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../dtails/index.css'

const Dtails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  async function getApi(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
      throw new Error('Failed to fetch data');
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  useEffect(() => {
    getApi(`https://cars-pagination.onrender.com/products/${id}`)
      .then(data => {
        if (data) {
          setData(data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!data) {
    return <div></div>
  }

  return (
    <div className='blowing'>
      <div className="bright">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="brighting">
        <h1>{data.name}</h1>
        <h3>New Price: {data.newPrice}</h3>
        <h3>Old Price: {data.oldPrice}</h3>
      </div>
    </div>
  );
};

export default Dtails;
