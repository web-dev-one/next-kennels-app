import WelcomeCarousel from "../../components/Carousel";
import CoyoteServices from "../../components/Services/CoyoteService";
import Layout from "../../components/Layout/Layout";
import ScrollButton from "../../components/ScrollButton";
import React from "react";



export default function CoyoteSafe(){
    const servicesRef = React.useRef(null)


    return(<Layout>
    <WelcomeCarousel />
    <div className="content relative">
      <div className="relative">
        <div
          ref={servicesRef}
          className="absolute"
          style={{ top: "-170px" }}
          id="services"
        />
        <CoyoteServices />
      </div>
      </div>
      </Layout >)
}

