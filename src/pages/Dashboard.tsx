import Body from "../components/Body"
import DashNav from "../components/DashNav"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col bg-[#d9d6d6]">
                <DashNav />
                <Body />
            </div>
        </div>
    )
}
export default Dashboard