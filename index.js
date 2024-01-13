let user = ""
const opponent = ["Rock","Paper","Scissor"]
let rand = ""
let won = 0
let lost = 0
let draw = 0


    document.querySelector(".btn1").addEventListener("click",function(){
        user = "Rock"
    
        rand = opponent[(Math.random() * opponent.length) | 0]

        document.querySelector(".oppTool").innerHTML="Choosing"

        setTimeout(()=>{
            document.querySelector(".oppTool").innerHTML=rand
        },1000)


        document.querySelector(".result").innerHTML="Processing"

        setTimeout(()=>{
            if(rand=="Rock"){
                document.querySelector(".result").innerHTML="Draw!"
                draw++
                document.querySelector(".draw").innerHTML=`Draw: ${draw}`
            }
    
            else if(rand=="Paper"){
                document.querySelector(".result").innerHTML="Lost!"
                lost++
                document.querySelector(".lost").innerHTML=`Lost: ${lost}`
            }
    
            else{
                document.querySelector(".result").innerHTML="Win!"
                won++
                document.querySelector(".won").innerHTML=`Won: ${won}`
            }  
        },1000)

    })

    document.querySelector(".btn2").addEventListener("click",function(){
        user = "Paper"
    
        rand = opponent[(Math.random() * opponent.length) | 0]

        document.querySelector(".oppTool").innerHTML="Choosing"

        setTimeout(()=>{
            document.querySelector(".oppTool").innerHTML=rand
        },1000)

        document.querySelector(".result").innerHTML="Processing"

        setTimeout(()=>{
            if(rand=="Paper"){
                document.querySelector(".result").innerHTML="Draw!"
                draw++
                document.querySelector(".draw").innerHTML=`Draw: ${draw}`
            }
    
            else if(rand=="Scissor"){
                document.querySelector(".result").innerHTML="Lost!"
                lost++
                document.querySelector(".lost").innerHTML=`Lost: ${lost}`
            }
    
            else{
                document.querySelector(".result").innerHTML="Win!"
                won++
                document.querySelector(".won").innerHTML=`Won: ${won}`
            }
        },1000)
    
    })

    document.querySelector(".btn3").addEventListener("click",function(){
        user = "Scissor"
    
        rand = opponent[(Math.random() * opponent.length) | 0]

        document.querySelector(".oppTool").innerHTML="Choosing"

        setTimeout(()=>{
            document.querySelector(".oppTool").innerHTML=rand
        },1000)

        document.querySelector(".result").innerHTML="Processing"

        setTimeout(()=>{
            if(rand=="Scissor"){
                document.querySelector(".result").innerHTML="Draw!"
                draw++
                document.querySelector(".draw").innerHTML=`Draw: ${draw}`
            }
    
            else if(rand=="Rock"){
                document.querySelector(".result").innerHTML="Lost!"
                lost++
                document.querySelector(".lost").innerHTML=`Lost: ${lost}`
            }
    
            else{
                document.querySelector(".result").innerHTML="Win!"
                won++
                document.querySelector(".won").innerHTML=`Won: ${won}`
            } 
        },1000)
    
    })






