
import Blog from './../components/blog'
export async function getStaticProps(){
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const blogs= await res.json()
  return { 
    props:{blogs}
  }
}

function blog({blogs}){
  return(
    <div>
      
      {
        blogs.map((blog)=> <Blog item={blog} key={blog.id}/>)
      }
      <h1>Blog page</h1>
    </div>
  )
    
  
}


export default blog