import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <main className="flex">
      <Sidebar />
      <div className='w-full flex flex-col'>
        <Navbar />
      <div className='grid md:grid-cols-3 grid-cols-1 w-full text-gray-300'>
        <div className='col-span-2'>
            Left column
        </div>
        <div className='w-full'>
            Right column
        </div>
      </div>
      </div>
    </main>
  )
}

export default App
