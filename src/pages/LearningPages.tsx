import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import topics from '../assets/topics'

import headerImg from '../assets/images/learning-page-header-img.svg'
import chatIcon from '../assets/images/chat-icon.svg'
import reportIcon from '../assets/images/report-error-icon.svg'

const LearningPages = () => {
    const params = useParams()
    const topic = topics.find((topic) => topic.name === params.name)
    const navigate = useNavigate()
    useEffect(() => {
        if (!topic) {
            navigate('..', { relative: 'path' })
        }
    }, [topic, navigate])

    return (
        <main>
            <img src={headerImg} alt="intro" id="main-img" />
            <section id="main">
                <div className="main-wrapper">
                    <h1>{topic?.topic}</h1>
                    {topic?.videoLink && (
                        <iframe
                            width="100%"
                            height="450"
                            src={topic.videoLink}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}
                    <p>{topic?.text}</p>
                    {topic?.tasks?.length && (
                        <div className="tasks-container">
                            {topic.tasks.map((task) => (
                                <>
                                    <p>{task.taskText}</p>
                                    <img src={task.image} alt="task" />
                                </>
                            ))}
                        </div>
                    )}
                    <div className="main-flex">
                        <div>
                            <label className="checkbox-label">
                                Параграф оқылды
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <img src={chatIcon} alt="chat" />
                            <span>Чатта талқылау</span>
                        </div>
                        <div>
                            <img src={reportIcon} alt="report" />
                            <span>Қателік туралы хабарлау</span>
                        </div>
                    </div>
                    <div className="tasks">
                        <div className="tasks-flex">
                            <h2>Тапсырмалар</h2>
                            <p>0 / 2 тапсырма орындалған</p>
                            <button>Өту</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LearningPages
