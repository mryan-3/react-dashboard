import { ChartBarIcon, HomeIcon, DocumentPlusIcon, EnvelopeIcon, CreditCardIcon, BellIcon, ArrowUpIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
    return (
        <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
            <div className='h-20 items-center flex'>
                <HomeIcon width={40} className="text-gray-300 left-3 sm:left-6 fixed" />
            </div>
            <div className='fixed left-3 sm:left-6 top-[100px] '>
                <ChartBarIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
                <DocumentPlusIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
                <EnvelopeIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
                <CreditCardIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
                <BellIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
            </div>
            <div className='fixed bottom-4 left-3 sm:left-6'>
                <a href='#top'>
                 <ArrowUpIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
                </a>
                <ArrowTopRightOnSquareIcon width={40} className='bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg ' />
            </div>
        </div>
    )
}
export default Sidebar
