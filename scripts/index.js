const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const sectAll = document.querySelectorAll('.main-content');

function mainPage() {
    //button click actove class only
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click" , function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className+='active-btn';
        })
    }

    // section active 
    sectAll.addEventListener('click', (e) =>{
        // console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
            // remove selected item
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other section 

            sections.forEach((section) =>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
}

mainPage();