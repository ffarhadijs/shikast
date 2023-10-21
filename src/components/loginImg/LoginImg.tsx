
export default function LoginImg() {
  return (
    <div
      className={
        "flex items-center justify-center w-[350px] md:w-[480px] h-[330px] md:h-[460px] relative z-50"
      }
    >
      <div className="md:bg-[#F7F7F7] bg-transparent w-[270px] md:w-[400px] h-[270px] md:h-[400px] flex items-center justify-center rounded-full border border-dashed border-[#dadbe7]">
        <div className="w-[180px] md:w-[280px] h-[180px] md:h-[280px] flex items-center justify-center rounded-full border border-dashed border-[#dadbe7] ">
          <div className="absolute md:left-[120px] left-[89px] top-[80px] md:top-[100px] bg-[url('src/assets/images/p1.png')] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-contain bg-no-repeat bg-center drop-shadow-[14px_14px_41px_#00000033] "></div>
          <div className="absolute left-[15px] md:left-[0px] top-[135px] md:top-[200px] bg-[url('src/assets/images/p2.png')] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-contain bg-no-repeat bg-center drop-shadow-[13px_13px_41px_#00000033]"></div>
          <div className="absolute right-[15px] md:right-[0px] top-[135px] md:top-[200px] bg-[url('src/assets/images/p3.png')] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-contain bg-no-repeat bg-center drop-shadow-[20px_20px_41px_#00000033]"></div>
          <div className="absolute left-[95px] md:left-[140px] top-[260px] md:top-[390px] bg-[url('src/assets/images/p4.png')] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-contain bg-no-repeat bg-center drop-shadow-[20px_20px_41px_#00000033]"></div>
          <div className="absolute left-[230px] md:left-[300px] top-[30px] md:top-[20px] bg-[url('src/assets/images/p5.png')] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-contain bg-no-repeat bg-center drop-shadow-[20px_20px_41px_#00000033]"></div>
          <div className="absolute left-[210px] md:left-[300px] top-[205px] md:top-[300px] bg-[url('src/assets/images/p6.png')] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-contain bg-no-repeat bg-center drop-shadow-[13px_13px_41px_#00000033]"></div>
          <div className=" w-[100px] md:w-[150px] h-[100px] md:h-[150px] ">
            <div className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] flex items-center justify-center bg-white rounded-full shadow-[0px_3px_82px_rgba(0, 0, 0, 0.05)]">
              <span className="font-dana font-[400] text-[22px] md:text-[40px] text-[#141414]">
                kast
              </span>
              <span className="font-dana font-[700] text-[22px] md:text-[40px] text-[#141414]">
                Shi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
