import { Fragment } from 'react'

export default function MenuCard({ menuItem }) {
  return (
    <Fragment>
      <div className='menu-card'>
        <div className='menu-card-container'>
          <div className='menu-card-line'></div>
          <div className='menu-card-content'>
            <div className='title'>
              <h5>{menuItem.name}</h5>
              <h5>{menuItem.price}</h5>
            </div>

            <p>{menuItem.description}</p>
            
          </div>
        </div>
      </div>
    </Fragment>
  )
}