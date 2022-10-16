import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";;
import { UseScroll } from "./useScroll";

const ServicesSection = () => {
    const [element, controls] = UseScroll();
    return (
        <Services variants={scrollReveal} ref={element} animate={controls} initial="hidden"  >
            <Description className="description">
                <h2>Hight <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolar sit amet</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolar sit amet</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolar sit amet</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolar sit amet</p>
                    </Card>
                </Cards>
            </Description>
            <Image className="image">
                <img src={home2} alt="" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    
    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;