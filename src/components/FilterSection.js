import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_Context';

const FilterSection = () => {
  const {filters: {text}, updateSearch} = useFilterContext();
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} onChange= {updateSearch}/>
        </form>
      </div>
    </Wrapper>
  )
}

const  Wrapper = styled.section`
padding: 10rem;


`;

export default FilterSection