// ========================
// 낚시왕 업적 시스템
// achievement.js
// ========================


let achievements = [

    {
        id:1,
        name:"🎣 첫 낚시",
        desc:"물고기 1마리 잡기",
        reward:1000,
        complete:false
    },

    {
        id:2,
        name:"🐟 낚시 초보",
        desc:"물고기 10종 등록",
        reward:5000,
        complete:false
    },

    {
        id:3,
        name:"🎣 낚시 전문가",
        desc:"물고기 50종 등록",
        reward:30000,
        complete:false
    },

    {
        id:4,
        name:"👑 낚시왕",
        desc:"물고기 120종 등록",
        reward:500000,
        complete:false
    },

    {
        id:5,
        name:"⭐ 전설 발견",
        desc:"전설 물고기 획득",
        reward:100000,
        complete:false
    },

    {
        id:6,
        name:"🌌 신화 발견",
        desc:"신화 물고기 획득",
        reward:1000000,
        complete:false
    }

];




// 업적 체크

function checkAchievement(){


    achievements.forEach(a=>{


        if(a.complete){

            return;

        }



        let complete=false;



        if(a.id===1){

            if(caughtFish.length>=1){

                complete=true;

            }

        }



        if(a.id===2){

            if(caughtFish.length>=10){

                complete=true;

            }

        }



        if(a.id===3){

            if(caughtFish.length>=50){

                complete=true;

            }

        }



        if(a.id===4){

            if(caughtFish.length>=120){

                complete=true;

            }

        }



        if(a.id===5){

            if(
            caughtFish.some(
                f=>f.grade==="전설"
            )
            ){

                complete=true;

            }

        }



        if(a.id===6){

            if(
            caughtFish.some(
                f=>f.grade==="신화"
            )
            ){

                complete=true;

            }

        }




        if(complete){


            a.complete=true;


            gold += a.reward;



            alert(

            "🏆 업적 달성!\n"+
            a.name+
            "\n"+
            a.reward+
            "G 획득"

            );


            updateUI();


            saveAchievement();


        }


    });


}






// 업적 보기

function showAchievement(){


    let text=
    "🏆 업적 목록\n\n";



    achievements.forEach(a=>{


        text +=

        a.name+

        " : "

        +

        (a.complete?"✅":"❌")

        +

        "\n";


    });



    alert(text);


}






// 저장

function saveAchievement(){


    localStorage.setItem(

        "FishingKingAchievement",

        JSON.stringify(achievements)

    );


}





// 불러오기

function loadAchievement(){


    let data=

    localStorage.getItem(

        "FishingKingAchievement"

    );



    if(data){


        achievements=

        JSON.parse(data);


    }


}



loadAchievement();
