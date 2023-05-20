import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found'></img>
        <h3>Page not found</h3>
        <p>Could not find the page you are looking for</p>
        <Link to='/'>Back to home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
