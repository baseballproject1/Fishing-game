// ========================
// 낚시왕 미션 시스템
// mission.js
// ========================


let fishingCount = 0;


let missions = [

    {
        id:1,
        name:"물고기 5마리 잡기",
        goal:5,
        reward:1000,
        complete:false
    },

    {
        id:2,
        name:"물고기 20마리 잡기",
        goal:20,
        reward:5000,
        complete:false
    },

    {
        id:3,
        name:"도감 10종 채우기",
        goal:10,
        reward:10000,
        complete:false
    },

    {
        id:4,
        name:"희귀 물고기 잡기",
        goal:1,
        reward:20000,
        complete:false
    }

];




// 낚시할 때 호출

function checkMission(){


    fishingCount++;



    missions.forEach(m=>{


        if(m.complete) return;



        let value = 0;



        if(m.id <= 2){

            value = fishingCount;

        }


        else if(m.id === 3){

            value = caughtFish.length;

        }


        else if(m.id === 4){


            value =
            caughtFish.filter(
                f=>f.grade==="희귀"
            ).length;


        }




        if(value >= m.goal){


            m.complete = true;


            gold += m.reward;



            alert(
            "미션 완료!\n"+
            m.reward+
            "G 획득"
            );


            updateUI();


        }


    });



    saveMission();


}





function saveMission(){


    localStorage.setItem(

        "FishingKingMission",

        JSON.stringify({

            fishingCount:fishingCount,

            missions:missions

        })

    );


}




function loadMission(){


    let data =
    localStorage.getItem(
        "FishingKingMission"
    );



    if(data){


        data =
        JSON.parse(data);



        fishingCount =
        data.fishingCount || 0;



        missions =
        data.missions || missions;


    }


}



loadMission();
