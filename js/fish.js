const fishes = [

/* =====================
   일반 물고기 1~60
===================== */

{name:"붕어",grade:"일반",area:"강가",min:0.5,max:3,price:50},
{name:"피라미",grade:"일반",area:"강가",min:0.1,max:1,price:20},
{name:"잉어",grade:"일반",area:"강가",min:2,max:10,price:120},
{name:"송사리",grade:"일반",area:"강가",min:0.1,max:0.5,price:15},
{name:"메기",grade:"일반",area:"강가",min:1,max:8,price:100},
{name:"가물치",grade:"일반",area:"강가",min:2,max:12,price:150},
{name:"빙어",grade:"일반",area:"호수",min:0.1,max:0.8,price:30},
{name:"산천어",grade:"일반",area:"계곡",min:0.5,max:2,price:80},
{name:"황어",grade:"일반",area:"강가",min:1,max:5,price:90},
{name:"누치",grade:"일반",area:"강가",min:1,max:7,price:110},

{name:"갈겨니",grade:"일반",area:"계곡",min:0.1,max:1,price:25},
{name:"돌고기",grade:"일반",area:"계곡",min:0.2,max:2,price:40},
{name:"버들치",grade:"일반",area:"계곡",min:0.1,max:1,price:35},
{name:"참붕어",grade:"일반",area:"강가",min:0.5,max:3,price:60},
{name:"가시고기",grade:"일반",area:"호수",min:0.1,max:0.7,price:25},
{name:"밀어",grade:"일반",area:"강가",min:0.1,max:1,price:20},
{name:"동사리",grade:"일반",area:"강가",min:0.2,max:2,price:45},
{name:"꺽지",grade:"일반",area:"계곡",min:0.3,max:3,price:70},
{name:"배스",grade:"일반",area:"호수",min:1,max:5,price:100},
{name:"블루길",grade:"일반",area:"호수",min:0.3,max:2,price:50},

{name:"전어",grade:"일반",area:"바다",min:0.2,max:1,price:60},
{name:"고등어",grade:"일반",area:"바다",min:0.5,max:3,price:100},
{name:"멸치",grade:"일반",area:"바다",min:0.05,max:0.3,price:10},
{name:"망둥어",grade:"일반",area:"바다",min:0.2,max:1,price:40},
{name:"놀래미",grade:"일반",area:"바다",min:0.5,max:2,price:90},
{name:"쥐치",grade:"일반",area:"바다",min:0.3,max:2,price:80},
{name:"도다리",grade:"일반",area:"바다",min:0.5,max:3,price:120},
{name:"청어",grade:"일반",area:"바다",min:0.5,max:2,price:90},
{name:"자리돔",grade:"일반",area:"바다",min:0.2,max:1,price:70},
{name:"복어",grade:"일반",area:"바다",min:0.5,max:3,price:130},

{name:"참치",grade:"일반",area:"바다",min:5,max:20,price:300},
{name:"오징어",grade:"일반",area:"바다",min:0.5,max:3,price:100},
{name:"문어",grade:"일반",area:"바다",min:1,max:5,price:150},
{name:"새우",grade:"일반",area:"바다",min:0.1,max:0.5,price:30},
{name:"꽃게",grade:"일반",area:"바다",min:0.3,max:2,price:80},

];/* =====================
   일반 물고기 36~60
===================== */

{name:"농어",grade:"일반",area:"바다",min:1,max:5,price:150},
{name:"숭어",grade:"일반",area:"바다",min:1,max:6,price:160},
{name:"감성돔",grade:"일반",area:"바다",min:1,max:5,price:200},
{name:"볼락",grade:"일반",area:"바다",min:0.3,max:2,price:90},
{name:"학꽁치",grade:"일반",area:"바다",min:0.2,max:1,price:60},
{name:"꼴뚜기",grade:"일반",area:"바다",min:0.1,max:1,price:40},
{name:"가자미",grade:"일반",area:"바다",min:0.5,max:4,price:130},
{name:"홍합",grade:"일반",area:"바다",min:0.1,max:1,price:30},
{name:"소라",grade:"일반",area:"바다",min:0.2,max:2,price:50},
{name:"해삼",grade:"일반",area:"바다",min:0.2,max:2,price:100},

