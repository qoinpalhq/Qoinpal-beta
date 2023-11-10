import logo from "../assets/Images/brand/logo.svg"
import overview from "../assets/Images/Icons/overviewIcon.svg"
import send from "../assets/Images/Icons/sendIcon.svg"
import transfer from "../assets/Images/Icons/transferHistory.svg"
import invoice from "../assets/Images/Icons/Invoice.svg"
import user from "../assets/Images/Icons/user.svg"
import arrowright from "../assets/Images/Icons/arrow-right.svg"
import logout from "../assets/Images/Icons/login.svg"
const Sidebar = () => {
    return (
        <div className="w-[313px] sticky h-screen bg-white overflow-y-auto">
            <div className="flex flex-col">
                <div className="flex items-center justify-center mt-20 ">
                    <img src={logo} alt="" />
                </div>
                <div className="text-[#595959] text-[10px] font-medium font-['Red Hat Display'] mt-[101.28px] pl-[54px] mb-[34px] leading-[10px] tracking-wide">
                    GENERAL
                </div>
                <div className="w-[158px] h-[252px] inline-flex items-start justify-start flex-col gap-12 ml-[54px]">
                    <div className="w-[106px] flex gap-4">
                        <img src={overview} alt={overview} />
                        <p className="text-black text-base font-medium font-['Red Hat Display'] leading-tight">Overview</p>
                    </div>
                    <div className="flex bg-zinc-200 px-8 py-2 rounded-3xl gap-4 items-center">
                        <img src={send} alt="send" />
                        <p className="text-black text-base font-medium font-['Red Hat Display'] leading-tight">Send</p>
                    </div>
                    <div className="w-[158px] h-6 items-center justify-between flex ">
                        <img src={transfer} alt="transfer" />
                        <div className="text-black text-base font-medium font-['Red Hat Display'] leading-tight">Transfer History</div>
                    </div>
                    <div className="w-[92px] h-6 items-center justify-center flex gap-4">
                        <img src={invoice} alt="invoice" />
                        <div className="text-black text-base font-medium font-['Red Hat Display'] leading-tight">Invoice</div>
                    </div>
                </div>
                <div className="text-[#595959] text-[10px] font-medium font-['Red Hat Display'] mt-[101.28px] pl-[54px] mb-[34px] leading-[10px] tracking-wide">
                    SETTINGS
                </div>
                <div className="flex w-[191px] ml-[54px] h-6 gap-4 mb-[40px]">
                    <img src={user} alt="user" />
                    <div className="w-[151px] h-[19px] items-center flex gap-2 py-[2.5px]">
                        <p className="text-black text-base font-medium font-['Red-Hat-Display'] leading-light">Identity</p>
                        <div className="bg-[#EAFAE7] rounded-2xl w-[86px] h-[20px]">
                            <p className="text-lime-700 text-[10px] w-[54px] h-[10px] px-4 font-bold font-['Red Hat Display'] uppercase leading-[10px] tracking-wide py-1">Verified</p>
                        </div>
                    </div>
                </div>
                <div className="w-[169px] h-6 gap-4 flex ml-[54px] items-center justify pb-[209px]">
                    <div className="w-[151px] h-[19px] items-center flex gap-2 py-[2.5px]">
                        <p className="text-black text-base font-medium font-['Red-Hat-Display'] leading-light">Refer and earn $5</p>
                    </div>                    
                    <img src={arrowright} alt="" />
                </div>
                <div className="w-[169px] h-6 gap-4 flex ml-[54px] items-center justify">
                    <p className="text-[#BA1A1A] text-base font-medium font-['Red-Hat-Display'] leading-light">Log Out</p>
                    <img src={logout} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Sidebar