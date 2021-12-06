<template>
    <div>
        <DashboardLayout></DashboardLayout>
    </div>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout";

export default {
    name: "Admin",
    components: {
        DashboardLayout
    },
    methods: {
        toggleNavOpen() {
            let root = document.getElementsByTagName('html')[0];
            root.classList.toggle('nav-open');
        }
    },
    mounted() {
        this.$watch('$sidebar.showSidebar', this.toggleNavOpen)
    }
}
</script>

<style scoped>

</style>