let form = document.querySelector("#list")
let input = document.querySelector("#input")
let formBtn = document.querySelector("#form-btn")
let lists = document.querySelector("#lists")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "") {
        alert("inputa məlumat daxil edin!")

    } else {
        lists.innerHTML += `  <li>
        <span>${input.value}</span>
        <div class="buttons">
            <button id="check"><i class="fa-solid fa-check-to-slot fa-2xl check"></i></button>
            <button id="trash"><i class="fa-solid fa-trash-can fa-2xl trash"></i></button>
        </div>
    </li>`
    }
    input.value = "";

    let dones = document.querySelectorAll   ("#check");
    dones.forEach((item) => {
        item.addEventListener("click", function () {
        
            this.parentElement.previousElementSibling.style.textDecoration = "line-through";
            this.parentElement.parentElement.style.opacity = "0.5";
        });
    });

    let deletes=document.querySelectorAll("#trash");
    deletes.forEach((item)=>{
        item.addEventListener("click",function(){
            this.parentElement.parentElement.remove();
            localStorage.clear("list",input.value);
        })
    })
})

