<template>
    <div class="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900">
        <DesktopNavbar class="hidden md:flex" />
        <MobileNavbar class="flex md:hidden" />
        <div class="flex flex-row h-full">
            <div class="hidden w-72 lg:flex flex-col bg-white dark:bg-black pt-8 pb-12 px-8">
                <div class="flex flex-col">
                    <label class="text-xs text-slate-400 dark:text-slate-300 font-thin">MAIN MENU</label>
                    <div class="flex flex-col mt-10 gap-8">
                        <button
                            class="flex flex-row items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white dark:text-black py-4 px-4 rounded-xl ms-[-16px]">
                            <UIcon name="material-symbols:dashboard" size="1.5em" color="currentColor" />
                            <span class="font-medium">Dashboard</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:directions-car-outline" size="1.5em" color="currentColor" />
                            <span class="font-medium">Car Rent</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:insights" size="1.5em" color="currentColor" />
                            <span class="font-medium">Insight</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="fluent:wallet-credit-card-16-regular" size="1.5em" color="currentColor" />
                            <span class="font-medium">Reimburse</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:chat-add-on-outline" size="1.5em" color="currentColor" />
                            <span class="font-medium">Inbox</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:calendar-month" size="1.5em" color="currentColor" />
                            <span class="font-medium">Calendar</span>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col mt-16">
                    <label class="text-xs text-slate-400 dark:text-slate-300 font-thin">PREFERENCES</label>
                    <div class="flex flex-col mt-6 gap-8">
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:settings-outline" size="1.5em" color="currentColor" />
                            <span class="font-medium">Settings</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:help-outline" size="1.5em" color="currentColor" />
                            <span class="font-medium">Help Center</span>
                        </button>
                        <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                            <UIcon name="material-symbols:dark-mode-outline" size="1.5em" color="currentColor" />
                            <span class="font-medium">Dark Mode</span>
                        </button>
                    </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                    <button class="flex flex-row items-center gap-3 text-slate-400 dark:text-slate-300">
                        <UIcon name="solar:logout-2-outline" size="1.5em" color="currentColor" />
                        <span class="font-medium">Log Out</span>
                    </button>
                </div>
            </div>
            <div class="px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                <div
                    class="h-full flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex flex-col gap-6">
                        <label class="font-bold text-xl">Details Rental</label>
                        <img class="h-64 w-fit object-contain" src="~/assets/map-location.png" />
                    </div>
                    <div class="flex flex-row mt-8 justify-between">
                        <div class="flex flex-row gap-4">
                            <div
                                class="bg-primary-600 border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <img class="w-fit h-20 rounded-lg object-cover" src="~/assets/car.png" alt="Car Image">
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-bold text-2xl">Nissan GT-R</label>
                                <span class="font-medium text-sm text-gray-600 dark:text-gray-400">Sport Car</span>
                            </div>
                        </div>
                        <span class="font-medium text-sm text-end text-gray-600 dark:text-gray-400">#9761</span>
                    </div>
                    <div class="flex flex-col mt-8 gap-5">
                        <div class="flex flex-col">
                            <div class="flex flex-row gap-2 items-center">
                                <img src="~/assets/pick-up-icon.svg" class="w-auto h-auto">
                                <label class="text-base font-semibold text-gray-800 dark:text-gray-200">Pick-up</label>
                            </div>
                            <div class="flex flex-row pt-4 pb-2 w-full justify-start items-center">
                                <div class="flex flex-col gap-1 justify-start h-12">
                                    <label class="text-base font-bold">Locations</label>
                                    <select
                                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                                        <option :selected="true">New york</option>
                                    </select>
                                </div>
                                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                                <div class="flex flex-col gap-1 justify-start h-12">
                                    <label class="text-base font-bold">Date</label>
                                    <select
                                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                                        <option :selected="true">10/05/2024</option>
                                    </select>
                                </div>
                                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                                <div class="flex flex-col gap-1 justify-start h-12">
                                    <label class="text-base font-bold">Time</label>
                                    <select
                                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                                        <option :selected="true">8AM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-8 gap-5">
                        <div class="flex flex-col">
                            <div class="flex flex-row gap-2 items-center">
                                <img src="~/assets/drop-off-icon.svg" class="w-auto h-auto">
                                <label class="text-base font-semibold text-gray-800 dark:text-gray-200">Drop-off</label>
                            </div>
                            <div class="flex flex-row pt-4 pb-2 w-full justify-start items-center">
                                <div class="flex flex-col gap-1 justify-start h-12">
                                    <label class="text-base font-bold">Locations</label>
                                    <select
                                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                                        <option :selected="true">Miami</option>
                                    </select>
                                </div>
                                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                                <div class="flex flex-col gap-1 justify-start h-12">
                                    <label class="text-base font-bold">Date</label>
                                    <select
                                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                                        <option :selected="true">14/05/2024</option>
                                    </select>
                                </div>
                                <div class="w-[1px] h-12 mx-4 xl:mx-6 bg-gray-300"></div>
                                <div class="flex flex-col gap-1 justify-start h-12">
                                    <label class="text-base font-bold">Time</label>
                                    <select
                                        class="py-2 ms-[-4px] me-[4px] pe-2 xl:pe-9 block w-full text-xs text-start border-none focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500">
                                        <option :selected="true">11AM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-10 mb-8">
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-xl">
                                Total Rental Price
                            </label>
                            <span class="text-slate-400 dark:text-slate-400 font-medium text-sm">Overall price and
                                includes rental discount</span>
                        </div>
                        <span class="font-bold text-3xl">$80.00</span>
                    </div>
                </div>
                <div class="flex flex-col gap-8">
                    <div
                        class="h-[40%] flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <label class="font-bold text-xl">Top 5 Car Rental</label>
                            <UIcon name="mdi:dots-horizontal" size="1.5em" color="currentColor" />
                        </div>
                        <div class="grid grid-cols-2 gap-x-6 mt-8">
                            <div class="relative">
                                <img src="~/assets/pie-chart.png" class="w-[220px] h-[220px] object-contain" />
                                <div
                                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1">
                                    <span class="font-bold text-2xl text-center">72,030</span>
                                    <span
                                        class="font-normal text-sm text-center text-slate-400 dark:text-slate-300">Rental
                                        Car</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-6">
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row gap-3 items-center">
                                        <div class="w-3 h-3 rounded-full" style="background-color: #0D3559;"></div>
                                        <span class="font-medium text-sm text-slate-400 dark:text-slate-300">Sport
                                            Car</span>
                                    </div>
                                    <span class="font-semibold text-sm">17,439</span>
                                </div>
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row gap-3 items-center">
                                        <div class="w-3 h-3 rounded-full" style="background-color: #175D9C;"></div>
                                        <span class="font-medium text-sm text-slate-400 dark:text-slate-300">SUV</span>
                                    </div>
                                    <span class="font-semibold text-sm">9,478</span>
                                </div>
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row gap-3 items-center">
                                        <div class="w-3 h-3 rounded-full" style="background-color: #2185DE;"></div>
                                        <span
                                            class="font-medium text-sm text-slate-400 dark:text-slate-300">Coupe</span>
                                    </div>
                                    <span class="font-semibold text-sm">18,197</span>
                                </div>
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row gap-3 items-center">
                                        <div class="w-3 h-3 rounded-full" style="background-color: #63A9E8;"></div>
                                        <span
                                            class="font-medium text-sm text-slate-400 dark:text-slate-300">Hatchback</span>
                                    </div>
                                    <span class="font-semibold text-sm">12,510</span>
                                </div>
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row gap-3 items-center">
                                        <div class="w-3 h-3 rounded-full" style="background-color: #A6CEF2;"></div>
                                        <span class="font-medium text-sm text-slate-400 dark:text-slate-300">MPV</span>
                                    </div>
                                    <span class="font-semibold text-sm">14,406</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="h-[60%] flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <label class="font-bold text-xl">Recent Transactions</label>
                            <button type="button"
                                class="inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg text-blue-600 hover:text-blue-700 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                View all
                            </button>
                        </div>
                        <div class="flex flex-col mt-8">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4">
                                    <img class="w-32 h-16 object-contain" src="/gtr.png" />
                                    <div class="flex flex-col gap-2">
                                        <label class="font-bold">Nissan GT-R</label>
                                        <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">Sport
                                            Car</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 items-end">
                                    <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">20 July</span>
                                    <label class="font-bold">$80.00</label>
                                </div>
                            </div>
                            <hr class="my-4">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4">
                                    <img class="w-32 h-16 object-contain" src="/koenigsegg.png" />
                                    <div class="flex flex-col gap-2">
                                        <label class="font-bold">Koenigsegg</label>
                                        <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">Sport
                                            Car</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 items-end">
                                    <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">19 July</span>
                                    <label class="font-bold">$99.00</label>
                                </div>
                            </div>
                            <hr class="my-4">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4">
                                    <img class="w-32 h-16 object-contain" src="/rolls-royce.png" />
                                    <div class="flex flex-col gap-2">
                                        <label class="font-bold">Rolls-Royce</label>
                                        <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">Sport
                                            Car</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 items-end">
                                    <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">18 July</span>
                                    <label class="font-bold">$96.00</label>
                                </div>
                            </div>
                            <hr class="my-4">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4">
                                    <img class="w-32 h-16 object-contain" src="/tiguan.png" />
                                    <div class="flex flex-col gap-2">
                                        <label class="font-bold">Tiguan</label>
                                        <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">SUV</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 items-end">
                                    <span class="font-normal text-slate-400 dark:text-slate-400 text-xs">17 July</span>
                                    <label class="font-bold">$80.00</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>