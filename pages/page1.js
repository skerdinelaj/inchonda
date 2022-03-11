import Card from '../components/card'
import Navbar from '../components/header'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/page2");
  };
  return (
    <div>
      <Navbar></Navbar>
      <Card handleClick={handleClick}></Card>
    </div>
  )
}