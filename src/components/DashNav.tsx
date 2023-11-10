import riiArrow from "../assets/Images/Icons/arrow-rightt.svg"

const DashNav = () => {
    return (
        <div className="w-[1125px] h-[96px] pl-[317px] pr-[316px] bg-[#FFFFFF] flex justify-center items-center gap-4">
            <div className="w-[492px] h-6 items-center justify-start gap-4 flex ">
                <div className="w-[87px] justify-start items-center gap-[11px] inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center ">
                            <div className="text-white text-[10px] font-bold font-['Red Hat Display'] uppercase leading-[10px] tracking-wide">2</div>
                        </div>
                    </div>
                    <div className="text-neutral-900 text-sm font-medium font-['Red Hat Display'] capitalize leading-[14px] py-1">amount</div>
                </div>
                <div className="inline-flex w-4 h-4 items-center justify-center">
                    <img src={riiArrow} alt="" />
                </div>

                <div className="w-[95px] justify-start items-center gap-[11px] inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 bg-[#8C8C8C] rounded-full flex items-center justify-center ">
                            <div className="text-white text-[10px] font-bold font-['Red Hat Display'] uppercase leading-[10px] tracking-wide">2</div>
                        </div>
                    </div>
                    <div className="text-neutral-400 text-sm font-medium font-['Red Hat Display'] capitalize leading-[14px] py-1">Recipient</div>
                </div>
                <div className="inline-flex w-4 h-4 items-center justify-center">
                    <img src={riiArrow} alt="" />
                </div>

                <div className="w-[97px] justify-start items-center gap-[11px] inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 bg-[#8C8C8C] rounded-full flex items-center justify-center ">
                            <div className="text-white text-[10px] font-bold font-['Red Hat Display'] uppercase leading-[10px] tracking-wide">2</div>
                        </div>
                    </div>
                    <div className="text-neutral-400 text-sm font-medium font-['Red Hat Display'] capitalize leading-[14px] py-1">Summary</div>
                </div>
                <div className="inline-flex w-4 h-4 items-center justify-center">
                    <img src={riiArrow} alt="" />
                </div>

                <div className="w-[97px] justify-start items-center gap-[11px] inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 bg-[#8C8C8C] rounded-full flex items-center justify-center ">
                            <div className="text-white text-[10px] font-bold font-['Red Hat Display'] uppercase leading-[10px] tracking-wide">2</div>
                        </div>
                    </div>
                    <div className="text-neutral-400 text-sm font-medium font-['Red Hat Display'] capitalize leading-[14px] py-1">Send</div>
                </div>
            </div>
        </div>
    )
}
export default DashNav