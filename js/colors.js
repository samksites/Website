var colors = ["#eb6b34","#7aeb34","#34ebc3","#c934eb","#eb3462"]

function boxes(number){

    switch(number){

        case 0:
            var tempColor =colors[Math.floor(Math.random() * 5)];
            document.getElementById("one").style.color = tempColor;
            document.getElementById("one").style.textShadow = "1px 1px 5px " + tempColor;
            break;

        case 1:
            document.getElementById("one").style.color = "#fff";
            document.getElementById("one").style.textShadow = "none";
            break;

        case 2:
            var tempColor =colors[Math.floor(Math.random() * 5)];
            document.getElementById("two").style.color = tempColor;
            document.getElementById("two").style.textShadow = "1px 1px 5px " + tempColor;
            break;
        case 3:
            document.getElementById("two").style.color = "#fff";
            document.getElementById("two").style.textShadow = "none";
            break;
        case 4:
            var tempColor =colors[Math.floor(Math.random() * 5)];
            document.getElementById("three").style.color = tempColor;
            document.getElementById("three").style.textShadow = "1px 1px 5px " + tempColor;
            break;
        case 5:
            document.getElementById("three").style.color = "#fff";
            document.getElementById("three").style.textShadow = "none";
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

