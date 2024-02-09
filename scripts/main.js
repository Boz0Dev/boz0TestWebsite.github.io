const button = document.querySelector('button');
const title = document.querySelector('h1');


setUserName()

button.onclick = () => {
    setUserName();


};


function setUserName() {

var name = prompt('What is your name?');

if (!name) {

    setUserName();

}else{

    if (localStorage.getItem('name'.concat(name))) {
        alert('Welcome back my friend!')
        title.textContent = 'Yo Wassup '.concat(name)
        return null
    };
    
    localStorage.setItem('name'.concat(name), name);
    title.textContent = 'Yo Wassup '.concat(name)


};


};
