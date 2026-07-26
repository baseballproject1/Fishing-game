// ========================
// 낚시왕 수족관 시스템
// aquarium.js
// ========================


let aquariumFish = [];

let aquariumReward = [

    {
        id:1,
        count:20,
        reward:5000,
        complete:false
    },

    {
        id:2,
        count:50,
        reward:20000,
        complete:false
    },

    {
        id:3,
        count:100,
        reward:100000,
        complete:false
    },

    {
        id:4,
        count:120,
        reward:500000,
        complete:false
    }

];




// 물고기 등록

function addAquarium(fish){


    let exist =
    aquariumFish.find(
        f=>f.name===fish.name
    );


    if(!exist){

        aquariumFish.push(fish);

    }


    checkAquariumReward();


    saveAquarium();


}





// 등급별 개수 확인

function getAquariumGrade(grade){


    return aquariumFish.filter(

        f=>f.grade===grade

    ).length;


}





// 수족관 보상 확인

function checkAquariumReward(){


    aquariumReward.forEach(r=>{


        if(r.complete){

            return;

        }



        if(aquariumFish.length >= r.count){


            r.complete=true;


            gold += r.reward;



            alert(

            "🐠 수족관 보상 획득!\n"+
            r.reward+
            "G"

            );


            updateUI();


        }


    });


}





// 수족관 정보 보기

function showAquarium(){


    let text =
    "🐠 수족관\n\n";


    text +=
    "전체 : "
    +
    aquariumFish.length
    +
    "/120\n\n";


    text +=
    "일반 : "
    +
    getAquariumGrade("일반")
    +
    "\n";


    text +=
    "희귀 : "
    +
    getAquariumGrade("희귀")
    +
    "\n";


    text +=
    "전설 : "
    +
    getAquariumGrade("전설")
    +
    "\n";


    text +=
    "신화 : "
    +
    getAquariumGrade("신화");



    alert(text);


}





// 저장

function saveAquarium(){


    localStorage.setItem(

        "FishingKingAquarium",

        JSON.stringify({

            aquariumFish:aquariumFish,

            aquariumReward:aquariumReward

        })

    );


}





// 불러오기

function loadAquarium(){


    let data =
    localStorage.getItem(
        "FishingKingAquarium"
    );


    if(data){


        data =
        JSON.parse(data);


        aquariumFish =
        data.aquariumFish || [];


        aquariumReward =
        data.aquariumReward || aquariumReward;


    }


}


loadAquarium();
