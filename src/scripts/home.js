let baseURL='https://online-shop-0kuy.onrender.com'
const instance = axios.create({
    baseURL: baseURL,
  });



const cardholder=document.querySelector(".cardholder")

async function showprods() {
    let {data}= await instance.get("/products")
    console.log(data);
    
    data.forEach(e => {
        let img=baseURL+"/products/uploads/"+e.img
        console.log(img);
        
        cardholder.insertAdjacentHTML("beforeend",`
            <div class="card">
            <img src="${img}" alt="img">
            <h1>${e.name}</h1>
            <h3>${e.price}</h3>
            <p>${e.desc}</p>
        </div>`)
    });
}
console.log(true);

showprods()