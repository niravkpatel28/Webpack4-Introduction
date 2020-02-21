import rawLogo from '../images/RawLogo.png'
const addImage =()=>{
    const img = document.createElement('img');
    img.src= rawLogo;
    img.alt = "Raw Engineering Logo";
    img.style.height='100px';
    img.style.width='100px';
    document.querySelector('#root').appendChild(img);
}


export default addImage;