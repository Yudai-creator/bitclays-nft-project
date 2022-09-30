import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppButton from '../components/AppButton'
import RoadmapCard from '../components/RoadmapCard'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitclays NFT</title>
        <meta name="description" content="Bitclays is a community driven Web3 project, aiming to create a community of creators and builders around Stacks Blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 relative flex items-center justify-between">
        <div className="header__logo flex items-center">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" viewBox="0 0 38 48">
          <text id="bitclays_logo" transform="translate(0 39)" fill="#c89356" font-size="24" font-family="SegoeUIHistoric, Segoe UI Historic"><tspan x="0" y="0">𒀭</tspan></text>
        </svg> */}
          <p className='text-accent'>Bitclays</p>
        </div>

        <div className="header__navbar hidden sm:block">
          <ul className='flex justify-between'>
            <li>
              <a className='hover:font-bold hover:text-accent transition-all ease-in' href='#story'>The Story</a>
            </li>
            <li className='ml-6'>
              <a className='hover:font-bold hover:text-accent transition-all ease-in' href='#'>The Journey</a>
            </li>
            <li className='ml-6'>
              <a className='hover:font-bold hover:text-accent transition-all ease-in' href='#'>The Team</a>
            </li>
          </ul>
        </div>

        <div className='header__socials flex justify-between items-center'>
          <a href='https://twitter.com/Bitclays' target="_blank">
            <svg  xmlns="http://www.w3.org/2000/svg" width="16.924" height="15.091" viewBox="0 0 16.924 15.091">
              <path d="M17.185,7.78c.011.165.011.33.011.494,0,5.034-3.49,10.835-9.869,10.835A9.178,9.178,0,0,1,2,17.4a6.635,6.635,0,0,0,5.145-1.58A3.531,3.531,0,0,1,3.9,13.179a4.033,4.033,0,0,0,.655.059,3.382,3.382,0,0,0,.914-.13A3.738,3.738,0,0,1,2.688,9.371V9.324a3.269,3.269,0,0,0,1.567.483A3.914,3.914,0,0,1,2.709,6.636a4.064,4.064,0,0,1,.472-1.921A9.6,9.6,0,0,0,10.334,8.7a4.734,4.734,0,0,1-.086-.873,3.649,3.649,0,0,1,3.469-3.808,3.324,3.324,0,0,1,2.534,1.2,6.493,6.493,0,0,0,2.2-.92,3.758,3.758,0,0,1-1.525,2.1,6.471,6.471,0,0,0,2-.59A7.884,7.884,0,0,1,17.185,7.78Z" transform="translate(-2 -4.019)" fill="#f8e1da"/>
            </svg>
          </a>

          <a href='https://discord.gg/nz4CN2kg' target="_blank" className='ml-4'> 
            <svg  xmlns="http://www.w3.org/2000/svg" width="19.522" height="15.21" viewBox="0 0 19.522 15.21">
              <path d="M14.491,4.26a9.953,9.953,0,0,0-.516,1.077,14.213,14.213,0,0,0-4.463,0A9.953,9.953,0,0,0,9,4.26,15.533,15.533,0,0,0,4.971,5.533,17.039,17.039,0,0,0,2.048,16.884a16.145,16.145,0,0,0,4.94,2.537,12.633,12.633,0,0,0,1.082-1.7A9.383,9.383,0,0,1,6.4,16.9a3.306,3.306,0,0,0,.409-.323,11.31,11.31,0,0,0,9.861,0q.2.176.409.323a10.54,10.54,0,0,1-1.666.823,12.166,12.166,0,0,0,1.052,1.743,15.989,15.989,0,0,0,4.93-2.537A16.93,16.93,0,0,0,18.476,5.582,15.622,15.622,0,0,0,14.491,4.26ZM8.508,14.593a1.9,1.9,0,0,1-1.754-1.959,1.887,1.887,0,0,1,1.754-1.959,1.887,1.887,0,0,1,1.754,1.959,1.887,1.887,0,0,1-1.754,1.959Zm6.47,0a1.9,1.9,0,0,1-1.754-1.959,1.887,1.887,0,0,1,1.754-1.959,1.877,1.877,0,0,1,1.754,1.959A1.877,1.877,0,0,1,14.978,14.593Z" transform="translate(-1.964 -4.26)" fill="#f8e1da"/>
            </svg>
          </a>
        </div>
      </header>

      <main>

        <section className='hero p-4 relative w-full flex justify-between'>
          <div>
            <div className='hero__text p-8 md:p-0'>
              <h1 className='text-3xl mb-4'>
                A journey through the <span className='text-accent'>history</span> of language and education.
              </h1>
              <p>
                Be one of our first community members with the chance to win a free piece of artwork from our collection.
              </p>
            </div>
            <img id='metal_table' className='sm:hidden' src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/metal_table_wFLyXChs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560834434" alt="metal table"></img>
            <div className='hero__action p-8 transition-all ease-in hover:translate-y-2 '>
              <AppButton/>
            </div>

            <p className='p-8 text-lg'>More than <span className='text-accent'>100</span> people have joined us. <span className='text-accent'>What are you waiting for?</span></p>
          </div>

          <div className='hero__imgs hidden sm:block w-full'>
            <img className='imgs' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/artwork_press_APu2tmtox.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664139653363' alt='space table'/>
          </div>
          <img id="hero_section_blur" className='blur-xl' src="https://ik.imagekit.io/u33i3sss0/bitclays_nft/hero_section_blur_fzEjeH3-g.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663952547164" alt="hero blur graphic"></img>
        </section>

        <section className='featured relative p-4 mt-12'>
          <img id="featured_section_blur" className='blur-xl overflow-hidden' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/featured_section_blur_37LGiQXzG.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663947161770' alt='feature blur'></img>
          <h2 className='text-xl font-bold mb-4 flex justify-center'>
          An NFT collection <br></br> that holds history.
          </h2>
          <div className='featured__artwork flex'>
            <img className='artwork_img' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/clay_table_6rzEjkQE3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560844431' alt='clay table'></img>
            <img className='artwork_img' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/metal_table_wFLyXChs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560834434' alt='metal table'></img>
            <img className='artwork_img' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/copper_table_G75wrT0vg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664560797335' alt='copper table'></img>
          </div>
          <p className='text-center mt-4'>BitClayNFT is inspired by the first written cuneiform scripts ever found as written language.</p>
        </section>

        <section className='history relative mt-10 p-4'>
          <img className='history__original_script w-1/2 rounded-lg' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/original_script_u1R8g4i6L.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1663947034908' alt='original'/>

          <div className='history_text relative mt-8'>
            <img className='blur-xl overflow-hidden absolute' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/story_sectiion_blur_1_4KFZSCUQUy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663947162010' alt='history blur'/>
            <p id='story' className='mt-4'>
              One of the most significant creations of Mankind is also one 
              of the most taken for granted. The written word. How could 
              we as a species advance into the complex civilizations, that 
              we also take for granted, without this underappreciated bit 
              of technology? The short answer is that we couldn't.
            </p>
            <p className='mt-4'>
              The Sumerian people inhabited ancient Mesopotamia. This 
              area is also known as the Fertile Crescent, due to Mesopotamia 
              being situated between the Tigris and Euphrates Rivers. 
              Thanks to the seasonal flooding of these rivers, the land 
              was fertile and lush. This allowed for our ancestors to 
              develop an Agrarian civilization as opposed to being 
              hunter/gatherers.
            </p>
            <img className='blur-xl overflow-hidden absolute' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/story_sectiion_blur_2_RMcMTzpfh.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663947161811' alt='history blur'/>
            <p className='mt-4'>
              This new way of life required a way to keep records reliably. 
              Prior to this time, humans used oral tradition to record their 
              history. However this growing Nation State with its new 
              technologies would not be able to rely on oral tradition for 
              long. As more people settled in and near the cities, the 
              inhabitants needed to be able to keep records related to 
              agriculture and trade especially.
            </p>
            <img className='blur-xl overflow-hidden absolute' src='https://ik.imagekit.io/u33i3sss0/bitclays_nft/story_sectiion_blur_3_t_aTRixT2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663947161813' alt='history blur'/>
            <p className='mt-4'>
              The first Sumerian pictographs etched into clay appeared 
              around 3,500 B.C. and we call this early form of writing 
              Cuneiform. These first tablets did not contain stories of the 
              Mesopotamian gods such as Enki or Enlil, nor did they enthrall 
              the reader with ancient myths and legends. These first tablets 
              simply were ledgers related to the trade and movement of 
              grain and other agricultural commodities.
            </p>
          </div>

        </section>

        <section className='community bg-bg_secondary h-80 flex flex-col justify-between items-center'>
          <h2 className='text-accent'>
            A community driven project
          </h2>

          <AppButton/>
        </section>

        <section className='journey p-4 w-full flex flex-col justify-center items-center'>
          <h2 className='text-accent mb-8'>
            The Journey
          </h2>
          <div className='journey_roadmap'>
            <RoadmapCard id="1" title="Form a community" 
            text="We're a group of builders, designers & community 
                  members, we're building in public, & since BitclayNFT 
                  is a community-based project. We believe in our 
                  community taking the lead in the decisions we take."

            />

            <RoadmapCard id="2" title="Launch the collection website " 
            text="We're a project that strongly believes in bringing 
                  Normies to the web3 realms. That said, we take it 
                  upon ourselves to create a seamless fiat on-ramp 
                  experience from the very get-go."

            />

            <RoadmapCard id="3" title="DAO foundation introduced" 
            text="A community project wouldn't be true if we didn't put 
                  our words where our mouth is and formed a DAO. 
                  BitclayNFT will serve as the genesis collection that 
                  enables its holder's governance tokens issued for the DAO."

            />

            <RoadmapCard id="4" title="IRL Merch" 
            text="Yes, you heard that right, we intend to let you order 
                  your NFT replica 1:1 clay tablet lookalike & powered 
                  by a magnetic field to act as a flying antique. In order 
                  to display it in your office or home and flex with it."

            />

            <RoadmapCard id="5" title="Drop PFP collection" 
            text="We come from a strong background in NFTs art
                  culture & understand the NFTs native community 
                  needs the most. That said, a collection of PFP will 
                  be introduced after the first name we found in history. 
                  Kushim will be introduced."

            />
          </div>
        </section>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
