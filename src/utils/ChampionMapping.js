/*
 *  riot ChampionIdToName methods
 *  update: 10.20 ver.(riot client)
 */
// Riot API에서 제공하는 lol 챔피언 id를 영어 이름으로 반환하고
//없는 값을 입력하면 -1을 반환하는 method

export const changeChampionIdToName = data => {
  // 매개변수: 챔피언 id
  switch (data) {
    case 887:
      return 'Gwen';
      break;
    case 234:
      return 'Viego';
      break;
    case 526:
      return 'Rell';
      break;
    case 147:
      return 'Seraphine';
      break;
    case 266:
      return 'Aatrox';
      break; // 챔피언 영어 이름
    case 412:
      return 'Thresh';
      break;
    case 23:
      return 'Tryndamere';
      break;
    case 79:
      return 'Gragas';
      break;
    case 69:
      return 'Cassiopeia';
      break;
    case 136:
      return 'AurelionSol';
      break;
    case 13:
      return 'Ryze';
      break;
    case 78:
      return 'Poppy';
      break;
    case 14:
      return 'Sion';
      break;
    case 1:
      return 'Annie';
      break;
    case 202:
      return 'Jhin';
      break;
    case 43:
      return 'Karma';
      break;
    case 111:
      return 'Nautilus';
      break;
    case 240:
      return 'Kled';
      break;
    case 99:
      return 'Lux';
      break;
    case 103:
      return 'Ahri';
      break;
    case 2:
      return 'Olaf';
      break;
    case 112:
      return 'Viktor';
      break;
    case 34:
      return 'Anivia';
      break;
    case 27:
      return 'Singed';
      break;
    case 86:
      return 'Garen';
      break;
    case 127:
      return 'Lissandra';
      break;
    case 57:
      return 'Maokai';
      break;
    case 25:
      return 'Morgana';
      break;
    case 28:
      return 'Evelynn';
      break;
    case 105:
      return 'Fizz';
      break;
    case 74:
      return 'Heimerdinger';
      break;
    case 238:
      return 'Zed';
      break;
    case 68:
      return 'Rumble';
      break;
    case 82:
      return 'Mordekaiser';
      break;
    case 37:
      return 'Sona';
      break;
    case 96:
      return 'KogMaw';
      break;
    case 55:
      return 'Katarina';
      break;
    case 117:
      return 'Lulu';
      break;
    case 22:
      return 'Ashe';
      break;
    case 30:
      return 'Karthus';
      break;
    case 12:
      return 'Alistar';
      break;
    case 122:
      return 'Darius';
      break;
    case 67:
      return 'Vayne';
      break;
    case 110:
      return 'Varus';
      break;
    case 77:
      return 'Udyr';
      break;
    case 89:
      return 'Leona';
      break;
    case 126:
      return 'Jayce';
      break;
    case 134:
      return 'Syndra';
      break;
    case 80:
      return 'Pantheon';
      break;
    case 92:
      return 'Riven';
      break;
    case 121:
      return 'Khazix';
      break;
    case 42:
      return 'Corki';
      break;
    case 268:
      return 'Azir';
      break;
    case 51:
      return 'Caitlyn';
      break;
    case 76:
      return 'Nidalee';
      break;
    case 85:
      return 'Kennen';
      break;
    case 3:
      return 'Galio';
      break;
    case 45:
      return 'Veigar';
      break;
    case 432:
      return 'Bard';
      break;
    case 150:
      return 'Gnar';
      break;
    case 90:
      return 'Malzahar';
      break;
    case 104:
      return 'Graves';
      break;
    case 254:
      return 'Vi';
      break;
    case 10:
      return 'Kayle';
      break;
    case 39:
      return 'Irelia';
      break;
    case 64:
      return 'LeeSin';
      break;
    case 420:
      return 'Illaoi';
      break;
    case 60:
      return 'Elise';
      break;
    case 106:
      return 'Volibear';
      break;
    case 20:
      return 'Nunu';
      break;
    case 4:
      return 'TwistedFate';
      break;
    case 24:
      return 'Jax';
      break;
    case 102:
      return 'Shyvana';
      break;
    case 429:
      return 'Kalista';
      break;
    case 36:
      return 'DrMundo';
      break;
    case 427:
      return 'Ivern';
      break;
    case 131:
      return 'Diana';
      break;
    case 63:
      return 'Brand';
      break;
    case 113:
      return 'Sejuani';
      break;
    case 8:
      return 'Vladimir';
      break;
    case 154:
      return 'Zac';
      break;
    case 421:
      return 'RekSai';
      break;
    case 133:
      return 'Quinn';
      break;
    case 84:
      return 'Akali';
      break;
    case 163:
      return 'Taliyah';
      break;
    case 18:
      return 'Tristana';
      break;
    case 120:
      return 'Hecarim';
      break;
    case 15:
      return 'Sivir';
      break;
    case 236:
      return 'Lucian';
      break;
    case 107:
      return 'Rengar';
      break;
    case 19:
      return 'Warwick';
      break;
    case 72:
      return 'Skarner';
      break;
    case 54:
      return 'Malphite';
      break;
    case 157:
      return 'Yasuo';
      break;
    case 101:
      return 'Xerath';
      break;
    case 17:
      return 'Teemo';
      break;
    case 75:
      return 'Nasus';
      break;
    case 58:
      return 'Renekton';
      break;
    case 119:
      return 'Draven';
      break;
    case 35:
      return 'Shaco';
      break;
    case 50:
      return 'Swain';
      break;
    case 91:
      return 'Talon';
      break;
    case 40:
      return 'Janna';
      break;
    case 115:
      return 'Ziggs';
      break;
    case 245:
      return 'Ekko';
      break;
    case 61:
      return 'Orianna';
      break;
    case 114:
      return 'Fiora';
      break;
    case 9:
      return 'Fiddlesticks';
      break;
    case 31:
      return 'ChoGath';
      break;
    case 33:
      return 'Rammus';
      break;
    case 7:
      return 'Leblanc';
      break;
    case 16:
      return 'Soraka';
      break;
    case 26:
      return 'Zilean';
      break;
    case 56:
      return 'Nocturne';
      break;
    case 222:
      return 'Jinx';
      break;
    case 83:
      return 'Yorick';
      break;
    case 6:
      return 'Urgot';
      break;
    case 203:
      return 'Kindred';
      break;
    case 21:
      return 'MissFortune';
      break;
    case 62:
      return 'MonkeyKing';
      break;
    case 53:
      return 'Blitzcrank';
      break;
    case 98:
      return 'Shen';
      break;
    case 201:
      return 'Braum';
      break;
    case 5:
      return 'XinZhao';
      break;
    case 29:
      return 'Twitch';
      break;
    case 11:
      return 'MasterYi';
      break;
    case 44:
      return 'Taric';
      break;
    case 32:
      return 'Amumu';
      break;
    case 41:
      return 'Gangplank';
      break;
    case 48:
      return 'Trundle';
      break;
    case 38:
      return 'Kassadin';
      break;
    case 161:
      return 'Velkoz';
      break;
    case 143:
      return 'Zyra';
      break;
    case 267:
      return 'Nami';
      break;
    case 59:
      return 'JarvanIV';
      break;
    case 81:
      return 'Ezreal';
      break;
    case 350:
      return 'Yuumi';
      break;
    case 145:
      return 'Kaisa';
      break;
    case 518:
      return 'Neeko';
      break;
    case 142:
      return 'Zoe';
      break;
    case 498:
      return 'Xayah';
      break;
    case 517:
      return 'Sylas';
      break;
    case 141:
      return 'Kayn';
      break;
    case 516:
      return 'Ornn';
      break;
    case 555:
      return 'Pyke';
      break;
    case 164:
      return 'Camille';
      break;
    case 246:
      return 'Qiyana';
      break;
    case 497:
      return 'Rakan';
      break;
    case 777:
      return 'Yone';
      break;
    case 876:
      return 'Lillia';
      break;
    case 235:
      return 'Senna';
      break;
    case 875:
      return 'Sett';
      break;
    case 523:
      return 'Aphelios';
      break;

    case 223:
      return 'TahmKench';
      break;

    case 360:
      return 'Samira';
      break;

    default:
      return -1;
      break;
  }
};

