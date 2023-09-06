import React from "react";
import vite from "/vite.svg";
import blockchain from '/tracks_blockchain_vector.svg'
import electronics from '/tracks_digitalelectrovics_vector.svg'
import dev from '/Tracks_LaptopVector.svg'
import aiMl from '/tracks_ML_vector.svg'

const Tracks = () => {

  const tracks = [
    {
      id: 1,
      title: 'Development',
      desc: "A track to develop Websites and Mobile Apps based on the problem statements we have for you, in line with the theme.",
      img: dev

    },
    {
      id: 2,
      title: 'Machine Learning',
      desc: "A track for all ML enthusiasts out there. It brings together participants to solve real-data challenges based on Sustainability by applying Machine learning. It aims to bring to life creative solutions to leverage the power of AI to amplify human capability.",
      img: aiMl

    },

    {
      id: 3,
      title: 'Electronics',
      desc: "This track is for all those interested in electronics. It focuses on problem statements based on IoT and Digital Circuit design to solve a real-world sustainability problem.",
      img: electronics

    },
    {
      id: 4,
      title: 'Web 3.0',
      desc: "This track is for Web3 enthusiasts to turn ideas into actual projects. It offers opportunities to work on blockchain-based problem statements focussing on different areas across NFTs, DeFi, and Metaverse to pursue a more sustainable future.",
      img: blockchain

    },
  ]
  return (
    <div name="tracks" className="w-full px-5  flex flex-col items-center py-5">
      <h2 className="font-bold text-3xl py-7 xl:py-10  ">Tracks</h2>
      <div className="p-4 flex gap-11 w-full flex-wrap items-center justify-center xl:gap-40 2xl:gap-14  ">
        {
          tracks.map(({ id, title, desc, img }) => (
            <div key={id} className="  w-[350px]  relative liner-border p-[3px] rounded-[15px] md:w-[450px] xl:w-[450px] 2xl:w-[400px] ">
              <div className="min-h-[500px] px-7  py-10 bg-tertiary rounded-[15px] shadow-card flex flex-col items-center justify-ene gap-5 2xl:h-[600px] 2xl:gap-24">
                <img src={img} alt="vite" className="w-[300px] h-[200px]" />
                <div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p>{desc} </p>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Tracks;

