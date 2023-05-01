let messageContent = document.querySelector("#message-content");
let duration = document.querySelector("#duration");
let durationValue = duration.value;
let cancelable = document.querySelector("#cancelable");
let success = document.querySelector("#success");
let error = document.querySelector("#error");
let addBtn = document.querySelector("#add-button");
let clearBtn = document.querySelector("#clear-button");
let toasts = document.querySelector("#toasts");

addBtn.addEventListener("click", () => {
    if (messageContent.value.trim() == "") {
        if (cancelable.checked == true) {
            if (success.checked == true) {
                toasts.innerHTML += `
         <div class="toast success-toast">
          <p>Success</p>
          <p class="cancel-button">x</p>
         </div>`;
            } else if (error.checked == true) {
                toasts.innerHTML += `
         <div class="toast error-toast">
          <p>Error</p>
          <p class="cancel-button">x</p>
         </div>`;
            }
        } else {
            if (success.checked == true) {
                toasts.innerHTML += `
             <div class="toast success-toast">
              <p>Success</p>
              <p></p>
             </div>`;
            } else if (error.checked == true) {
                toasts.innerHTML += `
             <div class="toast error-toast">
              <p>Error</p>
              <p></p>
             </div>`;
            }
        }
    } else {
        if (cancelable.checked == true) {
            if (success.checked == true) {
                toasts.innerHTML += `
       <div class="toast success-toast">
        <p>${messageContent.value}</p>
        <p class="cancel-button">x</p>
       </div>`;
            } else if (error.checked == true) {
                toasts.innerHTML += `
       <div class="toast error-toast">
        <p>${messageContent.value}</p>
        <p class="cancel-button">x</p>
       </div>`;
            }
        } else {
            if (success.checked == true) {
                toasts.innerHTML += `
           <div class="toast success-toast">
            <p>${messageContent.value}</p>
            <p></p>
           </div>`;
            } else if (error.checked == true) {
                toasts.innerHTML += `
           <div class="toast error-toast">
            <p>${messageContent.value}</p>
            <p></p>
           </div>`;
            }
        }
    }
    setTimeout(() => {
        let toast = document.querySelector(".toast");
        toast.remove();
    }, durationValue);

    let cancelBtn = document.querySelector(".cancel-button");
    cancelBtn.addEventListener("click", () => {
        let toast = document.querySelector(".toast");
        toast.remove();
    });
});

clearBtn.addEventListener("click", () => {
    toasts.innerHTML = "";
});