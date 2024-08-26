const adding  = document.querySelector('.add');
const search = document.querySelector(".search input");
const addtodo = document.querySelector(".todos");

const deleting = document.querySelector(".delete");

adding.addEventListener('submit', e=>{
    e.preventDefault();
   const todo = adding.add.value.trim();
   addtodo.innerHTML += `<li class="p-6 flex justify-between gap-4 items-center">
                <span>${todo}</span>
                <i class="fas fa-trash delete"></i>
            </li>`;
    
    adding.add.value = "";
});

addtodo.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        const taskitem = e.target.parentElement;
        console.log(e.target.parentElement);
        taskitem.remove();
    }
});

const filtertodos = (term)=>{
    //match nahuni haru lai filter garera euta array ma rakhyera filtered class thapera display none gareko
    Array.from(addtodo.children)
    .filter((todo)=> !todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));

    //just yesko opposite chai backspace garda filter garera match huni lai eutai array ma rakhera remove gareko filtered class just mathi ko opposite
    Array.from(addtodo.children)
    .filter((todo)=> todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.remove('filtered'));
};

search.addEventListener('keyup', e=>{
   const term = search.value.trim();  
   filtertodos(term);  
})




