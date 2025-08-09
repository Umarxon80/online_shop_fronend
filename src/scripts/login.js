const instance = axios.create({
    baseURL: 'https://online-shop-0kuy.onrender.com',
  });


const email=document.querySelector(".email")
const password=document.querySelector(".password")
const submit=document.querySelector(".submit")
const message =document.querySelector(".message")

async function LoginUser() {
    try {
        let { data } = await instance.post("/auth/login", {
            email: email.value,
            password: password.value
        });
        localStorage.setItem("token",JSON.stringify(data))
        window.open("./home.html")
    } catch (error) {
       message.insertAdjacentHTML("beforeend",
            `<h1>${error.response.data}</h1>`)
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    LoginUser();
});
