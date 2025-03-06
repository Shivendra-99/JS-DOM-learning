/**
 * Write your challenge solution here
 */
document.querySelectorAll('.accordion-item').forEach((value)=>{
    value.addEventListener('click', (event) => {
        if (value.querySelector('.arrow').classList.contains('active')) {
            value.querySelector('.arrow').classList.remove("active");
            value.querySelector('.accordion-content').classList.remove("active");
        } else {
            value.querySelector('.arrow').classList.add("active");
            value.querySelector('.accordion-content').classList.add("active");
        }
    })
})