import Button from '../components/button'
import Navbar from '../components/header'
import RadioGroups from '../components/radioGroups'

export default function Home() {  
  return (
    <div>
      <Navbar></Navbar>
      <RadioGroups></RadioGroups>
      <Button name="Angedote ansehen"></Button>
    </div>
  )
}