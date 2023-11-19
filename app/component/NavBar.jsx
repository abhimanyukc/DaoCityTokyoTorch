'use client'
import './NavBar.css'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
const NavBar = () => {
    const router =useRouter();
    const navigate = (item)=>{
        router.push(item)
    }

    return(
        <div className="container">
           <div > 
                <div ><Link href="/"><img src='dao.jpg' className='container-image'/></Link></div>
                
                <div ><Link href="/about" className='mem'>About us</Link></div>
                <div><Link href="/proposal"  className='pro'>Proposal</Link></div>
                
            </div>
            <div>
                <button onClick={()=>navigate("/wallet")}>wallet</button>
            </div>
        </div>
    )
}
export default NavBar