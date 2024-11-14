import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './Slider.css'

function Slider() {
    return (
        <>
        
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="testimonial-slider">
                
                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                    <blockquote className="mb-5">
                                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                            odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate velit imperdiet dolor tempor tristique. Pellentesque
                                            habitant morbi tristique senectus et netus et malesuada fames ac
                                            turpis egestas. Integer convallis volutpat dui quis
                                            scelerisque.”</p>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-pic">
                                            <img src="images/person-1.jpg" alt="Harsh Shah" className="img-fluid" />
                                        </div>
                                        <h3 className="font-weight-bold">Harsh Shah</h3>
                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                {/* END item */}
                <SwiperSlide className="testimonial-slider">

                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                    <blockquote className="mb-5">
                                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                            odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate velit imperdiet dolor tempor tristique. Pellentesque
                                            habitant morbi tristique senectus et netus et malesuada fames ac
                                            turpis egestas. Integer convallis volutpat dui quis
                                            scelerisque.”</p>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-pic">
                                            <img src="images/person-1.jpg" alt="Harsh Shah" className="img-fluid" />
                                        </div>
                                        <h3 className="font-weight-bold">Harsh Shah</h3>
                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                {/* END item */}
                <SwiperSlide className="testimonial-slider">

                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                    <blockquote className="mb-5">
                                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                            odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                            vulputate velit imperdiet dolor tempor tristique. Pellentesque
                                            habitant morbi tristique senectus et netus et malesuada fames ac
                                            turpis egestas. Integer convallis volutpat dui quis
                                            scelerisque.”</p>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-pic">
                                            <img src="images/person-1.jpg" alt="Harsh Shah" className="img-fluid" />
                                        </div>
                                        <h3 className="font-weight-bold">Harsh Shah</h3>
                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default Slider
