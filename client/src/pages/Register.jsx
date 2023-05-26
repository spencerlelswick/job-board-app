import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    const currentUser = { name, email, password }
    if (isMember) {
      console.log(currentUser)

      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            handleChange={handleChange}
            type='text'
            name='name'
            value={values.name}
          />
        )}

        <FormRow
          handleChange={handleChange}
          type='email'
          name='email'
          value={values.email}
        />
        <FormRow
          handleChange={handleChange}
          type='password'
          name='password'
          value={values.password}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'New member?' : 'Already registered?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
