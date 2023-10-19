import Abou1 from "@/components/Abou1"
import Abou from "@/components/Abou"
import Abou2 from "@/components/Abou2"
import Mobileab from "@/components/Mobileab"
import Speaker from "@/components/Speaker"
import Guestspeaker from "@/components/Guestspeaker"
import Scrolll from "@/components/Scrolll"
export default function Home() {
  return (
    <div className="overflow-hidden ">
    <Mobileab />{/*about for sm devices */}
    <Speaker /> 
    <Abou />
    <Abou2 /> {/*All abou files are for md and lg devices */}
    <Abou1 />
    <Guestspeaker />{/*responsive*/}
    <Scrolll />{/*responsive*/}

    </div>
  )
}

