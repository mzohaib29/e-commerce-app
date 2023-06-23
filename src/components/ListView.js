import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import FormatPrice from '../helper/FormatPrice';
import { Button } from '../styles/Button';

const ListView = ({ products }) => {
    return (
        <Wrapper className='section'>
            <div className='container'>
                {
                    products.map((curElement) => {
                        const { id, name, price, description, image } = curElement;
                        return <div className='grid grid-two-column'>
                            <figure className='figure-img'>
                                <img className='card-image' src={image} alt={name} />
                            </figure>
                            <div className='card-data'>
                                <h2 className='product-name'>{name}</h2>
                                <p className='product-price'><FormatPrice price={price} /></p>
                                <p className='product-description'>{description.slice(0, 170)}...</p>
                                <NavLink to={`/singleproduct/${id}`}>
                                    <Button className='btn'>Read More</Button>
                                </NavLink>
                            </div>
                        </div>
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.container {
    text-align: center;
}
.grid {
    border: 1px solid #00000026;
    margin: 1rem 0;
}
.card-image {
    width: 30rem;
    height: 21rem;
    margin: 1rem;
}
.card-data {
    text-align: left;
    padding: 1rem;
}
.btn, .product-name, .product-price, .product-description {
    margin: 1rem 0;
}
.figure-img {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
export default ListView;