

function Blog({item}){
    return (
        <div>
            <h1 class="blogData" >Id : {item.id}</h1>
            <p  class="blogData" >Title : {item.title}</p>
            <p  class="blogData" >Body : {item.body}</p>
            <div class="nikal" ></div>
        </div>
    )
}


export default Blog