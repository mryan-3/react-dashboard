import { TextInput } from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    return (
        <div id='top' className='relative w-full sm:flex justify-between items-center p-2'>
            <h1 className='font-bold text-gray-300'>Dashboard Jones</h1>
            <div className='py-2'>
                <TextInput className='bg-white' placeholder='Search...' icon={MagnifyingGlassIcon}/>
            </div>
        </div>
    )
}

export default Navbar
