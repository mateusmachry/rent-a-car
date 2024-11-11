<template>
    <div class="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900">
        <DesktopNavbar class="hidden md:flex" />
        <MobileNavbar class="flex md:hidden" />
        <div class="max-w-[90rem] flex flex-col w-full px-8 py-8 gap-8 mx-auto">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-8">
                <div class="flex flex-col gap-6">
                    <div
                        class="flex-1 block relative min-h-80 bg-primary-600 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <img class="w-full h-full rounded-xl object-cover" src="~/assets/home-card-2.png"
                            alt="Card Image">
                        <div class="absolute top-0 start-0 end-0">
                            <div class="p-6 max-w-96 flex flex-col justify-start">
                                <h3 class="text-2xl lg:text-3xl font-semibold text-white">
                                    Sports car with the best design and acceleration
                                </h3>
                                <p class="mt-4 text-white font-normal text-sm lg:text-base">
                                    Safety and comfort while driving a futuristic and elegant sports car
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-6">
                        <div @click="selectedCarIndex = 0"
                            :class="`${selectedCarIndex === 0 ? 'p-2 border-2 border-blue-600' : ''} rounded-xl cursor-pointer`">
                            <div
                                class="block relative h-32 bg-primary-600 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <img class="w-auto h-32 rounded-lg object-cover" src="~/assets/home-card-2.png"
                                    alt="Card Image">
                            </div>
                        </div>
                        <div @click="selectedCarIndex = 1"
                            :class="`${selectedCarIndex === 1 ? 'p-2 border-2 border-blue-600' : ''} rounded-xl cursor-pointer`">
                            <div
                                class="block relative h-32 bg-primary-600 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <img class="w-auto h-32 rounded-lg object-cover" src="~/assets/car-interior-1.png"
                                    alt="Card Image">
                            </div>
                        </div>
                        <div @click="selectedCarIndex = 2"
                            :class="`${selectedCarIndex === 2 ? 'p-2 border-2 border-blue-600' : ''} rounded-xl cursor-pointer`">
                            <div
                                class="block relative h-32 bg-primary-600 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <img class="w-auto h-32 rounded-lg object-cover" src="~/assets/car-interior-2.png"
                                    alt="Card Image">
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col gap-2">
                            <label class="text-black dark:text-white font-bold text-3xl">Nissan GT-R</label>
                            <div class="flex flex-row gap-2">
                                <div class="flex flex-row gap-0.5 items-center">
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1em" />
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1em" />
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1em" />
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1em" />
                                    <UIcon class="text-gray-300" name="material-symbols:star" size="1em" />
                                </div>
                                <span class="font-medium text-sm text-gray-600 dark:text-gray-400">440+ Reviews</span>
                            </div>
                        </div>
                        <UIcon class="text-red-500" name="material-symbols:favorite" size="2em" />
                    </div>
                    <p class="flex-1 mt-8 font-normal text-gray-500 dark:text-gray-500 text-lg xl:text-xl">
                        The GT-R has become the embodiment of Nissan's outstanding performance, inspired by the most
                        unforgiving proving ground, the race track. Every detail, from its aerodynamics to its powerful
                        engine, is crafted to push limits, making it a symbol of speed and precision. Designed to
                        thrill, it transforms every drive into an unforgettable experience.
                    </p>
                    <div class="mt-8 grid grid-cols-2 gap-y-4">
                        <div class="flex flex-row gap-4">
                            <span class="font-normal text-xl text-gray-400 dark:text-gray-600">Car Type</span>
                            <span class="font-semibold text-xl">Sport</span>
                        </div>
                        <div class="flex flex-row gap-4">
                            <span class="font-normal text-xl text-gray-400 dark:text-gray-600">Capacity</span>
                            <span class="font-semibold text-xl">2 People</span>
                        </div>
                        <div class="flex flex-row gap-4">
                            <span class="font-normal text-xl text-gray-400 dark:text-gray-600">Steering</span>
                            <span class="font-semibold text-xl">Manual</span>
                        </div>
                        <div class="flex flex-row gap-4">
                            <span class="font-normal text-xl text-gray-400 dark:text-gray-600">MPG</span>
                            <span class="font-semibold text-xl">20</span>
                        </div>
                    </div>
                    <div class="mt-16">
                        <div class="flex flex-row justify-between gap-6 mt-6">
                            <div class="flex flex-col gap-1">
                                <div class="inline-flex items-center">
                                    <h3 class="text-black dark:text-white text-2xl font-bold">
                                        $80.00/
                                    </h3>
                                    <span class="ml-1 text-base font-bold text-slate-400 dark:text-slate-400">
                                        day
                                    </span>
                                </div>
                                <h6 class="text-slate-400 dark:text-slate-400 text-base font-bold line-through">
                                    $100.00
                                </h6>
                            </div>
                            <button @click="navigateTo('/payment')" type="button"
                                class="py-2.5 px-5 h-[44px] text-nowrap inline-flex items-center gap-x-2 text-base font-semibold rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                Rent now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <div class="flex flex-row gap-3 items-center mb-8">
                    <span class="font-semibold text-xl">Reviews</span>
                    <UBadge size="lg">13</UBadge>
                </div>
                <div class="grid grid-cols-12 gap-x-4">
                    <div class="col-span-2 xl:col-span-1">
                        <img class="rounded-full w-14 h-14" src="https://i.pravatar.cc/150?img=14" />
                    </div>
                    <div class="col-span-7 xl:col-span-10">
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col gap-2">
                                <span class="font-bold text-xl">Alex Stanton</span>
                                <span class="text-sm font-medium text-slate-400 dark:text-slate-400">CEO at
                                    Bukalapak</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-5">
                                We are very happy with the service from the MORENT App. Morent has a low price and also
                                a large variety of cars with good and comfortable facilities. In addition, the service
                                provided by the officers is also very friendly and very polite.
                            </p>
                        </div>
                    </div>
                    <div class="col-span-3 xl:col-span-1">
                        <div class="flex flex-col gap-2">
                            <span class="text-sm font-medium text-slate-400 dark:text-slate-400 text-end">21 July
                                2022</span>
                            <div class="flex flex-row gap-1 items-center">
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-gray-300" name="material-symbols:star" size="1.5em" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-x-4 mt-6">
                    <div class="col-span-2 xl:col-span-1">
                        <img class="rounded-full w-14 h-14" src="https://i.pravatar.cc/150?img=1" />
                    </div>
                    <div class="col-span-7 xl:col-span-10">
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col gap-2">
                                <span class="font-bold text-xl">Skylar Dias</span>
                                <span class="text-sm font-medium text-slate-400 dark:text-slate-400">CEO at
                                    Amazon</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-5">
                                We are greatly helped by the services of the MORENT Application. Morent has low prices
                                and also a wide variety of cars with good and comfortable facilities. In addition, the
                                service provided by the officers is also very friendly and very polite.
                            </p>
                        </div>
                    </div>
                    <div class="col-span-3 xl:col-span-1">
                        <div class="flex flex-col gap-2">
                            <span class="text-sm font-medium text-slate-400 dark:text-slate-400 text-end">20 July
                                2022</span>
                            <div class="flex flex-row gap-1 items-center">
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                <UIcon class="text-gray-300" name="material-symbols:star" size="1.5em" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-6">
                    <button type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white">
                        Show All
                    </button>
                </div>
            </div>

            <div class="flex flex-col justify-center">
                <div class="flex flex-row justify-between py-2.5 px-5">
                    <label class="text-gray-400 dark:text-gray-400 font-semibold">Recent cars</label>
                    <a :href="`/`" class="text-blue-600 hover:text-blue-700 font-semibold">
                        View All
                    </a>
                </div>
                <div
                    class="flex scrollbar-default sm:scrollbar-hide overflow-x-scroll sm:overflow-x-hidden sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8 pt-5 pb-8">
                    <RentalCarCard v-for="(car, index) in cars.slice(0, 4)" :key="`popular-car-${index}`"
                        :car-model="car.carModel" :car-type="car.carType" :is-favorite="car.isFavorite"
                        :car-image-url="`./${car.carImageUrl}`" :miles-per-galon="car.milesPerGalon"
                        :transmission="car.transmission" :seats="car.seats" :currentPrice="car.currentPrice"
                        :original-price="car.originalPrice" />
                </div>
                <div class="flex flex-row justify-between py-2.5 px-5">
                    <label class="text-gray-400 dark:text-gray-400 font-semibold">Recommended cars</label>
                    <a :href="`/`" class="text-blue-600 hover:text-blue-700 font-semibold">
                        View All
                    </a>
                </div>
                <div
                    class="flex scrollbar-default sm:scrollbar-hide overflow-x-scroll sm:overflow-x-hidden sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8 pt-5 pb-8">
                    <RentalCarCard v-for="(car, index) in cars.slice(4, 8)" :key="`recommended-car-${index}`"
                        :car-model="car.carModel" :car-type="car.carType" :is-favorite="car.isFavorite"
                        :car-image-url="`./${car.carImageUrl}`" :miles-per-galon="car.milesPerGalon"
                        :transmission="car.transmission" :seats="car.seats" :currentPrice="car.currentPrice"
                        :original-price="car.originalPrice" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

const selectedCarIndex = ref<number>(0);

</script>