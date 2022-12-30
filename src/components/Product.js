import React from 'react'
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import FormatPrice from '../helper/FormatPrice';

const Product = (curElement) => {

    const { id, name, image, price, category } = curElement;

  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`}>
      <div className='card'>
        <figure>
          <img className='card-image' src = {image} alt = {name} />
          <figcaption className='caption'>{category}</figcaption>
        </figure>
        <div className='card-data'>
          <div className='grid grid-two-column'>
            <h3>{name}</h3>
            <p className='card-data--price'>{<FormatPrice price = {price}/>}</p>
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  )
}

const Wrapper = Styled.section`
.card-image {
  width: 100%;
  height: 250px;
}
`;

export default Product;