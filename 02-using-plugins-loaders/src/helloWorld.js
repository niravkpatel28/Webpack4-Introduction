
const helloWorld = ()=>{
    const para = document.createElement('p');
    para.innerHTML="Hello World";
    document.querySelector('#root').appendChild(para);
}


export default helloWorld;