// Riot API에서 제공하는 lol 챔피언 id를 한글 이름으로 반환하고
//없는 값을 입력하면 -1을 반환하는 method
export const changeEnglishToKoreanName = data => {
  // 매개변수: 챔피언 id
  switch (data) {
    case 887:
      return '그웬';
      break;
    case 234:
      return '비에고';
      break;
    case 526:
      return '렐';
      break;
    case 147:
      return '세라핀';
      break;
    case 266:
      return '아트록스';
      break; // 챔피언 한글 이름
    case 412:
      return '쓰레쉬';
      break;
    case 23:
      return '트린다미어';
      break;
    case 79:
      return '그라가스';
      break;
    case 69:
      return '카시오페아';
      break;
    case 136:
      return '아우렐리온 솔';
      break;
    case 13:
      return '라이즈';
      break;
    case 78:
      return '뽀삐';
      break;
    case 14:
      return '사이온';
      break;
    case 1:
      return '애니';
      break;
    case 202:
      return '진';
      break;
    case 43:
      return '카르마';
      break;
    case 111:
      return '노틸러스';
      break;
    case 240:
      return '클레드';
      break;
    case 99:
      return '럭스';
      break;
    case 103:
      return '아리';
      break;
    case 2:
      return '올라프';
      break;
    case 112:
      return '빅토르';
      break;
    case 34:
      return '애니비아';
      break;
    case 27:
      return '신지드';
      break;
    case 86:
      return '가렌';
      break;
    case 127:
      return '리산드라';
      break;
    case 57:
      return '마오카이';
      break;
    case 25:
      return '모르가나';
      break;
    case 28:
      return '이블린';
      break;
    case 105:
      return '피즈';
      break;
    case 74:
      return '하이머딩거';
      break;
    case 238:
      return '제드';
      break;
    case 68:
      return '럼블';
      break;
    case 82:
      return '모데카이저';
      break;
    case 37:
      return '소나';
      break;
    case 96:
      return '코그모';
      break;
    case 55:
      return '카타리나';
      break;
    case 117:
      return '룰루';
      break;
    case 22:
      return '애쉬';
      break;
    case 30:
      return '카서스';
      break;
    case 12:
      return '알리스타';
      break;
    case 122:
      return '다리우스';
      break;
    case 67:
      return '베인';
      break;
    case 110:
      return '바루스';
      break;
    case 77:
      return '우디르';
      break;
    case 89:
      return '레오나';
      break;
    case 126:
      return '제이스';
      break;
    case 134:
      return '신드라';
      break;
    case 80:
      return '판테온';
      break;
    case 92:
      return '리븐';
      break;
    case 121:
      return '카직스';
      break;
    case 42:
      return '코르키';
      break;
    case 268:
      return '아지르';
      break;
    case 51:
      return '케이틀린';
      break;
    case 76:
      return '니달리';
      break;
    case 85:
      return '케인';
      break;
    case 3:
      return '갈리오';
      break;
    case 45:
      return '베이가';
      break;
    case 432:
      return '바드';
      break;
    case 150:
      return '나르';
      break;
    case 90:
      return '말자하';
      break;
    case 104:
      return '그레이브즈';
      break;
    case 254:
      return '바이';
      break;
    case 10:
      return '케일';
      break;
    case 39:
      return '이렐리아';
      break;
    case 64:
      return '리 신';
      break;
    case 420:
      return '일라오이';
      break;
    case 60:
      return '엘리스';
      break;
    case 106:
      return '볼리베어';
      break;
    case 20:
      return '누누';
      break;
    case 4:
      return '트위스티드 페이트';
      break;
    case 24:
      return '잭스';
      break;
    case 102:
      return '쉬바나';
      break;
    case 429:
      return '칼리스타';
      break;
    case 36:
      return '문도 박사';
      break;
    case 427:
      return '아이번';
      break;
    case 131:
      return '다이애나';
      break;
    case 63:
      return '브랜드';
      break;
    case 113:
      return '세주아니';
      break;
    case 8:
      return '블라디미르';
      break;
    case 154:
      return '자크';
      break;
    case 421:
      return '렉사이';
      break;
    case 133:
      return '퀸';
      break;
    case 84:
      return '아칼리';
      break;
    case 163:
      return '탈리아';
      break;
    case 18:
      return '트리스타나';
      break;
    case 120:
      return '헤카림';
      break;
    case 15:
      return '시비르';
      break;
    case 236:
      return '루시안';
      break;
    case 107:
      return '렝가';
      break;
    case 19:
      return '워윅';
      break;
    case 72:
      return '스카너';
      break;
    case 54:
      return '말파이트';
      break;
    case 157:
      return '야스오';
      break;
    case 101:
      return '제라스';
      break;
    case 17:
      return '티모';
      break;
    case 75:
      return '나서스';
      break;
    case 58:
      return '레넥톤';
      break;
    case 119:
      return '드레이븐';
      break;
    case 35:
      return '샤코';
      break;
    case 50:
      return '스웨인';
      break;
    case 91:
      return '탈론';
      break;
    case 40:
      return '잔나';
      break;
    case 115:
      return '직스';
      break;
    case 245:
      return '에코';
      break;
    case 61:
      return '오리아나';
      break;
    case 114:
      return '피오라';
      break;
    case 9:
      return '피들스틱';
      break;
    case 31:
      return '초가스';
      break;
    case 33:
      return '람머스';
      break;
    case 7:
      return '르블랑';
      break;
    case 16:
      return '소라카';
      break;
    case 26:
      return '질리언';
      break;
    case 56:
      return '녹턴';
      break;
    case 222:
      return '징크스';
      break;
    case 83:
      return '요릭';
      break;
    case 6:
      return '우르곳';
      break;
    case 203:
      return '킨드레드';
      break;
    case 21:
      return '미스 포츈';
      break;
    case 62:
      return '오공';
      break;
    case 53:
      return '블리츠크랭크';
      break;
    case 98:
      return '쉔';
      break;
    case 201:
      return '브라움';
      break;
    case 5:
      return '신 짜오';
      break;
    case 29:
      return '트위치';
      break;
    case 11:
      return '마스터 이';
      break;
    case 44:
      return '타릭';
      break;
    case 32:
      return '아무무';
      break;
    case 41:
      return '갱플랭';
      break;
    case 48:
      return '트런들';
      break;
    case 38:
      return '카사딘';
      break;
    case 161:
      return '벨코즈';
      break;
    case 143:
      return '자이라';
      break;
    case 267:
      return '나미';
      break;
    case 59:
      return '자르반 4세';
      break;
    case 81:
      return '이즈리얼';
      break;
    case 350:
      return '유미';
      break;
    case 145:
      return '카이사';
      break;
    case 518:
      return '니코';
      break;
    case 142:
      return '조이';
      break;
    case 498:
      return '자야';
      break;
    case 517:
      return '사일러스';
      break;
    case 141:
      return '케인';
      break;
    case 516:
      return '오른';
      break;
    case 555:
      return '파이크';
      break;
    case 164:
      return '카멜';
      break;
    case 246:
      return '키아나';
      break;
    case 497:
      return '라칸';
      break;
    case 777:
      return '요네';
      break;
    case 876:
      return '릴리아';
      break;
    case 235:
      return '세나';
      break;
    case 875:
      return '세트';
      break;
    case 523:
      return '아펠리오스';
      break;

    case 223:
      return '탐 켄치';
      break;

    case 360:
      return '사미라';
      break;

    default:
      return -1;
      break;
  }
};
