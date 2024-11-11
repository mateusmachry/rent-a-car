<template>
    <div class="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900">
        <DesktopNavbar class="hidden md:flex" />
        <MobileNavbar class="flex md:hidden" />
        <div class="max-w-[90rem] py-8 px-6 md:px-8 xl:px-16 flex flex-col w-full mx-auto gap-8">
            <HomeCards />
            <RentalLocationInputs />
            <div class="flex flex-col justify-center">
                <div class="flex flex-row justify-between py-2.5 px-5">
                    <label class="text-gray-400 dark:text-gray-400 font-semibold">Popular cars</label>
                    <a :href="`/`" class="text-blue-600 hover:text-blue-700 font-semibold">
                        View All
                    </a>
                </div>
                <div class="flex scrollbar-default sm:scrollbar-hide overflow-x-scroll sm:overflow-x-hidden sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8 pt-5 pb-8">
                    <RentalCarCard v-for="(car, index) in cars.slice(0, 4)" :key="`popular-car-${index}`"
                        :car-model="car.carModel" :car-type="car.carType" :is-favorite="car.isFavorite"
                        :car-image-url="`./${car.carImageUrl}`" :miles-per-galon="car.milesPerGalon"
                        :transmission="car.transmission" :seats="car.seats" :currentPrice="car.currentPrice"
                        :original-price="car.originalPrice" />
                </div>
                <div class="flex flex-row justify-between py-2.5 px-5">
                    <label class="text-gray-400 dark:text-gray-400 font-semibold">Recommended cars</label>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8 pt-5 pb-8">
                    <RentalCarCard v-for="(car, index) in cars" :key="`recommended-car-${index}`"
                        :car-model="car.carModel" :car-type="car.carType" :is-favorite="car.isFavorite"
                        :car-image-url="`./${car.carImageUrl}`" :miles-per-galon="car.milesPerGalon"
                        :transmission="car.transmission" :seats="car.seats" :currentPrice="car.currentPrice"
                        :original-price="car.originalPrice" />
                </div>
            </div>
            <div class="flex flex-row justify-end items-center py-2.5 px-5 w-full">
                <button type="button"
                    class="mx-auto py-2.5 px-5 h-[44px] text-nowrap inline-flex items-center gap-x-2 text-base font-semibold rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Show more cars
                </button>
                <label class="text-gray-400 dark:text-gray-400 text-sm font-medium">120 cars available</label>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

import { cars } from '~/utils/cars';

</script>
