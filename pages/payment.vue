<template>
    <div class="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900">
        <DesktopNavbar class="hidden md:flex" />
        <MobileNavbar class="flex md:hidden" />
        <div class="max-w-[90rem] grid grid-cols-1 xl:grid-cols-7 px-8 py-8 gap-x-8 gap-y-8">
            <div class="order-2 xl:order-1 xl:col-span-4 flex flex-col gap-8">
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-xl">
                                Billing Info
                            </label>
                            <span class="text-slate-400 dark:text-slate-400 font-normal text-sm">Please enter your
                                billing info</span>
                        </div>
                        <span class="text-slate-400 dark:text-slate-400 font-medium text-sm">Step 1 of 4</span>
                    </div>
                    <div class="mt-8 grid grid-cols-2 gap-y-6 gap-x-8">
                        <div class="flex flex-col gap-4">
                            <label class="font-semibold">Name</label>
                            <UInput color="gray" variant="outline" placeholder="Your name" size="sm"
                                :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                        </div>
                        <div class="flex flex-col gap-4">
                            <label class="font-semibold">Phone Number</label>
                            <UInput color="gray" variant="outline" placeholder="Phone number" size="sm"
                                :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                        </div>
                        <div class="flex flex-col gap-4">
                            <label class="font-semibold">Address</label>
                            <UInput color="gray" variant="outline" placeholder="Address" size="sm"
                                :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                        </div>
                        <div class="flex flex-col gap-4">
                            <label class="font-semibold">Town/City</label>
                            <UInput color="gray" variant="outline" placeholder="Town or city" size="sm"
                                :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-xl">
                                Payment Method
                            </label>
                            <span class="text-slate-400 dark:text-slate-400 font-normal text-sm">Please enter your
                                payment method</span>
                        </div>
                        <span class="text-slate-400 dark:text-slate-400 font-medium text-sm">Step 2 of 4</span>
                    </div>
                    <div
                        class="mt-8 flex flex-col gap-8 bg-gray-100 border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <div class="flex flex-row">
                                <input type="radio" :checked="true"
                                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-default-radio">
                                <label class="text-base font-semibold text-gray-700 ms-2 dark:text-neutral-300">Credit
                                    card</label>
                            </div>
                            <img src="~/assets/credit-card-logo.png" class="object-contain w-24 h-auto" />
                        </div>
                        <div class="grid grid-cols-2 gap-y-6 gap-x-8">
                            <div class="flex flex-col gap-4">
                                <label class="font-semibold">Card Number</label>
                                <UInput color="gray" variant="outline" placeholder="Card number" size="sm"
                                    :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                            </div>
                            <div class="flex flex-col gap-4">
                                <label class="font-semibold">Expiration Date</label>
                                <UInput color="gray" variant="outline" placeholder="MM/YY" size="sm"
                                    :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                            </div>
                            <div class="flex flex-col gap-4">
                                <label class="font-semibold">Card Holder</label>
                                <UInput color="gray" variant="outline" placeholder="Card holder" size="sm"
                                    :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                            </div>
                            <div class="flex flex-col gap-4">
                                <label class="font-semibold">CVC</label>
                                <UInput color="gray" variant="outline" placeholder="CVC" size="sm"
                                    :ui="{ padding: { sm: 'px-4 py-4' }, rounded: 'rounded-lg' }" />
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-8 flex flex-col gap-8 bg-gray-100 border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <div class="flex flex-row">
                                <input type="radio" :checked="false"
                                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-default-radio">
                                <label
                                    class="text-base font-semibold text-gray-700 ms-2 dark:text-neutral-300">Paypal</label>
                            </div>
                            <img src="~/assets/paypal-logo.png" class="object-contain w-24 h-auto" />
                        </div>
                    </div>
                    <div
                        class="mt-8 flex flex-col gap-8 bg-gray-100 border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <div class="flex flex-row">
                                <input type="radio" :checked="false"
                                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-default-radio">
                                <label
                                    class="text-base font-semibold text-gray-700 ms-2 dark:text-neutral-300">Bitcoin</label>
                            </div>
                            <img src="~/assets/bitcoin-logo.png" class="object-contain w-24 h-auto" />
                        </div>
                    </div>
                </div>

                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-col gap-1">
                            <label class="font-bold text-xl">
                                Confirmation
                            </label>
                            <span class="text-slate-400 dark:text-slate-400 font-normal text-sm">We are getting to the end. Just few clicks and your rental is ready!</span>
                        </div>
                        <span class="text-slate-400 dark:text-slate-400 font-medium text-sm">Step 3 of 4</span>
                    </div>
                    <div
                        class="mt-8 flex flex-col gap-8 bg-gray-100 border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <div class="flex flex-row">
                                <input type="checkbox" :checked="false"
                                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-default-radio">
                                <label
                                    class="text-base font-semibold text-gray-700 ms-2 dark:text-neutral-300">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-8 flex flex-col gap-8 bg-gray-100 border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400">
                        <div class="flex flex-row justify-between items-center">
                            <div class="flex flex-row">
                                <input type="checkbox" :checked="false"
                                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-default-radio">
                                <label
                                    class="text-base font-semibold text-gray-700 ms-2 dark:text-neutral-300">I agree with our terms and conditions and privacy policy.</label>
                            </div>
                        </div>
                    </div>
                    <button @click="navigateTo('/dashboard')"
                        class="mt-8 w-fit text-sm lg:text-base text-white font-semibold bg-blue-600 hover:bg-blue-700 py-4 px-10 rounded-lg">
                        Rent now
                    </button>
                    <div class="flex flex-col mt-8">
                        <img src="~/assets/ic-security-safety.png" class="w-8 h-8 object-contain" />
                        <div class="flex flex-col gap-2 mt-4">
                            <span class="text-base font-bold">All your data are safe</span>
                            <span class="font-normal text-sm text-slate-400 dark:text-slate-400">We are using the most advanced security to provide you the best experience ever.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-1 xl:order-2 xl:col-span-3 flex flex-col gap-8">
                <div
                    class="flex flex-col gap-8 bg-white border border-gray-200 shadow-sm rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex flex-col gap-1">
                        <label class="font-bold text-xl">
                            Rental Summary
                        </label>
                        <span class="text-slate-400 dark:text-slate-400 font-medium text-sm">Prices may change depending
                            on the length of the rental and the price of your rental car.</span>
                    </div>

                    <div class="flex flex-row gap-4 items-center">
                        <img src="~/assets/home-card-2.png" class="bg-primary-600 w-36 h-28 object-cover rounded-lg" />
                        <div class="flex flex-col gap-2">
                            <label class="text-black dark:text-white font-bold text-3xl">Nissan GT-R</label>
                            <div class="flex flex-row gap-2">
                                <div class="flex flex-row gap-0.5 items-center">
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                    <UIcon class="text-amber-500" name="material-symbols:star" size="1.5em" />
                                    <UIcon class="text-gray-300" name="material-symbols:star" size="1.5em" />
                                </div>
                                <span class="font-medium text-sm text-gray-600 dark:text-gray-400">440+ Reviews</span>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-row justify-between">
                            <label class="font-medium text-slate-400 dark:text-slate-400">Subtotal</label>
                            <span class="font-semibold">$80.00</span>
                        </div>
                        <div class="flex flex-row justify-between">
                            <label class="font-medium text-slate-400 dark:text-slate-400">Tax</label>
                            <span class="font-semibold">$0</span>
                        </div>
                    </div>
                    <div class="relative w-full">
                        <UInput color="gray" variant="outline" placeholder="Apply promo code" size="sm"
                            :ui="{ padding: { sm: 'px-8 py-4' }, rounded: 'rounded-lg' }" />
                        <button type="button"
                            class="absolute top-0 right-0 translate-y-1/2 me-8 mt-0.5 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white/70 dark:focus:text-white/70">
                            Apply now
                        </button>
                    </div>
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
            </div>
        </div>
        <Footer />
    </div>
</template>