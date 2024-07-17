
let display = document.getElementById("dis")
n=localStorage.getItem('n')
nn=localStorage.getItem('nn')
if (n== null || nn==null){
    n=""
    nn=""
}
else{
    display.innerHTML=nn
}
function cal(x){
    n=localStorage.getItem('n')
    nn=localStorage.getItem('nn')
    if(x=='+' || x=='-' || x=="/" || x=='x' || x=='%' || x=="(" | x==")"){
        if (x=='x'){
            n+=' * '
            nn+=` ${x} `
        }
        else{
            nn+=` ${x} `
            n+=` ${x} `
        }
        display.innerHTML=nn
    }
    else if(x=="="){
        res=eval(n)
        display.innerHTML=res
        n=String(eval(res))
        nn=String(eval(res))
    }
    else if(x=="AC"){
        n=""
        nn=""
        display.innerHTML=0
    }
    else{
        n+=x
        nn+=x
        display.innerHTML=nn
    }
    localStorage.setItem('n',n)
    localStorage.setItem('nn',nn)
}
