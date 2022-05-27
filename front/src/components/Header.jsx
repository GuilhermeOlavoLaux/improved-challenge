import { Fragment } from 'react'
import CompanyLogo from '../assets/images/CompanyLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Header({ backButtonFlag }) {
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className='header-container'>

        <div className='arrow-container' style={{ display: backButtonFlag ? 'initial' : 'none' }}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='lg'
            color='#fff'
            onClick={() => navigate('/')}
          ></FontAwesomeIcon>
        </div>

        <div className="arrow-fragment" style={{ display: !backButtonFlag ? 'initial' : 'none' }}></div>

        <img src={CompanyLogo} alt='share eat' />
        
      </div>
    </Fragment>
  )
}