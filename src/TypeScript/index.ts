let menu = document.getElementById("menu") as HTMLDivElement
let navModal = document.getElementById("navLinkConT") as HTMLDivElement
let body = document.getElementById("body") as HTMLElement
let closeIcon = document.getElementById("closeIcon") as HTMLDivElement
let checkState: boolean = true

let showModal = function(){
    if(checkState === true){
        navModal.classList.remove("navLinkConT")
        navModal.classList.add("navLinkConTVisible")
        checkState = false
    }else if(checkState === false){
        navModal.classList.remove("navLinkConTVisible")
        navModal.classList.add("navLinkConT")
        checkState = true
    }
    
}

menu.addEventListener("click", showModal)

closeIcon.addEventListener("click", showModal)