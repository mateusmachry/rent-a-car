<template>
    <div class="h-96 flex flex-col px-6 py-6 rounded-lg bg-white dark:bg-black shadow-sm">
        <div class="flex flex-row justify-between items-center w-full">
            <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold">
                    {{ carModel }}
                </h3>
                <h6 class="text-sm text-gray-400 dark:text-gray-400 font-bold">
                    {{ carType }}
                </h6>
            </div>
            <div class="inline-flex self-start">
                <UIcon v-if="isFavorite" class="text-red-500" name="material-symbols:favorite" color="currentColor" size="1.5em" />
                <UIcon v-else class="text-gray-400 dark:text-gray-600" name="material-symbols:favorite-outline" color="currentColor" size="1.5em" />
            </div>
        </div>
        <div class="relative max-h-24 self-center my-auto">
            <img :src="carImageUrl" class="w-full h-24 object-contain" />
            <div class="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-black/30 to-transparent"></div>
        </div>
        <div class="flex flex-row gap-2 w-full">
            <div class="inline-flex gap-1 text-slate-400 dark:text-slate-400 items-center text-xs">
                <UIcon name="mingcute:gas-station-fill" color="currentColor" size="1.5em" />
                <span class="font-medium text-sm text-nowrap">{{ milesPerGalon }}MPG</span>
            </div>
            <div class="inline-flex gap-1 text-slate-400 dark:text-slate-400 items-center text-xs">
                <UIcon name="tabler:steering-wheel" color="currentColor" size="1.5em" />
                <span class="font-medium text-sm text-nowrap">{{ transmission }}</span>
            </div>
            <div class="inline-flex gap-1 text-slate-400 dark:text-slate-400 items-center text-xs">
                <UIcon name="mage:users-fill" color="currentColor" size="1.5em" />
                <span class="font-medium text-sm text-nowrap">{{ seats }} people</span>
            </div>
        </div>
        <div class="flex flex-row justify-between gap-6 mt-6">
            <div class="flex flex-col gap-1">
                <div class="inline-flex items-center">
                    <h3 class="text-black dark:text-white text-xl font-bold">
                        ${{currentPrice}}/
                    </h3>
                    <span class="ml-1 text-sm font-bold text-slate-400 dark:text-slate-400">
                        day
                    </span>
                </div>
                <h6 v-if="originalPrice" class="text-slate-400 dark:text-slate-400 text-sm font-bold line-through">
                    ${{ originalPrice }}
                </h6>
            </div>
            <button @click="navigateTo('/car-detail')" type="button" class="py-2.5 px-5 h-[44px] text-nowrap inline-flex items-center gap-x-2 text-base font-semibold rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Rent now
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    carModel: string,
    carType: string,
    isFavorite: boolean,
    carImageUrl: string,
    milesPerGalon: number,
    transmission: string,
    seats: number,
    currentPrice: number,
    originalPrice?: number
}>();
</script>