/* =========================================================
       1. DATA DEFINITIONS: TIME, MOOD, GENRE & SONG DATABASE
       ========================================================= */

    const TIME_CONFIG = [
      {
        id: 'dawn',
        name: '새벽 (03:00 ~ 06:00)',
        weatherIcon: '🌌',
        desc: '도시의 소음이 잠들고 나만의 사색이 깊어지는 푸른 새벽',
        themeClass: 'theme-dawn'
      },
      {
        id: 'morning',
        name: '아침 (06:00 ~ 09:00)',
        weatherIcon: '🌄',
        desc: '여명이 트고 새로운 하루의 호흡을 시작하는 상쾌한 아침',
        themeClass: 'theme-morning'
      },
      {
        id: 'late-morning',
        name: '오전 (09:00 ~ 12:00)',
        weatherIcon: '☀️',
        desc: '머리가 맑아지고 활기찬 집중과 활력이 살아나는 시간',
        themeClass: 'theme-late-morning'
      },
      {
        id: 'afternoon',
        name: '오후 (12:00 ~ 18:00)',
        weatherIcon: '🌤️',
        desc: '따사로운 햇살과 나른함 속 한 잔의 커피가 필요한 오후',
        themeClass: 'theme-afternoon'
      },
      {
        id: 'evening',
        name: '저녁 (18:00 ~ 21:00)',
        weatherIcon: '🌆',
        desc: '하루의 매듭을 짓고 노을과 함께 긴장이 스르륵 풀리는 시간',
        themeClass: 'theme-evening'
      },
      {
        id: 'night',
        name: '밤 (21:00 ~ 03:00)',
        weatherIcon: '🌙',
        desc: '달빛 아래 오롯이 혼자만의 감정에 잠겨보는 안락한 밤',
        themeClass: 'theme-night'
      }
    ];

    const MOOD_NAMES = {
      happy: '행복 · 에너지',
      flutter: '설렘 · 기대감',
      peaceful: '평안 · 쉼',
      sad: '슬픔 · 눈물',
      melancholy: '우울 · 먹먹함'
    };

    const GENRE_CONFIG = {
      rock: {
        title: '록 / 밴드 (Rock / Band)',
        desc: '생동감 넘치는 드럼 킥과 묵직한 베이스, 심장을 울리는 일렉기타 리프의 카타르시스'
      },
      pop: {
        title: '팝 / 어쿠스틱 (Pop / Acoustic)',
        desc: '귓가에 감기는 멜로디와 따뜻한 통기타의 나일론 줄 울림이 전하는 편안한 위로'
      },
      jazz: {
        title: '재즈 / 소울 (Jazz / Soul)',
        desc: '스윙 리듬 위의 감미로운 색소폰과 그루브 넘치는 워킹 베이스가 빚어내는 즉흥의 미학'
      },
      rnb: {
        title: 'R&B / 힙합 (R&B / Hip-Hop)',
        desc: '트렌디한 808 베이스와 끈적한 그루브, 몽환적인 신시사이저와 솔직한 보컬의 조화'
      },
      indie: {
        title: '인디 / 포크 (Indie / Folk)',
        desc: '투박하지만 담백한 시적 노랫말과 일상의 온도를 노래하는 감성적인 사운드스케이프'
      },
      jpop: {
        title: 'J-POP (보컬로이드 / Vocaloid)',
        desc: '초고속 BPM과 현란한 피아노·베이스 테크닉, 가상 싱어가 빚어내는 사이버네틱 J-POP 밴드 사운드'
      },
      random: {
        title: '완전 랜덤 장르 (Surprise)',
        desc: '장르의 경계를 넘어, 오늘 운명처럼 당신에게 가 닿을 특별한 음악 한 곡'
      }
    };

    // Rich Music Database (Carefully Curated with Bandman's Technical & Warm Commentary)
    const SONG_DATABASE = [
    {
        "id":  "hachi-sand-planet",
        "title":  "모래의 행성 (砂の惑星 / Sand Planet)",
        "artist":  "하치(요네즈 켄시) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 보컬로이드 힙합 록",
        "lyric":  "イェイ 今日の日はサンゴショウ、思い出話はこれくらいにして。 (Yeah 오늘은 산호초, 추억 이야기는 이쯤 해두고 달려보자)",
        "releaseYear":  "2017",
        "album":  "매지컬 미라이 2017 테마송",
        "icon":  "🏜️",
        "moods":  [
                      "melancholy",
                      "peaceful",
                      "sad"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "현 J-POP의 제왕 요네즈 켄시가 보카로 P ‘하치’로 귀환해 던진 묵직한 베이스 트랩 트랙입니다. 808 서브 베이스의 육중한 타격감과 건조한 스네어 클랩, 그리고 미쿠의 차분하게 조율된 저음 보컬이 자아내는 황량한 사막의 공간감이 압도적입니다.",
        "whyRecommend":  "하루가 저물고 공허함이나 나른한 사색이 찾아올 때, 세련되게 쪼개지는 트랩 비트와 힙한 그루브가 마음을 차분히 정리해 줍니다.",
        "songHistory":  "‘매지컬 미라이 2017’ 10주년 테마곡으로 발표되어 니코니코 동화 역사상 최단 시간 밀리언 달성 기록을 갈아치운 보컬로이드 씬의 위대한 이정표입니다.",
        "artistDesc":  "보컬로이드 황금기를 이끈 전설의 P ‘하치(Hachi)’이자, 현재 일본 대중음악계를 대표하는 싱어송라이터 ‘요네즈 켄시(米津玄師)’의 음악적 뿌리입니다."
    },
    {
        "id":  "hachi-matryoshka",
        "title":  "마트료시카 (マトリョシカ)",
        "artist":  "하치(Hachi) feat. 하츠네 미쿠, GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 사이키델릭 펑크",
        "lyric":  "1, 2, 3, 4! もっともっと舞ってちょうだい、カルマの向こうへ。 (좀 더 춤춰줘, 카르마 저편으로!)",
        "releaseYear":  "2010",
        "album":  "OFFICIAL ORANGE",
        "icon":  "🎭",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night",
                      "late-morning"
                  ],
        "bandmanComment":  "중독성 넘치는 크런치 기타 리프와 브라스 루프, 그리고 쉴 새 없이 달리는 스카 펑크 리듬이 정신을 혼미하게 만듭니다. 두 보컬의 엇박자 주고받기는 인간의 호흡을 아득히 초월한 신들린 편곡입니다.",
        "whyRecommend":  "미친 듯이 신나는 에너지가 필요할 때, 왜곡된 기타 톤과 하이텐션 리듬이 당신의 지루한 일상을 통쾌하게 박살 내줄 것입니다.",
        "songHistory":  "니코니코 동화 전당입성은 물론 보컬로이드 신화 입성을 최단기로 달성하며 2010년대 서브컬처 음악 씬에 거대한 지각변동을 일으킨 곡입니다.",
        "artistDesc":  "괴기하면서도 감각적인 멜로디와 독보적인 아트워크를 직접 창작해내는 요네즈 켄시의 천재성이 오롯이 드러나는 프로젝트입니다."
    },
    {
        "id":  "hachi-donut-hole",
        "title":  "도넛 홀 (ドーナツホール)",
        "artist":  "하치(Hachi) feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 질주 록 밴드",
        "lyric":  "バイバイもう永遠に会えないね、何かの拍子に思い出す。 (바이바이 이제 영원히 만날 수 없겠네, 어쩌다 문득 떠올리겠지)",
        "releaseYear":  "2013",
        "album":  "YANKEE",
        "icon":  "🍩",
        "moods":  [
                      "sad",
                      "melancholy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "강렬한 드라이브가 걸린 펜더 재즈마스터 기타 사운드와 단단한 베이스 피킹이 인상적인 정통 얼터너티브 록 편성입니다. 가슴 한가운데가 뻥 뚫린 도넛 같은 상실감을 폭풍 같은 록 사운드로 쏟아냅니다.",
        "whyRecommend":  "마음 한구석 뚫린 구멍처럼 아련한 공허감이 느껴질 때, 시원한 록 드럼과 멜로디가 가슴을 뻥 뚫어줍니다.",
        "songHistory":  "하치의 보컬로이드 명곡 중 밴드 사운드의 완성도가 가장 높은 걸작으로 평가받으며, 요네즈 켄시 본인이 셀프 커버하여 메이저 앨범에도 수록했습니다.",
        "artistDesc":  "기타 중심의 인디 록과 보컬로이드의 결합을 가장 높은 예술적 경지로 끌어올린 거장의 대표 넘버입니다."
    },
    {
        "id":  "hachi-panda-hero",
        "title":  "판다 히어로 (パンダヒーロー)",
        "artist":  "하치(Hachi) feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 그런지 펑크 록",
        "lyric":  "さらば一握のガラクタ、さあさあ皆の衆お手を拝借。 (안녕이다 한 줌의 쓰레기들아, 자자 여러분 손뼉을 쳐주시라)",
        "releaseYear":  "2011",
        "album":  "OFFICIAL ORANGE",
        "icon":  "⚾",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "late-morning"
                  ],
        "bandmanComment":  "야구 배트로 철문을 두드리는 듯한 무자비한 드럼 스네어와 거친 퍼즈(Fuzz) 베이스의 둔탁한 맛이 일품입니다. 디스토션이 가득 찬 사운드 질감이 날것의 지하 라이브 클럽을 연상시킵니다.",
        "whyRecommend":  "속이 답답하고 세상에 반항하고 싶은 삐딱한 날, 이 곡의 야성적인 기타 리프를 풀 볼륨으로 들으면 최고의 해방감을 맛볼 수 있습니다.",
        "songHistory":  "야구와 폐허를 테마로 한 독창적인 스토리텔링과 뮤직비디오로 폭발적인 인기를 끌며 하치 특유의 디스토피아 감성을 각인시킨 곡입니다.",
        "artistDesc":  "서브컬처 씬의 판도를 바꾼 멜로디와 독창적인 언어유희로 록 매니아들까지 흡수한 프로듀서입니다."
    },
    {
        "id":  "wowaka-rolling-girl",
        "title":  "롤링 걸 (Rolling Girl / ローリンガール)",
        "artist":  "wowaka feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 피아노 모던 록",
        "lyric":  "「もう一回、もう一回」“私は今日も転がります”と、少女は言う 少女は言う。 (“한 번만 더, 한 번만 더” ‘난 오늘도 구를 거예요’라며 소녀는 말해)",
        "releaseYear":  "2010",
        "album":  "Unhappy Refrain",
        "icon":  "🌀",
        "moods":  [
                      "sad",
                      "melancholy",
                      "happy"
                  ],
        "times":  [
                      "afternoon",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "왼손 옥타브를 맹렬하게 찍어 누르는 피아노 리프와 쉼 없이 달리는 16비트 베이스라인, 거친 디스토션 기타가 심장을 옥죕니다. 악기들이 극한으로 치닫는 연주 텐션은 밴드맨들에게도 최고의 앙상블로 꼽힙니다.",
        "whyRecommend":  "삶이 버겁고 자꾸 넘어지는 기분이 들 때, 타협 없는 록 사운드와 “한 번만 더 굴러보자”는 외침이 거친 카타르시스와 다시 일어설 용기를 줍니다.",
        "songHistory":  "록 밴드 히토리에(hitorie)의 리더였던 전설적인 보카로 P 고(故) wowaka의 대표작으로, 전 세계 서브컬처 팬들의 영혼을 울린 마스터피스입니다.",
        "artistDesc":  "초고속 피아노 아르페지오와 냉소적이면서도 서정적인 록 사운드로 현대 J-Rock과 보컬로이드 씬 전체에 지대한 영향을 미친 천재 음악가입니다."
    },
    {
        "id":  "wowaka-world-end-dancehall",
        "title":  "월즈 엔드 댄스홀 (ワールズエンド・ダンスホール)",
        "artist":  "wowaka feat. 하츠네 미쿠, 메구리네 루카",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 댄스 록 / 디스코 펑크",
        "lyric":  "世界の隅っこでワン・ツー、僕ら踊るのさ。 (세계의 구석자리에서 원 투, 우리들은 춤추는 거야)",
        "releaseYear":  "2010",
        "album":  "Unhappy Refrain",
        "icon":  "🪩",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "4온더플로어 댄스 비트 위를 칼처럼 베고 들어오는 날카로운 텔레캐스터 기타 커팅과 옥타브 베이스 슬랩의 그루브가 미쳤습니다. 춤추지 않고는 배길 수 없는 광기의 댄스 록입니다.",
        "whyRecommend":  "세상이 무너질 것 같은 혼란 속에서도 몸을 흔들며 미쳐보고 싶을 때, 폭발적인 리듬 섹션이 당신의 혈관을 뜨겁게 덥혀줍니다.",
        "songHistory":  "투고 직후 폭발적인 반응으로 밀리언을 돌파하며 wowaka를 보컬로이드 록의 신(God) 위치로 끌어올린 전설의 곡입니다.",
        "artistDesc":  "인간의 언어 한계를 넘나드는 래피드 파이어 가사와 댄서블한 록 비트의 결합을 창조한 장인입니다."
    },
    {
        "id":  "wowaka-unknown-mother-goose",
        "title":  "언노운 마더구스 (アンノウン・マザーグース)",
        "artist":  "wowaka feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 하이퍼 모던 록",
        "lyric":  "あたしが愛を語るのなら、その眼にはどう映る？ (내가 사랑을 말한다면, 그 눈에는 어떻게 비칠까?)",
        "releaseYear":  "2017",
        "album":  "히토리에 / Re:boot",
        "icon":  "🕊️",
        "moods":  [
                      "happy",
                      "flutter",
                      "sad"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "wowaka가 6년 만에 보컬로이드 씬에 바친 유작이자 유언 같은 명곡입니다. 쉴 틈 없이 전개되는 복잡한 변박과 현란한 베이스 태핑, 그리고 후반부 감정이 터져 나오는 코드 진행은 눈물을 자아냅니다.",
        "whyRecommend":  "음악과 사람에 대한 진실한 사랑을 확인하고 싶을 때, 모든 에너지를 하얗게 불태우는 밴드 사운드가 깊은 전율과 위로를 선사합니다.",
        "songHistory":  "보컬로이드 10주년을 기념해 wowaka가 오랜 침묵을 깨고 발표한 기적 같은 명곡으로, 전 세계 수많은 프로 뮤지션들의 헌정 커버가 이어졌습니다.",
        "artistDesc":  "히토리에의 리더이자 보컬로이드 씬의 위대한 거목으로, 음악에 목숨을 바친 영원한 록스타입니다."
    },
    {
        "id":  "wowaka-two-faced-lovers",
        "title":  "겉과 속이 다른 러버즈 (裏表ラバーズ)",
        "artist":  "wowaka feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 스피드 팝 록",
        "lyric":  "もうラブラブでいっちゃって、クラクラしちゃうくらい！ (이젠 푹 빠져버려서, 어질어질해질 정도로!)",
        "releaseYear":  "2009",
        "album":  "Unhappy Refrain",
        "icon":  "⚡",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "초당 수십 음절을 쏟아내는 초고속 랩 스타일의 조교와 이를 받치는 펑키한 베이스 슬랩, 박력 넘치는 피아노 글리산도가 경이롭습니다. 이 빠른 곡을 밴드로 카피하려다 수많은 드러머와 베이시스트가 혀를 내둘렀죠.",
        "whyRecommend":  "머릿속이 복잡하고 생각의 과부하가 걸렸을 때, 초음속으로 질주하는 사운드에 몸을 맡기면 모든 잡념이 날아갑니다.",
        "songHistory":  "wowaka의 이름을 전 세계에 알린 최초의 메가히트작으로, 이후 수많은 보카로 P들의 작곡 스타일에 절대적인 기준점을 제시했습니다.",
        "artistDesc":  "보컬로이드 음악의 속도감과 밴드 편곡의 역동성을 혁명적으로 결합한 음악가입니다."
    },
    {
        "id":  "orangestar-asuno-yozora",
        "title":  "내일의 밤하늘 초계반 (アスノヨゾラ哨戒班)",
        "artist":  "Orangestar feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 질주 록",
        "lyric":  "願ったんなら叶えてしまえや、君の手で。 (바랐다면 이루어 버려, 너의 두 손으로!)",
        "releaseYear":  "2014",
        "album":  "미완성 에이트 비트",
        "icon":  "🌌",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "도입부 서정적인 피아노 독주에 이어 4온더플로어 드럼과 함께 탁 트인 스트링 세션이 만개할 때의 쾌감은 숨이 멎을 정도입니다. IA 특유의 투명하고 시원한 고음이 밤하늘의 은하수를 가로지르는 비행감을 줍니다.",
        "whyRecommend":  "가슴속에 새로운 꿈과 설렘이 피어오를 때, 별빛처럼 쏟아지는 사운드가 마음에 거대한 날개를 달아줄 것입니다.",
        "songHistory":  "Orangestar가 고교 시절 작곡한 곡으로, 유튜브와 니코동에서 수천만 뷰를 기록하며 수많은 애니송·J-POP 보컬들의 단골 앤섬이 되었습니다.",
        "artistDesc":  "여름의 청량한 공기와 벅차오르는 청춘의 감정을 피아노와 록 사운드로 완벽하게 구현하는 서정파 P입니다."
    },
    {
        "id":  "orangestar-kaisei",
        "title":  "쾌청 (快晴 / Kaisei)",
        "artist":  "Orangestar feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 청량 어쿠스틱 록",
        "lyric":  "泣くな空、晴れてくれ。今日くらいは笑ってくれ。 (울지 마 하늘아, 맑게 개어줘. 오늘만큼은 웃어줘)",
        "releaseYear":  "2017",
        "album":  "SEASIDE SOLILOQUIES",
        "icon":  "☀️",
        "moods":  [
                      "happy",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "따사로운 어쿠스틱 기타 스트로크와 맑은 피아노 터치, 그리고 부드럽게 감싸 안는 브라스 사운드가 눈부신 푸른 하늘을 연상시킵니다. 땀을 식혀주는 시원한 여름 바닷바람 같은 편곡입니다.",
        "whyRecommend":  "마음의 먹구름을 걷어내고 활기찬 아침이나 산뜻한 오후를 맞이하고 싶을 때, 최고의 비타민 같은 노래입니다.",
        "songHistory":  "Orangestar가 선교 활동을 떠나기 전 팬들에게 남긴 작별이자 희망의 메시지로, 지금까지도 팬들의 가슴을 따뜻하게 적시는 명곡입니다.",
        "artistDesc":  "특유의 청량한 여름 감성과 투명한 멜로디 라인으로 독보적인 팬덤을 지닌 천재 프로듀서입니다."
    },
    {
        "id":  "orangestar-toki-no-ame",
        "title":  "시간의 비, 최종전쟁 (時の雨、最終戦争)",
        "artist":  "Orangestar feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 감성 피아노 록",
        "lyric":  "あの日描いた夢の続きを、僕らは今生きているんだ。 (그날 그렸던 꿈의 다음을, 우리들은 지금 살아가고 있어)",
        "releaseYear":  "2015",
        "album":  "미완성 에이트 비트",
        "icon":  "🌧️",
        "moods":  [
                      "sad",
                      "melancholy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "빗방울이 유리창을 때리듯 격정적으로 흘러가는 피아노 아르페지오와 애절한 일렉기타 리프의 조화가 예술입니다. 리듬 섹션의 밀도 있는 타격감이 슬픔을 비장미로 승화시킵니다.",
        "whyRecommend":  "지나간 시간과 놓쳐버린 인연에 아릿한 감정이 스칠 때, 쏟아지는 빗속에서 마음을 깨끗이 씻어내는 카타르시스를 줍니다.",
        "songHistory":  "내일의 밤하늘 초계반과 세계관을 공유하는 연작으로, Orangestar의 피아노 록 사운드의 정점을 보여준 걸작입니다.",
        "artistDesc":  "비와 하늘, 청춘의 서사를 섬세한 피아노와 록 사운드로 엮어내는 독보적 음악가입니다."
    },
    {
        "id":  "orangestar-summer-breeze",
        "title":  "여름바람 해돋이 (夏風抉る)",
        "artist":  "Orangestar feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 감성 포크 록",
        "lyric":  "君の手を引いて歩いた、あの夏の日々を僕は忘れない。 (너의 손을 잡고 걸었던, 그 여름날들을 난 잊지 않아)",
        "releaseYear":  "2014",
        "album":  "미완성 에이트 비트",
        "icon":  "🌾",
        "moods":  [
                      "peaceful",
                      "sad",
                      "flutter"
                  ],
        "times":  [
                      "dawn",
                      "morning",
                      "evening"
                  ],
        "bandmanComment":  "절제된 어쿠스틱 기타 아르페지오와 아련한 신스 패드가 시골 바닷가의 새벽 여명을 떠올리게 합니다. 담백한 드럼 림샷이 잔잔한 파도처럼 마음을 감쌉니다.",
        "whyRecommend":  "새벽의 푸른 공기를 마시며 잔잔한 사색에 젖고 싶을 때, 평화롭고도 애틋한 여름 향기를 전해줍니다.",
        "songHistory":  "화려한 록 대신 아날로그 감성에 집중하여 Orangestar의 작곡 스펙트럼이 얼마나 깊은지 증명한 숨은 명곡입니다.",
        "artistDesc":  "계절의 정취를 음악으로 시각화하는 능력이 탁월한 아티스트입니다."
    },
    {
        "id":  "supercell-melt",
        "title":  "멜트 (Melt / メルト)",
        "artist":  "ryo (supercell) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 피아노 팝 록",
        "lyric":  "メルト 溶けてしまいそう、好きだなんて絶対に言えない。 (멜트 녹아버릴 것 같아, 좋아한다는 말은 절대 할 수 없어)",
        "releaseYear":  "2007",
        "album":  "supercell",
        "icon":  "🌸",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "J-POP 밴드 세션의 교과서 같은 트랙! 찰랑거리는 펜더 기타 커팅과 셔플 팝 리듬, 핑크빛 건반 반주가 일품입니다. 전자음악에 아날로그 밴드의 온기를 불어넣은 역사적 편곡이죠.",
        "whyRecommend":  "설레는 만남을 앞두고 있거나 일상에 분홍빛 두근거림을 더하고 싶을 때, 첫사랑의 떨림을 생생하게 되살려줍니다.",
        "songHistory":  "보컬로이드를 메이저 음악 시장의 중심으로 끌어올리며 ‘전설의 시작’이라 불리는 기념비적인 작품입니다.",
        "artistDesc":  "애니메이션 주제가를 탄생시키며 현대 J-POP을 이끈 프로듀서 ryo의 전설의 유닛 supercell입니다."
    },
    {
        "id":  "supercell-world-is-mine",
        "title":  "월드 이즈 마인 (World is Mine)",
        "artist":  "ryo (supercell) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 프린세스 팝 록",
        "lyric":  "世界で一番おひめさま、そういう扱い心得てよね。 (세계에서 제일가는 공주님, 그런 대우를 해줘야 해 알겠지?)",
        "releaseYear":  "2008",
        "album":  "supercell",
        "icon":  "👑",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "스트레이트한 펑크 록 기타 리프에 오케스트라 현악과 깜찍한 피아노를 얹어낸 절묘한 편곡입니다. 당돌하고 사랑스러운 멜로디 라인이 듣는 사람의 입꼬리를 올립니다.",
        "whyRecommend":  "자존감을 최고조로 끌어올리고 주인공이 된 기분을 만끽하고 싶을 때, 더없이 유쾌하고 통통 튀는 트랙입니다.",
        "songHistory":  "하츠네 미쿠의 독보적인 캐릭터성을 확립하고 전 세계 스타디움 홀로그램 라이브의 시그니처 곡이 된 세기의 명곡입니다.",
        "artistDesc":  "서브컬처 캐릭터 음악의 음악적 완성도를 상업 팝 최정상 수준으로 끌어올린 천재 프로듀서입니다."
    },
    {
        "id":  "supercell-black-rock-shooter",
        "title":  "블랙★록 슈터 (Black Rock Shooter)",
        "artist":  "ryo (supercell) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 심포닉 얼터너티브 록",
        "lyric":  "ブラックロックシューター、何処へ行ったの？聞こえますか？ (블랙 록 슈터, 어디로 간 거야? 들리나요?)",
        "releaseYear":  "2008",
        "album":  "supercell",
        "icon":  "★",
        "moods":  [
                      "melancholy",
                      "flutter",
                      "sad"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "묵직한 드럼 킥과 절규하는 듯한 기타 피드백 사운드, 그리고 드라마틱하게 휘몰아치는 스트링 세션이 영웅적인 장엄함을 연출합니다.",
        "whyRecommend":  "어두운 밤, 내면의 고독과 싸우며 한 걸음 전진할 힘이 필요할 때 등 뒤를 든든하게 받쳐주는 강렬한 록 사운드입니다.",
        "songHistory":  "일러스트레이터 huke의 그림 한 장에서 영감을 받아 탄생한 곡으로, 이후 애니메이션과 게임으로 확장된 거대 미디어믹스의 모태가 되었습니다.",
        "artistDesc":  "하나의 노래로 거대한 세계관과 서사를 창조해내는 팝/록 마스터 프로듀서입니다."
    },
    {
        "id":  "kemu-six-trillion-years",
        "title":  "육조 년과 하룻밤 이야기 (六兆年と一夜物語)",
        "artist":  "kemu feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 심포닉 스피드 록",
        "lyric":  "知らん知らん 僕は何も知らん、叱られたあとのやさしさも。 (몰라 몰라 난 아무것도 몰라, 꾸중을 들은 뒤의 다정함도)",
        "releaseYear":  "2012",
        "album":  "PANDORA VOXX",
        "icon":  "⚡",
        "moods":  [
                      "sad",
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "186BPM의 초광속 질주! 슬랩 베이스의 화려한 핑거 테크닉과 건반 전체를 훑는 피아노 연주, 심포닉 현악 편곡이 록 드럼과 맞물려 숨 막히는 아드레날린을 뿜어냅니다.",
        "whyRecommend":  "답답한 현실에서 벗어나 전속력으로 달리고 싶을 때, 폭발적인 연주력이 가슴속 스트레스를 한 방에 날려버립니다.",
        "songHistory":  "kemu 판도라 복스 시리즈의 최고 인기곡으로, 발매 즉시 리듬게임계의 보스곡으로 등극하며 보카로 록의 기술적 정점을 보여주었습니다.",
        "artistDesc":  "애니 OST 작곡가 ‘호리에 쇼타(PENGUIN RESEARCH)’로도 활약하며 압도적인 밴드 편곡 실력을 갖춘 거장 P입니다."
    },
    {
        "id":  "kemu-life-reset-button",
        "title":  "인생 리셋 버튼 (人生リセットボタン)",
        "artist":  "kemu feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 하이퍼 스피드 펑크",
        "lyric":  "人生リセットボタン、ぽちっとな。 (인생 리셋 버튼, 꾹 누르고.)",
        "releaseYear":  "2011",
        "album":  "PANDORA VOXX",
        "icon":  "🔘",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "쉴 틈 없이 쪼개지는 투스텝 스케이트 펑크 드럼과 현란한 기타 스위프 피킹 솔로가 압권입니다. 3분이 채 안 되는 시간 동안 폭풍처럼 몰아칩니다.",
        "whyRecommend":  "무기력한 오후, 온몸의 감각을 단숨에 깨우고 싶을 때 가장 완벽한 익스트림 사운드 트랙입니다.",
        "songHistory":  "kemu의 전설적인 데뷔곡으로, 투고되자마자 신인이라고는 믿기지 않는 압도적인 악기 연주력과 편곡으로 센세이션을 일으켰습니다.",
        "artistDesc":  "초고속 템포와 복잡한 코드 진행 속에서도 완벽한 대중적 훅을 뽑아내는 천재 작곡가입니다."
    },
    {
        "id":  "kemu-earth-last-confession",
        "title":  "지구 최후의 고백을 (地球最後の告白を)",
        "artist":  "kemu feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 서정적 프로그레시브 록",
        "lyric":  "いつか君に伝えようと温めておいた言葉、今更遅いよな。 (언젠가 네게 전하려 품어두었던 말, 이제 와선 늦었겠지)",
        "releaseYear":  "2012",
        "album":  "PANDORA VOXX",
        "icon":  "🌍",
        "moods":  [
                      "sad",
                      "melancholy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "불로불사의 주인공이 겪는 영원한 고독을 애절한 피아노와 스트링, 서정적인 기타 멜로디로 풀어냈습니다. 후반부 전조되며 폭발하는 사운드가 가슴을 먹먹하게 만듭니다.",
        "whyRecommend":  "사랑하는 사람에 대한 전하지 못한 진심을 돌아보게 되는 밤, 깊고 웅장한 감정의 파도를 경험할 수 있습니다.",
        "songHistory":  "kemu의 곡 중 가장 높은 문학성과 감동을 지닌 곡으로 꼽히며, 수많은 애니송 커버 보컬들이 인생곡으로 꼽는 명작입니다.",
        "artistDesc":  "스피드뿐만 아니라 눈물샘을 자극하는 깊은 멜로디 메이킹 능력까지 갖춘 올라운더 P입니다."
    },
    {
        "id":  "kemu-invisible",
        "title":  "인비저블 (インビジブル)",
        "artist":  "kemu feat. GUMI, 린",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 하드 록 / 듀엣 펑크",
        "lyric":  "とんでもない現象、どうにも止まらない！ (말도 안 되는 현상, 도무지 멈추질 않아!)",
        "releaseYear":  "2011",
        "album":  "PANDORA VOXX",
        "icon":  "👻",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "GUMI와 린의 쉼표 없는 보컬 배틀과 폭주하는 더블 베이스 드럼이 심장을 때립니다. 일렉기타의 거친 리프가 청량감마저 느끼게 하는 파워풀 록입니다.",
        "whyRecommend":  "넘치는 에너지를 주체할 수 없을 때, 짜릿한 스피드와 헤비한 사운드로 스트레스를 박살 내줍니다.",
        "songHistory":  "보컬로이드 듀엣 록의 새로운 기준을 제시하며 kemu의 천재성을 확고히 굳힌 역작입니다.",
        "artistDesc":  "밴드 세션의 합을 극한으로 밀어붙이는 록 사운드의 절대강자입니다."
    },
    {
        "id":  "deco27-vampire",
        "title":  "뱀파이어 (The Vampire / ヴァンパイア)",
        "artist":  "DECO*27 feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 댄스 팝 록",
        "lyric":  "もうダメって言わせたいの、きみの全部を奪っちゃうぞ。 (이젠 안 돼라는 말을 듣고 싶어, 너의 모든 걸 빼앗아 버릴 테야)",
        "releaseYear":  "2021",
        "album":  "MANNEQUIN",
        "icon":  "🧛",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "late-morning",
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "귀에 착 감기는 훵키한 베이스 리프와 캐치한 일렉 기타 커팅 훅이 돋보입니다. 미쿠 특유의 도발적이고 빠른 말맛 조교가 밴드 세션과 완벽한 밀당을 보여줍니다.",
        "whyRecommend":  "텐션을 끌어올리고 기분 좋은 장난기와 매력을 발산하고 싶은 날, 어깨를 절로 들썩이게 만드는 댄서블 트랙입니다.",
        "songHistory":  "숏폼 챌린지와 댄스 커버 열풍을 이끌며 공개 수개월 만에 1억 뷰에 육박한 2020년대 보컬로이드 최고의 히트곡입니다.",
        "artistDesc":  "15년 넘게 씬의 최정상을 지키며 록과 댄스 팝의 트렌드를 선도하는 불멸의 히트메이커입니다."
    },
    {
        "id":  "deco27-otome-dissection",
        "title":  "소녀해부 (乙女解剖 / Otome Dissection)",
        "artist":  "DECO*27 feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 네오 펑크 록",
        "lyric":  "乙女解剖であそぼうよ、ドキドキしたい甲斐の愛。 (소녀해부로 놀자, 두근거리고 싶은 보람의 사랑)",
        "releaseYear":  "2019",
        "album":  "안드로이드",
        "icon":  "🫀",
        "moods":  [
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "퇴폐적이면서도 매혹적인 슬로우 록 비트와 일렉트릭 피아노, 슬랩 베이스의 끈적한 호흡이 귀를 홀립니다. 날카로우면서도 섬세한 기타 리프가 아찔한 긴장감을 만듭니다.",
        "whyRecommend":  "묘하게 나른하고 위험한 사랑의 감정에 빠져들고 싶은 밤, 치명적인 매력의 그루브를 선물합니다.",
        "songHistory":  "감각적인 가사와 세련된 편곡으로 공개되자마자 전 세계 커버 붐을 일으킨 DECO*27의 명작입니다.",
        "artistDesc":  "인간 심리의 어둡고 섬세한 사랑의 욕망을 가장 트렌디한 팝 록으로 풀어내는 마에스트로입니다."
    },
    {
        "id":  "deco27-ghost-rule",
        "title":  "고스트 룰 (Ghost Rule / ゴーストルール)",
        "artist":  "DECO*27 feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 파워 일렉트로닉 록",
        "lyric":  "どうやって生きてたって、空っぽな僕なんだ。 (어떻게 살아왔든 간에, 텅 비어버린 나인 거야)",
        "releaseYear":  "2016",
        "album":  "GHOST",
        "icon":  "👻",
        "moods":  [
                      "sad",
                      "melancholy",
                      "happy"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "afternoon"
                  ],
        "bandmanComment":  "단단한 록 드럼 킥과 아날로그 신스의 무거운 톱니파 사운드가 심장을 강타합니다. 특히 사비(후렴) 직전 미쿠의 포효하는 샤우팅 조교는 전율 그 자체입니다.",
        "whyRecommend":  "자신을 잃어버릴 것 같은 불안과 거짓된 세상 속에서 울분을 시원하게 토해내고 싶을 때 최고의 탈출구가 되어줍니다.",
        "songHistory":  "DECO*27 제2의 전성기를 화려하게 연 트랙으로, 보컬로이드 역사상 가장 파워풀한 보컬 조교의 정점으로 꼽힙니다.",
        "artistDesc":  "록의 박력과 일렉트로닉 댄스 음악의 강렬함을 완벽하게 융합한 현대 J-POP의 대표주자입니다."
    },
    {
        "id":  "deco27-hibana",
        "title":  "히바나 (HIBANA / ヒバナ)",
        "artist":  "DECO*27 feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 믹스쳐 하드 록",
        "lyric":  "未完成だって何度でも言うんだ、コンコン ノックして。 (미완성이라고 몇 번이고 말하는 거야, 똑똑 노크해줘)",
        "releaseYear":  "2017",
        "album":  "안드로이드",
        "icon":  "💥",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "영어 가사와 일본어 가사를 오가는 속도감 있는 프레이징과 공격적인 다운 피킹 기타 리프가 피를 끓게 만듭니다. 드러머의 라이드 심벌 터치와 파워풀한 킥의 합이 환상적입니다.",
        "whyRecommend":  "자신감과 불꽃 같은 승부욕이 필요할 때, 불꽃(히바나)처럼 타오르는 록 에너지가 온몸을 감쌉니다.",
        "songHistory":  "보컬로이드 10주년 앨범의 타이틀급 인기를 누리며 영어와 일어를 넘나드는 글로벌 보카로 앤섬으로 사랑받고 있습니다.",
        "artistDesc":  "국경을 넘어 전 세계 록 팬들의 마음을 저격하는 세련된 기타 편곡의 달인입니다."
    },
    {
        "id":  "deco27-cinderella",
        "title":  "신데렐라 (Cinderella / シンデレラ)",
        "artist":  "DECO*27 feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 일렉트로 팝 록",
        "lyric":  "ガラスの靴を脱ぎ捨てて、私だけの夜へ。 (유리구두를 벗어 던지고, 나만의 밤으로!)",
        "releaseYear":  "2021",
        "album":  "MANNEQUIN",
        "icon":  "👠",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "통통 튀는 디스코 리듬과 일렉트릭 피아노, 세련된 브라스 루프가 파티의 불빛처럼 반짝입니다. 춤추듯 가벼운 발걸음을 유도하는 리듬 섹션이 매력적입니다.",
        "whyRecommend":  "주말 저녁 파티에 가는 기분으로 기분 전환하고 싶을 때, 경쾌한 비트가 발걸음을 가볍게 만들어줍니다.",
        "songHistory":  "뱀파이어와 연작을 이루며 세련된 현대 팝 록 사운드로 Z세대의 열렬한 지지를 얻은 곡입니다.",
        "artistDesc":  "동화적 모티브를 현대적인 감각으로 재해석하는 탁월한 스토리텔러입니다."
    },
    {
        "id":  "ayase-last-resort",
        "title":  "라스트 리조트 (Last Resort / ラストリゾート)",
        "artist":  "Ayase feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 시티 팝 / Lo-Fi 록",
        "lyric":  "もう全部嫌になった、こんな世界なら君と二人で。 (이제 전부 지겨워졌어, 이런 세상이라면 너와 둘이서)",
        "releaseYear":  "2019",
        "album":  "유령 도쿄 (Ghost Tokyo)",
        "icon":  "🌃",
        "moods":  [
                      "melancholy",
                      "peaceful",
                      "sad"
                  ],
        "times":  [
                      "dawn",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "YOASOBI 결성 직전 Ayase의 천재성이 농축된 명곡. 몽환적인 펜더 로즈 일렉 피아노와 로우파이 드럼, 서늘하고 세련된 베이스라인이 도시의 밤거리를 걷는 정취를 뿜어냅니다.",
        "whyRecommend":  "혼자만의 고요한 밤이나 새벽, 지친 마음을 나지막이 기대어 쉴 수 있는 도회적 감성의 사운드스케이프입니다.",
        "songHistory":  "Ayase가 보카로 P로서 확고한 팬덤을 구축하게 만든 대표작으로, 훗날 메가히트 유닛 YOASOBI의 모태가 되었습니다.",
        "artistDesc":  "현대 J-POP 스트리밍 시대를 지배하는 슈퍼 유닛 YOASOBI의 작곡가이자 최고의 보카로 P입니다."
    },
    {
        "id":  "ayase-ghost-tokyo",
        "title":  "유령 도쿄 (幽霊東京 / Ghost Tokyo)",
        "artist":  "Ayase feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 어반 시티 록",
        "lyric":  "燦然と輝く街の灯りに、僕らの影が伸びていく。 (찬연히 빛나는 거리의 불빛에, 우리들의 그림자가 길어져 가)",
        "releaseYear":  "2019",
        "album":  "유령 도쿄 (Ghost Tokyo)",
        "icon":  "🏙️",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "청량한 피아노 코드 타건과 통통 튀는 베이스, 밤하늘의 네온사인을 연상시키는 신스 라인이 도쿄의 밤을 질주하는 드라이브감을 선사합니다.",
        "whyRecommend":  "도시의 야경을 바라보며 쓸쓸함과 낭만을 동시에 음미하고 싶을 때 최고의 감성 처방전입니다.",
        "songHistory":  "Ayase의 보카로 커리어 중 가장 큰 찬사를 받은 EP의 타이틀곡으로, 수많은 일본 인디 밴드들의 커버가 이어졌습니다.",
        "artistDesc":  "차가운 도시의 풍경 속에 따뜻한 인간미와 서정적인 멜로디를 불어넣는 작곡가입니다."
    },
    {
        "id":  "ayase-yoru-ni-kakeru",
        "title":  "밤을 달리다 (夜に駆ける - Vocaloid Ver.)",
        "artist":  "Ayase feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 피아노 질주 팝",
        "lyric":  "沈むように溶けてゆくように、二人だけの空が広がる夜に。 (가라앉듯이 녹아내리듯이, 둘만의 하늘이 펼쳐지는 밤에)",
        "releaseYear":  "2019",
        "album":  "THE BOOK",
        "icon":  "🏃",
        "moods":  [
                      "happy",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "2박과 4박을 밀고 당기는 특유의 신스 피아노 프레이징과 그루비한 베이스 슬랩이 멈출 수 없는 속도감을 만들어냅니다. 보컬로이드 버전만의 기계적인 청량함이 색다른 쾌감을 줍니다.",
        "whyRecommend":  "달빛 아래 밤길을 산책하거나 드라이브할 때, 상쾌하면서도 아련한 멜로디가 심장을 두근거리게 합니다.",
        "songHistory":  "일본 스트리밍 역사상 최초로 10억 스트리밍을 돌파한 초대형 히트곡의 보컬로이드 오리지널 편곡 버전입니다.",
        "artistDesc":  "소설을 음악으로 만드는 독보적인 작법으로 2020년대 아시아 음악 씬을 뒤흔든 프로듀서입니다."
    },
    {
        "id":  "kanaria-king",
        "title":  "KING",
        "artist":  "Kanaria feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 다크 트랩 팝",
        "lyric":  "YOU ARE KING. 絶望の淵で嗤うがいい。 (YOU ARE KING. 절망의 구렁텅이에서 비웃어라)",
        "releaseYear":  "2020",
        "album":  "KING",
        "icon":  "👑",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "2분 15초의 미니멀한 러닝타임 속에 압축된 묵직한 808 킥과 날카로운 브라스 신스의 타격감이 독보적입니다. 불필요한 군더더기를 싹 뺀 현대적 사운드 메이킹의 정점입니다.",
        "whyRecommend":  "짧고 굵게 아드레날린을 폭발시키고 카리스마 넘치는 무드를 즐기고 싶을 때 듣기 가장 완벽한 트랙입니다.",
        "songHistory":  "공개 당시 불과 만 18세였던 Kanaria가 단숨에 유튜브 수천만 뷰를 기록하며 차세대 보카로 황제로 등극한 기념비적 데뷔작입니다.",
        "artistDesc":  "미니멀리즘 비트와 중독적인 후크송으로 틱톡과 유튜브를 점령한 천재 신예 프로듀서입니다."
    },
    {
        "id":  "kanaria-envy-baby",
        "title":  "Envy Baby (エンヴィーベイビー)",
        "artist":  "Kanaria feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 스윙 일렉트로 팝",
        "lyric":  "Hi, Mr. Crazy. 嫉妬の海に溺れちゃって。 (Hi, Mr. Crazy. 질투의 바다에 빠져버려)",
        "releaseYear":  "2021",
        "album":  "KING",
        "icon":  "🃏",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "스윙 재즈의 스윙감 넘치는 박자감에 현대적인 댄스 비트를 접목했습니다. 짧게 끊어치는 브라스와 GUMI의 매력적인 저음 조교가 귀를 사로잡습니다.",
        "whyRecommend":  "위트 있고 톡톡 튀는 그루브로 기분 전환하고 싶을 때, 절로 스텝을 밟게 만드는 매혹적인 곡입니다.",
        "songHistory":  "KING의 뒤를 이어 빌보드 재팬 Niconico Vocaloid Songs Top 20을 휩쓸며 Kanaria의 연타석 홈런을 증명한 곡입니다.",
        "artistDesc":  "재즈의 세련미와 트렌디한 전자음을 결합하는 감각이 압도적인 작곡가입니다."
    },
    {
        "id":  "kanaria-yoidore-shirazu",
        "title":  "셰이라 (취기 모르는 채 / 酔いどれ知らず)",
        "artist":  "Kanaria feat. GUMI",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 오리엔탈 칠 팝",
        "lyric":  "思い通りにならない夜に、甘い毒をひとくち。 (뜻대로 되지 않는 밤에, 달콤한 독을 한 모금)",
        "releaseYear":  "2022",
        "album":  "셰이라",
        "icon":  "🍶",
        "moods":  [
                      "melancholy",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "동양적인 펜타토닉 음계의 서정적인 신스와 묵직한 808 베이스가 몽환적인 밤의 정취를 자아냅니다. 취한 듯 나른하게 흘러가는 보컬의 뉘앙스가 일품입니다.",
        "whyRecommend":  "시원한 맥주 한 캔을 마시며 나른하게 취기에 젖어들고 싶은 늦은 밤, 최고의 분위기를 선물합니다.",
        "songHistory":  "2022~2023년 일본 노래방 및 숏폼 챌린지 1위를 기록하며 대중적인 신드롬을 일으킨 명곡입니다.",
        "artistDesc":  "전통적인 동양적 서정성과 최첨단 비트를 자유자재로 버무리는 감각의 소유자입니다."
    },
    {
        "id":  "neru-dappou-rock",
        "title":  "탈법 록 (Law-evading Rock / 脱法ロック)",
        "artist":  "Neru feat. 카가미네 렌",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 펑크 하드 록",
        "lyric":  "トリップしようぜ、このくだらない現実を抜け出して！ (트립하자고, 이 시시한 현실을 벗어나서!)",
        "releaseYear":  "2016",
        "album":  "CYNICISM",
        "icon":  "🎸",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "late-morning"
                  ],
        "bandmanComment":  "기타 앰프를 끝까지 크랭크업한 듯한 날것의 디스토션과 사정없이 쪼개지는 펑크 드럼이 압도적입니다. 광기 넘치는 에너지와 반항적인 사운드가 쾌감을 선사합니다.",
        "whyRecommend":  "일상의 억압에서 벗어나 모든 에너지를 폭발시키고 싶을 때, 뇌리를 때리는 펑크 록의 진수를 맛볼 수 있습니다.",
        "songHistory":  "파격적이고 유쾌한 뮤직비디오와 폭발적인 록 사운드로 니코니코 동화에서 전설적인 인기를 누린 Neru의 대표곡입니다.",
        "artistDesc":  "거친 하드 록과 그런지, 청춘의 저항 정신을 보컬로이드로 표현하는 록 스페셜리스트 P입니다."
    },
    {
        "id":  "neru-lost-one-weeping",
        "title":  "로스트원의 호곡 (ロストワンの号哭)",
        "artist":  "Neru feat. 카가미네 린",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 헤비 이모 록",
        "lyric":  "黒板の此の漢字が読めますか、あの子の心の黒さが読めますか。 (칠판의 이 한자를 읽을 수 있나요, 그 아이 마음의 어둠을 읽을 수 있나요)",
        "releaseYear":  "2013",
        "album":  "세계정복",
        "icon":  "🏫",
        "moods":  [
                      "sad",
                      "melancholy",
                      "happy"
                  ],
        "times":  [
                      "afternoon",
                      "night",
                      "evening"
                  ],
        "bandmanComment":  "다운 튜닝된 묵직한 기타 리프와 투스텝 드럼, 그리고 절규하듯 내지르는 린의 고음 보컬이 가슴을 후벼팝니다. 10대들의 입시 스트레스와 존재의 고뇌를 리얼한 밴드 록으로 형상화했습니다.",
        "whyRecommend":  "세상의 기준에 억눌려 답답하고 울분이 차오를 때, 날카로운 일렉기타의 절규가 억눌린 감정을 시원하게 해소해 줍니다.",
        "songHistory":  "보컬로이드 록 역사상 가장 처절하고 진솔한 가사로 전 세계 청소년들의 영혼을 울리며 밀리언을 달성한 불멸의 명작입니다.",
        "artistDesc":  "학교와 사회의 부조리를 날카로운 록 기타와 시적인 가사로 고발하는 이모코어 록의 거장입니다."
    },
    {
        "id":  "neru-tokyo-teddy-bear",
        "title":  "도쿄 테디베어 (東京テディベア)",
        "artist":  "Neru feat. 카가미네 린",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 얼터너티브 록",
        "lyric":  "ちょっとして、愛して、つぎはぎだらけの僕を見て。 (조금만 더 사랑해줘, 기워 붙이기만 한 누더기 같은 나를 봐줘)",
        "releaseYear":  "2011",
        "album":  "세계정복",
        "icon":  "🧸",
        "moods":  [
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "거칠게 일그러진 베이스 오버드라이브 톤과 날카로운 피킹 기타 리프가 아슬아슬한 긴장감을 유지합니다. 자기혐오와 인정 욕구를 담아낸 처연한 멜로디가 압권입니다.",
        "whyRecommend":  "자신이 초라하고 불완전하게 느껴지는 쓸쓸한 밤, 누더기 테디베어처럼 상처 입은 마음을 음악이 깊이 안아줍니다.",
        "songHistory":  "Neru의 이름을 세상에 각인시킨 출세작으로, 기타 키드들이라면 누구나 한 번쯤 카피해 보는 전설적인 록 넘버입니다.",
        "artistDesc":  "청춘의 내면적 상처를 가장 처절하고 아름다운 록 멜로디로 승화시키는 프로듀서입니다."
    },
    {
        "id":  "jin-children-record",
        "title":  "칠드런 레코드 (Children Record / チルドレンレコード)",
        "artist":  "진 (자연의 적P) feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 하이퍼 질주 록",
        "lyric":  "少年少女前を向く、暮れる炎天さえ希望論だって。 (소년소녀 앞을 향해라, 저물어가는 땡볕조차 희망론이라며)",
        "releaseYear":  "2012",
        "album":  "카게로우 프로젝트",
        "icon":  "🔥",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "late-morning"
                  ],
        "bandmanComment":  "인트로부터 귀를 찢고 들어오는 화려한 기타 솔로와 쉴 틈 없이 질주하는 16비트 베이스 태핑 주법이 심장을 웅장하게 만듭니다. 청춘 록 밴드 앤섬의 극치입니다.",
        "whyRecommend":  "새로운 시작을 앞두고 투지와 용기가 필요할 때, 이 곡의 벅찬 질주감이 당신의 등을 힘차게 밀어줄 것입니다.",
        "songHistory":  "서브컬처 역사상 최대의 미디어믹스 신드롬을 일으킨 \u003c카게로우 프로젝트\u003e의 대표 오프닝 록 넘버입니다.",
        "artistDesc":  "스토리텔링과 록 밴드 사운드를 결합해 2010년대 청소년 문화를 뒤흔든 스토리텔러이자 뮤지션입니다."
    },
    {
        "id":  "jin-kagerou-days",
        "title":  "아지랑이 데이즈 (カゲロウデイズ)",
        "artist":  "진 (자연의 적P) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 타임루프 모던 록",
        "lyric":  "バッと通ったトラックが君を轢きずって鳴き叫ぶ。 (갑자기 지나간 트럭이 너를 치고 지나가며 울부짖어)",
        "releaseYear":  "2011",
        "album":  "메카쿠시티 데이즈",
        "icon":  "⏳",
        "moods":  [
                      "sad",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "여름 아지랑이처럼 어지럽게 일렁이는 기타 리프와 비장한 록 드럼이 루프되는 운명의 비극을 완벽하게 묘사합니다. 절박하게 달리는 템포가 숨을 멎게 합니다.",
        "whyRecommend":  "한여름 뙤약볕 아래 운명적인 긴장감과 드라마틱한 서사에 몰입하고 싶을 때 최고의 카타르시스를 선사합니다.",
        "songHistory":  "8월 15일이라는 특정 날짜를 보컬로이드 팬덤의 기념일로 만들어버린 전설적인 신드롬의 시작점입니다.",
        "artistDesc":  "긴박감 넘치는 밴드 편곡과 영화 같은 서사로 수많은 팬들의 가슴에 불을 지핀 작곡가입니다."
    },
    {
        "id":  "jin-summertime-record",
        "title":  "서머타임 레코드 (サマータイムレコード)",
        "artist":  "진 (자연의 적P) feat. IA",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 서정적 어쿠스틱 록",
        "lyric":  "また何処かで逢えるよねと、僕らは笑って手を振った。 (다시 어딘가에서 만날 수 있겠지라며, 우리들은 웃으며 손을 흔들었어)",
        "releaseYear":  "2013",
        "album":  "메카쿠시티 레코즈",
        "icon":  "🌻",
        "moods":  [
                      "peaceful",
                      "sad",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "나직하게 울리는 어쿠스틱 피아노와 따뜻한 기타 아르페지오, 그리고 노을빛을 머금은 멜로디가 여름날의 아련한 추억을 선물합니다. 화려한 록을 내려놓고 진심을 담은 편곡입니다.",
        "whyRecommend":  "여름이 끝나갈 무렵, 혹은 소중한 친구들과의 추억을 떠올리며 조용히 미소 짓고 싶을 때 더없이 따스한 위로가 됩니다.",
        "songHistory":  "카게로우 프로젝트의 대단원을 장식하는 엔딩 곡으로, 팬들의 눈물을 훔치게 만든 불후의 여름 명곡입니다.",
        "artistDesc":  "격렬한 록 사운드 뒤편에 가장 순수하고 서정적인 멜로디를 품고 있는 감성 작곡가입니다."
    },
    {
        "id":  "kurousa-senbonzakura",
        "title":  "천본앵 (千本桜 / Senbonzakura)",
        "artist":  "쿠로사P (WhiteFlame) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 화풍 록 / 댄스 팝",
        "lyric":  "千本桜 夜ニ紛レ、君ノ声モ届カナイヨ。 (천본앵 밤에 흩날려, 너의 목소리도 닿지 않아)",
        "releaseYear":  "2011",
        "album":  "천본앵",
        "icon":  "🌸",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "일본 전통 화풍 음계(요나누키)와 맹렬한 스피드의 록 드럼, 화려한 피아노 타건이 어우러진 J-POP 앤섬입니다. 축제 한가운데서 춤추는 듯한 생동감이 넘칩니다.",
        "whyRecommend":  "에너지를 최대로 끌어올리고 신명 나는 축제의 열기를 느끼고 싶을 때, 전 세대를 아우르는 최고의 흥을 보장합니다.",
        "songHistory":  "일본 노래방 연간 1위는 물론 와가키 밴드(和楽器バンド) 등 수많은 메이저 아티스트들이 커버하며 보카로 씬을 상징하는 국민가요가 된 곡입니다.",
        "artistDesc":  "전통 음악과 서양 록/팝을 완벽하게 융합하여 서브컬처의 대중화를 이끈 명장입니다."
    },
    {
        "id":  "koyori-hitorinbo-envy",
        "title":  "독점욕 (独りんぼエンヴィー)",
        "artist":  "koyori (전주P) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 왈츠 팝 록",
        "lyric":  "いたいのいたいのとんでいけ、ひとりぼっちの僕をおいて。 (아픈 거 아픈 거 날아가라, 외톨이인 나를 두고서)",
        "releaseYear":  "2012",
        "album":  "Youthfull",
        "icon":  "🎈",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "3/4박자 왈츠 리듬 위에 얹힌 찰랑거리는 펜더 텔레캐스터 클린 기타와 몽환적인 멜로디가 독특한 애수를 자아냅니다. 쓸쓸하면서도 귀여운 질감이 매혹적입니다.",
        "whyRecommend":  "혼자 남겨진 듯한 외로움이 밀려올 때, 나지막이 등을 토닥여주는 따뜻하고 아기자기한 위로가 되어줍니다.",
        "songHistory":  "감성적인 가사와 독특한 기타 편곡으로 수많은 인디 보컬들의 최애 커버곡으로 사랑받는 koyori의 대표작입니다.",
        "artistDesc":  "밴드 기타 사운드의 질감을 가장 섬세하고 세련되게 다루는 기타리스트 겸 프로듀서입니다."
    },
    {
        "id":  "40mp-karakuri-pierrot",
        "title":  "꼭두각시 피에로 (からくりピエロ)",
        "artist":  "40mP feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 재즈 팝 / 피아노 발라드",
        "lyric":  "回って 回って 回り疲れて、息が 息が切れたの。 (돌고 돌고 돌다 지쳐서, 숨이 숨이 차올랐어)",
        "releaseYear":  "2011",
        "album":  "작은 나침반",
        "icon":  "🎪",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "스윙감 넘치는 재지한 피아노 터치와 워킹 베이스, 브러시 드럼의 여유로운 호흡이 가슴 아픈 짝사랑 가사와 절묘한 대비를 이룹니다. 정통 어쿠스틱 밴드 사운드의 진수입니다.",
        "whyRecommend":  "사랑에 상처받고 지친 저녁, 감미로운 재즈 피아노 멜로디와 함께 쓸쓸한 감정을 차분히 달랠 수 있습니다.",
        "songHistory":  "40mP의 최고 히트작으로, 재즈 팝 발라드의 명곡으로서 어쿠스틱 커버 붐을 일으키며 수천만 뷰를 기록했습니다.",
        "artistDesc":  "기계음의 차가움을 지우고 가장 인간적이고 따뜻한 어쿠스틱 사운드를 빚어내는 보카로 씬의 힐링 마스터입니다."
    },
    {
        "id":  "40mp-renai-saiban",
        "title":  "연애재판 (恋愛裁判)",
        "artist":  "40mP feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 경쾌한 피아노 팝",
        "lyric":  "ギルティ、有罪宣告！君の心をつかんで離さない。 (Guilty, 유죄선고! 너의 마음을 붙잡고 놓지 않을 거야)",
        "releaseYear":  "2014",
        "album":  "동경 나침반",
        "icon":  "⚖️",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "통통 튀는 피아노 반주와 훵키한 베이스 슬랩, 발랄한 혼 섹션이 한 편의 브로드웨이 뮤지컬을 보는 듯 경쾌합니다. 듣는 순간 미소가 번지는 상큼한 팝입니다.",
        "whyRecommend":  "기분 좋은 햇살 아래 설레는 발걸음을 옮기고 싶을 때, 활기찬 긍정 에너지를 불어넣어 줍니다.",
        "songHistory":  "재판이라는 독특한 소재를 귀여운 연애 이야기로 풀어내며 40mP의 대표적인 밀리언 히트곡이 되었습니다.",
        "artistDesc":  "귓가에 맴도는 대중적인 멜로디와 따뜻한 밴드 세션의 조화를 가장 잘 이해하는 작곡가입니다."
    },
    {
        "id":  "junky-melancholic",
        "title":  "멜랑콜릭 (Melancholic / メランコリック)",
        "artist":  "Junky feat. 카가미네 린",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 파워 팝 록",
        "lyric":  "全然つかめない君のこと、全然しらないうちに好きになってた。 (전혀 종잡을 수 없는 너를, 전혀 모르는 사이에 좋아하게 됐어)",
        "releaseYear":  "2010",
        "album":  "Rin-chan Now!",
        "icon":  "🎀",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "경쾌하게 긁어주는 록 기타 리프와 카가미네 린 특유의 톡 쏘는 청량한 보이스가 환상적인 케미를 만듭니다. 풋풋한 츤데레 짝사랑의 감정이 기타 멜로디에 그대로 묻어납니다.",
        "whyRecommend":  "누군가를 좋아하는 마음에 가슴이 간질간질할 때, 사랑스러운 파워 팝 록이 기분을 한껏 띄워줍니다.",
        "songHistory":  "카가미네 린의 대표 캐릭터 송이자 보컬로이드 팝 록의 클래식으로 10년 넘게 사랑받는 명곡입니다.",
        "artistDesc":  "소녀의 복잡미묘한 짝사랑 감정을 경쾌한 록 비트로 완벽하게 표현해내는 멜로디 장인입니다."
    },
    {
        "id":  "mikitop-roki",
        "title":  "로키 (ROKI / ロキ)",
        "artist":  "mikitoP feat. 카가미네 린, mikitoP",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 개러지 록 / 듀엣 펑크",
        "lyric":  "死ぬんじゃねえぞ、お互いにな！ (죽지 마라, 우리 서로!)",
        "releaseYear":  "2018",
        "album":  "ROKI",
        "icon":  "🤘",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night",
                      "late-morning"
                  ],
        "bandmanComment":  "거친 오버드라이브 기타 리프와 심장을 울리는 록 드럼, 작곡가 본인의 생생한 육성 보컬과 린의 기계음이 맞물리는 듀엣이 압권입니다. 현실 밴드맨들의 고뇌와 의리를 노래한 명곡입니다.",
        "whyRecommend":  "팍팍한 현실에 지쳤을 때, 동료와 어깨동무하고 “살아남아라!” 외치듯 통쾌한 록 스피릿을 충전해 줍니다.",
        "songHistory":  "P와 보컬로이드의 듀엣이라는 파격적 구성으로 유튜브 7천만 뷰를 돌파하며 2018년 최고의 히트곡이 되었습니다.",
        "artistDesc":  "밴드 세션의 현장감 넘치는 사운드와 현실적인 노랫말로 대중성과 매니아층을 모두 사로잡은 거장입니다."
    },
    {
        "id":  "mikitop-shoujo-rei",
        "title":  "소녀레이 (少女レイ / Shoujo Rei)",
        "artist":  "mikitoP feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 여름 서정 팝 록",
        "lyric":  "線路に飛び込む君の影、夏の日の蜃気楼。 (선로에 뛰어드는 너의 그림자, 여름날의 아지랑이)",
        "releaseYear":  "2018",
        "album":  "소녀레이",
        "icon":  "🚃",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "dawn"
                  ],
        "bandmanComment":  "시골 기차역의 건널목 종소리와 맑은 클린톤 기타, 상쾌한 여름바람 같은 멜로디 속에 서늘한 서스펜스가 숨어있습니다. 아름다움과 서늘함의 완벽한 조화입니다.",
        "whyRecommend":  "매미 소리가 울리는 나른한 오후나 해 질 녘, 아련하면서도 서늘한 여름 미스터리 감성에 젖고 싶을 때 추천합니다.",
        "songHistory":  "상쾌한 멜로디와 대비되는 충격적인 스토리의 가사로 수많은 해석과 커버를 낳으며 여름 대표곡으로 자리 잡았습니다.",
        "artistDesc":  "시각적인 풍경 묘사와 문학적인 복선을 음악 속에 탁월하게 심어놓는 스토리텔러 P입니다."
    },
    {
        "id":  "mikitop-yiar-fanclub",
        "title":  "이얼 팬클럽 (いーあるふぁんくらぶ)",
        "artist":  "mikitoP feat. GUMI, 카가미네 린",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 오리엔탈 팝",
        "lyric":  "イー・アル・カンフー、ワン・ツー・スリー！君に会いたいから。 (일·이·쿵푸, 원·투·쓰리! 너를 만나고 싶으니까)",
        "releaseYear":  "2012",
        "album":  "작은 세상을 향해",
        "icon":  "🥟",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "통통 튀는 니코니코 차이나풍 신스와 귀여운 어쿠스틱 기타, 그리고 두 보컬의 엉뚱 발랄한 중국어 학습기가 절로 웃음을 자아냅니다. 유쾌함의 결정체입니다.",
        "whyRecommend":  "새로운 취미를 시작하거나 귀엽고 밝은 에너지가 필요할 때, 하루를 상쾌하고 유쾌하게 열어줍니다.",
        "songHistory":  "국경을 넘은 사랑을 배우기 위해 외국어를 공부한다는 귀여운 설정으로 전 아시아적인 사랑을 받은 국민 보카로 송입니다.",
        "artistDesc":  "다양한 문화권의 리듬과 팝을 접목하여 음악적 즐거움을 극대화하는 재치 있는 작곡가입니다."
    },
    {
        "id":  "chinozo-goodbye-sengen",
        "title":  "굿바이 선언 (グッバイ宣言 / Goodbye Sengen)",
        "artist":  "Chinozo feat. FloweR",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 질주 팝 록",
        "lyric":  "引き籠り絶対ジャスティス！俺の私のこの部屋で。 (방구석 은둔 절대 정의! 나의 이 방 안에서)",
        "releaseYear":  "2020",
        "album":  "The Deluge",
        "icon":  "✌️",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "170BPM의 상쾌한 투스텝 비트와 FloweR 특유의 중성적이고 시원하게 긁히는 보컬이 귀를 뚫어줍니다. 핑거스냅과 캐치한 기타 훅이 중독성을 극대화합니다.",
        "whyRecommend":  "귀찮은 세상사에 작별을 고하고 나만의 자유를 만끽하고 싶을 때, 통쾌한 사이다 같은 해방감을 선사합니다.",
        "songHistory":  "유튜브에서 1억 뷰를 돌파하며 2020년대 틱톡과 숏폼 챌린지를 완벽히 지배한 신시대 보컬로이드 최고 히트곡입니다.",
        "artistDesc":  "청춘의 솔직한 독백을 감각적인 기타 팝 록으로 담아내며 차세대 씬을 이끄는 프로듀서입니다."
    },
    {
        "id":  "surii-telecaster-bboy",
        "title":  "텔레캐스터 비보이 (Telecaster B-Boy)",
        "artist":  "서니 (Surii / すりぃ) feat. 카가미네 렌",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 댄서블 펑크 록",
        "lyric":  "テレキャスター・ビーボーイ、僕に構わないでくれ。 (텔레캐스터 비보이, 나한테 상관하지 말아줘)",
        "releaseYear":  "2019",
        "album":  "서니 컬렉션",
        "icon":  "🎸",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "곡명 그대로 펜더 텔레캐스터의 앙칼진 쨉쨉이 커팅과 묵직한 4비트 댄스 드럼이 결합된 최고의 댄서블 록입니다. 1분이라는 짧은 시간 동안 쉼 없이 몰아치는 박진감이 대단합니다.",
        "whyRecommend":  "몸이 근질거리고 짜릿한 기타 리프에 맞춰 춤추고 싶을 때, 록과 댄스의 완벽한 결합을 즐길 수 있습니다.",
        "songHistory":  "60초라는 파격적으로 짧은 숏폼 록 구성으로 메가히트를 치며 보카로 작곡의 새로운 패러다임을 연 명곡입니다.",
        "artistDesc":  "자신만의 독보적인 텔레캐스터 기타 톤과 댄서블한 펑크 비트로 수많은 매니아를 거느린 P입니다."
    },
    {
        "id":  "pinocchiop-god-ish",
        "title":  "신 같네 (神っぽいな / God-ish)",
        "artist":  "피노키오피 (PinocchioP) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 일렉트로닉 풍자 팝",
        "lyric":  "神っぽいな それ 卑怯、ぽいな ぽいな ぽい 憧れちゃう！ (신 같네 그거, 비겁하네, 같네 같네 동경해버려!)",
        "releaseYear":  "2021",
        "album":  "러브러브 나이트메어",
        "icon":  "🕊️",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "유행을 따라가는 현대 인터넷 문화를 신랄하게 풍자한 트렌디한 댄스 비트와 중독적인 신스 아르페지오가 귀에 찰싹 달라붙습니다. 냉소적이면서도 지독하게 흥겨운 사운드입니다.",
        "whyRecommend":  "세상의 가식과 얕은 유행놀음에 헛웃음이 나올 때, 유쾌하고 날카로운 비트로 스트레스를 날려줍니다.",
        "songHistory":  "빌보드 재팬 보카로 차트 장기 집권 및 글로벌 숏폼 신드롬을 일으키며 피노키오피의 독창성을 재입증한 명작입니다.",
        "artistDesc":  "철학적이고 날카로운 사회 비판 가사를 가장 흥겹고 캐치한 팝 멜로디로 노래하는 천재 철학자 P입니다."
    },
    {
        "id":  "pinocchiop-non-breath-oblige",
        "title":  "논브레스 오블리주 (Non-breath oblige)",
        "artist":  "피노키오피 (PinocchioP) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 숨 가쁜 일렉트로 록",
        "lyric":  "息が苦しいよ、息を吸うのも遠慮しちゃうんだ。 (숨이 가빠와, 숨을 쉬는 것조차 눈치를 보게 돼)",
        "releaseYear":  "2021",
        "album":  "러브러브 나이트메어",
        "icon":  "🫁",
        "moods":  [
                      "sad",
                      "melancholy",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "숨 쉴 틈 없이 밀어붙이는 맹렬한 보컬 조교와 타이트한 드럼 앤 베이스 비트가 현대인의 숨 막히는 심리적 압박감을 완벽하게 음악화했습니다. 가슴을 옥죄는 긴장감이 엄청납니다.",
        "whyRecommend":  "눈치 보느라 숨죽이고 살아가는 일상에 깊은 위로와 공감이 필요할 때, 대신 숨을 헐떡이며 울어주는 사운드입니다.",
        "songHistory":  "SNS 시대의 눈치 보기 문화를 \u0027숨 쉴 권리\u0027에 빗대어 전 세계 청춘들의 폭발적인 공감을 이끌어낸 수작입니다.",
        "artistDesc":  "인간의 원초적인 불안과 연약함을 기계의 목소리로 가장 절절하게 대변해 주는 작곡가입니다."
    },
    {
        "id":  "tsumiki-phony",
        "title":  "포니 (Phony / フォニイ)",
        "artist":  "츠미키 (tsumiki) feat. kafu (可不)",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 네오 시부야케이 팝",
        "lyric":  "さよなら、ライアー。偽物だらけのこの街で。 (잘 가라, 거짓말쟁이. 가짜들투성이인 이 거리에서)",
        "releaseYear":  "2021",
        "album":  "SAKASAMA",
        "icon":  "🎭",
        "moods":  [
                      "flutter",
                      "melancholy",
                      "happy"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "afternoon"
                  ],
        "bandmanComment":  "복잡한 재즈 텐션 코드 진행과 현란한 드럼 브레이크, 세련된 베이스라인이 어우러진 현대 J-POP 편곡의 정점입니다. kafu의 독특한 떨리는 보이스 톤이 몽환적인 맛을 더합니다.",
        "whyRecommend":  "가면을 쓰고 살아가는 도심 속에서 세련된 음악적 자극과 쌉싸름한 낭만을 느끼고 싶을 때 강력 추천합니다.",
        "songHistory":  "음악 AI 싱어 kafu의 인지도를 급상승시키며 현대 보컬로이드 씬의 음악적 수준을 한 차원 끌어올린 걸작입니다.",
        "artistDesc":  "정교한 화성과 복합적인 리듬 구성을 자유자재로 다루며 천재성을 인정받은 젊은 거장입니다."
    },
    {
        "id":  "kikuo-love-me-x3",
        "title":  "사랑해줘 사랑해줘 사랑해줘 (愛して愛して愛して)",
        "artist":  "키쿠오 (Kikuo) feat. 하츠네 미쿠",
        "genre":  "jpop",
        "genreLabel":  "J-POP / 사이키델릭 왈츠 발라드",
        "lyric":  "愛して 愛して 愛して もっともっと。 (사랑해줘 사랑해줘 사랑해줘 좀 더 좀 더)",
        "releaseYear":  "2013",
        "album":  "키쿠오월드 3",
        "icon":  "🖤",
        "moods":  [
                      "melancholy",
                      "sad"
                  ],
        "times":  [
                      "dawn",
                      "night"
                  ],
        "bandmanComment":  "아코디언과 오르골, 서커스 왈츠 풍의 기괴하면서도 처연한 악기 구성이 마음을 찌릅니다. 끝없이 증폭되는 사랑에 대한 갈망이 사운드의 폭주로 나타나는 사이키델릭의 진수입니다.",
        "whyRecommend":  "외로움과 애정결핍에 사무치는 어두운 새벽, 누구에게도 털어놓지 못한 내면의 그림자를 솔직하게 마주할 수 있습니다.",
        "songHistory":  "스포티파이에서 보컬로이드 곡 역사상 최초로 1억 회 이상의 스트리밍을 돌파하며 전 세계적인 컬트 신드롬을 일으킨 명작입니다.",
        "artistDesc":  "동화적 순수함과 섬뜩한 광기를 천재적인 사운드 디자인으로 결합해내는 대체 불가능한 아티스트입니다."
    },
    {
        "id":  "coldplay-fix-you",
        "title":  "Fix You",
        "artist":  "Coldplay (콜드플레이)",
        "genre":  "rock",
        "genreLabel":  "얼터너티브 록 / 밴드",
        "lyric":  "Lights will guide you home, and ignite your bones, and I will try to fix you.",
        "releaseYear":  "2005",
        "album":  "X\u0026Y",
        "icon":  "🎹",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "처음엔 덤덤한 교회 오르간 소리로 시작하지만, 후반부에 묵직한 탐탐 드럼과 기타 드라이브가 폭발하는 순간 전율이 돋습니다. 밴드 음악만이 줄 수 있는 카타르시스의 교과서 같은 트랙이죠.",
        "whyRecommend":  "감정이 가라앉은 시간대, 억눌렀던 슬픔을 음악의 크레센도로 정화시켜 줍니다. 악기들이 차례대로 쌓여가며 당신을 든든하게 받쳐줍니다.",
        "songHistory":  "크리스 마틴이 당시 아내였던 기네스 팰트로의 부친상 상실감을 위로하기 위해 만든 곡으로 전 세계 수억 명을 울린 명곡입니다.",
        "artistDesc":  "서정적인 멜로디와 감성을 압도하는 스타디움 사운드로 전 세계를 위로하는 영국의 4인조 록 밴드입니다."
    },
    {
        "id":  "day6-time-of-our-life",
        "title":  "한 페이지가 될 수 있게",
        "artist":  "DAY6 (데이식스)",
        "genre":  "rock",
        "genreLabel":  "팝 록 / K-Band",
        "lyric":  "지금 이 순간이 다시 넘겨볼 수 있는 한 페이지가 될 수 있게, 나와 함께해 줄래.",
        "releaseYear":  "2019",
        "album":  "The Book of Us : Gravity",
        "icon":  "🎸",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "도입부의 시원한 파워 코드와 쉼 없이 달리는 16비트 베이스라인이 귀를 번쩍 뜨이게 합니다. 세련된 신스 아르페지오와 펑크 록 투스텝 드럼이 합쳐져 심박수를 올려줍니다.",
        "whyRecommend":  "새로운 에너지가 샘솟는 지금, 벅차오르는 밴드 사운드로 당신의 하루를 청춘 영화의 한 장면으로 만들어줄 최고의 처방전입니다.",
        "songHistory":  "멤버 전원이 작사/작곡에 참여한 곡으로, 수많은 대학 축제와 야외 페스티벌의 떼창 앤섬으로 자리 잡았습니다.",
        "artistDesc":  "전 멤버가 보컬과 악기 연주, 전곡 작사/작곡을 소화하는 올라운더 실력파 팝 밴드입니다."
    },
    {
        "id":  "jannabi-summer-night",
        "title":  "뜨거운 여름밤은 가고 남은 건 볼품없지만",
        "artist":  "잔나비 (JANNABI)",
        "genre":  "rock",
        "genreLabel":  "빈티지 팝 록",
        "lyric":  "그땐 난 어떤 마음이었길래 내 모든 걸 주고도 웃을 수 있었나.",
        "releaseYear":  "2016",
        "album":  "MONKEY HOTEL",
        "icon":  "🎻",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "빈티지한 리버브와 스트링 편곡, 최정훈 특유의 읊조리는 허스키한 톤과 담백한 어쿠스틱 기타 스트로크가 가슴 한구석을 진하게 적십니다.",
        "whyRecommend":  "하루의 해가 저물고 옛 기억이 스칠 때, 아날로그 악기들의 찰랑임만으로 깊은 여운을 안겨주는 곡입니다.",
        "songHistory":  "소규모 클럽에서 밑바닥부터 시작한 잔나비가 대중에게 그들의 독보적인 레트로 사운드를 각인시킨 출세작입니다.",
        "artistDesc":  "영미 클래식 록의 작법을 한국적인 서정성으로 탁월하게 재해석하는 밴드입니다."
    },
    {
        "id":  "queen-dont-stop-me-now",
        "title":  "Don\u0027t Stop Me Now",
        "artist":  "Queen (퀸)",
        "genre":  "rock",
        "genreLabel":  "글램 록 / 클래식 록",
        "lyric":  "I\u0027m burning through the sky, yeah! 200 degrees, that\u0027s why they call me Mister Fahrenheit!",
        "releaseYear":  "1978",
        "album":  "Jazz",
        "icon":  "👑",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "프레디의 탄탄한 피아노 타건과 존 디콘의 워킹 베이스가 추진력을 만들고, 브라이언 메이의 시그니처 기타 솔로가 불꽃을 뿜어냅니다.",
        "whyRecommend":  "아드레날린이 필요한 순간, 악기들의 질주감이 당신의 행복감을 최고조로 끌어올립니다.",
        "songHistory":  "‘인류 역사상 가장 사람을 행복하게 만드는 노래 1위’로 과학계 연구에서 꼽힌 바 있는 명곡입니다.",
        "artistDesc":  "록에 오페라와 팝을 결합하여 현대 대중음악사의 새로운 지평을 연 거장들입니다."
    },
    {
        "id":  "radiohead-no-surprises",
        "title":  "No Surprises",
        "artist":  "Radiohead (라디오헤드)",
        "genre":  "rock",
        "genreLabel":  "아트 록 / 포스트 모던",
        "lyric":  "A heart that’s full up like a landfill, a job that slowly kills you, bruises that won’t heal.",
        "releaseYear":  "1997",
        "album":  "OK Computer",
        "icon":  "🔔",
        "moods":  [
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "dawn",
                      "night"
                  ],
        "bandmanComment":  "글로켄슈필의 맑고 서늘한 종소리 테마와 조니 그린우드의 몽환적인 클린톤 기타 아르페지오가 귓가에 맴돕니다.",
        "whyRecommend":  "세상의 번잡한 소음에서 벗어나 조용히 침잠하고 싶을 때 공허함을 그대로 보듬어줍니다.",
        "songHistory":  "현대 문명 속 인간의 소외와 피로를 다룬 걸작 앨범 수록곡입니다.",
        "artistDesc":  "록 음악의 한계를 넘어 대중음악의 예술적 지평을 끝없이 확장해 온 혁신적인 밴드입니다."
    },
    {
        "id":  "oasis-live-forever",
        "title":  "Live Forever",
        "artist":  "Oasis (오아시스)",
        "genre":  "rock",
        "genreLabel":  "브릿팝 / 브리티시 록",
        "lyric":  "Maybe I will never be all the things that I wanna be, now is not the time to cry, now’s the time to find out why.",
        "releaseYear":  "1994",
        "album":  "Definitely Maybe",
        "icon":  "🇬🇧",
        "moods":  [
                      "happy",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "묵직한 4비트 드럼 인트로와 당당한 비음 보컬, 교과서 같은 펜타토닉 록 기타 솔로가 귓가를 강타하는 긍정의 앤섬입니다.",
        "whyRecommend":  "답답한 일상에 기지개를 켜고 가슴을 쫙 펴고 싶을 때 낙관적인 밴드 사운드가 어깨에 힘을 실어줍니다.",
        "songHistory":  "노엘 갤러거가 창고에서 일하던 시절 작곡한 희망의 찬가로 오아시스를 전설로 만든 히트곡입니다.",
        "artistDesc":  "90년대 브릿팝 전성기를 이끌며 세계적인 신드롬을 일으킨 록 밴드입니다."
    },
    {
        "id":  "muse-hysteria",
        "title":  "Hysteria",
        "artist":  "Muse (뮤즈)",
        "genre":  "rock",
        "genreLabel":  "프로그레시브 록 / 스페이스 록",
        "lyric":  "It\u0027s bugging me, grating me, and twisting me around, yeah, I\u0027m endless crazed.",
        "releaseYear":  "2003",
        "album":  "Absolution",
        "icon":  "⚡",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "록 역사상 가장 위대한 베이스 인트로 중 하나! 퍼즈 팩토리 페달을 통과한 베이스 드라이브 라인이 심장을 찢어놓을 듯 질주합니다.",
        "whyRecommend":  "짜릿한 전율과 폭발적인 집중력이 필요할 때 들으면 잠자던 모든 전투력이 깨어납니다.",
        "songHistory":  "크리스 볼첸홈의 베이스 리프는 전 세계 모든 베이시스트들의 필수 연습곡이자 록 씬의 전설입니다.",
        "artistDesc":  "3인조 밴드라는 한계를 뛰어넘어 오케스트라 급의 스케일을 뿜어내는 영국 록의 거장입니다."
    },
    {
        "id":  "green-day-basket-case",
        "title":  "Basket Case",
        "artist":  "Green Day (그린 데이)",
        "genre":  "rock",
        "genreLabel":  "팝 펑크 / 네오 펑크",
        "lyric":  "Do you have the time to listen to me whine, about nothing and everything all at once?",
        "releaseYear":  "1994",
        "album":  "Dookie",
        "icon":  "💣",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "경쾌하게 내리꽂는 파워 코드와 트레블이 살아있는 베이스라인, 튀어 오르는 스네어 드럼이 2분 50초 내내 심박수를 올립니다.",
        "whyRecommend":  "불안과 잡념이 많을 때, 시원한 팝 펑크의 청량감으로 머릿속을 상쾌하게 씻어낼 수 있습니다.",
        "songHistory":  "빌리 조 암스트롱이 자신의 공황장애를 유쾌한 펑크 록으로 승화시킨 90년대 최고의 청춘 찬가입니다.",
        "artistDesc":  "지하 펑크 씬을 메인스트림 정상으로 끌어올린 팝 펑크의 제왕들입니다."
    },
    {
        "id":  "nirvana-smells-like-teen-spirit",
        "title":  "Smells Like Teen Spirit",
        "artist":  "Nirvana (너바나)",
        "genre":  "rock",
        "genreLabel":  "그런지 록 / 얼터너티브",
        "lyric":  "With the lights out, it\u0027s less dangerous. Here we are now, entertain us!",
        "releaseYear":  "1991",
        "album":  "Nevermind",
        "icon":  "🎸",
        "moods":  [
                      "happy",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "뮤트 커팅 4코드로 시작해 코러스에서 보스 DS-1 디스토션을 밟으며 폭발하는 라우드 앤 콰이어트의 정석입니다.",
        "whyRecommend":  "가슴속에 쌓인 분노와 답답함을 음악으로 날려버리고 싶을 때 최고의 파괴력을 선사합니다.",
        "songHistory":  "마이클 잭슨을 꺾고 빌보드 1위에 오르며 80년대 글램 메탈을 끝내고 90년대 그런지 시대를 연 혁명적 곡입니다.",
        "artistDesc":  "커트 코베인의 처절한 목소리로 청춘의 불안을 대변한 록의 영원한 아이콘입니다."
    },
    {
        "id":  "linkin-park-in-the-end",
        "title":  "In the End",
        "artist":  "Linkin Park (린킨 파크)",
        "genre":  "rock",
        "genreLabel":  "뉴 메탈 / 얼터너티브 록",
        "lyric":  "I tried so hard and got so far, but in the end, it doesn\u0027t even matter.",
        "releaseYear":  "2000",
        "album":  "Hybrid Theory",
        "icon":  "⏳",
        "moods":  [
                      "sad",
                      "melancholy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "처연한 피아노 루프와 마이크 시노다의 래핑, 그리고 체스터 베닝턴의 폭발적인 스크리밍 하모니가 교차하는 뉴 메탈의 최고봉입니다.",
        "whyRecommend":  "모든 노력이 허무하게 느껴질 때, 체스터의 진심 어린 보컬이 깊은 공감과 카타르시스를 전합니다.",
        "songHistory":  "21세기 가장 많이 팔린 데뷔 앨범의 킬링 트랙으로 전 세계 록 팬들의 애창곡입니다.",
        "artistDesc":  "힙합과 록, 일렉트로닉을 유기적으로 융합하여 2000년대 록 음악의 새 지평을 연 밴드입니다."
    },
    {
        "id":  "guckkasten-mirror",
        "title":  "거울",
        "artist":  "국카스텐 (Guckkasten)",
        "genre":  "rock",
        "genreLabel":  "사이키델릭 록 / 프로그레시브",
        "lyric":  "비틀거리며 춤을 추는 나의 거울 속으로, 거짓된 미소를 지으며.",
        "releaseYear":  "2010",
        "album":  "Guckkasten",
        "icon":  "🪞",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "하현우의 4옥타브를 넘나드는 샤우팅과 변화무쌍한 변박자, 사이키델릭한 기타 이펙팅이 듣는 이를 최면 상태로 몰아넣습니다.",
        "whyRecommend":  "기술적으로 압도적인 하이엔드 밴드 연주의 극한을 경험하고 싶을 때 귀가 얼얼해지는 쾌감을 줍니다.",
        "songHistory":  "인디 씬의 혜성처럼 등장해 한국대중음악상 신인상과 최우수 록 노래상을 휩쓴 기념비적 곡입니다.",
        "artistDesc":  "괴물 같은 연주력과 폭발적인 가창력으로 대한민국 록 씬을 대표하는 밴드입니다."
    },
    {
        "id":  "silica-gel-no-pain",
        "title":  "NO PAIN",
        "artist":  "실리카겔 (Silica Gel)",
        "genre":  "rock",
        "genreLabel":  "사이키델릭 록 / 네오 인디",
        "lyric":  "No Pain, No Gain. 슬픔이 지나간 자리엔 새로운 불꽃이 타오를 거야.",
        "releaseYear":  "2022",
        "album":  "NO PAIN",
        "icon":  "⚡",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "귀를 찢는 강렬한 기타 리프와 미래지향적인 아날로그 신스의 폭주, 중독적인 보컬 멜로디가 놀라운 긴장감을 뿜어냅니다.",
        "whyRecommend":  "정체된 일상에 짜릿한 전율과 텐션이 필요할 때, 라이브 클럽 맨 앞줄에 선 쾌감을 줍니다.",
        "songHistory":  "한국대중음악상 3년 연속 최우수 모던록 노래상을 수상한 현대 한국 인디 록의 주역입니다.",
        "artistDesc":  "폭발적인 연주력과 실험적인 비주얼 아트를 결합해 록의 새로운 전성기를 이끄는 4인조 밴드입니다."
    },
    {
        "id":  "yb-flying-butterfly",
        "title":  "나는 나비",
        "artist":  "YB (윤도현밴드)",
        "genre":  "rock",
        "genreLabel":  "하드 록 / 모던 록",
        "lyric":  "날개를 활짝 펴고 세상을 자유롭게 날거야, 노래하며 춤추는 나는 아름다운 나비.",
        "releaseYear":  "2006",
        "album":  "Why Be?",
        "icon":  "🦋",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "단단한 록 비트와 질주하는 기타 리프, 윤도현의 시원하게 뻗는 가창력이 번데기에서 나비가 되는 희망을 노래합니다.",
        "whyRecommend":  "지친 일상에 다시 한번 힘차게 날아오를 수 있는 자신감과 용기가 필요할 때 최고의 응원가입니다.",
        "songHistory":  "국민 록 밴드 YB의 대표곡으로 전 세대가 함께 떼창하는 대한민국 대표 희망송입니다.",
        "artistDesc":  "30년 가까이 한국 록 음악의 자존심을 지켜온 라이브 무대의 제왕들입니다."
    },
    {
        "id":  "the-volunteers-violet",
        "title":  "Violet",
        "artist":  "The Volunteers (더 발룬티어스)",
        "genre":  "rock",
        "genreLabel":  "얼터너티브 록 / 팝 펑크",
        "lyric":  "You make me feel like a violet flower, blooming in the dark.",
        "releaseYear":  "2018",
        "album":  "The Volunteers",
        "icon":  "💜",
        "moods":  [
                      "flutter",
                      "happy",
                      "melancholy"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "90년대 스매싱 펌킨스 풍의 그런지 기타 드라이브와 백예린의 몽환적인 록 보컬이 결합된 세련된 얼터너티브 사운드입니다.",
        "whyRecommend":  "감성적이면서도 묵직한 록 사운드를 동시에 맛보고 싶을 때 보랏빛 노을처럼 스며듭니다.",
        "songHistory":  "백예린이 록 프론트퍼슨으로 변신해 음악적 스펙트럼을 넓히며 큰 반향을 일으킨 명곡입니다.",
        "artistDesc":  "탁월한 연주력을 갖춘 멤버들이 뭉친 정통 얼터너티브 록 밴드입니다."
    },
    {
        "id":  "imagine-dragons-believer",
        "title":  "Believer",
        "artist":  "Imagine Dragons (이매진 드래곤스)",
        "genre":  "rock",
        "genreLabel":  "아레나 록 / 인디 록",
        "lyric":  "Pain! You made me a, you made me a believer, believer!",
        "releaseYear":  "2017",
        "album":  "Evolve",
        "icon":  "🔥",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "군악대를 연상시키는 거대한 마칭 드럼 킥과 묵직한 베이스 비트, 댄 레이놀즈의 격정적인 샤우팅이 심장을 고동치게 합니다.",
        "whyRecommend":  "고난과 시련을 발판 삼아 다시 일어서고 싶을 때, 강철 같은 의지를 심어주는 파워 트랙입니다.",
        "songHistory":  "전 세계 차트를 휩쓸며 수십억 회 스트리밍을 기록한 현대 아레나 록의 상징입니다.",
        "artistDesc":  "전자음과 대형 북 연주를 결합해 대규모 스타디움을 열광시키는 미국의 록 밴드입니다."
    },
    {
        "id":  "black-skirts-like-me",
        "title":  "좋아해줘",
        "artist":  "검정치마 (The Black Skirts)",
        "genre":  "rock",
        "genreLabel":  "인디 록 / 개러지 팝",
        "lyric":  "날 좋아해줘 날 사랑해줘, 내가 만든 노래를 들어줘.",
        "releaseYear":  "2010",
        "album":  "201",
        "icon":  "🎸",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "투박한 펜더 텔레캐스터 클린 리프와 덤덤하게 통통 튀는 인디 팝 드럼이 듣는 이의 마음을 무장해제 시킵니다.",
        "whyRecommend":  "가식 없는 솔직하고 풋풋한 애정을 느끼고 싶을 때 발걸음을 가볍게 만들어주는 유쾌한 곡입니다.",
        "songHistory":  "한국 대중음악 100대 명반에 선정된 1집 \u003c201\u003e의 킬링 트랙으로 검정치마 신드롬의 시발점입니다.",
        "artistDesc":  "조휴일의 독창적인 멜로디와 솔직담백한 가사로 인디 씬의 정점에 선 아티스트입니다."
    },
    {
        "id":  "bon-jovi-livin-on-a-prayer",
        "title":  "Livin\u0027 on a Prayer",
        "artist":  "Bon Jovi (본 조비)",
        "genre":  "rock",
        "genreLabel":  "하드 록 / 스타디움 록",
        "lyric":  "Woah, we\u0027re halfway there, woah, livin\u0027 on a prayer!",
        "releaseYear":  "1986",
        "album":  "Slippery When Wet",
        "icon":  "🙏",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "토크박스(Talk Box) 이펙터로 말하는 듯한 기타 인트로와 벅차오르는 키체인지(전조) 후렴구가 록의 낭만을 폭발시킵니다.",
        "whyRecommend":  "어려운 삶 속에서도 서로를 의지하며 버티는 모든 이들에게 최고의 용기와 카타르시스를 선물합니다.",
        "songHistory":  "빌보드 핫 100 4주 연속 1위를 차지한 80년대 록의 최고 불후의 명곡입니다.",
        "artistDesc":  "멜로디컬한 하드 록으로 전 세계 스타디움을 가득 채워온 미국의 전설적인 밴드입니다."
    },
    {
        "id":  "jaurim-twenty-five-twenty-one",
        "title":  "스물다섯, 스물하나",
        "artist":  "자우림 (Jaurim)",
        "genre":  "rock",
        "genreLabel":  "모던 록 발라드",
        "lyric":  "바람에 날려 지나간 그 계절의 향기, 영원할 줄 알았던 지난날의 너와 나.",
        "releaseYear":  "2013",
        "album":  "Goodbye, grief.",
        "icon":  "🍂",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "서정적인 어쿠스틱 피아노로 시작해 후반부 오케스트라와 김윤아의 폭발적인 성량이 아련한 청춘의 회한을 노래합니다.",
        "whyRecommend":  "지나간 청춘과 눈부셨던 순간들을 돌아보며 가슴 아릿한 눈물 한 방울을 흘리고 싶을 때 듣는 명곡입니다.",
        "songHistory":  "동명의 드라마 모티브가 되었을 정도로 시대를 초월해 사랑받는 자우림의 불후의 마스터피스입니다.",
        "artistDesc":  "25년 넘게 멤버 교체 없이 독보적인 음악 세계를 구축해 온 대한민국 최고의 모던 록 밴드입니다."
    },
    {
        "id":  "peppertones-good-luck",
        "title":  "행운을 빌어요",
        "artist":  "페퍼톤스 (PEPPERTONES)",
        "genre":  "rock",
        "genreLabel":  "파워 팝 / 뉴트럴 록",
        "lyric":  "행운을 빌어요, 반짝이는 눈부신 미래가 그대 앞에 펼쳐질 거예요.",
        "releaseYear":  "2012",
        "album":  "Beginner\u0027s Luck",
        "icon":  "🍀",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "우울증을 치료하는 밴드라는 별명답게 청량한 파워 팝 기타 사운드와 브라스, 시원한 드럼이 온몸에 긍정 엔도르핀을 돌게 합니다.",
        "whyRecommend":  "새로운 출발을 하거나 시험, 면접을 앞두고 있을 때 가장 든든한 행운의 부적이 되어줍니다.",
        "songHistory":  "카이스트 출신 두 뮤지션이 결성해 무공해 청춘 록으로 수많은 리스너들의 졸업식과 축제를 장식한 곡입니다.",
        "artistDesc":  "세상에 기분 좋은 에너지를 전파하는 페퍼톤스 특유의 청량 록을 구사하는 밴드입니다."
    },
    {
        "id":  "lucy-flowering",
        "title":  "개화 (Flowering)",
        "artist":  "LUCY (루시)",
        "genre":  "rock",
        "genreLabel":  "바이올린 팝 록",
        "lyric":  "얼어붙었던 내 맘에 꽃이 피어나듯, 다시 봄이 올 거야.",
        "releaseYear":  "2020",
        "album":  "DEAR.",
        "icon":  "🌸",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "일렉 바이올린의 찰랑이는 선율과 청량한 록 밴드 세션이 어우러져 한 폭의 봄날 풍경을 그려냅니다.",
        "whyRecommend":  "얼어붙은 마음에 따뜻한 온기가 돌고 꽃이 피어나는 희망을 느끼고 싶을 때 강력 추천합니다.",
        "songHistory":  "슈퍼밴드 준우승 이후 발표한 데뷔 싱글로 독창적인 바이올린 록 사운드를 각인시킨 명곡입니다.",
        "artistDesc":  "바이올린이 리드하는 독보적인 악기 구성으로 K-밴드 씬의 새로운 바람을 일으킨 4인조 밴드입니다."
    },
    {
        "id":  "ed-sheeran-photograph",
        "title":  "Photograph",
        "artist":  "Ed Sheeran (에드 시런)",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 팝",
        "lyric":  "We keep this love in a photograph, we made these memories for ourselves.",
        "releaseYear":  "2014",
        "album":  "x (Multiply)",
        "icon":  "📷",
        "moods":  [
                      "sad",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "어쿠스틱 기타 핑거스타일로 시작해 첼로와 바이올린 콰르텟이 부드럽게 감싸 안는 편곡이 일품입니다. 마틴 통기타의 현 울림이 아주 따뜻합니다.",
        "whyRecommend":  "소중한 추억을 꺼내보게 되는 감성적인 시간대에 나직한 통기타의 호흡과 스트링의 온기가 마음을 포근하게 안아줍니다.",
        "songHistory":  "장거리 연애 중이던 연인을 그리워하며 호텔 방에서 작은 기타로 완성한 진솔한 사랑 이야기입니다.",
        "artistDesc":  "통기타 한 대와 루프 페달만으로 스타디움 관객을 사로잡는 최고의 싱어송라이터입니다."
    },
    {
        "id":  "jason-mraz-im-yours",
        "title":  "I\u0027m Yours",
        "artist":  "Jason Mraz (제이슨 므라즈)",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 / 레게 팝",
        "lyric":  "Look into your heart and you\u0027ll find love, love, love, love. Listen to the music of the moment.",
        "releaseYear":  "2008",
        "album":  "We Sing. We Dance. We Steal Things.",
        "icon":  "🌴",
        "moods":  [
                      "happy",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "레게 특유의 촙 주법과 맑은 우쿨렐레/나일론 기타 리듬이 몸을 자연스럽게 까딱이게 만듭니다. 경쾌한 스캣 보컬이 유쾌합니다.",
        "whyRecommend":  "따뜻한 햇살 아래 여유와 긍정적인 바이브를 채우고 싶을 때 편안한 리듬감이 미소를 번지게 해줍니다.",
        "songHistory":  "빌보드 핫 100 차트에서 무려 76주 동안 머무르며 전 세계에 어쿠스틱 힐링 열풍을 불러일으킨 명곡입니다.",
        "artistDesc":  "꿀 같은 목소리와 긍정적인 가사로 전 세계 음악 팬들의 오랜 친구가 된 뮤지션입니다."
    },
    {
        "id":  "lauv-paris-in-the-rain",
        "title":  "Paris in the Rain",
        "artist":  "Lauv (라우브)",
        "genre":  "pop",
        "genreLabel":  "드림 팝 / 이지리스닝",
        "lyric":  "\u0027Cause anywhere with you feels right, anywhere with you feels like Paris in the rain.",
        "releaseYear":  "2017",
        "album":  "I met you when I was 18.",
        "icon":  "🌧️",
        "moods":  [
                      "flutter",
                      "peaceful",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "로즈 일렉트릭 피아노의 물기 머금은 건반 톤과 미니멀한 핑거 스냅, 소프트한 신스 베이스가 귓가를 간지럽힙니다.",
        "whyRecommend":  "설렘과 낭만이 피어오르는 저녁 시간, 비 내리는 파리의 카페 테라스에 앉아있는 듯한 낭만적인 공간감을 선사합니다.",
        "songHistory":  "영화 \u003c미드나잇 인 파리\u003e에서 영감을 받아 만든 곡으로 사랑하는 사람과 함께라면 평범한 빗길도 낭만이 된다는 노래입니다.",
        "artistDesc":  "현대 청춘들의 감성을 특유의 멜랑콜리한 팝 사운드로 그려내는 미국의 감성 프로듀서입니다."
    },
    {
        "id":  "adele-make-you-feel-my-love",
        "title":  "Make You Feel My Love",
        "artist":  "Adele (아델)",
        "genre":  "pop",
        "genreLabel":  "소울 팝 / 발라드",
        "lyric":  "I could hold you for a million years, to make you feel my love.",
        "releaseYear":  "2008",
        "album":  "19",
        "icon":  "🖤",
        "moods":  [
                      "sad",
                      "peaceful",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "절제된 피아노 하모니와 스트링 앙상블, 그리고 아델의 호흡 소리까지 느껴지는 근접 마이크 믹싱이 압권입니다.",
        "whyRecommend":  "지친 하루 끝 마음에 단단한 위로가 필요할 때 아델의 깊은 울림이 흔들리는 마음을 지탱해 줍니다.",
        "songHistory":  "밥 딜런의 원곡을 아델만의 소울풀한 창법으로 재해석하여 전 세계적인 찬사를 받은 곡입니다.",
        "artistDesc":  "인간의 가장 원초적인 감정을 폭발적인 성량과 진정성으로 노래하는 21세기 최고의 보컬리스트입니다."
    },
    {
        "id":  "10cm-stalker",
        "title":  "스토커",
        "artist":  "10CM (십센치)",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 발라드",
        "lyric":  "나도 알아 나의 문제가 무엇인지, 난 못났고 별 볼 일 없지. 그 애가 날 바라볼 리 없지.",
        "releaseYear":  "2014",
        "album":  "3.0",
        "icon":  "💔",
        "moods":  [
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "담담한 마틴 통기타 핑거링 한 대와 권정열의 떨리는 팔세토 보컬 하나만으로 곡 전체를 이끌어가는 여백의 미가 돋보입니다.",
        "whyRecommend":  "짝사랑의 서글픔이나 작아진 자존감으로 가슴이 먹먹할 때 솔직한 노랫말이 가장 큰 공감과 위로를 건넵니다.",
        "songHistory":  "권정열 본인의 20대 초반 자전적 짝사랑 경험을 녹여낸 곡으로 10CM의 최고 명곡으로 꼽힙니다.",
        "artistDesc":  "어쿠스틱 사운드를 기반으로 대중성과 인디 감성을 동시에 사로잡은 독보적 보컬리스트입니다."
    },
    {
        "id":  "taylor-swift-cruel-summer",
        "title":  "Cruel Summer",
        "artist":  "Taylor Swift (테일러 스위프트)",
        "genre":  "pop",
        "genreLabel":  "신스팝 / 일렉트로 팝",
        "lyric":  "I love you, ain\u0027t that the worst thing you ever heard? He looks up grinning like a devil!",
        "releaseYear":  "2019",
        "album":  "Lover",
        "icon":  "☀️",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "박동하는 신스 베이스 펄스와 격정적인 보코더 하모니, 브릿지에서 터져 나오는 폭발적인 샤우팅이 심장을 고동치게 합니다.",
        "whyRecommend":  "짜릿하고 치명적인 여름날의 사랑과 벅차오르는 감정을 만끽하고 싶을 때 최고의 드라이브 앤섬입니다.",
        "songHistory":  "발매 4년 후 디 에라스 투어(The Eras Tour)를 통해 전 세계 역주행 1위를 기록한 팝 역사의 기적입니다.",
        "artistDesc":  "21세기 전 세계 대중문화의 중심이자 세대를 대표하는 위대한 싱어송라이터입니다."
    },
    {
        "id":  "bruno-mars-just-the-way-you-are",
        "title":  "Just the Way You Are",
        "artist":  "Bruno Mars (브루노 마스)",
        "genre":  "pop",
        "genreLabel":  "팝 발라드 / 두왑",
        "lyric":  "\u0027Cause girl, you\u0027re amazing just the way you are.",
        "releaseYear":  "2010",
        "album":  "Doo-Wops \u0026 Hooligans",
        "icon":  "✨",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "경쾌하게 얹히는 클래식 힙합 브레이크 비트와 피아노 코드, 브루노 마스의 감미롭고 탄탄한 보컬이 완벽한 조화를 이룹니다.",
        "whyRecommend":  "사랑하는 사람의 소중함을 되새기거나 스스로의 아름다움을 긍정하고 싶을 때 듣기 더없이 달콤한 노래입니다.",
        "songHistory":  "브루노 마스를 세계적인 슈퍼스타로 도약시킨 솔로 데뷔곡으로 그래미 최우수 팝 보컬을 수상했습니다.",
        "artistDesc":  "훵크, 팝, R\u0026B를 자유자재로 넘나들며 현대 팝 음악을 지배하는 만능 엔터테이너입니다."
    },
    {
        "id":  "billie-eilish-bad-guy",
        "title":  "bad guy",
        "artist":  "Billie Eilish (빌리 아일리시)",
        "genre":  "pop",
        "genreLabel":  "다크 팝 / 미니멀 베이스",
        "lyric":  "So you\u0027re a tough guy, like it really rough guy. I\u0027m that bad type.",
        "releaseYear":  "2019",
        "album":  "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
        "icon":  "😈",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "극도로 미니멀한 808 서브 베이스 루프와 핑거스냅, 속삭이는 보컬 믹싱이 공간 전체를 긴장감으로 채웁니다.",
        "whyRecommend":  "위트 있고 쿨한 나만의 엣지를 뽐내고 싶을 때 감각적인 베이스라인이 최고의 그루브를 선사합니다.",
        "songHistory":  "그래미 어워드 본상 4개 부문을 싹쓸이하며 2000년대생 최초의 팝 역사를 쓴 혁명적인 곡입니다.",
        "artistDesc":  "베드룸 팝의 새로운 문법을 창조하며 전 세계 Z세대의 우상이 된 독보적 아티스트입니다."
    },
    {
        "id":  "charlie-puth-dangerously",
        "title":  "Dangerously",
        "artist":  "Charlie Puth (찰리 푸스)",
        "genre":  "pop",
        "genreLabel":  "파워 팝 / 피아노 록",
        "lyric":  "I loved you dangerously, more than the air that I breathe.",
        "releaseYear":  "2016",
        "album":  "Nine Track Mind",
        "icon":  "🔥",
        "moods":  [
                      "flutter",
                      "sad",
                      "happy"
                  ],
        "times":  [
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "절대음감 찰리 푸스의 탄탄한 피아노 리프와 묵직한 드럼 스네어, 폭발하는 진성 고음이 아찔한 사랑의 열기를 전달합니다.",
        "whyRecommend":  "모든 것을 내던질 만큼 치열하고 뜨거운 감정에 불을 지피고 싶을 때 전율을 안겨줍니다.",
        "songHistory":  "한국과 아시아권에서 오랜 시간 꾸준히 사랑받으며 수많은 K-POP 아이돌들의 커버를 낳은 트랙입니다.",
        "artistDesc":  "천재적인 멜로디 감각과 피아노 연주력으로 무장한 현대 팝의 히트메이커입니다."
    },
    {
        "id":  "maroon-5-sunday-morning",
        "title":  "Sunday Morning",
        "artist":  "Maroon 5 (마룬 파이브)",
        "genre":  "pop",
        "genreLabel":  "재즈 팝 / 훵크 팝",
        "lyric":  "Sunday morning, rain is falling, steal some covers, share some skin.",
        "releaseYear":  "2002",
        "album":  "Songs About Jane",
        "icon":  "☕",
        "moods":  [
                      "peaceful",
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "나른한 일요일 아침을 연상시키는 재즈 피아노 코드와 스윙 드럼, 애덤 리바인의 달콤한 보이스가 편안한 안식을 줍니다.",
        "whyRecommend":  "느긋하게 늦잠을 자고 일어난 주말 아침, 따뜻한 커피 한 잔과 함께 여유를 즐기기에 최고의 선곡입니다.",
        "songHistory":  "마룬 5의 데뷔 앨범 수록곡으로 20년이 지난 지금까지도 카페와 일상에서 가장 사랑받는 이지리스닝 클래식입니다.",
        "artistDesc":  "백인 록 밴드와 흑인 소울/팝의 그루브를 완벽하게 결합한 미국의 대표 팝 밴드입니다."
    },
    {
        "id":  "iu-through-the-night",
        "title":  "밤편지 (Through the Night)",
        "artist":  "아이유 (IU)",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 포크 발라드",
        "lyric":  "이 밤 그날의 반딧불을 당신의 창 가까이 보낼게요, 좋은 꿈 이길 바라요.",
        "releaseYear":  "2017",
        "album":  "Palette",
        "icon":  "✉️",
        "moods":  [
                      "peaceful",
                      "sad",
                      "flutter"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "나일론 기타의 부드러운 핑거링과 아이유의 나직한 숨소리가 잠 못 드는 밤 다정한 안부 인사를 건넵니다.",
        "whyRecommend":  "고요한 밤 누군가의 평안한 잠을 빌어주고 싶거나 외로운 마음에 따뜻한 온기가 필요할 때 큰 위로가 됩니다.",
        "songHistory":  "한국 대중음악 역사상 가장 아름다운 서정시로 꼽히며 멜론 연간 차트 상위권을 장기 집권한 국민 자장가입니다.",
        "artistDesc":  "탁월한 작사 실력과 호소력 짙은 보컬로 시대를 대변하는 대한민국 최고의 싱어송라이터입니다."
    },
    {
        "id":  "akmu-how-can-i-love-the-heartbreak",
        "title":  "어떻게 이별까지 사랑하겠어, 널 사랑하는 거지",
        "artist":  "AKMU (악뮤)",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 발라드",
        "lyric":  "어떻게 내가 어떻게 너를, 이후에 우리 바다처럼 깊은 사랑이 다 마를 때까지 기다리는 게 이별일 텐데.",
        "releaseYear":  "2019",
        "album":  "항해 (SAILING)",
        "icon":  "🌊",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "파도처럼 일렁이는 스트링 편곡과 통기타, 이찬혁과 이수현의 천상의 보컬 하모니가 깊은 바다의 정취를 자아냅니다.",
        "whyRecommend":  "이별의 아픔과 사랑의 깊이를 담담하게 어루만지고 싶을 때 가슴 깊은 곳을 울리는 명곡입니다.",
        "songHistory":  "이찬혁의 군 복무 중 배 위에서 기타 없이 머릿속으로만 작곡된 기적 같은 명작으로 전 차트 1위를 휩쓸었습니다.",
        "artistDesc":  "천재적인 작곡 감각과 대체 불가능한 보컬로 한국 가요계를 이끄는 남매 듀오입니다."
    },
    {
        "id":  "sung-si-kyung-two-people",
        "title":  "두 사람",
        "artist":  "성시경",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 발라드",
        "lyric":  "지친 하루가 가고 달빛 아래 두 사람 하나의 그림자, 눈 감으면 잡힐 듯 아련한 행복이 아직 저기 있는데.",
        "releaseYear":  "2005",
        "album":  "다시 꿈꾸고 싶다",
        "icon":  "🌙",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "어쿠스틱 기타 한 대와 피아노, 성시경의 부드러운 중저음이 인생의 동반자와 함께 걷는 길을 따스하게 축복합니다.",
        "whyRecommend":  "소중한 사람과 함께하는 평온한 저녁 시간, 곁에 있는 이의 소중함을 되새기며 따뜻한 감동을 느낄 수 있습니다.",
        "songHistory":  "윤영석 작곡의 불후의 축가 명곡으로 20년 가까이 대한민국 결혼식과 밤 라디오의 상징으로 자리 잡았습니다.",
        "artistDesc":  "‘발라드의 황태자’로 불리며 달콤한 목소리와 감미로운 표현력으로 리스너들의 밤을 위로하는 보컬리스트입니다."
    },
    {
        "id":  "paul-kim-every-day-every-moment",
        "title":  "모든 날, 모든 순간",
        "artist":  "폴킴 (Paul Kim)",
        "genre":  "pop",
        "genreLabel":  "팝 발라드",
        "lyric":  "네가 없이 웃을 수 있을까, 생각만 해도 눈물이나. 힘든 시간 날 지켜준 사람.",
        "releaseYear":  "2018",
        "album":  "키스 먼저 할까요? OST",
        "icon":  "🌿",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "투명한 어쿠스틱 피아노와 스트링의 온기, 진심을 담아 읊조리는 폴킴의 보컬이 가슴에 편안한 안도감을 줍니다.",
        "whyRecommend":  "사랑하는 사람과 함께하는 소소한 일상의 기적을 느끼고 싶을 때 더없이 따뜻한 축복이 되어줍니다.",
        "songHistory":  "드라마 OST로 시작해 수년간 차트 상위권에 머무르며 국민 고백송이자 축가로 자리매김한 히트곡입니다.",
        "artistDesc":  "자연스러운 음색과 진솔한 가사로 듣는 이의 마음을 편안하게 녹여주는 보컬리스트입니다."
    },
    {
        "id":  "bol4-galaxy",
        "title":  "우주를 줄게",
        "artist":  "볼빨간사춘기 (BOL4)",
        "genre":  "pop",
        "genreLabel":  "인디 팝 / 어쿠스틱 팝",
        "lyric":  "커피를 너무 많이 마셨나 봐요, 심장이 막 두근대고 잠은 잘 수가 없어요.",
        "releaseYear":  "2016",
        "album":  "Red Planet",
        "icon":  "🌌",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "afternoon"
                  ],
        "bandmanComment":  "통통 튀는 어쿠스틱 기타와 앙증맞은 실로폰 소리, 안지영 특유의 톡 쏘는 발음과 사랑스러운 보컬 톤이 귀를 녹입니다.",
        "whyRecommend":  "짝사랑의 벅찬 설렘과 밤하늘의 은하수를 건너는 듯한 기분 좋은 두근거림을 선사합니다.",
        "songHistory":  "차트 최하위권에서 시작해 오직 입소문과 라이브 실력만으로 1위를 차지한 역주행 신화의 대표곡입니다.",
        "artistDesc":  "사춘기 소녀의 순수한 감성을 독창적인 멜로디와 창법으로 그려내는 독보적 팝 듀오입니다."
    },
    {
        "id":  "sam-smith-stay-with-me",
        "title":  "Stay With Me",
        "artist":  "Sam Smith (샘 스미스)",
        "genre":  "pop",
        "genreLabel":  "가스펠 팝 / 소울",
        "lyric":  "Oh, won\u0027t you stay with me? \u0027Cause you\u0027re all I need.",
        "releaseYear":  "2014",
        "album":  "In the Lonely Hour",
        "icon":  "⛪",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "dawn",
                      "night"
                  ],
        "bandmanComment":  "웅장한 가스펠 콰이어 합창단과 드럼 비트, 샘 스미스의 애절한 팔세토 고음이 외로운 새벽의 독백을 장엄하게 감쌉니다.",
        "whyRecommend":  "누군가의 온기가 절실하게 그리운 쓸쓸한 새벽, 깊은 영혼의 울림으로 위로를 받을 수 있습니다.",
        "songHistory":  "그래미 어워드 올해의 노래상과 레코드상을 동시에 수상하며 전 세계를 사로잡은 2010년대 최고의 소울 팝입니다.",
        "artistDesc":  "풍부한 성량과 독보적인 감수성으로 영국의 소울을 전 세계에 알린 최고의 팝스타입니다."
    },
    {
        "id":  "shawn-mendes-nothing-holdin-me-back",
        "title":  "There\u0027s Nothing Holdin\u0027 Me Back",
        "artist":  "Shawn Mendes (션 멘데스)",
        "genre":  "pop",
        "genreLabel":  "댄스 팝 / 팝 록",
        "lyric":  "\u0027Cause if we lost our minds and we took it way too far, I know we\u0027d be alright.",
        "releaseYear":  "2017",
        "album":  "Illuminate",
        "icon":  "⚡",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "어쿠스틱 기타를 맹렬하게 스트로크하며 시작해 펑키한 베이스와 질주하는 댄스 록 비트로 이어지는 에너지가 대단합니다.",
        "whyRecommend":  "주저하지 않고 사랑이나 목표를 향해 달려갈 추진력이 필요할 때 들으면 아드레날린이 솟구칩니다.",
        "songHistory":  "빌보드 에어플레이 차트 1위를 기록하며 션 멘데스의 파워풀한 팝 록 정체성을 확립한 곡입니다.",
        "artistDesc":  "어쿠스틱 기타를 메고 당당한 라이브를 선보이는 캐나다 출신의 세계적인 팝스타입니다."
    },
    {
        "id":  "sia-chandelier",
        "title":  "Chandelier",
        "artist":  "Sia (시아)",
        "genre":  "pop",
        "genreLabel":  "일렉트로 팝 / 파워 발라드",
        "lyric":  "I\u0027m gonna swing from the chandelier, from the chandelier!",
        "releaseYear":  "2014",
        "album":  "1000 Forms of Fear",
        "icon":  "💎",
        "moods":  [
                      "happy",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "afternoon"
                  ],
        "bandmanComment":  "레게 톤의 절제된 버스(Verse)에 이어 코러스에서 샹들리에가 깨지듯 터져 나오는 시아의 폭발적인 벨팅 보컬이 압권입니다.",
        "whyRecommend":  "삶의 억압에서 벗어나 한계까지 목청껏 소리를 지르며 카타르시스를 느끼고 싶을 때 전율을 선사합니다.",
        "songHistory":  "얼굴 없는 가수로 활동하던 시아를 전 세계 팝의 정상에 올려놓은 세기의 파워 보컬 명곡입니다.",
        "artistDesc":  "독보적인 작곡 실력과 한계를 모르는 가창력으로 전 세계 팝스타들의 히트곡을 제조한 천재 아티스트입니다."
    },
    {
        "id":  "lee-mu-jin-traffic-light",
        "title":  "신호등",
        "artist":  "이무진",
        "genre":  "pop",
        "genreLabel":  "어쿠스틱 팝 록",
        "lyric":  "붉은색 푸른색 그 사이 3초 그 짧은 시간, 노란색 빛을 내는 저기 저 신호등이 내 모습 같아.",
        "releaseYear":  "2021",
        "album":  "신호등",
        "icon":  "🚦",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "경쾌하게 긁어주는 어쿠스틱 기타와 펑키한 베이스, 솔직하고 위트 있는 이무진의 보컬이 청춘의 방황을 유쾌하게 노래합니다.",
        "whyRecommend":  "인생의 노란 불 앞에서 망설이고 있는 청춘들에게 친근하고 유쾌한 용기를 전해줍니다.",
        "songHistory":  "싱어게인 이후 발표한 자작곡으로 남녀노소 전 세대의 떼창을 이끌어내며 멜론 차트 1위를 달성한 명곡입니다.",
        "artistDesc":  "탁월한 기타 연주력과 일상을 포착하는 비범한 작사 감각으로 주목받는 젊은 싱어송라이터입니다."
    },
    {
        "id":  "john-mayer-gravity",
        "title":  "Gravity",
        "artist":  "John Mayer (존 메이어)",
        "genre":  "pop",
        "genreLabel":  "블루스 팝 / 소울",
        "lyric":  "Gravity is working against me, and gravity wants to bring me down.",
        "releaseYear":  "2006",
        "album":  "Continuum",
        "icon":  "🎸",
        "moods":  [
                      "peaceful",
                      "melancholy",
                      "sad"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "펜더 커스텀샵 스트라토캐스터의 둥글고 따스한 블루스 넥 픽업 톤과 소울풀한 오르간 사운드가 영혼을 달래줍니다.",
        "whyRecommend":  "자신을 짓누르는 세상의 중력과 욕망 속에서 중심을 잡고 차분히 쉬어가고 싶을 때 듣는 힐링 명작입니다.",
        "songHistory":  "현대 블루스 기타의 교과서로 불리는 \u003cContinuum\u003e 앨범의 정수이자 존 메이어 본인이 평생 부르고 싶은 곡으로 꼽는 명곡입니다.",
        "artistDesc":  "에릭 클랩튼을 잇는 현대 3대 기타리스트이자 감미로운 팝송을 빚어내는 싱어송라이터입니다."
    },
    {
        "id":  "chet-baker-i-fall-in-love",
        "title":  "I Fall in Love Too Easily",
        "artist":  "Chet Baker (쳇 베이커)",
        "genre":  "jazz",
        "genreLabel":  "쿨 재즈 / 보컬 재즈",
        "lyric":  "I fall in love too easily, I fall in love too fast, I should have learned to tread softly.",
        "releaseYear":  "1954",
        "album":  "Chet Baker Sings",
        "icon":  "🎺",
        "moods":  [
                      "melancholy",
                      "sad",
                      "peaceful"
                  ],
        "times":  [
                      "dawn",
                      "night"
                  ],
        "bandmanComment":  "뮤트를 뺀 트럼펫의 처연한 톤과 힘을 뺀 중성적인 보컬, 콘트라베이스의 느긋한 피치카토가 밤의 정적을 메워줍니다.",
        "whyRecommend":  "모두가 잠든 새벽, 쓸쓸한 감정에 진하게 취하고 싶을 때 곁에 두기 가장 좋은 재즈 명반입니다.",
        "songHistory":  "웨스트 코스트 쿨 재즈의 황태자 쳇 베이커의 방황과 고독이 고스란히 담긴 불멸의 재즈 스탠더드입니다.",
        "artistDesc":  "우수에 젖은 눈빛과 천재적인 멜로디 감각으로 1950년대 재즈계를 뒤흔든 전설적인 음악가입니다."
    },
    {
        "id":  "norah-jones-dont-know-why",
        "title":  "Don\u0027t Know Why",
        "artist":  "Norah Jones (노라 존스)",
        "genre":  "jazz",
        "genreLabel":  "재즈 팝 / 보컬 재즈",
        "lyric":  "I don\u0027t know why I didn\u0027t come, I left you by the house of fun.",
        "releaseYear":  "2002",
        "album":  "Come Away with Me",
        "icon":  "☕",
        "moods":  [
                      "peaceful",
                      "melancholy"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "dawn"
                  ],
        "bandmanComment":  "어쿠스틱 그랜드 피아노의 절제된 타건과 브러시 드럼 주법, 재즈 베이스의 따뜻한 중저음이 마음의 온도를 낮춰줍니다.",
        "whyRecommend":  "분주한 생각들을 정리하고 고요한 쉼표를 찍고 싶을 때 부드러운 카푸치노 거품처럼 마음을 다독여줍니다.",
        "songHistory":  "그래미 어워드 8개 부문을 휩쓸며 2000년대 재즈의 르네상스를 연 불후의 명작입니다.",
        "artistDesc":  "재즈와 컨트리, 팝의 경계를 자유롭게 넘나드는 세계적인 재즈 피아니스트 겸 보컬리스트입니다."
    },
    {
        "id":  "stevie-wonder-isnt-she-lovely",
        "title":  "Isn\u0027t She Lovely",
        "artist":  "Stevie Wonder (스티비 원더)",
        "genre":  "jazz",
        "genreLabel":  "모타운 소울 / 훵크",
        "lyric":  "Isn\u0027t she lovely? Isn\u0027t she wonderful? Isn\u0027t she precious, less than one minute old?",
        "releaseYear":  "1976",
        "album":  "Songs in the Key of Life",
        "icon":  "✨",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "크로매틱 하모니카 솔로와 펑키한 드럼, 펜더 로즈의 쫀득한 텐션 코드가 듣는 순간 어깨를 들썩이게 만듭니다.",
        "whyRecommend":  "세상이 아름답게 느껴지고 긍정 에너지가 솟구칠 때 리듬 섹션의 탄력이 온몸에 활기를 불어넣어 줍니다.",
        "songHistory":  "첫 딸의 탄생을 축하하며 만든 곡으로 실제 아기의 목욕 소리가 녹음된 축복의 찬가입니다.",
        "artistDesc":  "선천적 시각장애를 극복하고 모든 악기를 마스터한 20세기 최고의 천재 음악가입니다."
    },
    {
        "id":  "michael-buble-feeling-good",
        "title":  "Feeling Good",
        "artist":  "Michael Bublé (마이클 부블레)",
        "genre":  "jazz",
        "genreLabel":  "빅밴드 스윙 재즈",
        "lyric":  "Birds flying high, you know how I feel. Sun in the sky, you know how I feel.",
        "releaseYear":  "2005",
        "album":  "It\u0027s Time",
        "icon":  "🎷",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "무반주 아카펠라로 긴장감을 주다가 브라스 섹션의 폭발적인 혼 사운드가 몰아칠 때의 쾌감은 타의 추종을 불허합니다.",
        "whyRecommend":  "자신감을 충전하고 새로운 도전을 앞둔 순간, 웅장한 빅밴드의 관악기가 당당한 발걸음을 응원합니다.",
        "songHistory":  "니나 시몬의 명곡을 현대적인 빅밴드 편곡으로 재탄생시켜 전 세계를 사로잡은 트랙입니다.",
        "artistDesc":  "달콤하면서도 호소력 짙은 바리톤 보이스로 스탠더드 재즈를 이끄는 제왕입니다."
    },
    {
        "id":  "bill-evans-waltz-for-debby",
        "title":  "Waltz for Debby",
        "artist":  "Bill Evans Trio (빌 에반스)",
        "genre":  "jazz",
        "genreLabel":  "피아노 트리오 재즈 / 왈츠",
        "lyric":  "(연주곡) 피아노와 베이스, 브러시 드럼이 조용히 속삭이는 영혼의 대화.",
        "releaseYear":  "1961",
        "album":  "Waltz for Debby",
        "icon":  "🎹",
        "moods":  [
                      "peaceful",
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "3/4박자 왈츠 리듬 위에서 빌 에반스의 투명한 피아노 보이싱과 천재 베이시스트 스콧 라파로의 인터플레이가 일품입니다.",
        "whyRecommend":  "커피 향과 함께 평화로운 사색을 즐기고 싶을 때 공간 전체를 고급스러운 재즈 클럽으로 바꿔줍니다.",
        "songHistory":  "어린 조카를 위해 작곡한 곡으로 빌리지 뱅가드 클럽 라이브 실황 녹음본은 역사적 명연으로 꼽힙니다.",
        "artistDesc":  "인상주의 클래식 화성을 재즈에 도입해 모던 재즈 피아노의 새 장을 연 ‘재즈계의 쇼팽’입니다."
    },
    {
        "id":  "miles-davis-so-what",
        "title":  "So What",
        "artist":  "Miles Davis (마일스 데이비스)",
        "genre":  "jazz",
        "genreLabel":  "모달 재즈 / 쿨 재즈",
        "lyric":  "(연주곡) 폴 체임버스의 전설적인 베이스 인트로와 뮤트 트럼펫의 쿨한 독백.",
        "releaseYear":  "1959",
        "album":  "Kind of Blue",
        "icon":  "🎺",
        "moods":  [
                      "peaceful",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "베이스가 멜로디를 던지면 피아노가 화음으로 응답하는 모달 재즈의 시초! 여백의 미학이 무엇인지 보여줍니다.",
        "whyRecommend":  "복잡한 생각들을 비우고 가장 세련되고 쿨한 휴식을 취하고 싶을 때 완벽한 배경음악이 됩니다.",
        "songHistory":  "역사상 가장 위대한 재즈 앨범 1위로 꼽히는 \u003cKind of Blue\u003e의 오프닝 트랙입니다.",
        "artistDesc":  "재즈의 모든 역사적 전환점을 스스로 창조하고 혁신을 이끈 재즈의 전설입니다."
    },
    {
        "id":  "dave-brubeck-take-five",
        "title":  "Take Five",
        "artist":  "The Dave Brubeck Quartet (데이브 브루벡)",
        "genre":  "jazz",
        "genreLabel":  "쿨 재즈 / 변박 재즈",
        "lyric":  "(연주곡) 경쾌한 5/4박자 피아노 리듬과 폴 데스먼드의 달콤한 알토 색소폰.",
        "releaseYear":  "1959",
        "album":  "Time Out",
        "icon":  "🎷",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "afternoon",
                      "late-morning"
                  ],
        "bandmanComment":  "독특한 5/4박자 피아노 오스티나토와 부드러운 드럼 솔로, 우아한 알토 색소폰 선율이 마법 같은 리듬감을 줍니다.",
        "whyRecommend":  "나른한 오후, 지루한 일상에 독특하고 지적인 활력을 불어넣고 싶을 때 발을 까딱이게 만듭니다.",
        "songHistory":  "변박자 재즈 곡 최초로 밀리언셀러를 기록하며 역사상 가장 대중적인 재즈 명곡이 되었습니다.",
        "artistDesc":  "클래식의 엄격함과 재즈의 스윙감을 결합해 쿨 재즈의 황금기를 연 쿼텟입니다."
    },
    {
        "id":  "ella-louis-cheek-to-cheek",
        "title":  "Cheek to Cheek",
        "artist":  "Ella Fitzgerald \u0026 Louis Armstrong",
        "genre":  "jazz",
        "genreLabel":  "스윙 재즈 / 듀엣",
        "lyric":  "Heaven, I\u0027m in heaven, and my heart beats so that I can hardly speak.",
        "releaseYear":  "1956",
        "album":  "Ella and Louis",
        "icon":  "💃",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "morning"
                  ],
        "bandmanComment":  "엘라의 비단결 같은 맑은 스캣과 루이 암스트롱의 따뜻한 자갈 목소리, 달콤한 트럼펫이 어우러진 꿈같은 듀엣입니다.",
        "whyRecommend":  "사랑하는 이와 뺨을 맞대고 춤을 추듯 세상에서 가장 로맨틱하고 천국 같은 기분을 느끼게 해줍니다.",
        "songHistory":  "어빙 베를린의 고전을 재즈 역사상 최고의 두 거장이 만나 불멸의 듀엣 앨범으로 완성했습니다.",
        "artistDesc":  "‘재즈의 퍼스트 레이디’와 ‘재즈의 아버지’가 남긴 세기의 명연입니다."
    },
    {
        "id":  "john-coltrane-in-a-sentimental-mood",
        "title":  "In a Sentimental Mood",
        "artist":  "John Coltrane \u0026 Duke Ellington",
        "genre":  "jazz",
        "genreLabel":  "발라드 재즈 / 소울",
        "lyric":  "(연주곡) 듀크 엘링턴의 영롱한 피아노 전주와 존 콜트레인의 가슴 시린 테너 색소폰.",
        "releaseYear":  "1963",
        "album":  "Duke Ellington \u0026 John Coltrane",
        "icon":  "🌙",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "피아노 건반 하나하나가 빗방울처럼 떨어지고 콜트레인의 따스하면서도 슬픈 색소폰 톤이 심장을 감싸 안습니다.",
        "whyRecommend":  "비 내리는 밤이나 깊은 새벽, 센티멘털한 감성에 흠뻑 젖어들고 싶을 때 가장 완벽한 동반자입니다.",
        "songHistory":  "재즈의 거장 듀크 엘링턴과 젊은 거인 존 콜트레인이 단 한 번 스튜디오에서 만나 완성한 보석 같은 녹음입니다.",
        "artistDesc":  "영적인 울림과 압도적인 테크닉으로 현대 색소폰 연주의 최고봉에 오른 거장입니다."
    },
    {
        "id":  "amy-winehouse-back-to-black",
        "title":  "Back to Black",
        "artist":  "Amy Winehouse (에이미 와인하우스)",
        "genre":  "jazz",
        "genreLabel":  "네오 소울 / 레트로 재즈",
        "lyric":  "We only said goodbye with words, I died a hundred times. You go back to her and I go back to black.",
        "releaseYear":  "2006",
        "album":  "Back to Black",
        "icon":  "🖤",
        "moods":  [
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "60년대 모타운 드럼 비트와 음산한 튜블러 벨, 에이미 와인하우스의 짙은 담배 연기 같은 보컬이 비극적인 사랑을 노래합니다.",
        "whyRecommend":  "지독한 이별의 상처와 깊은 어둠 속에서 가장 솔직하고 처절한 위로를 얻고 싶을 때 듣는 명곡입니다.",
        "songHistory":  "그래미 어워드 5관왕을 수상하며 21세기 소울/재즈 음악의 판도를 바꾼 불멸의 앨범 타이틀곡입니다.",
        "artistDesc":  "천재적인 소울 보이스와 파란만장한 영혼을 음악에 바치고 떠난 21세기 소울의 여왕입니다."
    },
    {
        "id":  "ray-charles-georgia-on-my-mind",
        "title":  "Georgia on My Mind",
        "artist":  "Ray Charles (레이 찰스)",
        "genre":  "jazz",
        "genreLabel":  "소울 블루스 / 가스펠",
        "lyric":  "Georgia, Georgia, a song of you comes as sweet and clear as moonlight through the pines.",
        "releaseYear":  "1960",
        "album":  "The Genius Hits the Road",
        "icon":  "🌲",
        "moods":  [
                      "peaceful",
                      "sad",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "피아노 코드와 스트링 오케스트라, 레이 찰스의 애절하면서도 깊은 소울 보이스가 고향과 그리움을 노래합니다.",
        "whyRecommend":  "마음의 안식처가 그립고 따뜻한 옛 추억이 그리워질 때 깊은 품처럼 편안한 온기를 전해줍니다.",
        "songHistory":  "미국 조지아주의 공식 주가(State Song)로 지정될 만큼 인종과 세대를 초월한 미국의 보물 같은 노래입니다.",
        "artistDesc":  "가스펠과 블루스, 재즈를 융합하여 ‘소울(Soul)’이라는 장르를 탄생시킨 장본인입니다."
    },
    {
        "id":  "nat-king-cole-love",
        "title":  "L-O-V-E",
        "artist":  "Nat King Cole (냇 킹 콜)",
        "genre":  "jazz",
        "genreLabel":  "스윙 팝 재즈",
        "lyric":  "L is for the way you look at me, O is for the only one I see.",
        "releaseYear":  "1964",
        "album":  "L-O-V-E",
        "icon":  "💌",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "경쾌한 브라스 브레이크와 벨벳처럼 부드러운 바리톤 보이스가 알파벳 철자 하나하나에 사랑을 담아 전합니다.",
        "whyRecommend":  "사랑에 빠져 세상 모든 것이 핑크빛으로 반짝일 때 더없이 순수하고 유쾌한 기쁨을 선사합니다.",
        "songHistory":  "냇 킹 콜의 생전 마지막 명곡으로 수많은 영화와 CF에 삽입된 전 세계인의 사랑 찬가입니다.",
        "artistDesc":  "부드러운 음색과 뛰어난 피아노 연주력으로 흑인 음악가 최초로 전국 네트워크 TV 쇼를 진행한 거장입니다."
    },
    {
        "id":  "george-benson-breezin",
        "title":  "Breezin\u0027",
        "artist":  "George Benson (조지 벤슨)",
        "genre":  "jazz",
        "genreLabel":  "스무스 재즈 / 퓨전 기타",
        "lyric":  "(연주곡) 이바네즈 풀할로우 기타의 옥타브 주법과 바람처럼 산뜻한 리듬 섹션.",
        "releaseYear":  "1976",
        "album":  "Breezin\u0027",
        "icon":  "🍃",
        "moods":  [
                      "peaceful",
                      "happy"
                  ],
        "times":  [
                      "afternoon",
                      "late-morning"
                  ],
        "bandmanComment":  "엄지손가락으로 뜯어내는 조지 벤슨 특유의 유려한 재즈 기타 톤과 현악 스트링이 지친 일상에 시원한 바람을 불어넣습니다.",
        "whyRecommend":  "창문을 활짝 열고 드라이브를 하거나 산뜻한 오후를 만끽하고 싶을 때 최고의 청량감을 줍니다.",
        "songHistory":  "재즈 앨범 역사상 최초로 팝 차트 1위에 오르며 300만 장 이상 판매된 스무스 재즈의 바이블입니다.",
        "artistDesc":  "웨스 몽고메리의 계보를 잇는 거장 기타리스트이자 감미로운 보컬리스트입니다."
    },
    {
        "id":  "youn-sun-nah-breakfast",
        "title":  "Breakfast in Baghdad",
        "artist":  "나윤선 (Youn Sun Nah)",
        "genre":  "jazz",
        "genreLabel":  "보컬 아방가르드 재즈",
        "lyric":  "(초고속 재즈 스캣) 인간 악기라 불리는 경이로운 음성 연주.",
        "releaseYear":  "2010",
        "album":  "Same Girl",
        "icon":  "⚡",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "숨이 멎을 듯한 광속 스캣과 어쿠스틱 베이스, 퍼커션의 질주가 인간의 목소리가 낼 수 있는 극한의 앙상블을 보여줍니다.",
        "whyRecommend":  "지루한 일상에 신선한 충격과 짜릿한 활력을 불어넣고 싶을 때 전율을 경험할 수 있습니다.",
        "songHistory":  "프랑스 문화예술공로훈장을 수상하며 유럽 재즈 씬을 뒤흔든 한국 대표 재즈 디바의 마스터피스입니다.",
        "artistDesc":  "목소리 하나로 전 세계 유수의 재즈 페스티벌을 매료시킨 세계적인 재즈 보컬리스트입니다."
    },
    {
        "id":  "lee-hi-breathe",
        "title":  "한숨 (Breathe)",
        "artist":  "이하이 (Lee Hi)",
        "genre":  "jazz",
        "genreLabel":  "소울 발라드 / 재즈 팝",
        "lyric":  "숨이 벅차올라도 괜찮아요, 아무도 그댈 탓하진 않아. 가끔은 실수해도 돼.",
        "releaseYear":  "2016",
        "album":  "SEOULITE",
        "icon":  "🍃",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "따스한 그랜드 피아노 한 대와 이하이의 깊은 소울 보이스가 거친 숨을 내쉬는 이들의 어깨를 안아줍니다.",
        "whyRecommend":  "오늘 하루도 버텨내느라 수고한 나 자신에게 깊은 쉼표와 눈물겨운 위로를 건네고 싶을 때 듣는 명곡입니다.",
        "songHistory":  "샤이니 종현이 작사/작곡하여 세상에 선물한 노래로 수많은 이들의 눈물을 닦아준 치유의 곡입니다.",
        "artistDesc":  "소울풀한 중저음과 짙은 감수성으로 한국 R\u0026B/소울 씬을 대표하는 명품 보컬리스트입니다."
    },
    {
        "id":  "laufey-from-the-start",
        "title":  "From the Start",
        "artist":  "Laufey (러베이)",
        "genre":  "jazz",
        "genreLabel":  "보사노바 / 젠지 재즈",
        "lyric":  "Don\u0027t you see I\u0027ve been in love with you since the very start?",
        "releaseYear":  "2023",
        "album":  "Bewitched",
        "icon":  "🌸",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "살랑거리는 보사노바 어쿠스틱 기타와 앙증맞은 스캣, 고전 할리우드 영화 같은 첼로 선율이 Z세대의 심장을 저격합니다.",
        "whyRecommend":  "친구를 짝사랑하는 달콤 쌉싸름한 마음에 두근거릴 때 살랑살랑 스텝을 밟게 만듭니다.",
        "songHistory":  "틱톡과 스포티파이 1위를 차지하며 21세기 Z세대에게 고전 재즈의 매력을 전파한 역사적 히트곡입니다.",
        "artistDesc":  "아이슬란드-중국계 뮤지션으로 고전 재즈와 팝을 완벽하게 융합해 그래미를 수상한 신예 거장입니다."
    },
    {
        "id":  "sunwoo-junga-run-with-me",
        "title":  "도망가자 (Run With Me)",
        "artist":  "선우정아 (Sunwoojunga)",
        "genre":  "jazz",
        "genreLabel":  "소울 발라드 / 어쿠스틱",
        "lyric":  "도망가자, 바라만 봐도 눈물 나는 곳에서. 가자, 손잡고 함께 가자.",
        "releaseYear":  "2019",
        "album":  "Serenade",
        "icon":  "🏃‍♀️",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "여백이 느껴지는 피아노 터치와 선우정아의 울컥하는 호흡, 절제된 현악기가 무너져가는 마음을 단단히 받쳐줍니다.",
        "whyRecommend":  "더 이상 버티기 힘들 만큼 지쳤을 때, 모든 짐을 내려놓고 마음껏 울 수 있는 안전지대가 되어줍니다.",
        "songHistory":  "발표 이후 수많은 현대인들의 눈물샘을 자극하며 세대를 아우르는 국민 힐링송으로 자리 잡았습니다.",
        "artistDesc":  "재즈, 록, 일렉트로닉을 자유자재로 넘나들며 뮤지션들의 뮤지션으로 불리는 싱어송라이터입니다."
    },
    {
        "id":  "nina-simone-my-baby-just-cares",
        "title":  "My Baby Just Cares for Me",
        "artist":  "Nina Simone (니나 시몬)",
        "genre":  "jazz",
        "genreLabel":  "스윙 재즈 / 피아노 블루스",
        "lyric":  "My baby don\u0027t care for shows, my baby don\u0027t care for clothes. My baby just cares for me.",
        "releaseYear":  "1958",
        "album":  "Little Girl Blue",
        "icon":  "🎹",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "바흐의 대위법을 연상시키는 정교한 피아노 솔로와 통통 튀는 스윙 베이스, 니나 시몬의 허스키한 보컬이 경쾌합니다.",
        "whyRecommend":  "물질적인 것보다 오직 나만을 사랑해 주는 연인의 마음에 행복해지는 기분 좋은 오후에 딱입니다.",
        "songHistory":  "1980년대 샤넬 No.5 광고에 삽입되며 30년 만에 영국 차트 5위에 오르는 역주행을 기록한 클래식입니다.",
        "artistDesc":  "클래식 피아노 실력과 소울풀한 가창력으로 인권 운동과 재즈 역사를 이끈 위대한 음악가입니다."
    },
    {
        "id":  "frank-sinatra-fly-me-to-the-moon",
        "title":  "Fly Me to the Moon",
        "artist":  "Frank Sinatra (프랭크 시나트라)",
        "genre":  "jazz",
        "genreLabel":  "스탠더드 스윙 재즈",
        "lyric":  "Fly me to the moon, let me play among the stars.",
        "releaseYear":  "1964",
        "album":  "It Might as Well Be Swing",
        "icon":  "🌕",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "afternoon"
                  ],
        "bandmanComment":  "카운트 베이시 오케스트라의 완벽한 브라스 스윙과 퀸시 존스의 명품 편곡, 시나트라의 여유로운 보컬이 우주를 유영합니다.",
        "whyRecommend":  "달빛 아래 낭만적인 밤을 보내거나 우아한 스윙감에 몸을 맡기고 싶을 때 듣는 영원한 명작입니다.",
        "songHistory":  "아폴로 10호와 11호 달 착륙선에서 실제로 재생된 인류 최초로 달에 울려 퍼진 역사적 노래입니다.",
        "artistDesc":  "‘더 보이스(The Voice)’라 불리며 20세기 미국 팝과 재즈의 상징이 된 전설적인 보컬리스트입니다."
    },
    {
        "id":  "wouter-hamel-breezy",
        "title":  "Breezy",
        "artist":  "Wouter Hamel (바우터 하멜)",
        "genre":  "jazz",
        "genreLabel":  "팝 재즈 / 쿨 스윙",
        "lyric":  "It feels so breezy, taking it easy, walking down the sunny street.",
        "releaseYear":  "2007",
        "album":  "Hamel",
        "icon":  "🍃",
        "moods":  [
                      "happy",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "휘파람 소리와 산뜻한 나일론 기타, 가벼운 재즈 쿼텟의 리듬이 산뜻한 아침 바람처럼 상쾌한 기분을 선사합니다.",
        "whyRecommend":  "화창한 날 기분 좋게 거리를 산책하며 가벼운 발걸음을 옮기고 싶을 때 가장 상쾌한 처방전입니다.",
        "songHistory":  "네덜란드 출신의 미스터 바우터 하멜을 한국과 아시아 팬들에게 각인시킨 대표적인 팝 재즈 명곡입니다.",
        "artistDesc":  "감미로운 음색과 세련된 스윙 팝 편곡으로 전 세계 페스티벌을 누비는 네덜란드의 재즈 프린스입니다."
    },
    {
        "id":  "crush-sometimes",
        "title":  "가끔",
        "artist":  "크러쉬 (Crush)",
        "genre":  "rnb",
        "genreLabel":  "어반 R\u0026B / 소울",
        "lyric":  "가끔 널 생각할 때마다 왜 이리 가슴이 먹먹해지는지, 잊혀진 줄 알았던 네 흔적들이.",
        "releaseYear":  "2014",
        "album":  "Crush On You",
        "icon":  "🎧",
        "moods":  [
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "90년대 슬로우잼 바이브의 끈적한 림샷 비트와 프렛리스 베이스의 미끄러지는 글리산도가 가슴을 툭툭 건드립니다.",
        "whyRecommend":  "귀갓길 저녁 차창 밖을 바라보며 쓸쓸한 감상에 잠길 때 세련된 비트와 감성적인 멜로디가 좋은 길동무가 됩니다.",
        "songHistory":  "크러쉬가 그레이와 함께 작업해 본인만의 네오 소울 정체성을 각인시킨 명곡입니다.",
        "artistDesc":  "트렌디한 힙합/R\u0026B부터 서정적인 발라드까지 자유자재로 소화하는 대한민국 대표 싱어송라이터입니다."
    },
    {
        "id":  "ziont-eat",
        "title":  "꺼내 먹어요",
        "artist":  "자이언티 (Zion.T)",
        "genre":  "rnb",
        "genreLabel":  "소울 R\u0026B",
        "lyric":  "쉽지 않죠, 바쁘죠, 왜 이렇게 까지 해야 하나 싶죠. 그럴 땐 이 노래를 초콜릿처럼 꺼내 먹어요.",
        "releaseYear":  "2015",
        "album":  "꺼내 먹어요",
        "icon":  "🍫",
        "moods":  [
                      "peaceful",
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "late-morning",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "로즈 EP 건반과 핑거스냅, 둥글둥글한 808 서브 베이스만으로 여백을 살려 조곤조곤 위로를 건넵니다.",
        "whyRecommend":  "사회생활에 치여 방전되었을 때 초콜릿 하나를 입에 물듯 마음을 편안하게 녹여줍니다.",
        "songHistory":  "지친 현대인들에게 전하는 다정한 편지 같은 곡으로 음원 차트 1위를 휩쓴 국민 힐링송입니다.",
        "artistDesc":  "독보적인 음색과 독창적인 프레이징으로 한국 R\u0026B 씬에 새 어법을 제시한 싱어송라이터입니다."
    },
    {
        "id":  "daniel-caesar-best-part",
        "title":  "Best Part (feat. H.E.R.)",
        "artist":  "Daniel Caesar (대니얼 시저)",
        "genre":  "rnb",
        "genreLabel":  "네오 소울 / 컨템포러리 R\u0026B",
        "lyric":  "If life is a movie, then you\u0027re the best part. You\u0027re the sunshine in my life.",
        "releaseYear":  "2017",
        "album":  "Freudian",
        "icon":  "🌅",
        "moods":  [
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "dawn",
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "어쿠스틱 나일론 기타의 부드러운 코드 체인지와 두 보컬의 화음이 빚어내는 오가닉 사운드의 극치입니다.",
        "whyRecommend":  "설레는 사랑의 순간 혹은 평온한 아침 햇살을 맞이할 때 마음속을 가장 따뜻한 빛으로 물들여줍니다.",
        "songHistory":  "그래미 어워드 최우수 R\u0026B 퍼포먼스상을 수상하며 미니멀한 기타와 멜로디의 힘을 증명한 명작입니다.",
        "artistDesc":  "가스펠에 뿌리를 둔 따뜻한 화성 감각으로 전 세계 R\u0026B 팬들을 매료시킨 캐나다의 싱어송라이터입니다."
    },
    {
        "id":  "beenzino-aqua-man",
        "title":  "Aqua Man",
        "artist":  "빈지노 (Beenzino)",
        "genre":  "rnb",
        "genreLabel":  "재지 힙합 / 칠 랩",
        "lyric":  "하루 종일 널 바래다주다 지쳐도, 네 미소 한 번에 난 바다를 헤엄쳐.",
        "releaseYear":  "2012",
        "album":  "24 : 26",
        "icon":  "🌊",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "청량한 EP 루프와 그루비하게 통통 튀는 베이스라인이 빈지노 특유의 레이드백된 플로우와 절묘하게 맞물립니다.",
        "whyRecommend":  "심장이 두근거리는 설렘과 가벼운 흥을 느끼고 싶을 때 시원한 바닷바람 같은 기분 전환을 선사합니다.",
        "songHistory":  "한국 힙합 역사상 가장 세련된 클래식 앨범의 대표곡으로 10년이 지난 지금까지도 사랑받는 트랙입니다.",
        "artistDesc":  "예술적 감각과 탁월한 라임 구성으로 한국 힙합 씬의 스타일 아이콘으로 자리 잡은 래퍼입니다."
    },
    {
        "id":  "frank-ocean-thinkin-bout-you",
        "title":  "Thinkin Bout You",
        "artist":  "Frank Ocean (프랭크 오션)",
        "genre":  "rnb",
        "genreLabel":  "얼터너티브 R\u0026B / PBR\u0026B",
        "lyric":  "Or do you not think so far ahead? ‘Cause I been thinkin’ ‘bout forever.",
        "releaseYear":  "2012",
        "album":  "channel ORANGE",
        "icon":  "🌌",
        "moods":  [
                      "sad",
                      "melancholy",
                      "flutter"
                  ],
        "times":  [
                      "dawn",
                      "night"
                  ],
        "bandmanComment":  "미니멀한 808 림샷 비트와 몽환적인 신스 패드, 프랭크 오션의 아찔하게 높은 팔세토가 공간을 몽롱하게 채웁니다.",
        "whyRecommend":  "새벽 감성에 젖어 잠들지 못할 때 내밀한 방 안에서 듣기에 더할 나위 없는 트랙입니다.",
        "songHistory":  "PBR\u0026B라는 새로운 장르의 부흥을 알리며 그래미 어워드를 수상한 2010년대 팝 음악의 명반 오프닝 곡입니다.",
        "artistDesc":  "시적인 가사와 파격적인 음악적 구조로 팝 음악계의 문법을 다시 쓴 천재적인 비저너리 아티스트입니다."
    },
    {
        "id":  "sza-snooze",
        "title":  "Snooze",
        "artist":  "SZA (시저)",
        "genre":  "rnb",
        "genreLabel":  "컨템포러리 R\u0026B / 트랩 소울",
        "lyric":  "I can\u0027t lose when I\u0027m with you, how can I snooze and miss the moment?",
        "releaseYear":  "2022",
        "album":  "SOS",
        "icon":  "⏰",
        "moods":  [
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "night",
                      "afternoon"
                  ],
        "bandmanComment":  "느긋하게 깔리는 어쿠스틱 기타 샘플과 묵직한 베이스, SZA의 몽환적인 멜로디 라인이 시간의 흐름을 잊게 만듭니다.",
        "whyRecommend":  "사랑하는 이와의 순간을 단 1초도 놓치고 싶지 않은 달콤하고 나른한 행복에 젖어들 수 있습니다.",
        "songHistory":  "빌보드 R\u0026B 차트 역사상 최장기 1위를 기록하며 그래미 어워드를 휩쓴 현대 R\u0026B의 최고봉입니다.",
        "artistDesc":  "솔직한 감정 묘사와 독보적인 탑라인 메이킹으로 전 세계 흑인음악의 트렌드를 이끄는 여왕입니다."
    },
    {
        "id":  "the-weeknd-blinding-lights",
        "title":  "Blinding Lights",
        "artist":  "The Weeknd (더 위켄드)",
        "genre":  "rnb",
        "genreLabel":  "신스웨이브 / 일렉트로 R\u0026B",
        "lyric":  "I said, ooh, I\u0027m blinded by the lights. No, I can\u0027t sleep until I feel your touch.",
        "releaseYear":  "2019",
        "album":  "After Hours",
        "icon":  "🕶️",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "night",
                      "evening"
                  ],
        "bandmanComment":  "80년대 신스팝의 아날로그 신시사이저 아르페지오와 강렬한 린드럼 비트가 질주하는 레트로 퓨처리즘의 정점입니다.",
        "whyRecommend":  "밤의 고속도로를 질주하듯 터질 듯한 속도감과 레트로한 낭만을 온몸으로 느끼고 싶을 때 제격입니다.",
        "songHistory":  "빌보드 핫 100 역사상 가장 오랜 기간 차트에 머무르며 역대 올타임 1위 싱글로 공인된 기념비적 곡입니다.",
        "artistDesc":  "다크한 R\u0026B에서 팝의 제왕으로 등극하며 마이클 잭슨의 뒤를 잇는 글로벌 슈퍼스타입니다."
    },
    {
        "id":  "dean-d-half-moon",
        "title":  "D (Half Moon) (feat. 개코)",
        "artist":  "DEAN (딘)",
        "genre":  "rnb",
        "genreLabel":  "얼터너티브 R\u0026B / 칠",
        "lyric":  "반의 반의 반도 채워주질 못하네, 채워지지가 않네 yeah.",
        "releaseYear":  "2016",
        "album":  "130 mood : TRBL",
        "icon":  "🌓",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "Lo-Fi 질감의 피아노 루프와 그루비한 비트, 딘의 독보적인 비음 팔세토가 채워지지 않는 반달 같은 허전함을 완벽히 묘사합니다.",
        "whyRecommend":  "사랑하는 이의 부재로 마음 한편이 텅 빈 듯한 고독한 밤, 쓸쓸한 마음을 세련되게 채워줍니다.",
        "songHistory":  "한국 R\u0026B 씬에 새로운 트렌드를 제시하며 발매 8년이 지난 지금까지도 음원 차트에 머무는 전설의 트랙입니다.",
        "artistDesc":  "세계적인 팝스타들과 협업하며 K-R\u0026B의 위상을 세계에 알린 천재 프로듀서이자 보컬리스트입니다."
    },
    {
        "id":  "jay-park-all-i-wanna-do",
        "title":  "All I Wanna Do",
        "artist":  "박재범 (Jay Park)",
        "genre":  "rnb",
        "genreLabel":  "업템포 R\u0026B / 소울 팝",
        "lyric":  "All I wanna do is get with you, 오늘은 밤새 너와 함께 춤추고 싶어.",
        "releaseYear":  "2016",
        "album":  "EVERYTHING YOU WANTED",
        "icon":  "🕺",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "차차 말론의 시그니처 비트와 펑키한 베이스, 박재범의 달콤한 그루브 보컬이 듣는 순간 몸을 들썩이게 만듭니다.",
        "whyRecommend":  "파티의 설렘이나 연인과의 신나는 주말 데이트를 앞두고 있을 때 최고의 텐션을 선사합니다.",
        "songHistory":  "한국대중음악상 올해의 음악인과 최우수 R\u0026B 음반상을 석권하며 박재범의 정점을 보여준 트랙입니다.",
        "artistDesc":  "AOMG와 하이어뮤직을 이끌며 한국 힙합/R\u0026B 씬을 개척한 독보적인 아티스트입니다."
    },
    {
        "id":  "heize-you-clouds-rain",
        "title":  "비도 오고 그래서 (feat. 신용재)",
        "artist":  "헤이즈 (Heize)",
        "genre":  "rnb",
        "genreLabel":  "재즈 R\u0026B / 비 발라드",
        "lyric":  "비도 오고 그래서 네 생각이 났어, 생각이 나서 그래서 그랬던 거지 별 의미 없어.",
        "releaseYear":  "2017",
        "album":  "/// (너 구름 비)",
        "icon":  "🌧️",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "빗소리 폴리 사운드와 담담한 재즈 피아노 코드, 헤이즈의 읊조리는 싱잉 랩이 젖은 아스팔트의 센티멘털을 자아냅니다.",
        "whyRecommend":  "창밖에 비가 내리거나 흐린 날, 옛 연인의 기억을 커피 한 잔과 함께 차분히 음미하기에 최고입니다.",
        "songHistory":  "비가 올 때마다 차트를 역주행하는 ‘비의 여왕’ 헤이즈를 탄생시킨 대한민국의 대표 비의 앤섬입니다.",
        "artistDesc":  "특유의 솔직한 이별 정서와 세련된 멜로디 라인으로 대중의 감성을 적시는 싱어송라이터입니다."
    },
    {
        "id":  "ph1-nerdy-love",
        "title":  "Nerdy Love (feat. 백예린)",
        "artist":  "pH-1 (피에이치원)",
        "genre":  "rnb",
        "genreLabel":  "멜로딕 힙합 / 싱잉 랩",
        "lyric":  "I’m just a nerd in love, 너 앞에만 서면 바보처럼 서툴러져.",
        "releaseYear":  "2020",
        "album":  "Nerdy Love",
        "icon":  "👓",
        "moods":  [
                      "flutter",
                      "happy",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "afternoon"
                  ],
        "bandmanComment":  "모키오의 따뜻한 통기타 리프와 통통 튀는 붐뱁 비트, pH-1의 부드러운 랩과 백예린의 꿀 보이스가 달콤한 조화를 이룹니다.",
        "whyRecommend":  "풋풋하고 서툰 사랑의 마음에 미소 짓고 싶을 때 듣기 더없이 사랑스러운 힐링 힙합입니다.",
        "songHistory":  "발표와 동시에 음원 차트 1위를 기록하며 싱잉 랩 씬의 가장 사랑스러운 콜라보레이션으로 남은 곡입니다.",
        "artistDesc":  "착한 랩, 감미로운 멜로디로 힙합의 스펙트럼을 넓혀온 하이어뮤직의 핵심 래퍼입니다."
    },
    {
        "id":  "loco-hwasa-dont",
        "title":  "주지마",
        "artist":  "로꼬 \u0026 화사 (Loco \u0026 Hwa Sa)",
        "genre":  "rnb",
        "genreLabel":  "어반 R\u0026B / 듀엣 팝",
        "lyric":  "취하면 안 돼, 술 한 잔에 널 향한 마음이 들킬까 봐 두려워.",
        "releaseYear":  "2018",
        "album":  "건반 위의 하이에나",
        "icon":  "🍷",
        "moods":  [
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "그루비한 블루스 어쿠스틱 기타 리프와 화사의 매혹적인 저음, 로꼬의 찰진 랩이 썸 타는 남녀의 밀당을 생생하게 연출합니다.",
        "whyRecommend":  "묘한 긴장감과 술자리에서의 아슬아슬한 설렘을 느끼고 싶을 때 어깨를 흔들며 듣기 좋습니다.",
        "songHistory":  "방송 프로그램에서 즉흥 협업으로 탄생해 모든 음원 차트를 올킬한 2018년 최고의 듀엣 히트곡입니다.",
        "artistDesc":  "독보적인 음색과 위트 있는 래핑으로 대중의 사랑을 듬뿍 받는 두 정상의 만남입니다."
    },
    {
        "id":  "post-malone-circles",
        "title":  "Circles",
        "artist":  "Post Malone (포스트 말론)",
        "genre":  "rnb",
        "genreLabel":  "팝 록 / 얼터너티브 힙합",
        "lyric":  "Seasons change and our love went cold. Feed the flame \u0027cause we can\u0027t let it go.",
        "releaseYear":  "2019",
        "album":  "Hollywood\u0027s Bleeding",
        "icon":  "🔄",
        "moods":  [
                      "sad",
                      "peaceful",
                      "flutter"
                  ],
        "times":  [
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "어쿠스틱 기타 스트로크와 몽환적인 코러스 이펙트, 묵직하게 받쳐주는 베이스라인이 쓸쓸하면서도 따뜻한 역설적 쾌감을 줍니다.",
        "whyRecommend":  "끝없이 맴도는 관계의 피로감 속에서도 부드러운 멜로디로 차분한 위로를 받고 싶을 때 추천합니다.",
        "songHistory":  "빌보드 핫 100 톱 10에 무려 39주간 머무르며 역대 최장 기록을 세운 팝/힙합의 마스터피스입니다.",
        "artistDesc":  "록과 힙합, 컨트리를 융합하여 장르의 벽을 무너뜨린 21세기 최고의 멜로디 메이커입니다."
    },
    {
        "id":  "drake-hotline-bling",
        "title":  "Hotline Bling",
        "artist":  "Drake (드레이크)",
        "genre":  "rnb",
        "genreLabel":  "차차 팝 / 칠 R\u0026B",
        "lyric":  "You used to call me on my cell phone, late night when you need my love.",
        "releaseYear":  "2015",
        "album":  "Views",
        "icon":  "📱",
        "moods":  [
                      "happy",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "70년대 소울 샘플링과 가벼운 차차(Cha-cha) 리듬, 드레이크의 캐치한 멜로디가 늦은 밤 전화벨을 기다리는 정서를 만듭니다.",
        "whyRecommend":  "새벽에 문득 옛 연인의 연락을 기다리며 홀로 방 안에서 가볍게 리듬을 타고 싶을 때 제격입니다.",
        "songHistory":  "뮤직비디오의 독특한 댄스로 전 세계 인터넷 밈(Meme) 열풍을 일으키며 드레이크의 상징이 된 곡입니다.",
        "artistDesc":  "스트리밍 시대를 지배하며 힙합과 팝의 왕좌를 동시에 차지하고 있는 캐나다의 아티스트입니다."
    },
    {
        "id":  "kendrick-lamar-love",
        "title":  "LOVE. (feat. Zacari)",
        "artist":  "Kendrick Lamar (켄드릭 라마)",
        "genre":  "rnb",
        "genreLabel":  "칠 팝 / 앰비언트 R\u0026B",
        "lyric":  "If I didn\u0027t have this, would you still love me? Keep it a hundred.",
        "releaseYear":  "2017",
        "album":  "DAMN.",
        "icon":  "💖",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "happy"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "night"
                  ],
        "bandmanComment":  "물방울처럼 영롱하게 퍼지는 신스 벨 사운드와 자카리의 천상의 팔세토 보컬, 켄드릭 라마의 다정한 멜로딕 랩이 조화를 이룹니다.",
        "whyRecommend":  "사랑하는 사람의 눈을 바라보며 영원한 신뢰와 따스한 감정을 나누고 싶을 때 가장 로맨틱한 사운드입니다.",
        "songHistory":  "퓰리처상을 수상한 전설의 힙합 앨범 \u003cDAMN.\u003e에서 가장 대중적이고 달콤한 사랑을 노래한 명곡입니다.",
        "artistDesc":  "깊이 있는 사회적 통찰과 음악적 천재성으로 힙합 역사상 최고의 시인으로 평가받는 거장입니다."
    },
    {
        "id":  "her-focus",
        "title":  "Focus",
        "artist":  "H.E.R.",
        "genre":  "rnb",
        "genreLabel":  "네오 소울 / 슬로우잼",
        "lyric":  "Can you focus on me? Baby, can you focus on me?",
        "releaseYear":  "2016",
        "album":  "H.E.R.",
        "icon":  "👁️",
        "moods":  [
                      "sad",
                      "melancholy",
                      "flutter"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "미니멀한 808 림샷과 어쿠스틱 기타 아르페지오, H.E.R.의 비단결 같은 소울 보컬이 깊은 정적을 메웁니다.",
        "whyRecommend":  "나를 온전히 바라봐 주길 바라는 내면의 쓸쓸함과 사랑의 갈망에 흠뻑 젖어들고 싶은 밤에 추천합니다.",
        "songHistory":  "얼굴을 가리고 오직 음악만으로 승부해 그래미 어워드를 사로잡은 H.E.R.의 대표적인 출세작입니다.",
        "artistDesc":  "기타와 피아노, 드럼을 직접 연주하는 천재 멀티 인스트루멘털리스트이자 R\u0026B 스타입니다."
    },
    {
        "id":  "woo-won-jae-we-are",
        "title":  "시차 (We Are) (feat. 로꼬, GRAY)",
        "artist":  "우원재 (Woo)",
        "genre":  "rnb",
        "genreLabel":  "감성 힙합 / 칠 랩",
        "lyric":  "밤새 일하고 아침을 맞이하는 우리, 남들과 다른 시차 속을 살아가.",
        "releaseYear":  "2017",
        "album":  "시차",
        "icon":  "🕒",
        "moods":  [
                      "peaceful",
                      "melancholy",
                      "happy"
                  ],
        "times":  [
                      "dawn",
                      "morning",
                      "night"
                  ],
        "bandmanComment":  "그레이의 감각적인 건반 루프와 우원재의 묵직한 중저음 독백, 로꼬의 밝은 멜로디가 새벽 노동자들의 삶을 위로합니다.",
        "whyRecommend":  "모두가 잠든 밤 홀로 깨어 일하거나 남들과 다른 시간대를 묵묵히 걸어가는 이들에게 든든한 동지애를 줍니다.",
        "songHistory":  "쇼미더머니 탈락곡이었음에도 발매 직후 차트 1위를 올킬하며 현대 청춘들의 대표 찬가가 된 기적의 곡입니다.",
        "artistDesc":  "진솔하고 어두운 내면을 날카로운 가사로 담담하게 뱉어내는 매력적인 래퍼입니다."
    },
    {
        "id":  "lee-young-ji-small-girl",
        "title":  "Small girl (feat. 디오)",
        "artist":  "이영지",
        "genre":  "rnb",
        "genreLabel":  "멜로딕 R\u0026B / 인디 팝",
        "lyric":  "I know I got a big personality, but could you still love this small girl inside me?",
        "releaseYear":  "2024",
        "album":  "16 FANTASY",
        "icon":  "👧",
        "moods":  [
                      "flutter",
                      "happy",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "따뜻한 통기타 리프와 이영지의 부드러운 싱잉 랩, 엑소 디오(D.O.)의 꿀 같은 보컬이 자아내는 풋풋한 케미가 설렘을 자극합니다.",
        "whyRecommend":  "자신만의 당당함 속에서도 연인 앞에서 작고 연약해지고 싶은 귀여운 감정에 깊이 공감할 수 있습니다.",
        "songHistory":  "국내외 차트 1위를 석권하며 이영지의 음악적 진정성과 대중성을 완벽히 증명한 2024년 최고의 히트곡입니다.",
        "artistDesc":  "압도적인 에너지와 솔직한 감수성으로 세대를 대표하는 문화 아이콘으로 성장한 뮤지션입니다."
    },
    {
        "id":  "epik-high-umbrella",
        "title":  "우산 (feat. 윤하)",
        "artist":  "에픽하이 (Epik High)",
        "genre":  "rnb",
        "genreLabel":  "감성 힙합 / 비 랩",
        "lyric":  "어느새 빗물이 내 발목에 고이고, 참았던 눈물이 내 눈가에 고이고.",
        "releaseYear":  "2008",
        "album":  "Pieces, Part One",
        "icon":  "☂️",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "타블로의 감성적인 피아노 멜로디와 미쓰라진의 묵직한 랩, 윤하의 청아한 보컬이 빗속의 그리움을 완벽하게 그려냅니다.",
        "whyRecommend":  "비가 쏟아지는 날 우산 아래서 혼자 눈물을 훔치며 지나간 사랑을 추억하고 싶을 때 듣는 최고의 비 명곡입니다.",
        "songHistory":  "한국 힙합 역사상 비 오는 날 가장 많이 재생되는 불후의 명작으로 세대를 초월한 사랑을 받습니다.",
        "artistDesc":  "문학적인 노랫말과 대중적인 서정성으로 한국 힙합의 대중화를 이끈 전설적인 힙합 그룹입니다."
    },
    {
        "id":  "zico-i-am-you-you-are-me",
        "title":  "너는 나 나는 너",
        "artist":  "지코 (ZICO)",
        "genre":  "rnb",
        "genreLabel":  "어반 R\u0026B / 소울 팝",
        "lyric":  "넌 나고 난 너야, 난 너고 넌 나야. 마음이 같다면 둘은 서로가 될 거야.",
        "releaseYear":  "2016",
        "album":  "Break Up 2 Make Up",
        "icon":  "👫",
        "moods":  [
                      "flutter",
                      "happy",
                      "peaceful"
                  ],
        "times":  [
                      "morning",
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "피제이(PEEJAY)의 따스한 일렉 피아노와 빈티지 드럼 킷, 지코의 담백하고 멜로디컬한 싱잉이 사랑에 물든 연인을 묘사합니다.",
        "whyRecommend":  "사랑하는 사람과 닮아가는 기분 좋은 일상에 미소가 절로 번질 때 가장 달콤한 배경음악이 됩니다.",
        "songHistory":  "강렬한 랩을 하던 지코가 감성 R\u0026B 보컬리스트로서의 천재적인 면모를 증명하며 차트 1위를 휩쓴 곡입니다.",
        "artistDesc":  "트렌드를 창조하는 탁월한 프로듀싱 능력과 대중적 감각을 겸비한 대한민국 힙합/팝의 리더입니다."
    },
    {
        "id":  "hyukoh-tomboy",
        "title":  "TOMBOY",
        "artist":  "혁오 (HYUKOH)",
        "genre":  "indie",
        "genreLabel":  "인디 록 / 포스트 펑크",
        "lyric":  "젊은 우리, 나이테는 잘 보이지 않고, 찬란한 빛에 눈이 멀어 꺼져가는데.",
        "releaseYear":  "2017",
        "album":  "23",
        "icon":  "🔥",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "펜더 텔레캐스터 기타의 클린 아르페지오로 시작해 후반부에서 퍼즈 디스토션과 함께 모든 악기가 울부짖듯 터져 나오는 다이내믹스가 압권입니다.",
        "whyRecommend":  "방황하고 막막한 청춘의 슬픔과 먹먹함을 마주할 때 위선 대신 날것의 사운드로 깊은 공감을 전합니다.",
        "songHistory":  "한국대중음악상 올해의 노래를 수상하며 청춘들의 절대적인 지지를 받은 시대의 찬가입니다.",
        "artistDesc":  "독창적인 편곡 스타일과 빈티지 사운드로 글로벌 페스티벌의 러브콜을 받는 인디 밴드입니다."
    },
    {
        "id":  "black-skirts-everything",
        "title":  "EVERYTHING",
        "artist":  "검정치마 (The Black Skirts)",
        "genre":  "indie",
        "genreLabel":  "드림 팝 / 인디 록",
        "lyric":  "넌 내 모든 거야, 내 여름이고 내 꿈이야. 넌 내 모든 거야, 나 있는 그대로 받아줄게.",
        "releaseYear":  "2017",
        "album":  "TEAM BABY",
        "icon":  "🌙",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "sad"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "몽글몽글한 코러스 이펙트가 걸린 기타 아르페지오와 나른한 슬로우 템포 드럼이 심장을 느리게 뛰게 합니다.",
        "whyRecommend":  "온 세상이 조용해진 밤, 누군가를 향한 순수한 감정을 오롯이 음미하고 싶을 때 최고의 배경음악입니다.",
        "songHistory":  "사랑의 영원성을 다룬 정규 3집의 타이틀곡으로 수많은 뮤지션들의 커버를 낳은 명작입니다.",
        "artistDesc":  "조휴일의 독보적인 감수성과 문학적인 가사로 한국 인디 씬의 정점에 선 아티스트입니다."
    },
    {
        "id":  "lucid-fall-ordinary-day",
        "title":  "보통의 하루",
        "artist":  "루시드폴 (Lucid Fall)",
        "genre":  "indie",
        "genreLabel":  "어쿠스틱 포크",
        "lyric":  "수고했어요, 오늘 하루도. 별일 없이 살아낸 보통의 날들이 참 고마워요.",
        "releaseYear":  "2007",
        "album":  "국경의 밤",
        "icon":  "🌱",
        "moods":  [
                      "peaceful",
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "dawn",
                      "morning",
                      "night"
                  ],
        "bandmanComment":  "나일론 통기타를 엄지로 퉁기는 부드러운 소리와 잔잔한 첼로의 지속음, 시인의 목소리가 마음의 파도를 잠재웁니다.",
        "whyRecommend":  "지치고 메마른 영혼에 무공해 쉼터가 필요할 때 아무런 판단 없이 등을 토닥여줍니다.",
        "songHistory":  "제주도 농부 뮤지션 루시드폴이 평범하게 흘러가는 하루의 숭고함을 노래한 명곡입니다.",
        "artistDesc":  "‘가요계의 음유시인’으로 불리며 어쿠스틱 악기의 온기로 쉼표를 찍어주는 아티스트입니다."
    },
    {
        "id":  "yerin-baek-square",
        "title":  "Square (2017)",
        "artist":  "백예린 (Yerin Baek)",
        "genre":  "indie",
        "genreLabel":  "시티팝 / 인디 팝",
        "lyric":  "All the colors and personalities, you are the only one that makes me truly smile.",
        "releaseYear":  "2019",
        "album":  "Every letter I sent you.",
        "icon":  "🍃",
        "moods":  [
                      "happy",
                      "flutter",
                      "peaceful"
                  ],
        "times":  [
                      "afternoon",
                      "evening"
                  ],
        "bandmanComment":  "찰랑거리는 텔레캐스터 클린 기타와 경쾌한 셔플 드럼 그루브, 청량하고 세련된 보컬이 페스티벌의 초록빛 바람을 부릅니다.",
        "whyRecommend":  "기분 좋은 바람이 불어오는 시간, 마음을 가볍게 날려 보내고 싶을 때 청량한 해방감을 선물합니다.",
        "songHistory":  "한국 가요 역사상 영문 가사 곡 최초로 음원 차트 1위를 차지한 기념비적인 곡입니다.",
        "artistDesc":  "솔로와 밴드를 넘나들며 폭넓은 음악 스펙트럼을 보여주는 아티스트입니다."
    },
    {
        "id":  "kiha-faces-moon-rises",
        "title":  "달이 차오른다, 가자",
        "artist":  "장기하와 얼굴들",
        "genre":  "indie",
        "genreLabel":  "사이키델릭 포크 록",
        "lyric":  "달이 차오른다, 가자. 달이 차오른다, 가자.",
        "releaseYear":  "2008",
        "album":  "별일 없이 산다",
        "icon":  "🌕",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "한국적인 말맛을 살린 독창적인 읊조림과 최면적인 베이스 루프, 70년대 산울림을 계승한 싸구려틱하면서도 완벽한 록 편곡입니다.",
        "whyRecommend":  "기묘한 긴장감과 독특한 유머 감각으로 무장하고 밤의 모험을 떠나고 싶을 때 발을 구르게 만듭니다.",
        "songHistory":  "한국 인디 록 역사상 가장 충격적인 데뷔 싱글로 전 국민적인 신드롬을 일으켰습니다.",
        "artistDesc":  "한국어의 운율과 록 음악의 결합을 가장 독창적으로 실험해 온 밴드입니다."
    },
    {
        "id":  "se-so-neon-nan-chun",
        "title":  "난춘 (NAN CHUN)",
        "artist":  "새소년 (SE SO NEON)",
        "genre":  "indie",
        "genreLabel":  "싸이키델릭 모던 록",
        "lyric":  "그대여 오늘 밤은 나를 떠나지 마오, 이 밤이 지나가면 우린 꽃을 피우리.",
        "releaseYear":  "2019",
        "album":  "난춘 (NAN CHUN)",
        "icon":  "🌺",
        "moods":  [
                      "peaceful",
                      "sad",
                      "flutter"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "황소윤의 허스키한 중저음 보컬과 리버브 짙은 빈티지 기타 톤, 나른하게 감싸는 베이스가 따스한 봄밤의 안식을 줍니다.",
        "whyRecommend":  "힘든 하루의 끝, 오늘 밤만큼은 아무 걱정 없이 곁에서 온기를 나누고 싶을 때 깊은 위로가 됩니다.",
        "songHistory":  "‘어지러운 봄’이라는 뜻을 담아 방황하는 모든 이들을 위해 만든 새소년의 대표 힐링 트랙입니다.",
        "artistDesc":  "해외 유수의 매체들로부터 극찬을 받으며 글로벌 무대로 뻗어나가는 대한민국 대표 인디 밴드입니다."
    },
    {
        "id":  "car-the-garden-tree",
        "title":  "나무",
        "artist":  "카더가든 (Car, the garden)",
        "genre":  "indie",
        "genreLabel":  "인디 록 / 빈티지 소울",
        "lyric":  "그대 춤을 추는 나무 같아요, 그 안에 내가 살고 있어요.",
        "releaseYear":  "2019",
        "album":  "C",
        "icon":  "🌳",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "sad"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "따스한 햇살 같은 통기타 아르페지오와 카더가든의 묵직하면서도 호소력 짙은 보이스가 울창한 숲에 안긴 기분을 줍니다.",
        "whyRecommend":  "사랑하는 사람의 든든한 품에서 아무런 걱정 없이 편안하게 쉬어가고 싶을 때 듣기 좋은 곡입니다.",
        "songHistory":  "SBS \u003c더 팬\u003e 우승 이후 발표한 명곡으로 대중과 평단의 뜨거운 호평을 받았습니다.",
        "artistDesc":  "허스키한 음색과 빈티지한 록 사운드로 사람의 마음을 쥐락펴락하는 싱어송라이터입니다."
    },
    {
        "id":  "kim-kwang-seok-around-thirty",
        "title":  "서른 즈음에",
        "artist":  "김광석",
        "genre":  "indie",
        "genreLabel":  "포크 발라드 / 한국 클래식 포크",
        "lyric":  "점점 더 멀어져 간다, 머물러 있는 청춘인 줄 알았는데.",
        "releaseYear":  "1994",
        "album":  "김광석 네번째",
        "icon":  "🍂",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "어쿠스틱 통기타와 하모니카, 그리고 김광석의 가슴을 저미는 진솔한 목소리가 흘러가는 시간의 무상함을 노래합니다.",
        "whyRecommend":  "나이를 먹어가며 청춘의 뒷모습을 바라보게 될 때 담담하게 마주하는 인생의 명작입니다.",
        "songHistory":  "음악평론가들이 꼽은 ‘한국 대중음악 역사상 가장 아름다운 노랫말 1위’에 빛나는 불후의 명곡입니다.",
        "artistDesc":  "통기타 하나로 서민들의 삶과 청춘의 고뇌를 노래했던 영원한 가객입니다."
    },
    {
        "id":  "oohyo-youth",
        "title":  "청춘 (Youth) (DAY)",
        "artist":  "우효 (OOHYO)",
        "genre":  "indie",
        "genreLabel":  "신스팝 / 인디 팝",
        "lyric":  "어제는 날 사랑한다더니, 오늘은 왜 또 차가워진 거야.",
        "releaseYear":  "2016",
        "album":  "청춘",
        "icon":  "🚲",
        "moods":  [
                      "happy",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "상큼한 빈티지 신시사이저 루프와 우효 특유의 덤덤하면서도 감각적인 보컬이 청춘의 불안과 반짝임을 묘사합니다.",
        "whyRecommend":  "자전거를 타고 바람을 맞으며 싱그럽지만 어딘가 아련한 청춘의 하루를 달리고 싶을 때 제격입니다.",
        "songHistory":  "방탄소년단 RM 등 수많은 뮤지션들이 애정하는 트랙으로 꼽으며 인디 씬의 스테디셀러가 되었습니다.",
        "artistDesc":  "담백한 멜로디와 독창적인 시선으로 현대 청춘의 단면을 노래하는 싱어송라이터입니다."
    },
    {
        "id":  "thornapple-faded-astragalus",
        "title":  "시들은 자운영",
        "artist":  "쏜애플 (THORNAPPLE)",
        "genre":  "indie",
        "genreLabel":  "사이키델릭 아트 록",
        "lyric":  "이젠 아무것도 남아있지 않은 곳에서, 우리는 다시 숨을 쉴 수 있을까.",
        "releaseYear":  "2016",
        "album":  "서울병",
        "icon":  "🥀",
        "moods":  [
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "윤성현의 유려하면서도 비극적인 보컬과 공간계를 극대화한 기타 리버브, 묵직한 베이스 톤이 서늘한 환상성을 띱니다.",
        "whyRecommend":  "깊은 우울과 환상 속으로 조용히 침잠하며 문학적인 카타르시스를 맛보고 싶을 때 추천합니다.",
        "songHistory":  "한국 모던록 씬에서 가장 독보적인 세계관을 가진 쏜애플의 서정성을 대표하는 곡입니다.",
        "artistDesc":  "치밀한 연주와 시적인 가사로 매니아들의 열광적인 지지를 받는 밴드입니다."
    },
    {
        "id":  "okdal-good-job-today",
        "title":  "수고했어, 오늘도",
        "artist":  "옥상달빛 (OKDAL)",
        "genre":  "indie",
        "genreLabel":  "어쿠스틱 팝 / 힐링 포크",
        "lyric":  "수고했어 오늘도, 아무도 너의 슬픔에 관심 없대도 난 늘 응원해.",
        "releaseYear":  "2011",
        "album":  "28",
        "icon":  "🌙",
        "moods":  [
                      "peaceful",
                      "sad",
                      "happy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "소박한 멜로디언과 실로폰, 통기타 반주 위에 얹힌 두 사람의 따뜻한 화음이 지친 퇴근길 발걸음을 어루만집니다.",
        "whyRecommend":  "하루 종일 고생하고 지쳐 쓰러질 것 같은 밤, 가장 다정하고 따뜻한 위로를 전해줍니다.",
        "songHistory":  "대한민국 현대인들의 공식 퇴근송이자 힐링의 아이콘으로 자리 잡은 국민 응원가입니다.",
        "artistDesc":  "투명하고 진솔한 노랫말로 일상의 피로를 씻어주는 여성 포크 듀오입니다."
    },
    {
        "id":  "kwak-jin-eon-brag",
        "title":  "자랑",
        "artist":  "곽진언",
        "genre":  "indie",
        "genreLabel":  "어쿠스틱 포크 / 저음 발라드",
        "lyric":  "마음이 마음을 알아채는 일, 그것만큼 기쁜 일이 있을까. 나를 사랑해줘서 고마워.",
        "releaseYear":  "2016",
        "album":  "나랑 갈래",
        "icon":  "🪵",
        "moods":  [
                      "peaceful",
                      "sad",
                      "flutter"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "동굴처럼 깊은 곽진언의 초저음 바리톤 보컬과 차분한 어쿠스틱 기타 핑거링이 온돌방 같은 온기를 줍니다.",
        "whyRecommend":  "화려한 수식어 없이 진심 하나만으로 마음을 녹이고 싶을 때 듣는 최고의 어쿠스틱 트랙입니다.",
        "songHistory":  "슈퍼스타K 결승전에서 자작곡으로 역대 최고점을 기록하며 우승을 차지했던 감동의 명곡입니다.",
        "artistDesc":  "대한민국에서 가장 깊고 따뜻한 저음으로 사람의 마음을 어루만지는 싱어송라이터입니다."
    },
    {
        "id":  "hello-gayoung-summer-night",
        "title":  "언젠가 설명할 수 있는 여름밤",
        "artist":  "안녕하신가영",
        "genre":  "indie",
        "genreLabel":  "인디 팝 / 감성 발라드",
        "lyric":  "언젠가 설명할 수 있는 여름밤이 오면, 그때 우리 다시 이야기해요.",
        "releaseYear":  "2015",
        "album":  "순간의 순간",
        "icon":  "🌌",
        "moods":  [
                      "peaceful",
                      "flutter",
                      "melancholy"
                  ],
        "times":  [
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "베이스 주자 출신답게 탄탄하고 둥글게 감싸는 베이스라인과 맑은 건반 소리가 여름밤의 풀벌레 소리처럼 스며듭니다.",
        "whyRecommend":  "미처 다 말하지 못한 아쉬움을 가슴에 품고 여름밤 산책을 나설 때 마음을 어루만져 줍니다.",
        "songHistory":  "좋아서하는밴드 출신의 백가영이 발표한 대표 솔로 명곡으로 인디 팬들의 오랜 애청곡입니다.",
        "artistDesc":  "일상의 사소한 순간들을 가장 섬세한 언어로 포착해내는 감성 뮤지션입니다."
    },
    {
        "id":  "cheeze-madeleine-love",
        "title":  "Madeleine Love",
        "artist":  "치즈 (CHEEZE)",
        "genre":  "indie",
        "genreLabel":  "어반 어쿠스틱 팝",
        "lyric":  "오늘 날씨 참 맑다, 너와 걷기 딱 좋은 날이야.",
        "releaseYear":  "2015",
        "album":  "Plain",
        "icon":  "🥐",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "상큼한 어쿠스틱 기타와 톡톡 튀는 핑거스냅, 달총의 맑고 감미로운 음색이 햇살 가득한 봄날의 설렘을 선사합니다.",
        "whyRecommend":  "화창한 날 연인과 손을 잡고 산책하거나 피크닉을 떠날 때 가장 달콤한 사운드트랙이 되어줍니다.",
        "songHistory":  "인디 팝 씬을 대표하는 메가 히트곡으로 수많은 봄/여름 플레이리스트 1순위 트랙입니다.",
        "artistDesc":  "치즈처럼 부드럽고 달콤한 음색으로 사랑의 기쁨을 노래하는 싱어송라이터입니다."
    },
    {
        "id":  "nell-time-walking-on-memory",
        "title":  "기억을 걷는 시간",
        "artist":  "넬 (NELL)",
        "genre":  "indie",
        "genreLabel":  "모던 록 발라드",
        "lyric":  "아직도 너의 손을 잡은 것처럼 따뜻해, 이렇게 길을 걷다 보면.",
        "releaseYear":  "2008",
        "album":  "Separation Anxiety",
        "icon":  "⏳",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "도입부 김종완의 귓가에 속삭이는 나직한 보컬과 절제된 록 드럼, 몽환적인 딜레이 기타가 지나간 기억 속을 걷게 합니다.",
        "whyRecommend":  "잊혀지지 않는 소중한 기억을 가만히 꺼내보며 그리움에 잠기고 싶을 때 듣는 불후의 명작입니다.",
        "songHistory":  "인디 록 밴드로서 지상파 음악 방송 1위를 차지하며 한국 모던록의 역사를 새로 쓴 명곡입니다.",
        "artistDesc":  "특유의 서정적인 감성과 완성도 높은 밴드 사운드로 20년 넘게 정상을 지키고 있는 록 밴드입니다."
    },
    {
        "id":  "broccoli-no-encore",
        "title":  "앵콜요청금지",
        "artist":  "브로콜리너마저",
        "genre":  "indie",
        "genreLabel":  "로파이 인디 팝",
        "lyric":  "안돼요 끝나버린 노래를 다시 부를 순 없어요, 모두가 춤추던 밤은 끝났어요.",
        "releaseYear":  "2007",
        "album":  "앵콜요청금지",
        "icon":  "📻",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "투박한 카시오 건반 소리와 덤덤한 계피의 보컬이 이미 끝나버린 관계에 대한 단념을 담담하게 연주합니다.",
        "whyRecommend":  "돌이킬 수 없는 지나간 인연을 억지로 붙잡지 않고 담담하게 작별하고 싶을 때 깊은 여운을 줍니다.",
        "songHistory":  "데모 음반만으로 홍대 인디 씬을 발칵 뒤집어놓으며 한국 인디 팝의 르네상스를 연 기념비적 곡입니다.",
        "artistDesc":  "소박하고 솔직한 감성으로 일상의 청춘을 노래하는 한국 대표 인디 밴드입니다."
    },
    {
        "id":  "yudabin-band-isnt-it-good",
        "title":  "좋지 아니한가",
        "artist":  "유다빈밴드 (YUDABINBAND)",
        "genre":  "indie",
        "genreLabel":  "청춘 팝 록",
        "lyric":  "넘어지면 어때 다시 일어나면 되지, 바람 부는 이 길도 좋지 아니한가!",
        "releaseYear":  "2023",
        "album":  "좋지 아니한가",
        "icon":  "☀️",
        "moods":  [
                      "happy",
                      "flutter"
                  ],
        "times":  [
                      "morning",
                      "late-morning",
                      "afternoon"
                  ],
        "bandmanComment":  "질주하는 밴드 드럼 킥과 유다빈의 시원하게 터져 나오는 청량한 가창력이 넘어져도 다시 달릴 수 있는 에너지를 줍니다.",
        "whyRecommend":  "답답한 일상에 기운이 빠질 때 파이팅 넘치는 밴드 에너지로 활력을 100% 충전할 수 있습니다.",
        "songHistory":  "페스티벌 씬의 슈퍼 루키로 급부상하며 수많은 야외 페스티벌 관객들의 떼창을 이끌어낸 히트곡입니다.",
        "artistDesc":  "벅차오르는 청춘의 에너지와 탄탄한 연주력으로 무장한 차세대 대표 록 밴드입니다."
    },
    {
        "id":  "shin-in-ryu-stay-with-me",
        "title":  "날 남아있게 해줘",
        "artist":  "신인류 (Shin In Ryu)",
        "genre":  "indie",
        "genreLabel":  "감성 어쿠스틱 록",
        "lyric":  "너의 기억 속에 내가 아름다운 모습으로 남아있기를.",
        "releaseYear":  "2019",
        "album":  "우리에게 여름은",
        "icon":  "🌊",
        "moods":  [
                      "sad",
                      "peaceful",
                      "melancholy"
                  ],
        "times":  [
                      "evening",
                      "night",
                      "dawn"
                  ],
        "bandmanComment":  "서정적인 피아노와 묵직한 베이스, 호소력 짙은 보컬이 여름날의 끝자락처럼 아련한 감동을 선사합니다.",
        "whyRecommend":  "누군가의 마음에 따뜻한 기억으로 남고 싶은 애틋한 밤에 듣기 더없이 아름다운 곡입니다.",
        "songHistory":  "인디 씬의 숨은 보석으로 불리며 수많은 음악 애호가들의 밤 플레이리스트를 채운 명곡입니다.",
        "artistDesc":  "서정적인 멜로디와 서사적인 밴드 편곡으로 청춘의 아픔을 보듬는 인디 밴드입니다."
    },
    {
        "id":  "wave-to-earth-seasons",
        "title":  "seasons",
        "artist":  "wave to earth (웨이브 투 어스)",
        "genre":  "indie",
        "genreLabel":  "Lo-Fi 인디 팝 / 재즈 록",
        "lyric":  "I can\u0027t be your love, \u0027cause I\u0027m not that kind of person, but I will pray for your seasons.",
        "releaseYear":  "2020",
        "album":  "summer flows 0.02",
        "icon":  "🍂",
        "moods":  [
                      "peaceful",
                      "sad",
                      "melancholy"
                  ],
        "times":  [
                      "afternoon",
                      "evening",
                      "night"
                  ],
        "bandmanComment":  "빈티지 재즈 드럼 톤과 둥글둥글한 베이스, 김다니엘의 나른하고 따뜻한 보컬이 가을바람처럼 스며듭니다.",
        "whyRecommend":  "계절이 바뀌는 길목에서 혼자만의 차분하고 세련된 여유를 즐기고 싶을 때 최고의 선곡입니다.",
        "songHistory":  "스포티파이 글로벌 바이럴 차트를 점령하며 미국 투어 전석 매진을 기록한 K-인디의 글로벌 스타입니다.",
        "artistDesc":  "재즈와 인디 팝의 경계를 허문 감각적인 로파이 사운드로 전 세계를 매료시킨 3인조 밴드입니다."
    },
    {
        "id":  "lee-sora-wind-blows",
        "title":  "바람이 분다",
        "artist":  "이소라",
        "genre":  "indie",
        "genreLabel":  "챔버 팝 / 한국 대중음악 클래식",
        "lyric":  "바람이 분다 서러운 마음에 텅 빈 풍경이 찾아온다, 내게는 소중했던 잠 못 이루던 밤들이 너에겐 이젠 아무것도 아닌 걸까.",
        "releaseYear":  "2004",
        "album":  "눈썹달",
        "icon":  "🍃",
        "moods":  [
                      "sad",
                      "melancholy",
                      "peaceful"
                  ],
        "times":  [
                      "night",
                      "dawn",
                      "evening"
                  ],
        "bandmanComment":  "정재일의 미니멀하고 서정적인 피아노 연주와 이소라의 숨소리 하나까지 폐부를 찌르는 시대를 초월한 보컬입니다.",
        "whyRecommend":  "인생의 큰 상실감이나 공허한 슬픔을 마주했을 때 음악이 줄 수 있는 가장 깊고 숭고한 정화를 경험할 수 있습니다.",
        "songHistory":  "한국 대중음악 100대 명반 상위권에 선정되며 모든 음악인들이 찬사를 아끼지 않는 한국 대중음악의 정점입니다.",
        "artistDesc":  "영혼을 깎아 만든 듯한 목소리로 인간의 슬픔을 가장 아름답게 노래하는 최고의 예술가입니다."
    }
];

    /* =========================================================
       2. APPLICATION STATE MANAGEMENT
       ========================================================= */

    const state = {
      currentStep: 0, // 0: intro, 1: time, 2: mood, 3: genre, 4: loading, 5: result
      timeIndex: 2,   // 0~5 (Default: late-morning 2)
      selectedMood: null,
      selectedGenre: null,
      currentRecommendedSong: null
    };

    /* =========================================================
       3. DOM ELEMENTS
       ========================================================= */

    const screens = {
      intro: document.getElementById('screenIntro'),
      time: document.getElementById('screenTime'),
      mood: document.getElementById('screenMood'),
      genre: document.getElementById('screenGenre'),
      loading: document.getElementById('screenLoading'),
      result: document.getElementById('screenResult')
    };

    const timeSlider = document.getElementById('timeSlider');
    const timeWeatherIcon = document.getElementById('timeWeatherIcon');
    const timeNameLabel = document.getElementById('timeNameLabel');
    const timeDescLabel = document.getElementById('timeDescLabel');
    const sliderLabels = document.querySelectorAll('.slider-label-item');

    const moodButtons = document.querySelectorAll('.mood-btn');
    const genreButtons = document.querySelectorAll('.genre-btn');
    const genreBanner = document.getElementById('genreBanner');
    const genreBannerTitle = document.getElementById('genreBannerTitle');
    const genreBannerDesc = document.getElementById('genreBannerDesc');

    const toastAlert = document.getElementById('toastAlert');
    const toastMsg = document.getElementById('toastMsg');

    // Result elements
    const resultConditionBadge = document.getElementById('resultConditionBadge');
    const resBandmanComment = document.getElementById('resBandmanComment');
    const resVinylIcon = document.getElementById('resVinylIcon');
    const resGenreTag = document.getElementById('resGenreTag');
    const resSongTitle = document.getElementById('resSongTitle');
    const resArtistName = document.getElementById('resArtistName');
    const resLyric = document.getElementById('resLyric');
    const resWhyRecommend = document.getElementById('resWhyRecommend');
    const resSongHistory = document.getElementById('resSongHistory');
    const resArtistDesc = document.getElementById('resArtistDesc');
    const btnYoutube = document.getElementById('btnYoutube');

    /* =========================================================
       4. NAVIGATION & VALIDATION HELPERS
       ========================================================= */

    function showToast(message) {
      toastMsg.textContent = message;
      toastAlert.classList.add('show');
      setTimeout(() => {
        toastAlert.classList.remove('show');
      }, 2600);
    }

    function switchScreen(screenName) {
      Object.values(screens).forEach(screen => screen.classList.remove('active'));
      if (screens[screenName]) {
        screens[screenName].classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    /* =========================================================
       5. STEP 1: TIME CONTROLS & DYNAMIC BACKGROUND THEME
       ========================================================= */

    function updateTimeTheme(index) {
      state.timeIndex = parseInt(index, 10);
      const conf = TIME_CONFIG[state.timeIndex];

      // Update weather icon with bounce animation
      timeWeatherIcon.textContent = conf.weatherIcon;
      timeWeatherIcon.classList.remove('bounce');
      void timeWeatherIcon.offsetWidth; // trigger reflow
      timeWeatherIcon.classList.add('bounce');

      // Update labels
      timeNameLabel.textContent = conf.name;
      timeDescLabel.textContent = conf.desc;

      // Update slider ticks
      sliderLabels.forEach((label, idx) => {
        if (idx === state.timeIndex) {
          label.classList.add('active');
        } else {
          label.classList.remove('active');
        }
      });

      // Update Body Theme Class
      document.body.className = '';
      document.body.classList.add(conf.themeClass);
    }

    timeSlider.addEventListener('input', (e) => {
      updateTimeTheme(e.target.value);
    });

    sliderLabels.forEach(label => {
      label.addEventListener('click', () => {
        const idx = parseInt(label.getAttribute('data-index'), 10);
        timeSlider.value = idx;
        updateTimeTheme(idx);
      });
    });

    /* =========================================================
       6. STEP 2: MOOD CONTROLS
       ========================================================= */

    moodButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mood = btn.getAttribute('data-mood');
        state.selectedMood = mood;

        moodButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    /* =========================================================
       7. STEP 3: GENRE CONTROLS (Includes NEW J-POP)
       ========================================================= */

    genreButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const genre = btn.getAttribute('data-genre');
        state.selectedGenre = genre;

        genreButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        // Update Dynamic Banner
        const conf = GENRE_CONFIG[genre];
        if (conf) {
          genreBannerTitle.textContent = conf.title;
          genreBannerDesc.textContent = conf.desc;
          genreBanner.style.borderColor = 'var(--slider-fill)';
        }
      });
    });

    /* =========================================================
       8. RECOMMENDATION ENGINE & BANDMAN LOGIC
       ========================================================= */

    function selectRecommendedSong(timeIdx, moodKey, genreKey, excludeId = null) {
      const timeObj = TIME_CONFIG[timeIdx];
      const timeId = timeObj.id;

      let candidatePool = [...SONG_DATABASE];

      if (excludeId) {
        candidatePool = candidatePool.filter(song => song.id !== excludeId);
      }

      // If user selected specific genre (and not 'random')
      if (genreKey && genreKey !== 'random') {
        const genreMatches = candidatePool.filter(s => s.genre === genreKey);
        if (genreMatches.length > 0) {
          candidatePool = genreMatches;
        }
      }

      // Score matching
      const scored = candidatePool.map(song => {
        let score = 0;
        if (song.moods.includes(moodKey)) score += 3;
        if (song.times.includes(timeId)) score += 2;
        if (song.genre === genreKey) score += 2;
        // Add subtle random jitter for variety
        score += Math.random() * 1.5;
        return { song, score };
      });

      scored.sort((a, b) => b.score - a.score);

      // Return the top scored song
      return scored[0] ? scored[0].song : SONG_DATABASE[0];
    }

    function renderResultScreen(song) {
      state.currentRecommendedSong = song;

      const timeConf = TIME_CONFIG[state.timeIndex];
      const moodName = MOOD_NAMES[state.selectedMood] || '마음';
      const genreTitle = state.selectedGenre === 'random' ? '🎲 랜덤 장르' : (GENRE_CONFIG[state.selectedGenre]?.title.split(' ')[0] || song.genreLabel);

      // Condition Badge
      resultConditionBadge.textContent = `${timeConf.weatherIcon} ${timeConf.name.split(' ')[0]} · ${moodName.split(' ')[0]} · ${genreTitle}`;

      // Song Info
      resVinylIcon.textContent = song.icon || '💿';
      resGenreTag.textContent = song.genreLabel || song.genre.toUpperCase();
      resSongTitle.textContent = song.title;
      resArtistName.textContent = `${song.artist} (${song.releaseYear} · ${song.album})`;
      resLyric.textContent = song.lyric;

      // Bandman Commentary
      resBandmanComment.textContent = `"${song.bandmanComment}"`;
      resWhyRecommend.textContent = song.whyRecommend;
      resSongHistory.textContent = song.songHistory;
      resArtistDesc.textContent = song.artistDesc;

      // Youtube Link
      const query = encodeURIComponent(`${song.artist} ${song.title}`);
      btnYoutube.href = `https://www.youtube.com/results?search_query=${query}`;
    }

    function executeRecommendation() {
      // Show loading screen for 1 second for atmospheric anticipation
      switchScreen('loading');

      const loadingPhrases = [
        { title: '진공관 앰프 예열 중...', desc: '밴드맨이 캐비닛 스피커에 잭을 꽂고 볼륨 노브를 맞추고 있습니다.' },
        { title: '기타 스트링 조율 중...', desc: '당신이 지나고 있는 시간대의 주파수와 공명하는 코드를 잡고 있습니다.' },
        { title: '신시사이저 주파수 동기화 중...', desc: '사이버네틱 보컬과 밴드 세션의 황금 밸런스를 맞추고 있습니다.' },
        { title: '턴테이블 바늘 안착 중...', desc: '오늘 당신의 마음에 가장 다정한 위로가 될 사운드트랙을 꺼냅니다.' }
      ];
      const phrase = loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];
      document.getElementById('loadingTextTitle').textContent = phrase.title;
      document.getElementById('loadingTextSub').textContent = phrase.desc;

      setTimeout(() => {
        const song = selectRecommendedSong(state.timeIndex, state.selectedMood, state.selectedGenre);
        renderResultScreen(song);
        switchScreen('result');
      }, 1000);
    }

    /* =========================================================
       9. NAVIGATION EVENT LISTENERS & FLOW
       ========================================================= */

    // Intro -> Step 1 (Time)
    document.getElementById('btnStart').addEventListener('click', () => {
      switchScreen('time');
    });

    // Step 1 (Time) -> Step 2 (Mood)
    document.getElementById('btnTimeBack').addEventListener('click', () => {
      switchScreen('intro');
    });
    document.getElementById('btnTimeNext').addEventListener('click', () => {
      switchScreen('mood');
    });

    // Step 2 (Mood) -> Step 3 (Genre)
    document.getElementById('btnMoodBack').addEventListener('click', () => {
      switchScreen('time');
    });
    document.getElementById('btnMoodNext').addEventListener('click', () => {
      if (!state.selectedMood) {
        showToast('오늘 가장 와닿는 기분을 하나 선택해 주세요! 😊');
        return;
      }
      switchScreen('genre');
    });

    // Step 3 (Genre) -> Result
    document.getElementById('btnGenreBack').addEventListener('click', () => {
      switchScreen('mood');
    });
    document.getElementById('btnShowResult').addEventListener('click', () => {
      if (!state.selectedGenre) {
        showToast('좋아하는 장르(또는 랜덤 장르)를 선택해 주세요! 🎸');
        return;
      }
      executeRecommendation();
    });

    // Result Actions: Re-recommend same conditions
    document.getElementById('btnReRecommend').addEventListener('click', () => {
      const currentId = state.currentRecommendedSong ? state.currentRecommendedSong.id : null;
      const nextSong = selectRecommendedSong(state.timeIndex, state.selectedMood, state.selectedGenre, currentId);
      renderResultScreen(nextSong);
      showToast('같은 분위기의 또 다른 명곡을 조율했습니다! 🎶');
    });

    // Result Actions: Complete Random Surprise
    document.getElementById('btnSurpriseMe').addEventListener('click', () => {
      const currentId = state.currentRecommendedSong ? state.currentRecommendedSong.id : null;
      let pool = SONG_DATABASE.filter(s => s.id !== currentId);
      const randomSong = pool[Math.floor(Math.random() * pool.length)];
      renderResultScreen(randomSong);
      showToast('🎲 밴드맨의 즉흥 영감으로 뽑은 깜짝 명곡입니다!');
    });

    // Result Actions: Reset All
    document.getElementById('btnResetAll').addEventListener('click', () => {
      state.selectedMood = null;
      state.selectedGenre = null;
      state.currentRecommendedSong = null;

      moodButtons.forEach(b => b.classList.remove('selected'));
      genreButtons.forEach(b => b.classList.remove('selected'));

      genreBannerTitle.textContent = '아직 선택되지 않았습니다';
      genreBannerDesc.textContent = '아래에서 마음에 드는 음악 장르 버튼을 눌러주세요.';
      genreBanner.style.borderColor = 'var(--button-border)';

      updateTimeTheme(2);
      timeSlider.value = 2;

      switchScreen('intro');
    });

    // Initialization
    updateTimeTheme(2);