{name:"금붕어",grade:"일반",area:"연못",min:0.1,max:1,price:30},
{name:"구피",grade:"일반",area:"연못",min:0.05,max:0.3,price:20},
{name:"틸라피아",grade:"일반",area:"호수",min:1,max:4,price:100},
{name:"코이",grade:"일반",area:"연못",min:1,max:8,price:200},
{name:"연어",grade:"일반",area:"강가",min:2,max:8,price:250},
{name:"송어",grade:"일반",area:"계곡",min:1,max:4,price:150},
{name:"철갑상어",grade:"일반",area:"강가",min:5,max:15,price:400},
{name:"화이트피쉬",grade:"일반",area:"호수",min:1,max:3,price:120},
{name:"농어새끼",grade:"일반",area:"바다",min:0.2,max:1,price:40},
{name:"작은상어",grade:"일반",area:"바다",min:3,max:10,price:500},

{name:"해파리",grade:"일반",area:"바다",min:0.2,max:2,price:60},
{name:"불가사리",grade:"일반",area:"바다",min:0.1,max:1,price:30},
{name:"조개",grade:"일반",area:"바다",min:0.1,max:1,price:20},
{name:"복어새끼",grade:"일반",area:"바다",min:0.2,max:1,price:50},
{name:"쏘가리",grade:"일반",area:"강가",min:1,max:5,price:250},


/* =====================
   희귀 물고기 30
===================== */

{name:"황금붕어",grade:"희귀",area:"연못",min:1,max:5,price:1000},
{name:"무지개송어",grade:"희귀",area:"계곡",min:2,max:8,price:1500},
{name:"대왕잉어",grade:"희귀",area:"호수",min:10,max:30,price:3000},
{name:"청새치",grade:"희귀",area:"바다",min:20,max:80,price:5000},
{name:"돗돔",grade:"희귀",area:"심해",min:30,max:100,price:8000},
{name:"참다랑어",grade:"희귀",area:"바다",min:30,max:120,price:10000},

{name:"왕오징어",grade:"희귀",area:"심해",min:20,max:80,price:7000},
{name:"대왕문어",grade:"희귀",area:"심해",min:15,max:60,price:6000},
{name:"황금가오리",grade:"희귀",area:"심해",min:20,max:90,price:9000},
{name:"검은농어",grade:"희귀",area:"바다",min:5,max:20,price:3000},

{name:"붉은돔",grade:"희귀",area:"바다",min:5,max:25,price:3500},
{name:"얼음송어",grade:"희귀",area:"얼음호수",min:5,max:20,price:4000},
{name:"푸른잉어",grade:"희귀",area:"호수",min:10,max:40,price:5000},
{name:"달빛물고기",grade:"희귀",area:"밤바다",min:3,max:15,price:6000},
{name:"별빛송어",grade:"희귀",area:"계곡",min:5,max:20,price:7000},

{name:"유리돔",grade:"희귀",area:"바다",min:5,max:15,price:3500},
{name:"황금메기",grade:"희귀",area:"강가",min:10,max:30,price:5000},
{name:"붉은가재",grade:"희귀",area:"강가",min:1,max:5,price:2000},
{name:"심해복어",grade:"희귀",area:"심해",min:10,max:40,price:7000},
{name:"은빛연어",grade:"희귀",area:"강가",min:10,max:30,price:5000},

