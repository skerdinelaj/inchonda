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
      <Navbar></Navbar>
      <TextBox text="Postleitzahl eingeben"></TextBox>
      <Button name="Angedote ansehen" handleClick={handleClick}></Button>
    </div>
  )
}
