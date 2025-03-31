let string="";
let memory=0;
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="C"){
            string= "";
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="M+"){
            memory+=parseFloat(string) || 0;// to prevent errors 
            string="";
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="M-"){
            memory-=parseFloat(string) || 0;// to prevent errors 
            string="";
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="MC"){
            memory=0; 
            string="";
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="MR"){
            string=memory.toString();
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="√"){
            if(parseFloat(string)<0){
                string="error";
            }
            else{
                string=Math.sqrt(parseFloat(string)).toString();               
            }
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="%"){
            string=eval(string + "/100");
            document.querySelector('input').value=string;

        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
