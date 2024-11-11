<template>
    <div class="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900">
        <DesktopNavbar class="hidden md:flex" />
        <MobileNavbar class="flex md:hidden" />
        <div class="flex flex-row w-full flex-1 h-full">
            <aside class="w-[360px] hidden sm:flex flex-col bg-white dark:bg-black px-8 py-8 gap-14">
                <div class="flex flex-col">
                    <label class="text-xs font-semibold text-slate-400 dark:text-slate-400 capitalize">TYPE</label>
                    <div class="flex flex-col gap-8 mt-6">
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="Sport" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(10)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="SUV" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(12)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="MPV" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(16)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="Sedan" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(20)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="Coupe" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(14)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="Hatchback" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(14)</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label class="text-xs font-semibold text-slate-400 dark:text-slate-400 capitalize">CAPACITY</label>
                    <div class="flex flex-col gap-8 mt-6">
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="2 People" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(10)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="4 People" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(14)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="6 People" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(12)</span>
                        </div>
                        <div class="flex flex-row gap-1">
                            <UCheckbox label="8+ People" class="font-semibold" />
                            <span class="text-sm text-slate-400 dark:text-slate-400">(16)</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label class="text-xs font-semibold text-slate-400 dark:text-slate-400 capitalize">PRICE</label>
                    <div class="flex flex-col gap-8 mt-6">
                        <div class="flex flex-col gap-3">
                            <URange :min="0" :max="150" v-model="carPriceRange" />
                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">Max. ${{ carPriceRange
                                }}</span>
                        </div>
                    </div>
                </div>
            </aside>
            <main class="flex-1 flex flex-col px-8 pt-8 pb-16 gap-8">
                <RentalLocationInputs />
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 pt-5 pb-8">
                    <RentalCarCard v-for="(car, index) in cars" :key="`car-${index}`"
                        :car-model="car.carModel" :car-type="car.carType" :is-favorite="car.isFavorite"
                        :car-image-url="`./${car.carImageUrl}`" :miles-per-galon="car.milesPerGalon"
                        :transmission="car.transmission" :seats="car.seats" :currentPrice="car.currentPrice"
                        :original-price="car.originalPrice" />
                </div>
                <div class="flex flex-row justify-end items-center py-2.5 px-5 w-full">
                    <button type="button"
                        class="mx-auto py-2.5 px-5 h-[44px] text-nowrap inline-flex items-center gap-x-2 text-base font-semibold rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Show more cars
                    </button>
                    <label class="text-gray-400 dark:text-gray-400 text-sm font-medium">120 cars available</label>
                </div>
            </main>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

const carPriceRange = ref<number>(100);

</script>