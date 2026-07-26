// ========================
// 낚시왕 낚시 대회 시스템
// contest.js
// ========================


let contest = {

    join:false,

    bestFish:null,

    bestWeight:0,

    rewardGet:false

};



// AI 참가자

const aiPlayers = [

    {
        name:"초보 낚시꾼",
        weight:100
    },

    {
        name:"베테랑 낚시꾼",
        weight:300
    },

    {
        name:"전설 낚시꾼",
        weight:700
    }

];




// 대회 참가

function joinContest(){


    if(contest.join){

        alert(
        "이미 참가 중입니다."
        );

        return;

    }


    contest.join=true;


    contest.bestFish=null;

    contest.bestWeight=0;


    alert(
    "🏆 낚시 대회 참가 완료!"
    );


    saveContest();

}




// 대회 기록 등록

function recordContest(fish,weight){


    if(!contest.join){

        return;

    }



    if(weight > contest.bestWeight){


        contest.bestWeight=weight;


        contest.bestFish=fish;



        saveContest();


    }


}




// 순위 계산

function getContestRank(){


    let ranking=[


        {

            name:"나",

            weight:contest.bestWeight

        }

    ];



    aiPlayers.forEach(p=>{


        ranking.push(p);


    });



    ranking.sort(

        (a,b)=>

        b.weight-a.weight

    );



    return ranking;


}





// 결과 확인

function showContest(){


    if(!contest.join){


        alert(
        "대회에 참가하지 않았습니다."
        );


        return;

    }



    let rankList =
    getContestRank();



    let text =
    "🏆 낚시 대회 결과\n\n";



    rankList.forEach((p,i)=>{


        text +=

        (i+1)+"위 "

        +

        p.name

        +

        " : "

        +

        p.weight.toFixed(1)

        +

        "kg\n";


    });



    let myRank =

    rankList.findIndex(

        p=>p.name==="나"

    )+1;



    let reward=10000;



    if(myRank===1){

        reward=500000;

    }

    else if(myRank===2){

        reward=200000;

    }

    else if(myRank===3){

        reward=100000;

    }



    if(!contest.rewardGet){


        gold+=reward;


        contest.rewardGet=true;


        alert(
        "보상 "+reward+"G 획득!"
        );


        updateUI();


        saveGame();

    }



    alert(text);



    saveContest();


}





// 저장

function saveContest(){


    localStorage.setItem(

        "FishingKingContest",

        JSON.stringify(contest)

    );


}





// 불러오기

function loadContest(){


    let data =

    localStorage.getItem(

        "FishingKingContest"

    );



    if(data){


        contest=

        JSON.parse(data);


    }


}



loadContest();
