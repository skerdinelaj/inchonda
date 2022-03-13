import Button from '../components/button'
import Navbar from '../components/header'
import { useRouter } from 'next/router'
import TextBox from '../components/textBox';

export default function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/page1");
  };
  return (
    <div>      
      <Navbar visibleB={false} visibleH={true}></Navbar>
      <div className='flex justify-center my-5 px-5'>
        <h1 className='font-semibold text-xl'>Der Berliner Pflegedienst mit Durchblik und Expertise</h1>
      </div>      
      <TextBox text="Postleitzahl eingeben"></TextBox>
      <Button name="Angedote ansehen" handleClick={handleClick}></Button>
    </div>
  )
}
