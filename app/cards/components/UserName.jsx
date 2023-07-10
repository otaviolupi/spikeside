"use client"

const UserName = ({username, setUserName}) => {

  function handleChange(event) {
    setUserName(event.target.value);
  }

  return (
    <div className="flex justify-center items-center px-0 py-[8px] bottom-[37%] text-[14px] absolute left-0 flex-wrap w-[100%] bg-[#eaeeb2]">
      <input onChange={handleChange} value={username}  placeholder="Insira seu nome de usuário" />
    </div>
  );
};



export default UserName;