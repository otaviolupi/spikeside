"use client"

import PlayerTitle from "./components/PlayerTitle";
import PlayerCard from "./components/PlayerCard";
import SliderCard from "./components/SliderCard";
import TitlesSelect from "./components/TitlesSelect";
import OrderButton from "./components/OrderButton";
import { toPng } from 'html-to-image';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Page() {
const [item, setItem] = useState({});
const [title, setTitle] = useState("");
const [border, setBorder] = useState({});
const [level, setLevel] = useState(0);
const [username, setUserName] = useState("");
const [box, setBox] = useState(false);
const elementRef = useRef(null);


const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
        .then((dataUrl) => {
            const response = axios.post('http://127.0.0.1:5000/upload', {
                "name": "pedido0101.png",
                "image": dataUrl
            });
        })
        .catch((err) => {
        console.log(err);
        });
};

return (
    <div>
        <Header />
        <div 
    suppressHydrationWarning={true}
    className="bg-cover py-[59px]"
    style={{
        backgroundImage: `url('/bg.jpg')`,
    }}>
        <PlayerTitle item={item} />
        <div className="flex justify-between w-[85%] my-0 mx-auto">
            <TitlesSelect title={title} setTitle={setTitle} box={box} setBox={setBox} />
            <PlayerCard elementRef={elementRef} item={item} border={border} setBorder={setBorder} level={level} setLevel={setLevel} username={username} setUserName={setUserName} title={title}></PlayerCard>
            <OrderButton htmlToImageConvert={htmlToImageConvert} />
        </div>
        <SliderCard setItem={setItem}  />
    </div>
        <Footer />
    </div>
)
}



