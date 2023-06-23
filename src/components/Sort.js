import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filter_Context';

const Sort = () => {
  const { grid_view, setGridView, setListView,filter_products, sorting} = useFilterContext();
  return (
    <Wrapper className='sort-section'>
      <div className='sorting-list'>
        <button className= {grid_view ? "active grid-btn btn-sort" : "grid-btn btn-sort"}
        onClick = {setGridView}
        >
          <BsFillGridFill className='icon'/>
        </button>
        <button className= {grid_view ? "list-btn btn-sort" : " active list-btn btn-sort"}
        onClick = {setListView}
        >
          <BsList className='icon'/>
        </button>
      </div>
      <div className="total-prod">{`${filter_products.length}`} Products Available</div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className='select-value'
          onClick={sorting}
          >
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
            <option value="a-z">Price (a to z)</option>
            <option value="z-a">Price (z to a)</option>
          </select>
        </form>
      </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10rem 0 7rem 0;

.grid-btn {
  border: none;
}
.btn-sort {
  border: none;
  padding: 0.5rem 0.1rem;
  cursor: pointer;
}
.icon {
  font-size: 2.5rem;
  margin: 0.5rem 2rem;
}
.active {
  background-color: ${({theme}) => theme.colors.black};
  color: #fff;
}
.total-prod {
  font-size: 2rem;
  font-family: cursive;
}
.select-value {
  padding: 1rem;
}
`;

export default Sort