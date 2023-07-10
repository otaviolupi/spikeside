"use client"
import Image from 'next/image';
import LevelBorders from "./LevelBorders";
import CardTitle from "./CardTitle";
import UserName from "./UserName"; 

const PlayerCard = ({elementRef, item, border, setBorder, level, setLevel, setUserName, title, username}) => {
  return ( 
    <div ref={elementRef} className="flex content-center items-center relative flex-wrap w-[244px]">
      <Image className="absolute" src="/frame.png" width={244} height={529} />
      <Image src={item.largeArt} width={244} height={529} />
      <LevelBorders border={border} setBorder={setBorder} level={level} setLevel={setLevel} />
      <UserName  setUserName={setUserName} />
      <CardTitle title={title} />
    </div>
    );
};

export default PlayerCard;