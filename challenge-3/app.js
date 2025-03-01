/**
 * Write your challenge solution here
 */

function handleInputPreview (userInput){
    return userInput == '' ? "Not provided" : userInput;
}
document.getElementById("darkMode").addEventListener('click',()=>{
    let value = document.getElementById('darkMode').textContent;
    console.log(value);
    if (value == 'Turn On Dark Mode') {
        document.getElementById('body').style.backgroundColor = 'black';
        document.getElementById('body').style.color = 'white';
        document.querySelectorAll('span').forEach((span) => {
            return span.style.color = 'black';
        });
        document.getElementById('darkMode').innerHTML = 'Turn Off Dark Mode';
    }else{
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('body').style.color = 'black';
        document.querySelectorAll('span').forEach((span) => {
            return span.style.color = 'black';
        });
        document.getElementById('darkMode').innerHTML ='Turn On Dark Mode';
    }
    
})

//User Input name
document.getElementById("nameInput").addEventListener('input', (event) =>{
    //Reading value from input
    let value = event.target.value;

    //setting value to display on preview 
    document.getElementById("nameDisplay").innerHTML =  handleInputPreview(value);
 });
//user job input
document.getElementById("jobInput").addEventListener('input', (event) =>{
    //Reading value from input
    let value = event.target.value;

    //setting value to display on preview 
    document.getElementById("jobDisplay").innerHTML =  handleInputPreview(value);
 });

// User Age Input
document.getElementById("ageInput").addEventListener('input', (event) =>{
    //Reading value from input
    let value = event.target.value;

    //setting value to display on preview 
    document.getElementById("ageDisplay").innerHTML =  handleInputPreview(value);
 });

 // User Age Input
document.getElementById("bioInput").addEventListener('input', (event) =>{
    //Reading value from input
    let value = event.target.value;

    //setting value to display on preview 
    document.getElementById("bioDisplay").innerHTML =  handleInputPreview(value);
 });


