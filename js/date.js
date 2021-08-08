const callendar = document.getElementById("date");

function getDate(){
    const date = new Date();
    
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();
    const getday = date.getDay();
    let yoil = "";
    switch (getday){
        case 0:
            yoil = "일";
            break;
        case 1:
            yoil =  "월";
            break;
        case 2:
            yoil =  "화";
            break;
        case 3:
            yoil =  "수";
            break;
        case 4:
            yoil =  "목";
            break;
        case 5:
            yoil =  "금";
            break;
        case 6:
            yoil =  "토";
            break;

    }
    callendar.innerText = `${year}년 ${month}월 ${day}일 ${yoil}요일`;
}

getDate();