const Images = {
    image1: new URL('./images/100.png', import.meta.url).href,
    image2: new URL('./images/101.png', import.meta.url).href,
    image3: new URL('./images/102.png', import.meta.url).href,
    image4: new URL('./images/103.png', import.meta.url).href,
    image5: new URL('./images/104.png', import.meta.url).href,
    image6: new URL('./images/105.png', import.meta.url).href,
    image7: new URL('./images/106.png', import.meta.url).href,
    image8: new URL('./images/107.png', import.meta.url).href,
    image9: new URL('./images/108.png', import.meta.url).href,
    image10: new URL('./images/109.png', import.meta.url).href,
    image11: new URL('./images/110.png', import.meta.url).href,
    image12: new URL('./images/111.png', import.meta.url).href,
    image13: new URL('./images/112.png', import.meta.url).href,
    image14: new URL('./images/113.png', import.meta.url).href,
    image15: new URL('./images/114.png', import.meta.url).href,
    image16: new URL('./images/115.png', import.meta.url).href,
    image17: new URL('./images/116.png', import.meta.url).href,
}

type Task = {
    taskText: string
    image: string
}

type Topic = {
    name: string
    topic: string
    videoLink?: string
    text?: string
    tasks?: Task[]
}

const topics: Topic[] = [
    {
        name: 'topic1',
        topic: '1.1	C++ деген не?',
        text: 'C++ (дауысталуы "си плас плас") 1983 жылы Bell Labs зертханасында Бьёрн Страустрап дамытқан бағдарламалау тілі. 2019 жылға қарай әлемдегі таралуы бойынша үшінші бағдарламалау тілі болып келеді. C++ өзінің ұзақ тарихында көптеген өзгерістерден өтіп, бүгінгі күнге өте жылдам, компиляцияланатын, көптеген кітапханаларға ие тілге айналды. C++ жоғарғы және төменгі деңгейдегі программалау тілдерінің қасиеттеріне ие. С++ тілінің ерекшеліктері Көлемінің шағындығы С++ тілінің синтаксистік ережелері басқа тілдерге қарағанда аз,оның компиляторын 256 Кб көлем арқылы-ақ жазып шығуға болады.Мұндағы операциялық әрекеттер,олардың комбинациясы жетерлік,бірақ қордағы түйінді сөздер саны да көп емес, Дэннис Ритчи жасаған алғашқы С++ тілінде тек 27 түйінді сөз болды,кейіннен ANSI C стандартында тағы бірнеше сөз қосылды. Тілдің командалар жиыны Microsoft С/С++ нұсқасында тағы 19 командалар мен түйінді сөздер қосылды,соның нәтижесінде олар 66 болды. Басқа программалау тілдердегі функциялар С++ тілінде жоқ,мысалы,енгізу-шығару операторлары да кездеспейді, оның есесіне кітапханалық әр түрлі функциялар саны жеткілікті. Жылдам істейтіндігі С++ компиляторлары жасаған программа кодтары шағын,әрі жылдам істейді,оның үстіне тілдің аппараттық құралдарға жақындығы ассемблер тіліменен қатар жылдамдықпен жұмыс істеуге мүмкіндік береді. Типтері де күрделі емес Паскальға қарағанда,мәліметтерді типтендіру мұнда төменгі деңгейде ,ол типтерді бір-біріне жеңіл ауыстырады.Мұндай қасиет В тілінен келді.Мысалы,программаның бір жерінде айнымалы символдық болса,ал басқа жерде оны символдың ASCI –коды (одан 32-ні алып) ретінде қарастыруға болады. Құрылымды тіл болғандығы С++ тілінде қазіргі тілдерде болатын барлық басқару операторлары бар. 1971 жылдың өзінде-ақ жаңа ғана жасалған С++ тілі алғашқы құрылымдық программалау тілі ретінде танылған еді.Мұнда;for – цикл операторы, if және if-else конструкциясы, таңдау операторы (switch) және while циклы да бар. Модульдік программалауды сүйемелдеуі С++ тілінде жеке компиляциялау мен біріктіруден құралатын модульдік программалау концепциясы пайданылады.Мұнда тек программаның өзгертілген бөліктерін жеке компиляциялау мүмкіндігі бар. Екілік разрядтағы өңдеуі Жүйелік программалауда екілік разрядтарды өңдеу ісі жиі кездеседі.Әрине, UNIX операциялық системасымен тығыз байланыста пайда болған С++ тілінің екілік сандармен жұмыс істеу мүмкіндіктері өте зор. Нұсқаушы айнымалылар Операциялық жүйе тіліне қойылатын тағы бір талап — ол жады аймақтарын адрестеу мүмкіндігінің болуы. Мұндй мүмкіндік программа орындалуын жылдамдатады. С++ тілінде мұндай істі нұсқаушылар (указатели) атқарады және олармен арифметикалық амалдарды орындауға болады. Құрылымы икемді тіл С++ тіліндегі барлық массивтер — бір өлшемді. Көп өлшемді массивтер осы бір өлшемді массивтерден құрылады. Массивтер мен құрылымдар (жазбалар) бір – бірімен керекті түрде байланысып, мәліметтер базасын құрайды.',
    },
    {
        name: 'topic2',
        topic: '1.2	Кіріспе',
        videoLink:
            'https://www.youtube.com/embed/RrjzudCXH0A?si=VbviITjvBM13XQW-',
        text: 'С++ тілінің синтаксистік ережелері басқа тілдерге қарағанда аз,оның компиляторын 256 Кб көлем арқылы-ақ жазып шығуға болады. Қордағы түйінді сөздер саны да көп емес, Дэннис Ритчи жасаған алғашқы С++ тілінде тек 27 түйінді сөз болды,кейіннен ANSI C стандартында тағы бірнеше сөз қосылды. Microsoft С/С++ нұсқасында тағы 19 командалар мен түйінді сөздер қосылды,соның нәтижесінде олар 66 болды. Басқа программалау тілдердегі функциялар С++ тілінде жоқ,мысалы,енгізу-шығару операторлары да кездеспейді, оның есесіне кітапханалық әр түрлі функциялар саны жеткілікті. С ++ тілінде қазіргі тілдерде болатын барлық басқару операторлары бар. Курстық жұмыстың мазмұны кіріспе, негізгі бөлім, қорытынды, пайдаланған әдебиеттерден тұрады. Негізгі бөлім үш тақырыптан тұрады: С++ тілінің шығу тарихы, С++ тілiнің ерекшеліктері, C ++ тіліндегі класстар. Курстық жұмыстың мақсаты: С ++ тіліндегі класстарды кеңінен ашып, түсінікті етіп көрсету. C++ тілінде бағдарламалаушы берілгендердің бос типтердің енгізу мен класстар арқылы орындалатын операцияларды анықтау мүмкіндіктеріне ие. Класс – бұл бар типтер негізіндегі туынды құрылымы бар (структурированный) тип. Класс компонеттері деректер, функциялар, класстар, санап шығулар, биттік өрістер, достасқан функциялар мен типтер атаулары бола алады.',
    },
    {
        name: 'topic3',
        topic: '2.1	Бірінші қадамдар',
        videoLink:
            'https://www.youtube.com/embed/W72dhsZhY-I?si=x1JNmAPcnzn9jFT7',
        tasks: [
            {
                taskText: '«Сәлем, әлем!» деген тұжырымды басып шығару',
                image: Images.image1,
            },
        ],
    },
    {
        name: 'topic4',
        topic: '2.2	Мәліметтер типі (int, double)',
        videoLink:
            'https://www.youtube.com/embed/V05TCJJCZug?si=u2RLG4hwfL3_lbLK',
        tasks: [
            {
                taskText:
                    'Пайдаланушыдан бүтін санды сұрайтын және оның квадратын басып шығаратын C++ бағдарламасын жазыңыз.',
                image: Images.image2,
            },
            {
                taskText:
                    'Пайдаланушы енгізетін екі санның орташа мәнін шығаратын C++ программа жазыңыз.',
                image: Images.image3,
            },
        ],
    },
    {
        name: 'topic5',
        topic: '2.3	Шарттар',
        videoLink:
            'https://www.youtube.com/embed/1pqxKKJ62uM?si=FUSXSikvhiLbAdCV',
        tasks: [
            {
                taskText:
                    'Пайдаланушы енгізген санның оң, теріс немесе нөл екенін тексеретін C++ бағдарламасын жазыңыз.',
                image: Images.image4,
            },
            {
                taskText:
                    'Қолданушы енгізген санның жұп немесе тақ екенін тексеретін С++ бағдарламасын жазыңыз.',
                image: Images.image5,
            },
        ],
    },
    {
        name: 'topic6',
        topic: '2.4	Тармақтану және циклдер',
        videoLink:
            'https://www.youtube.com/embed/XkwMx-VuryI?si=c2z9yf5XgYnv57p7',
        tasks: [
            {
                taskText:
                    'Алғашқы 10 Фибоначчи санын басып шығаратын C++ бағдарламасын жазыңыз.',
                image: Images.image6,
            },
            {
                taskText:
                    '5 санына көбейту кестесін басып шығаратын С++ бағдарламасын жазыңыз.',
                image: Images.image7,
            },
        ],
    },
    {
        name: 'topic7',
        topic: '2.5	Мәліметтер типі (string, char, bool)',
        videoLink:
            'https://www.youtube.com/embed/TGt1r0l-Wn8?si=v2w2eFtFSjCxm-8F',
        tasks: [
            {
                taskText:
                    'Пайдаланушыдан жолды алып, содан кейін сол жолды кері ретпен басып шығаратын программа жазыңыз.',
                image: Images.image8,
            },
        ],
    },
    {
        name: 'topic8',
        topic: '2.6	Құрама мәліметтер типі',
        tasks: [
            {
                taskText:
                    'Пайдаланушыдан жолды қабылдап, содан кейін сол жолдың ұзындығын (int) басып шығаратын бағдарламаны жазыңыз.',
                image: Images.image9,
            },
            {
                taskText:
                    'Пайдаланушыдан таңбаны (char) қабылдайтын, содан кейін символдың цифр екенін тексеретін программа жазыңыз. Олай болса, бағдарлама «true» (bool), әйтпесе «false» шығаруы керек.',
                image: Images.image10,
            },
        ],
    },
    {
        name: 'topic9',
        topic: '2.7	Функциялар',
        videoLink:
            'https://www.youtube.com/embed/yFywgECMn1k?si=tXDk6CRul09YBgrU',
        text: 'Функциялар С++ программалау тілінде өте маңызды. Олар бағдарламаның кодын қайталанатын және оқымды етуге көмек етеді. Функцияның дефинициясы функцияның аты, қайта түрі және параметрлерін қамтиды.',
        tasks: [
            {
                taskText:
                    'Сізге “int square(int number)” функциясын жазу керек, ол санды квадратқа, яғни 2-ші дәрежеге көтеру керек.',
                image: Images.image11,
            },
            {
                taskText:
                    'Сізге “void greet(string name)” функциясын жазу керек, ол адамға сәлем беру керек.',
                image: Images.image12,
            },
        ],
    },
    {
        name: 'topic10',
        topic: '2.8	Үлгілер',
        videoLink:
            'https://www.youtube.com/embed/podfiRVYjp4?si=yiTNtxrxpBYzKbLH',
    },
    {
        name: 'topic11',
        topic: '2.9	Тарау бойынша тапсырмаларды орындау',
        tasks: [
            {
                taskText:
                    'Сізге “int add(int a, int b)” функциясын жазу керек, ол екі санды қосады.',
                image: Images.image13,
            },
            {
                taskText:
                    'Сізге “double divide(double a, double b”  функциясын жазу керек, ол екі санды бөледі. Егер b нөлге тең болса, 0 қайтару керек.',
                image: Images.image14,
            },
            {
                taskText:
                    'Сізге “bool isEven(int number)” функциясын жазу керек, ол сандың жұп екенін тексереді.',
                image: Images.image15,
            },
            {
                taskText:
                    'Сізге “string reverse(string str)” функциясын жазу керек, ол жолды кері қарай айналдырады.',
                image: Images.image16,
            },
            {
                taskText:
                    'Сізге “void printArray(int arr[], int size” функциясын жазу керек, ол массивтің барлық элементтерін басып шығарады.',
                image: Images.image17,
            },
        ],
    },
]

export default topics
