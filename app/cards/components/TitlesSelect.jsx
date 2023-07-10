"use client"

import { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

const TitlesSelect = ({title, setTitle, box, setBox}) => {
    const [titles, setTitles] = useState([]);
    const ref = useRef(null);

    const handleBlur = (event) => {
        if(!ref.current.contains(event.relatedTarget)) {
            setBox(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('https://valorant-api.com/v1/playertitles');
            setTitles(response.data.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);

      return (
        <div ref={ref}>
            <div className="w-[300px] mb-2 overflow-x-hidden overflow-y-scroll flex-wrap justify-end bg-[rgb(44 56 69 / 79%)] `${box ? 'opened' : 'closed'}`">
                {titles.map((item, index) => (
                    <a onClick={() => setTitle(item.titleText)} key={item.uuid}>
                        <span>{item.titleText}</span>
                    </a>
                ))}
            </div>
            <div className='bg-[rgb(44 56 69 / 79%)]'>
                <a  onClick={() => setBox(!box)} onBlur={handleBlur}>{title ? title : 'Equipar títulos'}</a>
            </div>
        </div>
      );
};

export default TitlesSelect;