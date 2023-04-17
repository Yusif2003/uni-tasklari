// biri söz digəri rəqəm olan 2 parametrdən ibarət funksiya yazın.Həmin söz daxil edilən rəqəm qədər consola çıxsın

function myfunction(name,tekrar){
    let res=' ';
    for (let i= 0; i<tekrar;i++) {
        res+=(' '+name)
    }
    return res;
}
console.log (myfunction('yusif',5))