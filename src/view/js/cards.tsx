import { Card } from 'antd'
import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const gridStyle: React.CSSProperties = {
  cursor: 'pointer',
  width: '25%',
  textAlign: 'center',
  fontWeight: 700,
  transition: 'box-shadow 0.3s ease-in-out'
}

const CardsPage: React.FC = () => (
  <Card title='CSS DESIGN'>
    <Card.Grid style={gridStyle} className='css-border'>
      <Link className='block w-full' to='/js/parallax-move'>
        parallax-move
      </Link>
    </Card.Grid>
  </Card>
)

export default CardsPage
