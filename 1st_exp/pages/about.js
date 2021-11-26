
import Link from 'next/link'
export default function Home() {
  return (
      <div class="ankit">
          <h1> this is about page</h1>
          <ul>
         <li><Link href="/"><a>Home</a></Link></li>
        {/* <li><Link href="/about"><a>About</a></Link></li> */}
        <li><Link href="/product/mobile"><a>mobile</a></Link></li>

      </ul>
      </div>
  )}