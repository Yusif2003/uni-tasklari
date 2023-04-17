function ucbucaq(ter1,ter2,ter3){
    if(ter1==ter2 && ter1==ter3 && ter2==ter3){
        console.log("beraberterefli");
    }
    else if(ter1==ter2 ||ter2==ter3 || ter1==ter3){
        console.log("beraberyanli");
    }
    else{
        console.log("muxtelifterefli");
    }
}
ucbucaq(1,1,1)