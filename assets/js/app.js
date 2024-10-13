var cl = console.log;

const cardContainer = document.getElementById('cardContainer');

let blogsArr = [
    {
    title : 'Angular 18',
    content : 'Angular 18 using signals for state management'
},
{
    title : 'Angular 14',
    content : 'Angular 14 using Rxjs for state management'
}
]

const createBlogs = (blog) => {
    //Api call to save new Blog in database
    setTimeout(() =>{
     let error = Math.random() >= .5 ? false : true;   
     if(!error){
        blogsArr.push(blog);
        fetchBlogs()
     }else{
        cl('something went wrong while creating blog')
     }
    },500)
}

const fetchBlogs = () => {
   // to make a api call to fetch data from DB
   setTimeout(()=>{
    let error = Math.random() >= .5 ? false : true;
    if(!error){
        let data = blogsArr;
     templating()
    }else{
        cl('something went wrong while fetching blog')
    }
   },1500)
}

const templating = () => {
    let result = '';
    blogsArr.forEach(blog => {
        result+= `
 <div class="col-md-4 mb-4">
        <div class="card">
            <div class="card-header">
                <h2 class="m-0">${blog.title}</h2>
            </div>
            <div class="card-body">
                <p class="m-0">
                    ${blog.content}
                </p>
            </div>
            <div class="card-footer">
                <button class="btn-sm btn-info">Edit</button>
                <button class="btn-sm btn-danger">Remove</button>
            </div>
        </div>
    </div>
`
cardContainer.innerHTML = result;
    })
}

createBlogs({
    title : 'es6',
    content : 'es6 gives us promise to handle async JS'
})
