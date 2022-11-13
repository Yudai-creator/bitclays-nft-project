import React from 'react';
import Head from 'next/head'

// import Image from 'next/image'


import styles from '../styles/Home.module.css'
import AppButton from '../components/AppButton'
import AppHeader from '../components/AppHeader';
import AppHero from '../components/AppHero';
import AppFeatured from '../components/AppFeatured';
import AppHistory from '../components/AppHistory';
import AppJourney from '../components/AppJourney';
import RoadmapCard from '../components/RoadmapCard'



// const imageKitLoader = ({ src, width, quality }) => {
//   if(src[0] === "/") src = src.slice(1);
//   const params = [`w-${width}`];
//   if (quality) {
//     params.push(`q-${quality}`);
//   }
//   const paramsString = params.join(",");
//   var urlEndpoint = "https://ik.imagekit.io/u33i3sss0";
//   if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
//   return `${urlEndpoint}/${src}?tr=${paramsString}`
// }


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitclays NFT</title>
        <meta name="description" content="Bitclays is a community driven Web3 project, aiming to create a community of creators and builders around Stacks Blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader/>

      <main>

        <AppHero/>

        <AppFeatured/>

        <AppHistory/>

        <section className="community mt-36 mb-24 p-4 bg-bg_secondary h-80 flex flex-col justify-between items-center">
          <h2 className="text-accent">
            A community driven project
          </h2>

          <AppButton/>
        </section>

        <AppJourney/>
        
      </main>

      <footer className="relative p-4  w-full bg-bg_secondary">
        <h2 className="text-accent mb-8 font-bold md:text-2xl lg:text-3xl flex justify-center">Meet the crew on Discord</h2>
        <div className="team flex items-center justify-between">
          <div className="bg-bg w-1/4 h-32 rounded-md"></div>
          <div className="bg-bg w-1/4 h-32 rounded-md"></div>
          <div className="bg-bg w-1/4 h-32 rounded-md"></div>
        </div>
        <p className="mt-16 flex justify-center">Design and build by Yudai</p>
      </footer>
    </div>
  )
}
