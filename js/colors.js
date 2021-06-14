var colors = ["#eb6b34","#7aeb34","#34ebc3","#c934eb","#eb3462","#ebdb34","#10deb8","#2e22e0","#ac24f0"]

function boxes(number){

    var tempColor =colors[Math.floor(Math.random() * 9)];
    switch(number){
        
        case 0:
            
            document.getElementById("one").style.color = tempColor;
            document.getElementById("one").style.textShadow = "1px 1px 5px " + tempColor;
            break;

       

        case 2:
           
            document.getElementById("two").style.color = tempColor;
            document.getElementById("two").style.textShadow = "1px 1px 5px " + tempColor;
            break;
       
        case 4:
           
            document.getElementById("three").style.color = tempColor;
            document.getElementById("three").style.textShadow = "1px 1px 5px " + tempColor;
            break;
        


    }

    
}

function openNav(){
    var x = document.getElementById("expand");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }

}

var hold = [true,true]

function flipCard(id){
    

    
    var x = document.getElementById(id);
    
    var temp = parseInt(id);

    console.log(hold);
    if(hold[temp]){
        x.style.transform = "rotatey(180deg)";
        hold[temp] = false;
        
    } else{
       
        x.style.transform = "rotatey(0deg)";
        hold[temp] = true;
        console.log("no");
    }
    

    
}

