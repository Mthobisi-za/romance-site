var sentence1 = "I miss you very much",
    sentence2 = "I know we don't really chat alot these days",
    sentence3 = "It's probably because i was so focused on my exams",
    sentence4 = "But i missed you alot",
    sentence5 =   "I love how much you are crazy....",
    sentence6 = "Can't wait for our first date",
    sentence7 = "Just know that there will always be someone who will love and appreciate you",
    sentence8 = "I truly love you";

function insertData(){
    var div = document.querySelector(".screen");
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence1;
        div.appendChild(p);
        div.appendChild(br)
    }, 5000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence2;
        div.appendChild(p);
        div.appendChild(br)
    }, 10000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence3;
        div.appendChild(p);
        div.appendChild(br)
    }, 15000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence4;
        div.appendChild(p);
        div.appendChild(br)
    }, 20000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence5;
        div.appendChild(p);
        div.appendChild(br)
    }, 25000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence6;
        div.appendChild(p);
        div.appendChild(br)
    }, 30000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence7;
        div.appendChild(p);
        div.appendChild(br)
    }, 35000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var br = document.createElement("br");
        p.textContent = sentence8;
        div.appendChild(p);
    }, 40000);
    setTimeout(()=>{
        var p = document.createElement("p");
        var i = document.createElement("i");
        var ii = document.createElement("i");
        var iii = document.createElement("i");
        var br = document.createElement("br");
        var brr = document.createElement("br");
        i.setAttribute("class", "fa fa-heart");
        ii.setAttribute("class", "fa fa-heart")
        iii.setAttribute("class", "fas fa-kiss-wink-heart fa-spin")
        i.style.fontSize = "48px";
        ii.style.fontSize = "48px";
        iii.style.fontSize = "85px";
        i.style.color = "black";
        ii.style.color = "red";
        iii.style.color = "#fcc82f";
        p.appendChild(i);
        p.appendChild(ii);
        p.appendChild(br);
        p.appendChild(brr)
        p.appendChild(iii);
        div.appendChild(p);
    }, 45000);
    
};
insertData()