<template>
    <div class="flex max-w-[102rem] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            <div class="flex flex-col h-full">
                <div class="flex">
                    <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                        <UserProfilesCard />
                    </div>
                    <div class="w-6 h-full py-6 flex-col justify-between md:flex hidden">
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                    </div>
                </div>

                <div class="h-6 px-6 lg:pr-12 w-full">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
                <div class="flex">
                    <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                        <InviteMembersCard />
                    </div>
                    <div class="w-6 h-full py-6 flex-col justify-between md:flex hidden">
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                    </div>
                </div>
                <div class="h-6 px-6 lg:pr-12 w-full lg:hidden md:flex hidden">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
                <div class="lg:hidden md:flex hidden">
                    <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                        <RealEstateCard />
                    </div>
                    <div class="w-6 h-full py-6 flex-col justify-between md:flex hidden pb-40">
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                    </div>
                </div>

                <div class="flex-1 px-6 lg:pr-12 w-full block">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
            </div>
            <div class="flex flex-col h-full">
                <div class="h-6 px-6 w-full flex md:hidden">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
                <div class="flex">
                    <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                        <FilesCard />
                    </div>
                    <div class="w-6 h-full py-6 flex-col justify-between hidden lg:flex">
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                    </div>
                </div>

                <div class="h-6 px-6 lg:pr-12 w-full">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
                <div class="flex">
                    <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                        <ProjectCard />
                    </div>
                    <div class="w-6 h-full py-6 flex-col justify-between hidden lg:flex">
                        <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                    </div>
                </div>
                <div class="h-6 px-6 lg:pr-12 w-full lg:hidden md:flex hidden">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
                <div class="lg:hidden md:flex hidden">
                    <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                        <MeetingCard />
                    </div>
                </div>
                <div class="h-6 md:h-40 lg:h-48 px-6 lg:pr-12 w-full">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
            </div>

            <div class="flex-col h-full w-full col-span-1 lg:flex md:hidden flex">
                <div class="flex flex-col w-full h-full lg:h-auto">
                    <div class="flex w-full h-fit">
                        <div class="p-4 border border-surface-200 dark:border-surface-800 w-full">
                            <MeetingCard />
                        </div>
                        <div class="w-6 h-full py-6 flex-col justify-between hidden md:flex lg:hidden">
                            <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                            <div class="w-6 h-px bg-surface-200 dark:bg-surface-800 block"></div>
                        </div>
                    </div>
                    <div class="flex-1 px-6 lg:pr-12 w-full block lg:hidden">
                        <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                    </div>
                </div>

                <div class="h-6 px-6 w-full flex">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800"></div>
                </div>
                <div class="flex flex-col w-full h-full lg:h-auto">
                    <div class="p-4 w-full border border-surface-200 dark:border-surface-800">
                        <RealEstateCard />
                    </div>
                    <div class="h-32 md:h-12 blocks lg:hidden px-6 pr-12 w-full">
                        <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                    </div>
                </div>

                <div class="flex-1 px-6 pr-12 w-full hidden lg:flex">
                    <div class="h-full w-full border-x border-surface-200 dark:border-surface-800 block"></div>
                </div>
            </div>
        </div>
    </div>
</template>
