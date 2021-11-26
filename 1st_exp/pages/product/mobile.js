// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function mobile() {
  return (
      <div class="ankit">
          <h1> this mobile</h1>
          <ul>
         <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        {/* <li><Link href="/product/mobile"><a>mobile</a></Link></li> */}

      </ul>
      </div>
  )}