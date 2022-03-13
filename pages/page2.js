import Button from '../components/button'
import Dropdown from '../components/dropDown'
import Navbar from '../components/header'
import RadioGroups from '../components/radioGroups'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Home() {  
  return (
    <div>
      <Navbar visibleB={true} visibleH={false}></Navbar>
      <div>
          <h2 className='font-medium ml-6 mt-6'>Wie oft wunschen Sie eine Reinigung?</h2>
      </div>
      <RadioGroups></RadioGroups>
      <div className='mx-6'>
          <h3 className='font-semibold text-gray-600'>Wie lange schatzen die die Dauer der Reinigung ein? </h3>
      </div>
      <Dropdown option="Dauer auswahlen" icon={<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />} ></Dropdown>
      <Button name="Angedote ansehen"></Button>
    </div>
  )
}