import RoadmapCard from "./RoadmapCard";

const AppJourney = () => {
    return ( 
        <section className="journey relative p-4  w-full flex flex-col justify-between items-center overflow-hidden">
          <img id="rock_table_right" className="absolute" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/rock_table_right_RNyYUmNxm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664827317105" alt="rock table right"/>
          <img id="rock_table_left" className="absolute" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/rock_table_left_t4vHSJmZq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664827319610" alt="rock table left"/>

          <img id="journey_blur" className="blur-3xl overflow-hidden absolute" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/journey_section_blur_MXoP5bVrW.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663947161746" alt="journey blur"/>
          <h2 className="text-accent text-2xl lg:text-4xl font-bold mb-8">
            The Journey
          </h2>
          <div className="journey_roadmap w-3/4 max-w-md">
            <RoadmapCard id="1" title="Form a community" 
            text="We are a group of builders, designers & community 
                  members, we are building in public, & since BitclayNFT 
                  is a community-based project. We believe in our 
                  community taking the lead in the decisions we take."

            />

            <RoadmapCard id="2" title="Launch the collection website " 
            text="We are a project that strongly believes in bringing 
                  Normies to the web3 realms. That said, we take it 
                  upon ourselves to create a seamless fiat on-ramp 
                  experience from the very get-go."

            />

            <RoadmapCard id="3" title="DAO foundation introduced" 
            text="A community project would not be true if we did not put 
                  our words where our mouth is and formed a DAO. 
                  BitclayNFT will serve as the genesis collection that 
                  enables its holder&apos;s governance tokens issued for the DAO."

            />

            <RoadmapCard id="4" title="IRL Merch" 
            text="Yes, you heard that right, we intend to let you order 
                  your NFT replica 1:1 clay tablet lookalike & powered 
                  by a magnetic field to act as a flying antique. In order 
                  to display it in your office or home and flex with it."

            />

            <RoadmapCard id="5" title="Drop PFP collection" 
            text="We come from a strong background in NFTs art
                  culture and understand the NFTs native community 
                  needs the most. That said, a collection of PFP will 
                  be introduced after the first name we found in history. 
                  Kushim will be introduced."

            />
          </div>
          
        </section>
     );
}
 
export default AppJourney;