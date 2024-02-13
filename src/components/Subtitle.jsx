import { Favorite } from '@mui/icons-material'
import React from 'react'

function SubTitle({subtitle}) {
  return (
    <h3 className="section__subtitle">{subtitle}{<Favorite style={{color:'red'}}/>}</h3>
  )
}

export default SubTitle