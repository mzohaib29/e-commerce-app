import { useProductContext } from "../context/ProductContext"
import Product from "./Product";
import Styled from "styled-components";

const FeaturedProduct = () => {
  const {isLoading, featureProducts} = useProductContext();

  if(isLoading) {
    return <div>.......Loading</div>
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now</div>
        <div className="common-heading">Our Feature Service</div>
        <div className="grid grid-three-column">
          {
            featureProducts.map((curElement) => {
              return <Product key={curElement.id} {...curElement}/>
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = Styled.section`
.container {
  margin-bottom: 200px;
}
.grid.grid-three-column {
  width: 100%
}
`;

export default FeaturedProduct;