

/*Mostrar menu*/
const nav_Menu=document.getElementById('navMenu'),
      nav_Toggle=document.getElementById('navToggle'),
      nav_Close=document.getElementById('navClose'),
      nav_link=document.querySelectorAll('.navLink')


/*Validar si el metodo existe */
if(nav_Toggle){
    nav_Toggle.addEventListener('click',() => {
        nav_Menu.classList.add('show-Menu')
    })
}
if(nav_Close){
    nav_Close.addEventListener('click',() => {
        nav_Menu.classList.remove('show-Menu')
    })
}

function linkAction(){
    nav_Menu.classList.remove('show-Menu')
}
nav_link.forEach(n=>n.addEventListener('click',linkAction))

/*Despliegue de datos*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsheader= document.querySelectorAll('.skills_header');

function desplegarDatos(){
    let itemClass=this.parentNode.className
    for(i=0;i< skillsContent.length;i++){
        skillsContent[i].className='skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}

skillsheader.forEach((el)=>{
    el.addEventListener('click',desplegarDatos)
});


const tabs=document.querySelectorAll('[data-target]'),
      tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',() => {
    const target=document.querySelector(tab.dataset.target)
    tabContents.forEach(tabContent=>{
        tabContent.classList.remove('grade_active')
    })
    target.classList.add('grade_active')
    tabs.forEach(tab=>{
        tab.classList.remove('grade_active')
    })
    tab.classList.add('grade_active')
})
})


const vermodal=document.querySelectorAll('.services_modal'),
      abrirmodal=document.querySelectorAll('.services_button'),
      cerrarmodal=document.querySelectorAll('.services_modal-close');

let modal = function(modalclick){
    vermodal[modalclick].classList.add('active-modal')
}
abrirmodal.forEach((abrirmodal,i)=>{
    abrirmodal.addEventListener('click',()=>{
        modal(i)
    })
})

cerrarmodal.forEach((cerrarmodal)=>{
    cerrarmodal.addEventListener('click',()=>{
        vermodal.forEach((vermodal)=>{
            vermodal.classList.remove('active-modal')
        })
    })
})

let swiper = new Swiper('.portafolio_container', {
    // Optional parameters
    cssMode: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clicklable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel:true,
    keyboard:true,
  });
