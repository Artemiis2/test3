const saveToLocalStorage = (key, data)=>{
    localStorage.setItem(key, JSON.stringify(data));
}

const getFromStorage= (key, default_)=>{
return JSON.parse (localStorage.getItem(key)) || default_;
}


const onLoad = ()=> {
    const cart = getFromStorage('cart',[]);

}

document.addEventListener("DOMContentLoaded", () =>{
onLoad();
})