import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import { Button } from './styles/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>UH OH! You're lost</h2>
          <p>
          “Looking for a brand that can roll out new dress designs in Pakistan, fulfilling your needs and making them a priority? We guarantee you can turn to us at Image to do just that! It might seem like we’re tooting our own horn, but if you read on below, you’ll understand just why.”
          </p>
          <NavLink to="/">
          <Button>
            Go to Home
          </Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = Styled.section``;

export default ErrorPage