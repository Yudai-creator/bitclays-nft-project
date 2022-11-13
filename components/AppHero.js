import AppButton from "./AppButton";

const AppHero = () => {
    return ( 
        <section className="hero relative p-8 w-full  flex justify-between">
          <div className="lg:mt-16 lg:ml-16">
            <div className="hero__text">
              <h1 className="text-3xl mb-4 lg:text-5xl">
                A journey through the <span className="text-accent">history</span> of language and education.
              </h1>
              <p className="lg:text-xl">
                Be one of our first community members with the chance to win a free piece of artwork from our collection.
              </p>
            </div>
            <img id="metal_table" className="sm:hidden" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/metal_table_wFLyXChs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560834434" alt="metal table"/>

            {/* Image component */}
            {/* <Image
              id="metal_table"
              className="sm:hidden"
              loader={imageKitLoader}
              src= "https://ik.imagekit.io/u33i3sss0/bitclays_nft/metal_table_wFLyXChs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560834434"
              alt="metal table"
              layout="fill"
            /> */}
            
            <AppButton/>
            

            <p className="text-lg">More than <span className="text-accent">100</span> people have joined us. <span className="text-accent">What are you waiting for?</span></p>
          </div>

          <video className="hidden md:block" width="100%" autoPlay loop playsInline>
            <source src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/bitclays_video_zGdrf5rz1.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1668320776177" type="video/mp4"/>
          </video>

          {/* <div className="hero__imgs hidden sm:block w-full mr-10">
            <img className="imgs" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/artwork_press_APu2tmtox.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664139653363" alt="space table"/>
          </div> */}
          <img id="hero_section_blur" className="blur-xl" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/hero_section_blur_fzEjeH3-g.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663952547164" alt="hero blur graphic"></img>
        </section>
     );
}
 
export default AppHero;