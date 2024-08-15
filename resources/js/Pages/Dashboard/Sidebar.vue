<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import SidebarItem from '@/Components/TaskflowComponents/SidebarItem.vue';
import GroupTile from '@/Pages/Groups/GroupTile.vue';
import CreateTaskDialog from '@/Pages/Tasks/CreateTaskDialog.vue';

const $page = usePage();
const taskGroups = $page.props.taskGroups;

</script>

<template>
    <div class="flex flex-col bg-white shadow-md">
        <div class="p-5 flex-grow">
            <Link href="/" class="flex items-center">
                <img :src="'/images/logo.png'" alt="logo" class="w-8 aspect-square">
                <div class="text-lg font-semibold ms-4">Taskflow</div>
            </Link>

            <!-- <div class="mt-4">
                <SidebarItem icon="objects-column" label="Dashboard" href="dashboard"/>
            </div> -->

            <div class="flex items-center justify-between text-sm uppercase mt-6">
                <div class="font-semibold">Tasks</div>
                <Link :href="route('tasks.index')" class="text-xs font-medium text-gray-500 hover:text-gray-700 transition">View All</Link>
            </div>

            <div class="mt-4">
                <div class="flex flex-col justify-center items-center border border-dashed rounded-lg p-5 bg-gray-50">
                    <CreateTaskDialog />
                    <div class="font-semibold text-gray-600 mt-2">New Task</div>
                </div>

                <div class="flex justify-between my-6">
                    <SidebarItem icon="calendar" label="Todays Tasks" href="dashboard"/>
                    <SidebarItem icon="hourglass" label="Pending Tasks" href="dashboard"/>
                    <SidebarItem icon="check-circle" label="Completed Tasks" href="dashboard"/>
                </div>
                
            </div>

            <div class="flex items-center justify-between text-sm uppercase">
                <div class="font-semibold">Groups</div>
                <Link :href="route('groups.index')" class="text-xs font-medium text-gray-500 hover:text-gray-700 transition">View All</Link>
            </div>

            <div class="mt-4">
                <GroupTile v-for="group in taskGroups.slice(0,3)" :key="group.id" :group="group"/>
            </div>
        </div>
        <div class="px-5 pb-5">
            <SidebarItem icon="cog" label="Settings" href="dashboard"/>
        </div>
    </div>
</template>