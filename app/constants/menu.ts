export type MenuCategory =
  | "ALL"
  | "1L_LARGE_CAPACITY"
  | "COFFEE"
  | "COLD_BREW"
  | "LATTE"
  | "FRESH_FRUIT_JUICE"
  | "ADE"
  | "AROMATIC_TEA"
  | "SMOOTHIE"
  | "TTEOKBOKKI"
  | "SNACKS"
  | "PORRIDGE"
  | "FRIED_RICE"
  | "SNOWFLAKE_BINGSU"
  | "DESSERT";

const MENU_CATEGORY = [
  { name: "전체 메뉴", category: "ALL" },
  { name: "1L 대용량", category: "1L_LARGE_CAPACITY" },
  { name: "커피", category: "COFFEE" },
  { name: "콜드브루", category: "COLD_BREW" },
  { name: "라떼", category: "LATTE" },
  { name: "생과일주스", category: "FRESH_FRUIT_JUICE" },
  { name: "에이드", category: "ADE" },
  { name: "향긋티", category: "AROMATIC_TEA" },
  { name: "스무디", category: "SMOOTHIE" },
  { name: "떡볶이", category: "TTEOKBOKKI" },
  { name: "분식", category: "SNACKS" },
  { name: "죽", category: "PORRIDGE" },
  { name: "볶음밥", category: "FRIED_RICE" },
  { name: "눈꽃빙수", category: "SNOWFLAKE_BINGSU" },
  { name: "디저트", category: "DESSERT" },
];

