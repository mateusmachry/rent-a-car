<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full space-x-8">
        <div
            class="relative min-h-80 bg-primary-400 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img class="w-full h-full rounded-xl object-cover" src="~/assets/home-card-1.png" alt="Card Image">
            <div class="absolute top-0 start-0 end-0">
                <div class="p-6 max-w-72 flex flex-col justify-start">
                    <h3 class="text-2xl lg:text-3xl font-semibold text-white">
                        The Best Platform for Car Rental
                    </h3>
                    <p class="mt-4 text-white font-normal text-sm lg:text-base">
                        Ease of doing a car rental safely and reliably. Of course at a low price.
                    </p>
                    <button @click="navigateTo('/filter')"
                        class="mt-5 w-fit text-sm lg:text-base text-white font-semibold bg-blue-600 hover:bg-blue-700 py-2.5 px-5 rounded-md">
                        Rent car
                    </button>
                </div>
            </div>
        </div>
        <div
            class="hidden lg:block relative min-h-80 bg-primary-600 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img class="w-full h-full rounded-xl object-cover" src="~/assets/home-card-2.png" alt="Card Image">
            <div class="absolute top-0 start-0 end-0">
                <div class="p-6 max-w-72 flex flex-col justify-start">
                    <h3 class="text-2xl lg:text-3xl font-semibold text-white">
                        Easy way to rent a car at a low price
                    </h3>
                    <p class="mt-4 text-white font-normal text-sm lg:text-base">
                        Providing cheap car rental services and safe and comfortable facilities.
                    </p>
                    <button @click="navigateTo('/filter')"
                        class="mt-5 w-fit text-sm lg:text-base text-white font-semibold bg-blue-400 hover:bg-blue-500 py-2.5 px-5 rounded-md">
                        Rent car
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>