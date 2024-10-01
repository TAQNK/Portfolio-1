function run(){
    let html_code = document.getElementById("html").value ;
    let css_code = document.getElementById("css").value ; 
    let js_code = document.getElementById("js").value ; 
    let output = document.getElementById("output") ; 

    output.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "</style>" ;
    output.contentWindow.eval(js_code) ; 

}