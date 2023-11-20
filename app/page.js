import Navbars from "./components/Navbar";
import Mainbody from "./components/mainbody";
import Taskview from "./components/taskview";
import { store } from "@/Redux/store";


export default function Home() {
  return (
    <>
    <main>
 <Mainbody></Mainbody>
 <Taskview></Taskview>
    </main>
    </>
  )
}
