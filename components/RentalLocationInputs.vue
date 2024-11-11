<template>
    <div class="flex flex-col 2xl:flex-row justify-center items-center gap-10 w-full">
        <div
            class="flex flex-col flex-1 bg-white border border-gray-200 shadow-sm rounded-xl px-6 md:px-8 xl:px-12 py-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
            <div class="flex flex-row gap-2 items-center">
                <img src="~/assets/pick-up-icon.svg" class="w-auto h-auto">
                <label class="text-base font-semibold text-gray-800 dark:text-gray-200">Pick-up</label>
            </div>
            <div class="flex flex-row pt-4 pb-2 w-full justify-start items-center">
                <div class="flex flex-col gap-1 justify-start h-12">
                    <label class="text-base font-bold">Locations</label>
                    <select
                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                        <option :selected="false">Pick a city</option>
                        <option>New york</option>
                        <option>Seattle</option>
                        <option>Miami</option>
                        <option>Dallas</option>
                        <option>Los Angeles</option>
                    </select>
                </div>
                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                <div class="flex flex-col gap-1 justify-start h-12">
                    <label class="text-base font-bold">Date</label>
                    <select
                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                        <option :selected="false">Pick a date</option>
                        <option>10/05/2024</option>
                        <option>10/06/2024</option>
                        <option>10/07/2024</option>
                        <option>10/08/2024</option>
                        <option>10/09/2024</option>
                    </select>
                </div>
                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                <div class="flex flex-col gap-1 justify-start h-12">
                    <label class="text-base font-bold">Time</label>
                    <select
                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                        <option :selected="false">Pick a time</option>
                        <option>6AM</option>
                        <option>7AM</option>
                        <option>8AM</option>
                        <option>2PM</option>
                        <option>3PM</option>
                    </select>
                </div>
            </div>
        </div>
        <button type="button"
            class="flex shrink-0 justify-center items-center gap-2 size-[60px] shadow-md text-sm font-medium rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            <UIcon name="line-md:arrows-vertical" color="currentColor" size="2em" />
        </button>
        <div
            class="flex flex-col flex-1 bg-white border border-gray-200 shadow-sm rounded-xl px-6 md:px-8 xl:px-12 py-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
            <div class="flex flex-row gap-2 items-center">
                <img src="~/assets/drop-off-icon.svg" class="w-auto h-auto">
                <label class="text-base font-semibold text-gray-800 dark:text-gray-200">Drop-off</label>
            </div>
            <div class="flex flex-row pt-4 pb-2 w-full justify-start items-center">
                <div class="flex flex-col gap-1 justify-start h-12">
                    <label class="text-base font-bold">Locations</label>
                    <select
                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                        <option :selected="false">Pick a city</option>
                        <option>New york</option>
                        <option>Seattle</option>
                        <option>Miami</option>
                        <option>Dallas</option>
                        <option>Los Angeles</option>
                    </select>
                </div>
                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                <div class="flex flex-col gap-1 justify-start h-12">
                    <label class="text-base font-bold">Date</label>
                    <select
                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                        <option :selected="false">Pick a date</option>
                        <option>10/05/2024</option>
                        <option>10/06/2024</option>
                        <option>10/07/2024</option>
                        <option>10/08/2024</option>
                        <option>10/09/2024</option>
                    </select>
                </div>
                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                <div class="flex flex-col gap-1 justify-start h-12">
                    <label class="text-base font-bold">Time</label>
                    <select
                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                        <option :selected="false">Pick a time</option>
                        <option>6AM</option>
                        <option>7AM</option>
                        <option>8AM</option>
                        <option>2PM</option>
                        <option>3PM</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