const MENU_ITEMS = [
  {
    name: "1000ml 보틀라떼&에이드",
    src: "/menu/1l-large-capacity/1000ml_보틀라떼&에이드.jpg",
    category: "1L_LARGE_CAPACITY",
  },
  {
    name: "1000ml 보틀커피",
    src: "/menu/1l-large-capacity/1000ml_보틀커피.jpg",
    category: "1L_LARGE_CAPACITY",
  },
  {
    name: "1000ml 아이스티&티",
    src: "/menu/1l-large-capacity/1000ml_아이스티&티.jpg",
    category: "1L_LARGE_CAPACITY",
  },
  {
    name: "1000ml 쥬스&스무디",
    src: "/menu/1l-large-capacity/1000ml_쥬스&스무디.jpg",
    category: "1L_LARGE_CAPACITY",
  },
  {
    name: "레몬에이드",
    src: "/menu/ade/레몬에이드.jpg",
    category: "ADE",
  },
  {
    name: "매실에이드",
    src: "/menu/ade/매실에이드.jpg",
    category: "ADE",
  },
  {
    name: "블루레몬에이드",
    src: "/menu/ade/블루레몬에이드.jpg",
    category: "ADE",
  },
  {
    name: "얼박사",
    src: "/menu/ade/얼박사.jpg",
    category: "ADE",
  },
  {
    name: "자몽에이드",
    src: "/menu/ade/자몽에이드.jpg",
    category: "ADE",
  },
  {
    name: "청포도에이드",
    src: "/menu/ade/청포도에이드.jpg",
    category: "ADE",
  },
  {
    name: "패션후르츠 에이드",
    src: "/menu/ade/패션후르츠_에이드.jpg",
    category: "ADE",
  },
  {
    name: "포카리사이다",
    src: "/menu/ade/포카리사이다.jpg",
    category: "ADE",
  },
  {
    name: "매실 아이스티",
    src: "/menu/aromatic-tea/매실_아이스티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "복분자 아이스티",
    src: "/menu/aromatic-tea/복분자_아이스티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "복숭아 아이스티",
    src: "/menu/aromatic-tea/복숭아_아이스티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "석류 아이스티",
    src: "/menu/aromatic-tea/석류_아이스티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "유자차",
    src: "/menu/aromatic-tea/유자차.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "자스민티",
    src: "/menu/aromatic-tea/자스민티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "캐모마일티",
    src: "/menu/aromatic-tea/캐모마일티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "페퍼민트티",
    src: "/menu/aromatic-tea/페퍼민트티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "한라봉차",
    src: "/menu/aromatic-tea/한라봉차.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "히비스커스티",
    src: "/menu/aromatic-tea/히비스커스티.jpg",
    category: "AROMATIC_TEA",
  },
  {
    name: "금다방커피",
    src: "/menu/coffee/금다방커피.jpg",
    category: "COFFEE",
  },
  {
    name: "꿀아메리카노",
    src: "/menu/coffee/꿀아메리카노.jpg",
    category: "COFFEE",
  },
  {
    name: "바닐라라떼",
    src: "/menu/coffee/바닐라라떼.jpg",
    category: "COFFEE",
  },
  {
    name: "복숭아아메리카노",
    src: "/menu/coffee/복숭아아메리카노.jpg",
    category: "COFFEE",
  },
  {
    name: "아메리카노",
    src: "/menu/coffee/아메리카노.jpg",
    category: "COFFEE",
  },
  {
    name: "얼음컵",
    src: "/menu/coffee/얼음컵.jpg",
    category: "COFFEE",
  },
  {
    name: "연유라떼",
    src: "/menu/coffee/연유라떼.jpg",
    category: "COFFEE",
  },
  {
    name: "카라멜마끼아또",
    src: "/menu/coffee/카라멜마끼아또.jpg",
    category: "COFFEE",
  },
  {
    name: "카페라떼",
    src: "/menu/coffee/카페라떼.jpg",
    category: "COFFEE",
  },
  {
    name: "카페모카",
    src: "/menu/coffee/카페모카.jpg",
    category: "COFFEE",
  },
  {
    name: "헤이즐넛 카페라떼",
    src: "/menu/coffee/헤이즐넛_카페라떼.jpg",
    category: "COFFEE",
  },
  {
    name: "[콜드브루] 아메리카노",
    src: "/menu/cold-brew/[콜드브루]_아메리카노.jpg",
    category: "COLD_BREW",
  },
  {
    name: "[콜드브루] 연유라떼",
    src: "/menu/cold-brew/[콜드브루]_연유라떼.jpg",
    category: "COLD_BREW",
  },
  {
    name: "[콜드브루] 카페라떼",
    src: "/menu/cold-brew/[콜드브루]_카페라떼.jpg",
    category: "COLD_BREW",
  },
  {
    name: "계란빵",
    src: "/menu/dessert/계란빵.jpg",
    category: "DESSERT",
  },
  {
    name: "군고구마",
    src: "/menu/dessert/군고구마.jpg",
    category: "DESSERT",
  },
  {
    name: "금숙씨네 치즈가득 크로크무슈",
    src: "/menu/dessert/금숙씨네_치즈가득_크로크무슈.jpg",
    category: "DESSERT",
  },
  {
    name: "누텔라 바나나 와플",
    src: "/menu/dessert/누텔라_바나나_와플.jpg",
    category: "DESSERT",
  },
  {
    name: "마약옥수수",
    src: "/menu/dessert/마약옥수수.jpg",
    category: "DESSERT",
  },
  {
    name: "먹기좋은 한입과일",
    src: "/menu/dessert/먹기좋은_한입과일.jpg",
    category: "DESSERT",
  },
  {
    name: "생과일 딸기 와플",
    src: "/menu/dessert/생과일_딸기_와플.jpg",
    category: "DESSERT",
  },
  {
    name: "생크림 와플",
    src: "/menu/dessert/생크림_와플.jpg",
    category: "DESSERT",
  },
  {
    name: "생크림 크로아상",
    src: "/menu/dessert/생크림_크로아상.jpg",
    category: "DESSERT",
  },
  {
    name: "수제계란빵",
    src: "/menu/dessert/수제계란빵.jpg",
    category: "DESSERT",
  },
  {
    name: "스테이바 감자",
    src: "/menu/dessert/스테이바_감자.jpg",
    category: "DESSERT",
  },
  {
    name: "식빵3장&생크림별도포장",
    src: "/menu/dessert/식빵3장&생크림별도포장.jpg",
    category: "DESSERT",
  },
  {
    name: "애플 시나몬 와플",
    src: "/menu/dessert/애플_시나몬_와플.jpg",
    category: "DESSERT",
  },
  {
    name: "에그타르트",
    src: "/menu/dessert/에그타르트.jpg",
    category: "DESSERT",
  },
  {
    name: "와플",
    src: "/menu/dessert/와플.jpg",
    category: "DESSERT",
  },
  {
    name: "찐옥수수",
    src: "/menu/dessert/찐옥수수.jpg",
    category: "DESSERT",
  },
  {
    name: "초코 와플",
    src: "/menu/dessert/초코_와플.jpg",
    category: "DESSERT",
  },
  {
    name: "카야버터 토스트",
    src: "/menu/dessert/카야버터_토스트.jpg",
    category: "DESSERT",
  },
  {
    name: "크로플 X 네가지맛",
    src: "/menu/dessert/크로플X네가지맛.jpg",
    category: "DESSERT",
  },
  {
    name: "프렌치토스트",
    src: "/menu/dessert/프렌치토스트.jpg",
    category: "DESSERT",
  },
  {
    name: "한입붕어빵X팥슈",
    src: "/menu/dessert/한입붕어빵X팥슈.jpg",
    category: "DESSERT",
  },
  {
    name: "허니버터브레드",
    src: "/menu/dessert/허니버터브레드.jpg",
    category: "DESSERT",
  },
  {
    name: "귤귤귤쥬스",
    src: "/menu/fresh-fruit-juice/귤귤귤쥬스.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "그린키위쥬스",
    src: "/menu/fresh-fruit-juice/그린키위쥬스.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "딸기 바나나 쉐이크",
    src: "/menu/fresh-fruit-juice/딸기_바나나_쉐이크.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "바나나 밀크쉐이크",
    src: "/menu/fresh-fruit-juice/바나나_밀크쉐이크.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "수박슬러쉬",
    src: "/menu/fresh-fruit-juice/수박슬러쉬.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "수박쥬스",
    src: "/menu/fresh-fruit-juice/수박쥬스.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "오렌지쥬스",
    src: "/menu/fresh-fruit-juice/오렌지쥬스.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "파인애플쥬스",
    src: "/menu/fresh-fruit-juice/파인애플쥬스.jpg",
    category: "FRESH_FRUIT_JUICE",
  },
  {
    name: "김치볶음밥",
    src: "/menu/fried-rice/김치볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "낙지볶음밥",
    src: "/menu/fried-rice/낙지볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "새우 볶음밥",
    src: "/menu/fried-rice/새우_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "소불고기 볶음밥",
    src: "/menu/fried-rice/소불고기_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "신라면 볶음밥",
    src: "/menu/fried-rice/신라면_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "옛날도시락",
    src: "/menu/fried-rice/옛날도시락.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "오징어짬뽕 볶음밥",
    src: "/menu/fried-rice/오징어짬뽕_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "짜장범벅 볶음밥",
    src: "/menu/fried-rice/짜장범벅_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "참깨라면 볶음밥",
    src: "/menu/fried-rice/참깨라면_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "햄야채 볶음밥",
    src: "/menu/fried-rice/햄야채_볶음밥.jpg",
    category: "FRIED_RICE",
  },
  {
    name: "고구마라떼",
    src: "/menu/latte/고구마라떼.jpg",
    category: "LATTE",
  },
  {
    name: "그린티라떼",
    src: "/menu/latte/그린티라떼.jpg",
    category: "LATTE",
  },
  {
    name: "딸기그린티라떼",
    src: "/menu/latte/딸기그린티라떼.jpg",
    category: "LATTE",
  },
  {
    name: "딸기라떼",
    src: "/menu/latte/딸기라떼.jpg",
    category: "LATTE",
  },
  {
    name: "메로나라떼",
    src: "/menu/latte/메로나라떼.jpg",
    category: "LATTE",
  },
  {
    name: "미숫가루라떼",
    src: "/menu/latte/미숫가루라떼.jpg",
    category: "LATTE",
  },
  {
    name: "밀크티라떼",
    src: "/menu/latte/밀크티라떼.jpg",
    category: "LATTE",
  },
  {
    name: "전통식혜",
    src: "/menu/latte/전통식혜.jpg",
    category: "LATTE",
  },
  {
    name: "초코라떼",
    src: "/menu/latte/초코라떼.jpg",
    category: "LATTE",
  },
  {
    name: "삼계죽",
    src: "/menu/porridge/삼계죽.jpg",
    category: "PORRIDGE",
  },
  {
    name: "삼선짬뽕죽",
    src: "/menu/porridge/삼선짬뽕죽.jpg",
    category: "PORRIDGE",
  },
  {
    name: "옹심이 팥죽",
    src: "/menu/porridge/옹심이_팥죽.jpg",
    category: "PORRIDGE",
  },
  {
    name: "참전복죽",
    src: "/menu/porridge/참전복죽.jpg",
    category: "PORRIDGE",
  },
  {
    name: "딸기 요거트스무디",
    src: "/menu/smoothie/딸기_요거트스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "망고 요거트스무디",
    src: "/menu/smoothie/망고_요거트스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "망고스무디",
    src: "/menu/smoothie/망고_스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "미숫가루 쉐이크",
    src: "/menu/smoothie/미숫가루_쉐이크.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "복숭아 요거트스무디",
    src: "/menu/smoothie/복숭아_요거트스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "블루베리 스무디",
    src: "/menu/smoothie/블루베리_스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "블루베리 요거트 스무디",
    src: "/menu/smoothie/블루베리_요거트스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "빨기바나나 스무디",
    src: "/menu/smoothie/빨기바나나_스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "스트로베리 피치 스무디",
    src: "/menu/smoothie/스트로베리_피치_스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "오렌지 자몽 스무디",
    src: "/menu/smoothie/오렌지_자몽_스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "초코초코 쉐이크",
    src: "/menu/smoothie/초코초코_쉐이크.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "플레인 요거트스무디",
    src: "/menu/smoothie/플레인_요거트스무디.jpg",
    category: "SMOOTHIE",
  },
  {
    name: "고구마 튀김",
    src: "/menu/snacks/고구마_튀김.jpg",
    category: "SNACKS",
  },
  {
    name: "금숙씨네 뜨끈한 구운가래떡",
    src: "/menu/snacks/금숙씨네_뜨끈한_구운가래떡.jpg",
    category: "SNACKS",
  },
  {
    name: "떡꼬치",
    src: "/menu/snacks/떡꼬치.jpg",
    category: "SNACKS",
  },
  {
    name: "매운매운 타코야끼",
    src: "/menu/snacks/매운매운_타코야끼.jpg",
    category: "SNACKS",
  },
  {
    name: "매콤매콤 핫도그으",
    src: "/menu/snacks/매콤매콤_핫도그으.jpg",
    category: "SNACKS",
  },
  {
    name: "미니 물냉면",
    src: "/menu/snacks/미니_물냉면.jpg",
    category: "SNACKS",
  },
  {
    name: "미니 비빔냉면",
    src: "/menu/snacks/미니_비빔냉면.jpg",
    category: "SNACKS",
  },
  {
    name: "바삭한 미니 김말이 튀김",
    src: "/menu/snacks/바삭한_미니_김말이_튀김.jpg",
    category: "SNACKS",
  },
  {
    name: "비빔 냉면",
    src: "/menu/snacks/비빔_냉면.jpg",
    category: "SNACKS",
  },
  {
    name: "시즈닝X + 설탕만",
    src: "/menu/snacks/시즈닝X_+_설탕만.jpg",
    category: "SNACKS",
  },
  {
    name: "오리지널 타코야끼",
    src: "/menu/snacks/오리지널_타코야끼.jpg",
    category: "SNACKS",
  },
  {
    name: "오리지널 핫도그으",
    src: "/menu/snacks/오리지널_핫도그으.jpg",
    category: "SNACKS",
  },
  {
    name: "일반 물냉면",
    src: "/menu/snacks/일반_물냉면.jpg",
    category: "SNACKS",
  },
  {
    name: "촉촉한 삶은 반숙계란",
    src: "/menu/snacks/촉촉한_삶은_반숙계란.jpg",
    category: "SNACKS",
  },
  {
    name: "치즈 시즈닝 솔솔",
    src: "/menu/snacks/치즈_시즈닝_솔솔.jpg",
    category: "SNACKS",
  },
  {
    name: "치즈시즈닝 + 꿀",
    src: "/menu/snacks/치즈시즈닝_+_꿀.jpg",
    category: "SNACKS",
  },
  {
    name: "치즈으맛 핫도그으",
    src: "/menu/snacks/치즈으맛_핫도그으.jpg",
    category: "SNACKS",
  },
  {
    name: "치즈치즈 타코야끼",
    src: "/menu/snacks/치즈치즈_타코야끼.jpg",
    category: "SNACKS",
  },
  {
    name: "허니버터 시즈닝 + 꿀",
    src: "/menu/snacks/허니버터_시즈닝_+_꿀.jpg",
    category: "SNACKS",
  },
  {
    name: "허니버터 시즈닝 솔솔",
    src: "/menu/snacks/허니버터_시즈닝_솔솔.jpg",
    category: "SNACKS",
  },
  {
    name: "딸기빙수",
    src: "/menu/snowflake-bingsu/딸기빙수.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "망고빙수",
    src: "/menu/snowflake-bingsu/망고빙수.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "빙수 여러개",
    src: "/menu/snowflake-bingsu/빙수_여러개.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "샤인머스켓빙수",
    src: "/menu/snowflake-bingsu/샤인머스켓빙수.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "초코빙수",
    src: "/menu/snowflake-bingsu/초코빙수.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "파인애플빙수",
    src: "/menu/snowflake-bingsu/파인애플빙수.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "팥빙수",
    src: "/menu/snowflake-bingsu/팥빙수.jpg",
    category: "SNOWFLAKE_BINGSU",
  },
  {
    name: "로제 가래떡볶이",
    src: "/menu/tteokbokki/로제_가래떡볶이.jpg",
    category: "TTEOKBOKKI",
  },
  {
    name: "로제 떡볶이",
    src: "/menu/tteokbokki/로제_떡볶이.jpg",
    category: "TTEOKBOKKI",
  },
  {
    name: "일반 가래떡볶이",
    src: "/menu/tteokbokki/일반_가래떡볶이.jpg",
    category: "TTEOKBOKKI",
  },
  {
    name: "일반 떡볶이",
    src: "/menu/tteokbokki/일반_떡볶이.jpg",
    category: "TTEOKBOKKI",
  },
  {
    name: "짜장 가래떡볶이",
    src: "/menu/tteokbokki/짜장_가래떡볶이.jpg",
    category: "TTEOKBOKKI",
  },
  {
    name: "짜장 떡볶이",
    src: "/menu/tteokbokki/짜장_떡볶이.jpg",
    category: "TTEOKBOKKI",
  },
];

export { MENU_CATEGORY, MENU_ITEMS };
