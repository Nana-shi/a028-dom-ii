function adicionaItem(){
//1- / 2-
    const container = document.getElementById("container")
    container.innerHTML += "<article class='item' onclick='removeItem(event)'></article>"
}
//3 -
function removeItem(event){
    event.target.remove()
}
