import React from 'react'

import * as s from './Title.styled'

const Title = ({children}: {children: string}) => {
  return <s.Title>{children}</s.Title>
}

export default Title
