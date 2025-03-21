<template>
    <div class="flex max-w-280 mx-auto">
        <div class="grid grid-cols-3 gap-8 w-full">
            <div class="flex flex-col gap-6">
                <UserProfilesCard />
                <InviteMembersCard />
            </div>
            <div class="flex flex-col gap-6">
                <FilesCard />
                <ProjectCard />
            </div>
            <div class="flex flex-col gap-6">
                <MeetingCard />
                <RealEstateCard />
            </div>
        </div>
    </div>
</template>
