import Card from '../components/card'
import Navbar from '../components/header'
import { useRouter } from 'next/router'
import Dropdown from '../components/dropDown';
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/page2");
  };
  return (
    <div>
      <Navbar visibleB={true} visibleH={false}></Navbar>
      <div className='flex flex-col mx-6'>
          <h2 className='font-semibold text-l'>Wir sind Fans von Spandau!</h2>
          <label>Tolle Nachrichten warten auf Sie:</label>
      </div>
      <Card handleClick={handleClick}></Card>
      <div className='mx-6'>
          <h3 className='font-semibold text-gray-400'>Was wir in Spandau anbieten:</h3>
      </div>
      <Dropdown option="Fanster Reinigung" icon={<ChevronRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}></Dropdown>
      <Dropdown option="Wohnungs Reinigung" icon={<ChevronRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}></Dropdown>
      <Dropdown option="Garten Service" icon={<ChevronRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}></Dropdown>
      <Dropdown option="Hausmeister Service" icon={<ChevronRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}></Dropdown>
      <Dropdown option="Fahrdienst" icon={<ChevronRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}></Dropdown>
    </div>
  )
}