import React from 'react'
import { Footer, Advertisement, LookingToHire, TestimonialsDiv, CompaniesDiv, EarthShareInfo, EarthShareDiv, SocialMediaDiv, TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, HiringBlurb, SeekingBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv } from './styled-components/LandingStyle'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Home = (props) => {

    return (

        <div>
            <NavBar />
            <GreenJobsHeader>
            <HiringDiv>
                <HiringTextDiv>
                    <h1>Hiring?</h1>
                    <h4>Browse the top rated green companies.</h4>

                    <HiringBlurb>

                        Edison bulb polaroid butcher voluptate et,
                        copper mug prism occaecat biodiesel sed 90's.
                        Ad beard tacos tumblr. Pickled pop-up actually,
                        palo santo whatever aesthetic church-key deep v.
                        Four loko tofu dolore health goth lorem
                    </HiringBlurb>
                    <Link to="/companies/new"><ButtonStyle>Create a Job Listing</ButtonStyle></Link>
                    </HiringTextDiv>
                </HiringDiv>
                <SeekingDiv>
                    <SeekingTextDiv>
                    <h1>Seeking?</h1>
                    <h4>Access to ### earth friendly applicants.</h4>
                    <SeekingBlurb>
                        Edison bulb polaroid butcher voluptate et,
                        copper mug prism occaecat biodiesel sed 90's.
                        Ad beard tacos tumblr. Pickled pop-up actually,
                        palo santo whatever aesthetic church-key deep v.
                        Four loko tofu dolore health goth lorem
                    </SeekingBlurb>
                    <Link to="/users/new"><ButtonStyle>Join the Search</ButtonStyle></Link>
                    </SeekingTextDiv>
                </SeekingDiv>
            </GreenJobsHeader>
            <div>
                <TreesImage src="https://i.imgur.com/SkJPLeT.jpg?2"/>
            </div>
            <EarthShareDiv>
            <EarthShareInfo>
                <h1>
                    EarthShare
                </h1>
                <p>
                EarthShare of Georgia connects people to trusted non-profit
                 organizations dedicated to conserving and protecting our air, 
                 land and water. EarthShare of Georgia raises funds primarily 
                 through workplace-giving partnerships with more than 50 employers 
                 that help support more than 60 environmental and conservation organizations.
                  Approximately 30 of these organizations are based in Georgia, 
                  the others are national member groups – some of which have offices 
                  or have field representatives in Georgia.
                </p>
            </EarthShareInfo>
            <SocialMediaDiv>
                <div>
                    <h2>Get Connected:</h2>
                </div>
                <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIYSURBVGhD7dq/S1VhHMfxKyEWYepYWEgROBWBf0FDpdHiJLQ5CkE/oNkpGmqQqIaGhoYoaNOhoaBy1MUhgiB1iyCtRRGTen+jBw6ez/c+994Tnkd43vAalO9zOV/Uc39gI5fbu87iCZaxjS18xD0cx77oOuzifzt+YgxJdwXq4nfbwGkk23uoC1ceI9k2oS5aWUKyrUNdtLKIZHsFddHKfSTbGdgfsrrwou84iqS7gG9QC5gVjGBfNIBbeI1PsCfDWUzhMHJ71SGcbFE3ivVCze02hAPw6sEx9P/9qsO+QP1dKG8ROoJ2bt1PEbLlbuMN1lCc+4E5XEVbv9LFB4lZRegE1IznA07hJX79+17MV4yjpdQDeKosYj+9Vm7zygN0oWnqoKfKIlXdRdPUIU+di5hRuKkDnroX+YyDkKkDnroXMXY3k6lhTwqL2C1bpoY9KSyygz6UUsOe/7WIPY69Sev0dnwepdSgp+oiCziHkD1z30A771LNTZRSg54qi9jvtr2mUtmztzrjuYNSatBTZZFhNMteX6lzyiOUUoOeThex+3+sSaizSm2LzCPWZaizSm2L2CvfWHmRkBr05EUQKy8SUoOevAhi5UVCatCTF0GsvEhIDXryIoiVFwnZm3k1rNgH3qFBqBnlHWJdgjqrPESpa7APlmNeYAIh+yx2Gmq26DkuIpa9f5+BeoyiZ7D/0sjlctEajT9Y9KEcymvcswAAAABJRU5ErkJggg==" alt="Linked In logo"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ1SURBVGhD7ZlLqFVVGMdvvsAn5QOVQBFtGIRCo1AIUQeKg9JEQTR74APUqCaiNchn6UQj0kmQj/KJOrOJjgSJFCdmWUpCNvBFJprv32/DgsPh7H3W3mcdzx3cP/zgrnXX+vb+zl5rfd9aq6tHPeq8XoDXYQOchqvwAJ4m4l+4AMfhAxgFyTUDfoH6hz+CmwnQiXrbD+FbGA0taxAcgGD8CmyGyeADekEq9YfxsAD2w//gM/+D+VBZL8M50Nh1WAb94HlpLOwBn/8E1kNpDYDzoBGd0WintBDug+/yiRVldAjsqDODreiwpoPzUfw7SjYMw2mMFd1EH4Hv9Rv0taJILrFnwQ7LreiAHNaN5MIS5qzztVDGCRtehqZet0G74DFcglesqNNM8P0MBYUy2Nnwy6z0fPUa+OyATtWrN9wA/1+4ABmxbTQlK6XRMMgbLrUyhvg1giNboJG+B/+/KCvlyLTDRq2kBxPBL/orhKAmt+EnWAFDoZE+BFfKffCSFQ30GWhvbVbKkbmTS5yfsKzGwWEILy7a+ht0orb+FnwMfaCsloA2vslKObKBDy2rqWDOFF7yC5gEtSmM8ehtOArBoROQ98vnyXTFvkb9XFVx5E0wwbOv4zdv2NTqDfgL7ONyHzOHgtriiMPJL2C/z60ooZEQ0qAfrYhUWxwJc2J3ViovfwgzCG1MsyJCyR1xDpiV+kVihlOejNI+9+es1FzJHfkKbF8pva6RGcQ/oK1G0bxeyR1xW2p740arMopra1VWKlZyRwx2VWNOvdyj++wdWalYSR0ZAba9lpVa12zQnotHMyV1xP11bNsYzQXtxax+yYeW7Ww/JCu1pk9BW3mJYq2SO2ICaPu3slJrCrbmZKViJXfELNb25k6tyH2FyaoHDB4/NVNyRwyCIVE0d6oqX0gbHsbFKLkjyuMZ+7iPcSUrq3fB/ncg9kSxLY4YQ8L4NgE0d4qVThiLTHPmWRGptjiiXoRwLux+2typaMPkEZM7QNvrxBooo2hH/MxlNRB+APuLudNOMGLPgnfAYejXCyf4Psf6sgqOuPfJVTgVN+BVkYd7ZyA41Ih7oJNVT9lXgna2ZqUcXQQbTchK1WUWuxq2wxHw1zPYGSdiltgieRvgO2o/V8fARh7td1edBN/Rw7pcvQ828n6iO2o4mHHfhcLh73mWBwlG2U5eJeQpnGl5W9BUTkQbV92Ht0suDq50Ltlus5vKDl536YyXLN1B3pSFubHXilg52fXcyBt9sdImuaf/DnTiDyidCm0EOzu5vGRJefEZK0dH+BJmHK9CJbnh0RENmYYYpVPs0ZvJ1cmJ7Zzw2X9CZSeCHFq/gwbFAzUD3Dp4DwxyrWLSaMTeBKcg/HgOb+eEjiWR43QphGu5dmOcOAhRq1NVGV8Wg1/ka3BDlIJtYNrh8K2a6/WoR2nV1fUMno6jbVpFA9IAAAAASUVORK5CYII=" alt="Instagram logo"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEZSURBVGhD7dehSkNhGMbxI4gWQVQMswgGmyCsDBEMJsOCxXswmLyJBWFpYPcOXFhYXLB4Bd7DWDQY9H/CgS+8uqN8+D3K84dfHLxP+nYq55xzSTu4xB0eMMb0C31ItYURXvH+DdeQaR8viA5dRmbIKp4QHdmGzJArRAe2JTNkgujAtiSGrGCB6MDGGx4xxCDQQ/H2EB2fuoV8R4iOTx1CvhNEx6d2Id8pouNTm5DPQ9T6s0Pqf7YHiTav+hm6n9hGkepXODr2p85RpNxDOihSziFzFCvnkBmKlXPIPYqVc8gNirWO+tu8cYHoyFT9GZz+prEGmfyyq+UhanmIWh6iloeo5SFqeYhaHqLWvxlyjOclNuCc+/Wq6gM8f7KGHUdVPAAAAABJRU5ErkJggg==" alt="facebook logo"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL0SURBVGhD7dlpqA1hHMfxY1f2pSyRspREpGxlLSElpCReuLZSEuGFF5YkCaW8kRckhUS8kCzlBRLlBZItkmRP2bLv31/nnoxz/+fOnGeemXPU/OrTnTvN85+595x55nmeyWXJkiVLmmmBNvnN/ystsRRn8QG/a33ERaxAR9SXBuie36ybVmiU30ws8/EShYsv5Q30BzVEMLq+2biJsdphZRN25je9RxewC9ZF1+cI9OlMhdo/gfZfgBmd6AV00Brt8JztCF5gHPoK9oGZIQgevBn6HvrINARrx/EF46Honz8ov/k3C1DcaC+aIE4a4w6Ka7t4hFmYjh14hgn4J6tgNb6CXnCNTmTVdfG56PfVqJMlCB4U9A4LUdyDRIk6D6tmXNtgZjKsBkGXMRzl5DysWq5+YR1KpgN+wGocpEInMA5Rcg9WHVfqhkNzElbjUq5D39PeKJVrsNq6UucRmhGI8qlYbmEPFkFdeRfonjoO63hXke9TPT+sAi6+4WvRvjj0IAxN+9qfTXEKVqFKe47QrMcNLIMGY0dhFaskjYxDo++21bia7ENo+sFqXE2WI1JuwypQLYYiUubBKlANNEyK9AxR1Eefg1Wo0g6irHTDA1jFKmkGyk4PXIVVsBJeQc83pzSDni1aBLCKp2kjnKIpbl+0Q09sRXDZJk2foHGbcy7BKpw2/RNjxeeCgavXKIwBY+UYrBOkpQZeovVYTZ6skyRNkzyvaYvTsE6WlMfoBO9RL6aP+T6sE/ukidgwJBoNYUZhLQ7A5+xPvsPpCe4aLVP6XlTQWsFMpJLO2ALNxa2LcfUeU5BodH8MhlZItIBsXUgcDzEAsaMuVsMQDUe6YiAmYTEOIcpLGVe70Rpeoht4DrTSbZ0sCXrbNBGJRKPdlXgK6+Q+3MVcRF5kixO9PNGC9mH4uCd0I+/HGPh6cVR2dP/oftmAM3gL62ILfkKzSw0vNIcYjcjz7LSj0Wh/aJ1Yr8BGQh2EOozmyJIlS9Ull/sDJKNw3QwWZlkAAAAASUVORK5CYII=" alt="Twitter logo"/>
                </div>
            </SocialMediaDiv>
            </EarthShareDiv>
            <CompaniesDiv>
            </CompaniesDiv>
            <TestimonialsDiv>
                    CAROUSEL HERE
            </TestimonialsDiv>
        <LookingToHire>
            <div>
                <button>
HELLO
                </button>
                <button>
                    HELLO
                </button>
            </div>
        </LookingToHire>
        <Advertisement>
            # Tiers
        </Advertisement>
        <Footer>
            Footer
        </Footer>

        </div>
    )
}




export default Home