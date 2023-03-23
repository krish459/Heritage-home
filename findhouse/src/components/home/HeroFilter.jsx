import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55" style={{color:"white", fontFamily: 'Montserrat' , fontSize:"4.5rem"}}>Heritage Homes</h2>
                <p className="fz18 color-white" style={{color:"white", fontFamily: 'Montserrat' , fontSize:"1.5rem"}}>
                    PREMIUM 1 & 2 BHK HOMES
                </p>
            </div>
            {/* End .home-text */}

            {/* <GlobalHeroFilter /> */}
        </div>
    );
};

export default HeroFilter;
