console.log(">>>>>dialog")

// inputa girilen değeri al.
// ekrana alt alta yaz.

// önce forma ulaşalım.
let userForm = document.querySelector("#dialogForm")
userForm.addEventListener('submit', formHandler)
userForm.addEventListener('reset', formClear)

//boş değer girilmemesi için alert oluşturalım

const alertDOM = document.querySelector("#alert")
const alertFunction = () => `
 <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Boş değer hatası!</strong> Mesaj kutusunu doldurmanız gerekiyor.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

//formun içerisindeki tüm işlemleri burada yönetiyorum
function formHandler(event) {
    //sayfanın yeninlenmesinin önüne geçtik
    event.preventDefault();
    //Kullanıcının mesajını alalım
    const USER_MESSAGE = document.querySelector("#userMessage")
    if(USER_MESSAGE.value) {
        addItem(USER_MESSAGE.value);
        USER_MESSAGE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction();
    }
}


//aldığımız bilgiyi dialog alanına yazalım
//önce dialog nesnesine ulaşmam gerekiyor
let dialogDOM = document.querySelector("#dialog")
//şimdi aldığımız değeri yazdıralım
const addItem = (message) => {
    //yazdıracağımız değer için bir "li" oluşturalım
    let liDOM = document.createElement("li")
    // oluşturduğumuz "li" ye style verelim.
    liDOM.classList.add("list-group-item")
    //yazdıracağımız bilgiyi oluşturduğumuz "li"ye
    //atayalım
    liDOM.innerHTML = `- ${message}`
    //ekrana yazdıralım
    dialogDOM.append(liDOM)
}

function formClear(event) {
    event.preventDefault();
    dialogDOM.innerHTML = "";
}