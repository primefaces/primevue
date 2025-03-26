<template>
    <div class="flex sm:max-w-140 lg:max-w-280 mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-8 w-full">
            <div class="flex flex-col gap-8">
                <UserProfilesCard />
                <InviteMembersCard />
            </div>
            <div class="flex flex-col gap-8">
                <FilesCard />
                <ProjectCard />
            </div>
            <div class="flex flex-col gap-8">
                <MeetingCard />
                <RealEstateCard />
            </div>
        </div>
    </div>
</template>
