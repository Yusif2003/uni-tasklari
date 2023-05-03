import {
    getAllCategories,
    getCategoryByID,
    postCategory,
    editCategoryByID,
    deleteCategoryByID,
} from "./API/httprequests.js";

let table = document.querySelector(".suptbl");
let ordertable=document.querySelector(".ordertable");

///////////////////////////////supliers/////////////////////
getAllCategories("suppliers")
    .then((data) => {
        data.forEach((item) => {
            table.innerHTML += `
    
    <tr>
        <td>${item.id}</td>
        <td>${item.companyName}</td>
        <td>${item.contactName}</td>
        <td>${item.contactTitle}</td>
        <td>${item?.address?.region}</td>
    </tr>


    `
        });

    });
////////////////////////////////////orders///////////////////////////////////

getAllCategories("orders").then((data) => {
      data.sort((x,y)=>new Date(x.orderDate)-new Date(y.orderDate));
        data.forEach((item) => {
            let orderDate=item.orderDate.substring(0,10);
            ordertable.innerHTML += `
    
    <tr>
        <td>${item.customerId}</td>
        <td>${item.employeeId}</td>
        <td>${orderDate}</td>
       
    </tr>


    `
        });

    });




