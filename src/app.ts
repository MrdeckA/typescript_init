

const compteur = document.querySelector('#btnClick') as HTMLButtonElement


let i =0;

const _increment : (e : Event) => void = (e : Event) =>{
    i++;
    const show : HTMLDivElement = document.querySelector('#content') as HTMLDivElement;
    if(show){
        show.textContent=i.toString();
    }
}

compteur.addEventListener('click', _increment)


type tableau = [String, String, number]
class A{
    name: String = ''

    function<T, a> (a : tableau | T) : tableau | T{
        return a
    }
}

interface  A {
    names : Number
}

let increment : number=0;
const tabs : tableau=[
    "me", 'you', 5
]

console.log(...tabs)

 