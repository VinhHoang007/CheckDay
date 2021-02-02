function checkIf(){

    let day = document.getElementById("day").value;
    if(day >= 1 && day <=7){
        if (day ==1){
            document.getElementById('result').innerHTML= "Ngay Chu Nhat";
        }
        else if (day ==2){
            document.getElementById('result').innerHTML= "Ngay Thu Hai";
        }
        else if (day ==3){
            document.getElementById('result').innerHTML= "Ngay Thu Ba";
        }
        else if (day ==4){
            document.getElementById('result').innerHTML= "Ngay Thu Tu";
        }
        else if (day ==5){
            document.getElementById('result').innerHTML= "Ngay Thu Nam";
        }
        else if (day ==6){
            document.getElementById('result').innerHTML= "Ngay Thu Sau";
        }
        else if (day ==7){
            document.getElementById('result').innerHTML= "Ngay Thu Bay";
        }
    }else{
        document.getElementById('result').innerHTML= "Khong phai la ngay trong tuan";
    } 
}

function checkSwitch(){
    
    let day = document.getElementById("day").value;
    let days = parseInt(day);
    switch(days){
        case 1:
            document.getElementById('result').innerHTML= "Ngay Chu Nhat";
            break;
        case 2:
            document.getElementById('result').innerHTML= "Ngay Thu Hai";
            break;
        case 3:
            document.getElementById('result').innerHTML= "Ngay Thu Ba";
            break;
        case 4:   
            document.getElementById('result').innerHTML= "Ngay Thu Tu";
            break;
        case 5:
            document.getElementById('result').innerHTML= "Ngay Thu Nam";
            break;
        case 6:
            document.getElementById('result').innerHTML= "Ngay Thu Sau";
            break;
        case 7:
            document.getElementById('result').innerHTML= "Ngay Thu Bay";
            break;
        default:
            document.getElementById('result').innerHTML= "Khong phai la ngay trong tuan";
            break;

    }
}

