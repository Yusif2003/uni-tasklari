// 1. iKi arrayi birləşdir
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9]
// let arrays=arr2.concat(arr1);

// console.log(arrays);


// 2. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// let array = []

// function arrayPush(a, b) {
//     for (let i = 0; i < a; i++) {
//         array.push(b)
//     }
// }
// arrayPush(3, 9);
// console.log(array);



// 3. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// function moveElement(arr,index,move){

// let element =arr[index];
// arr.splice(index,1);
// arr.splice(move,0,element);
// console.log(arr);

// }

// moveElement([10,15,20,25,30],0,2);

// 4. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
// let arr=[]
// function my(a,b) {

// for (let i = a; i <=b; i++) {
//  arr.push(i);
// }
// }
// my(1,8)
// console.log(arr);

// 5.Daxil edilən arraydə təkrarlanan elementi silin və yeni array qaytarın.
// let num=[1,2,3,5,4,5,5,6,6,]

// function remove (data){
//     return data.filter((value,index)=>data.indexOf(value)==index);
// }
// console.log(remove(num));





// let array=[1,2,3,5,4,5,5,6,6,];
// let array2=[...new Set(array)];
// console.log(array2);

// 6. Daxil olunan arraydə əgər bütün rəqəmlər təkdirsə true, cütdürsə false qaytaran funksiya yazın.

let newArr=[]
let arr1=[1,7,3]
function myfunction(){

    for (let i = 0; i < arr1.length; i++) {
       if(arr1[i]%2!=0){
        newArr.push(arr1[i])
       }
        
    }
    return arr1.length==newArr.length
}
console.log(myfunction());

