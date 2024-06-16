import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'

import linkIcon from '../assets/images/link-icon.svg'

import topics from '../assets/topics'

import { ReactTyped } from 'react-typed'

const Home = () => {
    const user = useAppSelector((state) => state.user.user)

    let topicsNum: number = 0
    topics.forEach((topic) => {
        if (typeof topic.tasks?.length === 'number') {
            topicsNum += topic.tasks.length
        }
    })

    let sumofdonetasks: number = 0
    if (user !== null) {
        sumofdonetasks =
            Number(user.par3) +
            Number(user.par4) +
            Number(user.par5) +
            Number(user.par6) +
            Number(user.par7) +
            Number(user.par8) +
            Number(user.par9) +
            Number(user.par11)
    }

    return (
        <main>
            <section id="welcome">
                <div className="welcome-wrapper">
                    <h1>
                        <ReactTyped
                            strings={[
                                'С++ негіздері',
                                'С++ тілімен танысу',
                                'Ең күшті бағдарламау тілі 😎',
                            ]}
                            typeSpeed={70}
                            backSpeed={50}
                            loop
                        />
                    </h1>
                    <p>
                        C++ тіліне 40 жылға жуықтады, бірақ ол әлі де өзекті
                        және сұранысқа ие: бүгінде ол барлық жерде қолданылады -
                        ойындар мен жұмыс үстелі бағдарламаларын әзірлеуден
                        бастап смарт үйдің «миына» дейін. Біздің оқулық арқылы
                        сіз негізгі C++ ұғымдарын өз бетіңізше үйрене аласыз.
                        Біздің курс жаңадан бастаушыларға арналған - дегенмен,
                        сіз информатика негіздерімен таныссыз және мектеп
                        деңгейіндегі бағдарламалау тілін - мысалы, Python-ды
                        білесіз деп күтеміз.
                    </p>
                    <div className="info-card">
                        <div className="info-card-wrapper">
                            <h2>Жалпы оқу үлгерімі</h2>
                            <div className="info-card-container">
                                <span>
                                    {user?.paragraphsread.length
                                        ? user.paragraphsread.length
                                        : 0}{' '}
                                    / {topics.length}
                                </span>
                                <span>
                                    оқылған <br /> тақырыптардың саны
                                </span>
                                <span>
                                    {sumofdonetasks} / {topicsNum}
                                </span>
                                <span>
                                    орындалған <br /> тапсырмалардың саны
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="main-container">
                        <h2>1. Кіріспе</h2>
                        <hr />
                        <div className="topic-container">
                            <Link to="/topic1">
                                <div className="topic-container-text">
                                    <span>1.1.</span>
                                    <span>С++ деген не?</span>
                                </div>
                            </Link>
                            <Link to="/topic1">
                                <button>
                                    {user &&
                                    user.paragraphsread.indexOf(1) !== -1
                                        ? 'Оқылған'
                                        : 'Оқылмаған'}
                                </button>
                            </Link>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic2">
                                <div className="topic-container-text">
                                    <span>1.2.</span>
                                    <span>Кіріспе</span>
                                </div>
                            </Link>
                            <Link to="/topic2">
                                <button>
                                    {user &&
                                    user.paragraphsread.indexOf(2) !== -1
                                        ? 'Оқылған'
                                        : 'Оқылмаған'}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="main-container">
                        <h2>2. Негізгі C++ конструкциялары</h2>
                        <hr />
                        <div className="topic-container">
                            <Link to="/topic3">
                                <div className="topic-container-text">
                                    <span>2.1.</span>
                                    <span>Бірінші қадамдар</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic3">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(3) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic3">
                                    <button className="large-topic-button">
                                        {user && user.par3
                                            ? `${user.par3}/1 орындалған`
                                            : '0/1 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic4">
                                <div className="topic-container-text">
                                    <span>2.2.</span>
                                    <span>Мәліметтер типі</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic4">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(4) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic4">
                                    <button className="large-topic-button">
                                        {user && user.par4
                                            ? `${user.par4}/2 орындалған`
                                            : '0/2 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic5">
                                <div className="topic-container-text">
                                    <span>2.3.</span>
                                    <span>Шарттар</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic5">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(5) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic5">
                                    <button className="large-topic-button">
                                        {user && user.par5
                                            ? `${user.par5}/2 орындалған`
                                            : '0/2 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic6">
                                <div className="topic-container-text">
                                    <span>2.4.</span>
                                    <span>Тармақтану және циклдер</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic6">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(6) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic6">
                                    <button className="large-topic-button">
                                        {user && user.par6
                                            ? `${user.par6}/2 орындалған`
                                            : '0/2 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic7">
                                <div className="topic-container-text">
                                    <span>2.5.</span>
                                    <span>Құрама мәліметтер типі</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic7">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(7) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic7">
                                    <button className="large-topic-button">
                                        {user && user.par7
                                            ? `${user.par7}/1 орындалған`
                                            : '0/1 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic8">
                                <div className="topic-container-text">
                                    <span>2.6.</span>
                                    <span>Сілтеме, нұсқағыш, тұрақты шама</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic8">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(8) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic8">
                                    <button className="large-topic-button">
                                        {user && user.par8
                                            ? `${user.par8}/2 орындалған`
                                            : '0/2 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic9">
                                <div className="topic-container-text">
                                    <span>2.7.</span>
                                    <span>Функциялар</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic9">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(9) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic9">
                                    <button className="large-topic-button">
                                        {user && user.par9
                                            ? `${user.par9}/2 орындалған`
                                            : '0/2 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic10">
                                <div className="topic-container-text">
                                    <span>2.8.</span>
                                    <span>Үлгілер</span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic10">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(10) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic10">
                                    <button className="large-topic-button">
                                        Тапсырма жоқ
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="topic-container">
                            <Link to="/topic11">
                                <div className="topic-container-text">
                                    <span>2.9.</span>
                                    <span>
                                        Тарау бойынша тапсырмаларды талдау
                                    </span>
                                </div>
                            </Link>
                            <div className="topic-container-buttons">
                                <Link to="/topic11">
                                    <button>
                                        {user &&
                                        user.paragraphsread.indexOf(11) !== -1
                                            ? 'Оқылған'
                                            : 'Оқылмаған'}
                                    </button>
                                </Link>
                                <Link to="/topic11">
                                    <button className="large-topic-button">
                                        {user && user.par11
                                            ? `${user.par11}/5 орындалған`
                                            : '0/5 орындалған'}{' '}
                                        <img src={linkIcon} alt="icon" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
