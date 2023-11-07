
function insert_img(){
    const img = document.createElement('img');
    img.src = 'file:///Users/mariammartirosan/Downloads/%20-3.jpg';
    img.alt='trust the process';
    document.getElementsByTagName ("div")[0].appendChild(img);
    img.height='50';
    img.width='50';
}
const node_insert_img= document.getElementById ("insert_img")
node_insert_img.addEventListener ("click", insert_img)
