// // import Head from 'next/head'
// // import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
// export default function Home() {
//   return (
//     <div class="ankit">
//       <Head>
//         <title>
//           Home
//         </title>
//       </Head>
//       <h1>this home page</h1>
//       <h1 class="title">
//         Learn <a href="https://nextjs.org">Next.js!</a>
//       </h1>
//       <ul>
//         <li><Link href="/"><a>Home</a></Link></li>
//         <li><Link href="/posts/fist-post"><a>Layout</a></Link></li>

//         <li><Link href="/button"><a>button</a></Link></li>
//         <li><Link href="/post"><a>post</a></Link></li>
//         <li><Link href="/about"><a>About</a></Link></li>
//         <li><Link href="/product/mobile"><a>mobile</a></Link></li>
//       </ul>

//       <Image src="/image/images.jpeg" height={400} width={400} />
//     </div>

//   )
// }

import Head from 'next/head'
import Layout, { siteTitle } from '../component/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello ,I'm Ankit . I'm Nodejs Devolper 
          you con contacy me on 
           </p>
           <a href="https://www.instagram.com/mkankit07/">Insta</a>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}