// alert(hello)

const inputBox = document.querySelector(".enjoy input");
const addBtn = document.querySelector(".enjoy button");
const todo = document.querySelector(".todo");
const delBtn = document.querySelector(".footer button")


inputBox.onkeyup = ()=> {
    let userData = inputBox.value;
    if(userData.trim() !=0){
    addBtn.classList.add("active");
    }else{
    addBtn.classList.remove("active")
    }
}

todoList()

addBtn.onclick = () => {
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem("New Todo");
        if(getLocalStorage == null){
            listArr = [] ;
        }else{
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(userData);
        localStorage.setItem("New Todo", JSON.stringify(listArr));
        todoList()

}

        
function todoList(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
      listArr = [] ;
    }else{
       listArr = JSON.parse(getLocalStorage);
    }

    // const pending = document.querySelector(".pending");
    // pending.textContent = listArr.lenght;

    let creatList = "" ;
    listArr.forEach((element,index) => {
       creatList += ` <li>${element}<span onclick = "delList(${index})"; ><i class="fas fa-trash"></i></span></li> `   
    });
  
    todo.innerHTML = creatList;
    inputBox.value = "" ;
}

function delList(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    todoList();
}


delBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    todoList()
}