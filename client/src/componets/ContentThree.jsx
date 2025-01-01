import { useState, useEffect } from "react";
import Monaco from "./Monaco";
const ContentThree = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Sayfa yüklendiğinde içerik aktif olur
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center h-[900px] overflow-hidden">
        <div className="text-center mt-[100px]">
          <h1 className=" text-7xl/[60px] text-white font-dbc">Go Practice</h1>
        </div>

        <div className=" mt-[200px] mr-[950px]">{isLoaded && <Monaco />}</div>
        <Triangle />
      </div>
      <hr className="border-2 border-[#323030] mt-5" />
    </>
  );
};

export default ContentThree;

function Triangle() {
  return (
    <div className="flex">
      <div className="absolute left-[200px] top-[500px] w-full">
        <span className="absolute top-[-50px] left-[45%] block w-0 h-0 border-t-[20px] border-b-[20px] border-l-[40px] border-t-transparent border-b-transparent border-l-[#464343]"></span>

        <span className="absolute top-[0] left-[50%] block w-0 h-0 border-t-[20px] border-b-[20px] border-l-[40px] border-t-transparent border-b-transparent border-l-[#464343]"></span>

        <span className="absolute top-[50px] left-[45%] block w-0 h-0 border-t-[20px] border-b-[20px] border-l-[40px] border-t-transparent border-b-transparent border-l-[#464343]"></span>

        <h1 className="absolute text-5xl/[60px] left-[1050px] text-white font-dbc cursor-pointer">
          Go
        </h1>
      </div>
    </div>
  );
}
