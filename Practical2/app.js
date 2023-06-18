function app(){
    fetch("http://127.0.0.1:5500/success.html")
        .then(Res=>Res.text()).then(
            data=>{
                var parser = new DOMParser;
                var doct = parser.parseFromString(data,"text/html");
                var uname = doct.getElementById("uname").textContent;
                var roll = doct.getElementById("roll").textContent;
                var imgl = doct.getElementById('image').src;

                document.getElementById("ugname").innerHTML ="<h1>HIiii</h>";
                document.getElementById("ugroll").textContent = roll;
                document.getElementById("image").src = imgl;
            }
        )
}
