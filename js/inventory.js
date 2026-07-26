// ========================
// 낚시왕 아이템 보관함
// inventory.js
// ========================


let inventory = {

    "일반 미끼":0,

    "고급 미끼":0,

    "황금 미끼":0,

    "행운권":0,

    "골드 상자":0

};



// 아이템 추가

function addItem(item,count=1){


    if(inventory[item] === undefined){

        inventory[item]=0;

    }


    inventory[item]+=count;


    saveInventory();


}




// 아이템 사용

function useItem(item){


    if(!inventory[item] || inventory[item]<=0){


        alert(
        "아이템이 없습니다."
        );


        return false;

    }



    inventory[item]--;



    if(item==="일반 미끼"){


        alert(
        "🪱 일반 미끼 사용!\n희귀 확률 증가"
        );


    }



    else if(item==="고급 미끼"){


        alert(
        "✨ 고급 미끼 사용!\n희귀·전설 확률 증가"
        );


    }



    else if(item==="황금 미끼"){


        alert(
        "🌟 황금 미끼 사용!\n전설 확률 대폭 증가"
        );


    }



    else if(item==="행운권"){


        gold += 5000;


        alert(
        "🍀 행운권 사용!\n5000G 획득"
        );


    }



    else if(item==="골드 상자"){


        let reward =
        Math.floor(
        Math.random()*50000
        )+10000;


        gold += reward;


        alert(
        "💰 골드 상자!\n"+
        reward+
        "G 획득"
        );


    }



    updateUI();

    saveInventory();

    saveGame();


    return true;


}




// 아이템 보기

function showInventory(){


    let text =
    "🎒 아이템 보관함\n\n";


    for(let item in inventory){


        text +=
        item+
        " : "+
        inventory[item]+
        "개\n";


    }



    alert(text);


}





// 저장

function saveInventory(){


    localStorage.setItem(

        "FishingKingInventory",

        JSON.stringify(inventory)

    );


}





// 불러오기

function loadInventory(){


    let data =
    localStorage.getItem(
        "FishingKingInventory"
    );


    if(data){


        inventory =
        JSON.parse(data);


    }


}



loadInventory();
