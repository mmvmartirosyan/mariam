const node_for_click = document.getElementById("for_click")
function find_edit() {
    document.getElementsByTagName('div')[3].innerText="Martirosyan"
    document.getElementsByTagName('div')[4].innerText="Mariam"
    document.getElementsByTagName('div')[5].innerText="Vaganovna"
    document.getElementsByTagName('div')[8].innerText="Khabarovsk"
    document.getElementsByTagName('div')[6].innerText= "female"
    
}
node_for_click.addEventListener("click",find_edit)
    

