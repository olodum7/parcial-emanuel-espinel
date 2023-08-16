import React from 'react'

const Card = ({name, residenceCountry}) => {
  return (
    <h3 style={{fontSize: '1.45rem'}}>¡Hola <span style={{color: '#ffb04f'}}>{name}</span>, muchas gracias por visitarnos desde <span style={{color: '#ffb04f'}}>{residenceCountry}</span>!</h3>
  )
}

export default Card