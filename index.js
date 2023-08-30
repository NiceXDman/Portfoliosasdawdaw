

const knowmemore = document.querySelector(".span1");
const row2 = document.querySelector("#row2");
const checkbox = document.querySelector(".checkbox1");
const aboutme = document.querySelector(".aboutme")

aboutme.classList.add("blah")

knowemore.addEventListener("click", () => {
    knowmemore.classList.toggle("knowmemore2");
});

checkbox.addEventListener("hover", ()=>{
    knowmemore.classList("knowemore:hover")
})

function test(){
    document.getElementById("span1").innerHTML="x"
}

function anim(){
    aboutme.classList.toggle(".blah")
}

knowmemore.addEventListener("click" , () => {
    aboutme.classList.add("blah")
})

checkbox.addEventListener("click" , () => {
    aboutme.classList.add("blah")
})



