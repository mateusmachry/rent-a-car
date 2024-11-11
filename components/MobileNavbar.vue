<template>
    <nav class="bg-white dark:bg-black w-full flex flex-col px-8 py-10 border-b">
        <div class="flex flex-row justify-between items-center w-full">
            <div class="flex flex-row items-center gap-16">
                <label class="font-bold text-primary-700 text-2xl">RENT-A-CAR</label>
            </div>
            <div class="flex flex-row gap-5 items-center">
                <UPopover :popper="{ placement: 'bottom-start' }">
                    <button type="button"
                        class="flex justify-center items-center size-[44px] text-sm font-medium rounded-full border border-gray-200 bg-white text-slate-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-slate-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                        <img src="https://i.pravatar.cc/150?img=68" class="w-full h-full object-contain rounded-full" />
                    </button>
                    <template #panel>
                        <div class="p-4 flex flex-col gap-2">
                            <button @click="navigateTo('/dashboard')"
                                class="inline-flex px-2 py-1.5 text-sm hover:font-semibold text-start items-center gap-1.5">
                                <UIcon name="material-symbols:space-dashboard-outline" size="1em" color="currentColor" />
                                <span>Dashboard</span>
                            </button>
                            <hr>
                            <button @click="navigateTo('/')"
                                class="inline-flex px-2 py-1.5 text-sm hover:font-semibold text-start items-center gap-1.5">
                                <UIcon name="material-symbols:logout" size="1em" color="currentColor" />
                                <span>Sign out</span>
                            </button>
                        </div>
                    </template>
                </UPopover>
            </div>
        </div>
        <div class="w-full flex flex-row justify-start mt-8 gap-4">
            <SearchCarInput />
            <UButton
                class="text-gray-500 dark:text-gray-400"
                icon="majesticons:adjustments"
                size="lg"
                color="white"
                square
                variant="solid"
            />
        </div>
    </nav>
</template>