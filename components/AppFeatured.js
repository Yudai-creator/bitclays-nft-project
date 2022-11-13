const AppFeatured = () => {
    return ( 
        <section className="featured relative p-8 mt-12">
          <img id="featured_section_blur" className="blur-3xl overflow-hidden" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/featured_section_blur_37LGiQXzG.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663947161770" alt="feature blur"></img>
          <h2 className="text-xl font-bold mb-12 flex justify-center md:text-2xl lg:text-4xl">
          An NFT collection <br></br> that holds history.
          </h2>
          <div className="featured__artwork flex justify-center">
            <img className="artwork_img max-w-xl" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/clay_table_6rzEjkQE3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560844431" alt="clay table"></img>
            <img className="artwork_img max-w-xl" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/metal_table_wFLyXChs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560834434" alt="metal table"></img>
            <img className="artwork_img max-w-xl" src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/copper_table_G75wrT0vg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560797335" alt="copper table"></img>
          </div>
          <p className="text-center mt-16 md:text-2xl">BitClayNFT is inspired by the first written cuneiform scripts ever found as written language.</p>
        </section>
     );
}
 
export default AppFeatured;