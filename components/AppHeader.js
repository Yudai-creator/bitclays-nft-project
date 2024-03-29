const AppHeader = () => {
    return ( 
        <header className="lg:pl-16 lg:pr-16 lg:pt-8 p-8 relative flex items-center justify-between">
            <div className="header__logo flex items-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" viewBox="0 0 38 48">
            <text id="bitclays_logo" transform="translate(0 39)" fill="#c89356" font-size="24" font-family="SegoeUIHistoric, Segoe UI Historic"><tspan x="0" y="0">𒀭</tspan></text>
            </svg> */}
            <p className="text-accent">Bitclays</p>
            </div>

            <div className="header__navbar hidden sm:block">
            <ul className="flex justify-between">
                <li>
                <a className="hover:font-bold hover:text-accent transition-all ease-in" href="#story">The Story</a>
                </li>
                <li className="ml-6">
                <a className="hover:font-bold hover:text-accent transition-all ease-in" href="#">The Journey</a>
                </li>
                <li className="ml-6">
                <a className="hover:font-bold hover:text-accent transition-all ease-in" href="#">The Team</a>
                </li>
            </ul>
            </div>

            <div className="header__socials flex justify-between items-center">
            <a href="https://twitter.com/Bitclays" rel="noreferrer" target="_blank">
                <svg  xmlns="http://www.w3.org/2000/svg" width="16.924" height="15.091" viewBox="0 0 16.924 15.091">
                <path d="M17.185,7.78c.011.165.011.33.011.494,0,5.034-3.49,10.835-9.869,10.835A9.178,9.178,0,0,1,2,17.4a6.635,6.635,0,0,0,5.145-1.58A3.531,3.531,0,0,1,3.9,13.179a4.033,4.033,0,0,0,.655.059,3.382,3.382,0,0,0,.914-.13A3.738,3.738,0,0,1,2.688,9.371V9.324a3.269,3.269,0,0,0,1.567.483A3.914,3.914,0,0,1,2.709,6.636a4.064,4.064,0,0,1,.472-1.921A9.6,9.6,0,0,0,10.334,8.7a4.734,4.734,0,0,1-.086-.873,3.649,3.649,0,0,1,3.469-3.808,3.324,3.324,0,0,1,2.534,1.2,6.493,6.493,0,0,0,2.2-.92,3.758,3.758,0,0,1-1.525,2.1,6.471,6.471,0,0,0,2-.59A7.884,7.884,0,0,1,17.185,7.78Z" transform="translate(-2 -4.019)" fill="#f8e1da"/>
                </svg>
            </a>

            <a href="https://discord.gg/nz4CN2kg" rel="noreferrer" target="_blank" className="ml-4"> 
                <svg  xmlns="http://www.w3.org/2000/svg" width="19.522" height="15.21" viewBox="0 0 19.522 15.21">
                <path d="M14.491,4.26a9.953,9.953,0,0,0-.516,1.077,14.213,14.213,0,0,0-4.463,0A9.953,9.953,0,0,0,9,4.26,15.533,15.533,0,0,0,4.971,5.533,17.039,17.039,0,0,0,2.048,16.884a16.145,16.145,0,0,0,4.94,2.537,12.633,12.633,0,0,0,1.082-1.7A9.383,9.383,0,0,1,6.4,16.9a3.306,3.306,0,0,0,.409-.323,11.31,11.31,0,0,0,9.861,0q.2.176.409.323a10.54,10.54,0,0,1-1.666.823,12.166,12.166,0,0,0,1.052,1.743,15.989,15.989,0,0,0,4.93-2.537A16.93,16.93,0,0,0,18.476,5.582,15.622,15.622,0,0,0,14.491,4.26ZM8.508,14.593a1.9,1.9,0,0,1-1.754-1.959,1.887,1.887,0,0,1,1.754-1.959,1.887,1.887,0,0,1,1.754,1.959,1.887,1.887,0,0,1-1.754,1.959Zm6.47,0a1.9,1.9,0,0,1-1.754-1.959,1.887,1.887,0,0,1,1.754-1.959,1.877,1.877,0,0,1,1.754,1.959A1.877,1.877,0,0,1,14.978,14.593Z" transform="translate(-1.964 -4.26)" fill="#f8e1da"/>
                </svg>
            </a>
            </div>
      </header>
     );
}
 
export default AppHeader;