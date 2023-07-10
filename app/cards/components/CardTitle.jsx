"use client"

const CardTitle = ({title}) => {
  return (
    <div className="flex flex-wrap absolute left-0 w-[100%] bg-[#eaeeb2] justify-center items-center py-[4px] px-0 text-[12px] bottom-[33.5%] bg-[rgba(29,29,33,.48)] text-white font-normal">
      {title}
    </div>
  );
};

export default CardTitle;