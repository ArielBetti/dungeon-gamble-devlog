import Header from '@/components/composable/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <div className="py-20">
        <Outlet />
      </div>
    </>
  )
}

export default App