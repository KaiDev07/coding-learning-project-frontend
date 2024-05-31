import { Link } from 'react-router-dom'

import linkIcon from '../assets/images/link-icon.svg'

import topics from '../assets/topics'

const Home = () => {
    let topicsNum: number = 0
    topics.forEach((topic) => {
        if (typeof topic.tasks?.length === 'number') {
            topicsNum += topic.tasks.length
        }
    })

    return (
        <main>
            <section id="welcome">
                <div className="welcome-wrapper">
                    <h1>С++ негіздері</h1>
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
                                <span>0 / {topics.length}</span>
                                <span>
                                    оқылған <br /> тақырыптардың саны
                                </span>
                                <span>0 / {topicsNum}</span>
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
                                <button>Оқылмаған</button>
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
                                <button>Оқылмаған</button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/1 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/2 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/2 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/2 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/1 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/2 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/2 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/0 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
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
                                    <button>Оқылмаған</button>
                                </Link>
                                <button className="large-topic-button">
                                    0/5 орындалған{' '}
                                    <img src={linkIcon} alt="icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
