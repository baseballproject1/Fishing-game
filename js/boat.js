// ========================
// 낚시왕 배 시스템
// boat.js
// ========================


let boatLevel = 0;


const boats = [

    {
        id:0,
        name:"🚶 배 없음",
        price:0,
        area:4
    },

    {
        id:1,
        name:"🛶 작은 보트",
        price:10000,
        area:5
    },

    {
        id:2,
        name:"⛵ 낚시 보트",
        price:100000,
        area:6
    },

    {
        id:3,
        name:"🚤 고급 보트",
        price:500000,
        area:8
    },

    {
        id:4,
        name:"🚢 전설의 배",
        price:5000000,
        area:9
    }

];




// 배 구매

function buyBoat(){


    let next =
    boats[boatLevel+1];


    if(!next){

        alert(
        "최고 등급 배입니다!"
        );

        return;

    }



    if(gold < next.price){


        alert(
        "골드가 부족합니다."
        );

        return;

    }



    gold -= next.price;


    boatLevel++;



    alert(
    next.name+
    " 구매 완료!"
    );



    updateUI();


    saveBoat();

    saveGame();

}





// 이동 가능 확인

function canMoveArea(areaId){


    let boat =
    boats[boatLevel];


    if(areaId <= boat.area){

        return true;

    }


    return false;

}





// 배 정보 보기

function showBoat(){


    let boat =
    boats[boatLevel];


    alert(

    "🚢 현재 배\n\n"+
    boat.name+
    "\n이동 가능 지역 : "+
    boat.area

    );


}





// 저장

function saveBoat(){


    localStorage.setItem(

        "FishingKingBoat",

        JSON.stringify({

            boatLevel:boatLevel

        })

    );


}





// 불러오기

function loadBoat(){


    let data =
    localStorage.getItem(
        "FishingKingBoat"
    );


    if(data){


        data =
        JSON.parse(data);


        boatLevel =
        data.boatLevel || 0;


    }


}


loadBoat();
