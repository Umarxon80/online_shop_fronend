const instance = axios.create({
    baseURL: 'https://online-shop-0kuy.onrender.com',
  });


const email=document.querySelector(".email")
const password=document.querySelector(".password")
const fullName=document.querySelector(".name")
const submit=document.querySelector(".submit")
const message =document.querySelector(".message")

async function LoginUser() {
    console.log();
    
    try {
        let  data  = await instance.post("/auth/register", {
            email: email.value,
            fullName:fullName.value,
            password: password.value
        });
        console.log(data);
        
        window.open("./home.html")
    } catch (error) {
        message.innerHTML=''     
        console.log(error.response.data);
           
       message.insertAdjacentHTML("beforeend",
            `<h1>${error.response.data.message}</h1>`)
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    LoginUser();
});
