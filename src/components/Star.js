import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai"
import Styled from "styled-components";

const Star = ({stars, reviews}) => {
    // console.log(stars);
    // console.log(reviews);

    const starRating = Array.from({length: 5}, (elem, index) => {

        let number = index + 0.5;

        // debugger;

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? 
                    <FaStar className="icon"/> 
                    : stars >= number ? 
                    <FaStarHalfAlt className="icon" /> 
                    : <AiOutlineStar className="icon" />
                }
            </span>
        );

    });

  return (
    <Wrapper>
        <div className="icon-style">
            {starRating}
            <p>({reviews} Customer Reviews)</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = Styled.section`
.icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
}
.icon {
    font-size: 2rem;
    color: orange;
}

.empty-item {
    font-size: 2.6rem
}

p {
    margin: 0;
    padding-left: 1.2rem;
}
`;

export default Star;