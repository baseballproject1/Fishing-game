// ========================
// 낚시왕 지역 시스템
// area.js
// ========================


const areas = [

    {
        id:0,
        name:"🏞️ 초보 낚시터",
        level:1,
        reward:0,
        open:true
    },

    {
        id:1,
        name:"🌿 강가",
        level:3,
        reward:1000,
        open:false
    },

    {
        id:2,
        name:"🏕️ 계곡",
        level:8,
        reward:3000,
        open:false
    },

    {
        id:3,
        name:"🌅 호수",
        level:12,
        reward:5000,
        open:false
    },

    {
        id:4,
        name:"🏝️ 해변",
        level:18,
        reward:10000,
        open:false
    },

    {
        id:5,
        name:"🌊 깊은 바다",
        level:25,
        reward:30000,
        open:false
    },

    {
        id:6,
        name:"🌑 심해",
        level:35,
        reward:100000,
        open:false
    },

    {
        id:7,
        name:"❄️ 얼음 바다",
        level:45,
        reward:200000,
        open:false
    },

    {
        id:8,
        name:"🌌 신비의 바다",
        level:60,
        reward:500000,
        open:false
    },

    {
        id:9,
        name:"👑 전설의 낚시터",
        level:80,
        reward:1000000,
        open:false
    }

];



let currentArea = 0;



// 지역 이동

function changeArea(id){


    let area = areas[id];


    if(!area){

        return;

    }



    if(level < area.level){


        alert(
        area.name+
        "\n필요 레벨 : Lv."+area.level
        );


        return;

    }



    currentArea = id;



    alert(
    area.name+
    " 입장!"
    );


    saveArea();


}





// 지역 해금 확인

function checkArea(){


    areas.forEach(area=>{


        if(level >= area.level && !area.open){


            area.open=true;


            gold += area.reward;



            alert(
            area.name+
            " 해금!\n"+
            area.reward+
            "G 획득"
            );


        }


    });


}





// 현재 지역 가져오기

function getCurrentArea(){


    return areas[currentArea];

}




// 지역 저장

function saveArea(){


    localStorage.setItem(

        "FishingKingArea",

        JSON.stringify({

            currentArea:currentArea,

            areas:areas

        })

    );


}




// 지역 불러오기

function loadArea(){


    let data =
    localStorage.getItem(
        "FishingKingArea"
    );



    if(data){


        data=JSON.parse(data);


        currentArea =
        data.currentArea || 0;


        areas.forEach((a,i)=>{


            if(data.areas[i]){

                a.open =
                data.areas[i].open;

            }

        });


    }


}


loadArea();
