import BodySection from "../components/Dashboard/Body";
import DashNav from "../components/Nav/DashNav";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex font-['Red Hat Display']">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-neutral-3">
        <DashNav /> <BodySection />
      </div>
    </div>
  );
};
export default Dashboard;
