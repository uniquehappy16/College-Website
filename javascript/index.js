// Accordion Section starts 

let accordions = document.querySelectorAll('.accordion');
let contentBelowList = document.querySelectorAll('.content-below');
let accordionbody = document.querySelectorAll(".accordion-body");

accordionbody.forEach(accordion => {
    accordion.style.display='none';
})

accordions.forEach((accordion, index) => {   
    let accordionButton = accordion.querySelector('.accordion-button');
    let contentBelow = contentBelowList[0];
    let accordionContent = accordion.querySelector('.accordion-body');

    accordionButton.addEventListener('click', () => {
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display="none"
            let counter = 0;
            accordionbody.forEach(accordion=>{
               if(accordion.style.display==="none" ){
                counter++;
               }  
             })          
               if(counter===3){
                contentBelow.style.transform = 'translateY(0)';
               }    
        } else {
            accordionContent.style.display="block";
            let accordionHeight = accordionContent.clientHeight;
            contentBelow.style.transform = `translateY(${accordionHeight}px)`;
        }
    });
});

// Accordion Section Ends
