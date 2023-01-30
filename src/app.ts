

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





 