{name:"거대농어",grade:"희귀",area:"바다",min:20,max:70,price:8000},
{name:"푸른상어",grade:"희귀",area:"바다",min:30,max:100,price:12000},
{name:"붉은상어",grade:"희귀",area:"바다",min:40,max:130,price:15000},
{name:"심해장어",grade:"희귀",area:"심해",min:20,max:90,price:9000},
{name:"황금장어",grade:"희귀",area:"강가",min:10,max:40,price:7000},
{name:"수정물고기",grade:"희귀",area:"동굴",min:5,max:20,price:8000},
{name:"폭포송어",grade:"희귀",area:"폭포",min:5,max:25,price:6000},
{name:"고대잉어",grade:"희귀",area:"고대호수",min:20,max:60,price:15000},
{name:"은하복어",grade:"희귀",area:"밤바다",min:5,max:20,price:9000},
{name:"황혼돔",grade:"희귀",area:"바다",min:10,max:50,price:10000},/* =====================
   전설 물고기 20
===================== */

{name:"황금상어",grade:"전설",area:"전설의바다",min:80,max:300,price:50000},
{name:"고대용어",grade:"전설",area:"고대호수",min:100,max:400,price:80000},
{name:"심해거인어",grade:"전설",area:"심해",min:150,max:500,price:100000},
{name:"천년잉어",grade:"전설",area:"신비호수",min:100,max:350,price:70000},
{name:"번개참치",grade:"전설",area:"폭풍바다",min:100,max:400,price:120000},

{name:"얼음왕연어",grade:"전설",area:"얼음바다",min:80,max:300,price:90000},
{name:"불꽃가오리",grade:"전설",area:"화산바다",min:100,max:450,price:150000},
{name:"검은용상어",grade:"전설",area:"심해",min:200,max:700,price:200000},
{name:"황금돗돔",grade:"전설",area:"심해",min:150,max:600,price:180000},
{name:"무지개참치",grade:"전설",area:"무지개해역",min:100,max:500,price:170000},

{name:"달의물고기",grade:"전설",area:"밤바다",min:50,max:250,price:60000},
{name:"태양돔",grade:"전설",area:"낮바다",min:100,max:400,price:130000},
{name:"바다의왕",grade:"전설",area:"왕의바다",min:300,max:1000,price:300000},
{name:"폭풍상어",grade:"전설",area:"폭풍바다",min:200,max:800,price:250000},
{name:"심해황제어",grade:"전설",area:"심해",min:300,max:900,price:350000},

{name:"고대가오리",grade:"전설",area:"고대바다",min:150,max:700,price:220000},
{name:"푸른용어",grade:"전설",area:"용의호수",min:100,max:500,price:200000},
{name:"별빛고래",grade:"전설",area:"별빛바다",min:500,max:2000,price:500000},
{name:"황혼상어",grade:"전설",area:"황혼해역",min:200,max:900,price:280000},
{name:"전설의잉어",grade:"전설",area:"전설호수",min:300,max:1000,price:400000},



/* =====================
   신화 물고기 10
===================== */

{name:"신의물고기",grade:"신화",area:"신의바다",min:1000,max:5000,price:1000000},
{name:"황금용어",grade:"신화",area:"용의바다",min:1500,max:7000,price:1500000},
{name:"시간의고래",grade:"신화",area:"시간의바다",min:3000,max:10000,price:3000000},
{name:"무한상어",grade:"신화",area:"무한해역",min:2000,max:8000,price:2500000},
{name:"천상의돔",grade:"신화",area:"천상바다",min:1000,max:6000,price:2000000},

{name:"우주물고기",grade:"신화",area:"우주해역",min:5000,max:20000,price:5000000},
{name:"전설의고래왕",grade:"신화",area:"왕의바다",min:10000,max:50000,price:10000000},
{name:"심해신룡",grade:"신화",area:"심해끝",min:5000,max:30000,price:7000000},
{name:"황금신어",grade:"신화",area:"황금호수",min:3000,max:15000,price:8000000},
{name:"낚시왕의물고기",grade:"신화",area:"최후의바다",min:20000,max:100000,price:50000000}


];
