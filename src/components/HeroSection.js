import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import { Button } from "../styles/Button"

const HeroSection = ({myData}) => {
    const {name,desc} = myData;
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>Looking for a brand that can roll out new dress designs in Pakistan, fulfilling your needs and making them a priority?</p>
                    <NavLink>
                        <Button>Shop Now</Button>
                    </NavLink>

                </div>
                {/* Home page Image */}
                <figure>
                    <img src='images/hero.jpg' alt='hero-section-photo' className='img-style'/>
                </figure>

            </div>

        </div>

    </Wrapper>
  )
}

const Wrapper = Styled.section`
padding: 12rem 0;

.img {
min-width: 10rem;
height: 10rem;
}

.hero-section-data {
  p{
    margin: 2rem 0;
   }
  h1
    text-transform : capitalize;
    font-weight: bold;
   }
   .intro-data {
    margin-bottom: 0;
   }
}
.hero-section-image{
  width: 100%;
  height: auto;
  display: flex;
  justify-content : center;
  align-items : center;
}
figure {
    position: relative

    &::after {
        content: "";
        width: 60%;
        height: 80%;
        background-color: rgba(81, 56, 238, 0.4);
        position: absolute;
        left: 50%;
        top: -5rem;
        Z-index: -1;
    }
}
.img-style {
    width: 100%;
    height: auto;
}

@media (max-width ${({theme}) => theme.media.mobile}){
    .grid{
        gap: 10rem;
    }
    figure::after{
        content: "";
        width: 50%;
        height: 100%;
        left: 0;
        top: 10%;
        background-color: rgba(81, 56, 238, 0.4);
    }
}
.container {
    max-width: 120rem;
    margin: 0 auto;
}
  
.grid {
    display: grid;
    gap: 9rem;
}
  
.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
}

`;

export default HeroSection;