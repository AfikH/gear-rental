"use client";

import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroCarousel = ({className, slideClassName}) => (
	<Swiper
		className={className}
		slidesPerView={1}
		autoplay={{
			delay: 5000
		}}
		loop={true}
		pagination={{
			clickable: true
		}}
		modules={[Autoplay, Pagination]}
		style={{"--swiper-theme-color": "#FFFFFF"}}
	>
		<SwiperSlide className={slideClassName} data-slide-number="1">
			Slide 1
		</SwiperSlide>
		<SwiperSlide className={slideClassName} data-slide-number="2">
			Slide 2
		</SwiperSlide>
		<SwiperSlide className={slideClassName} data-slide-number="3">
			Slide 3
		</SwiperSlide>
		<SwiperSlide className={slideClassName} data-slide-number="4">
			Slide 4
		</SwiperSlide>
	</Swiper>
);

export default HeroCarousel;