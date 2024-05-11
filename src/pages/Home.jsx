import { PageHeading, Navbar } from "../components";

import VideoBackground from "./../assets/video-background.mp4";

const Home = () => {
  return (
    <>
        <Navbar />

        
            <div className=" bg-slate-500">
              <video muted autoPlay={true} className="w-full">
                <source type="video/mp4" src={VideoBackground} />
              </video>
            </div>

            <p></p>

    </>
  )
}

export default Home