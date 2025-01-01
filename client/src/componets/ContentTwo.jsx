const ContentTwo = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-[900px]">
        <div>
          <h1 className="mt-[100px] text-7xl/[60px] text-white font-dbc">
            Learn More
          </h1>
        </div>
        <div className="flex relative gap-[200px] mt-[100px]">
          <CardFirst />
          <CardSecond />
        </div>
        <Spin />
      </div>
      <hr className="border-2 border-[#323030]"></hr>
    </>
  );
};

export default ContentTwo;

function Spin() {
  return (
    <div className="flex justify-center items-center h-[75px] w-[75px] absolute mt-[425px] bg-[#312f2f] rounded-full backdrop-filter backdrop-blur-xl bg-opacity-10 font-dbc text-white">
      <div className="flex items-center justify-center h-[70px] w-[70px] border-2 border-[#8b8a8a] rounded-full bg-transparent ">
        <span className="cursor-pointer">Learn</span>
      </div>
    </div>
  );
}

function CardFirst() {
  return (
    <div className="flex flex-col items-center w-[400px] h-[450px] bg-[#312f2f] rounded-xl backdrop-filter backdrop-blur-xl bg-opacity-10 font-dbc text-white">
      <h5 className="mt-5 text-xl">Improve Code</h5>
      <div className="mt-16 mr-[200px]">
        <ul className="space-y-[30px]">
          <li>Adaptive Code</li>
          <li>Advanced Code</li>
          <li>Fast Code</li>
        </ul>
      </div>
    </div>
  );
}

function CardSecond() {
  return (
    <div className="flex flex-col items-center w-[400px] h-[450px] bg-[#312f2f] rounded-xl backdrop-filter backdrop-blur-xl bg-opacity-10 font-dbc text-white ">
      <h5 className="mt-5 text-xl">Do Pratice</h5>
      <div className="mt-16 ml-[200px]">
        <ul className=" text-right space-y-[30px]">
          <li>Adaptive Code</li>
          <li>Advanced Code</li>
          <li>Fast Code</li>
        </ul>
      </div>
    </div>
  );
}
