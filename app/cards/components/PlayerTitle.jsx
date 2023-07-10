"use client"

const PlayerTitle = ({item}) => {
  return (
    <h1 className="flex w-[100%] justify-center uppercase text-[#ece8e1] text-[32px]">
      {item.displayName}
    </h1>
  );
};

export default PlayerTitle;