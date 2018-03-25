const alertText = (text)=>{
    document.getElementById("alert").innerHTML = text;
    document.getElementById("alert").style.bottom = 0;
    setTimeout("document.getElementById('alert').style.bottom = '-100px'", 3000);
}
export default alertText;