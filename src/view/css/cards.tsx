import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const gridStyle: React.CSSProperties = {
  cursor: 'pointer',
  width: '25%',
  textAlign: 'center'
}

const CardsPage: React.FC = () => (
  <Card title='CSS DESIGN'>
    <Card.Grid style={gridStyle}>
      <Link className='block w-full' to='/css/menu-radius'>
        menu-radius
      </Link>
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      <Link className='block w-full' to='/css/transition-effect'>
        Home CSS mouse-out transition effect
      </Link>
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
)

export default CardsPage
