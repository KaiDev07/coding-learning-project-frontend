import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
    updateParagraph,
    updateTasks,
    setError,
} from '../features/user/userSlice'
import topics from '../assets/topics'
import LearningPageSlider from '../components/LearningPageSlider'

import headerImg from '../assets/images/learning-page-header-img.svg'
import chatIcon from '../assets/images/chat-icon.svg'
import reportIcon from '../assets/images/report-error-icon.svg'

const LearningPages = () => {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const params = useParams()
    const topic = topics.find((topic) => topic.name === params.name)
    const navigate = useNavigate()
    useEffect(() => {
        if (!topic) {
            navigate('..', { relative: 'path' })
        }
    }, [topic, navigate])

    const tasksContainerRef = useRef<HTMLDivElement>(null)

    function handleClick() {
        if (!tasksContainerRef.current) {
            return
        } else {
            tasksContainerRef.current.style.display = 'block'
        }
    }

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (user.user === null) {
            dispatch(
                setError(
                    'Параграфты оқуын немесе тапсырманың орындалуын сақтау үшін аккаунтқа кіріңіз.'
                )
            )
            return
        }
        dispatch(
            updateParagraph({
                paragraphNum: Number(topic?.name.replace(/\D/g, '')),
                isRead: e.target.checked,
            })
        )
    }

    const number = Number(topic?.name.replace(/\D/g, ''))
    const handleTaskClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (e.currentTarget.parentElement?.nextElementSibling) {
            e.currentTarget.parentElement.nextElementSibling.classList.toggle(
                'show-task-image'
            )
        }

        const max = topic?.tasks?.length
        if (user.user === null) {
            dispatch(
                setError(
                    'Параграфты оқуын немесе тапсырманың орындалуын сақтау үшін аккаунтқа кіріңіз.'
                )
            )
            return
        }
        let isThereTask = user.user[`par${number}` as keyof typeof user.user]

        if (max === undefined || max === 0) {
            return
        } else if (!isThereTask || (isThereTask && Number(isThereTask) < max)) {
            dispatch(updateTasks({ topicNum: `par${number}` }))
        }
    }

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
                    <div className="main-flex">
                        <div>
                            <label className="checkbox-label">
                                Параграф оқылды
                                <input
                                    type="checkbox"
                                    checked={
                                        user.user &&
                                        user.user.paragraphsread.indexOf(
                                            Number(
                                                topic?.name.replace(/\D/g, '')
                                            )
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                    disabled={user.loading}
                                    onChange={(e) => handleCheckBox(e)}
                                />
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
                            <p>
                                {topic?.tasks?.length
                                    ? `${
                                          user.user
                                              ? user.user[
                                                    `par${number}` as keyof typeof user.user
                                                ]
                                              : 0
                                      } / ${
                                          topic.tasks.length
                                      } тапсырма орындалған`
                                    : 'Бұл тақырыпқа тапсырма жоқ'}
                            </p>
                            {topic?.tasks?.length && (
                                <button onClick={handleClick}>Өту</button>
                            )}
                        </div>
                    </div>
                    {topic?.tasks?.length && (
                        <div
                            className="tasks-container"
                            ref={tasksContainerRef}
                        >
                            {topic.tasks.map((task, index) => (
                                <div className="task-container" key={index}>
                                    <p>{task.taskText}</p>
                                    <div className="btn-conteiner">
                                        <a
                                            className="btn-content"
                                            onClick={
                                                !user.loading
                                                    ? (e) => handleTaskClick(e)
                                                    : undefined
                                            }
                                        >
                                            <span className="btn-title">
                                                Жауабын тексеру
                                            </span>
                                            <span className="icon-arrow">
                                                <svg
                                                    width="66px"
                                                    height="43px"
                                                    viewBox="0 0 66 43"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <g
                                                        id="arrow"
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <path
                                                            id="arrow-icon-one"
                                                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                                            fill="#FFFFFF"
                                                        ></path>
                                                        <path
                                                            id="arrow-icon-two"
                                                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                                            fill="#FFFFFF"
                                                        ></path>
                                                        <path
                                                            id="arrow-icon-three"
                                                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                                            fill="#FFFFFF"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <img src={task.image} alt="task" />
                                </div>
                            ))}
                        </div>
                    )}
                    <hr />
                    <h2 className="slider-h2">Параграфтарға өту</h2>
                    <LearningPageSlider />
                </div>
            </section>
        </main>
    )
}

export default LearningPages
