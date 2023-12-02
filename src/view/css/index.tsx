import { Outlet } from 'react-router-dom'

function CssPage() {
  return (
    <div className='p-6' style={{ minHeight: 360, background: '#fff' }}>
      <Outlet></Outlet>
    </div>
  )
}

export default CssPage
