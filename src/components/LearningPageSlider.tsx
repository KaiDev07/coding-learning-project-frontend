import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import SliderElement from './SliderElement'

import sliderArrow from '../assets/images/slider-arrow.svg'

export default function LearningPageSlider() {
    const w = window.innerWidth
    return (
        <div className="swiper-slider-container">
            <Swiper
                slidesPerView={w > 768 ? 2 : 1}
                spaceBetween={25}
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide',
                }}
                modules={[Navigation]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderElement
                        heading="С++ деген не?"
                        text="Бұл параграфта біз С++ -пен танысамыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Кіріспе"
                        text="Бұл параграфта біз С++ -тің негізін оқимыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Бірінші қадамдар"
                        text="Бұл параграфта біз бірінші C++ тілінде бағдарлама жасап, оны басып шығаруды және пернетақтадан жолдар мен сандарды оқуды үйренеміз."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Мәліметтер типі"
                        text="Бұл сабақта біз С++ тіліндегі түрлі мәліметтер типтерін үйренетін боламыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Шарттар"
                        text="Бұл параграфта біз if және switch тармақтау операторларымен танысамыз."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Тармақтану және циклдер"
                        text="Бұл параграфта біз циклдерді үйренетін боламыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Құрама мәліметтер типі"
                        text="Бұл параграфта құрама мәліметтер типін оқитын боламыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Сілтеме, нұсқағыш, тұрақты шама"
                        text="С++ тіліндегі қосалқы құралдарды үйренеміз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Функциялар"
                        text="Бұл сабақта біз С++ тіліндегі функциялармен танысатын боламыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Үлгілер"
                        text="Бұл параграфта біз есептер шығарамыз"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderElement
                        heading="Тарау бойынша тапсырмаларды талдау"
                        text="Бұл сабақта біз тарау бойынша бекітетін тапсырмаларды орындаймыз"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="slider-btn button-prev-slide">
                <img src={sliderArrow} alt="prevSlide" />
            </div>
            <div className="slider-btn button-next-slide">
                <img src={sliderArrow} alt="nextSlide" />
            </div>
        </div>
    )
}
