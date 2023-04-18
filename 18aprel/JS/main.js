class animal {
    constructor(name){
        this.name=name
    }
}

class animal_voice extends animal{
    constructor(voice,name){
        super(name)
        this.voice=voice
    }
}
let pisik= new animal_voice("miyau","pisik")
console.log(pisik.voice);