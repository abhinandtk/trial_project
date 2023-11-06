import Navbars from "./components/Navbar";
import Mainbody from "./components/mainbody";
import Taskview from "./components/taskview";


export default function Home() {
  return (
    <>
 <Navbars></Navbars>
    <main>
 <Mainbody></Mainbody>
 <Taskview></Taskview>
    </main>
    </>
  )
}
