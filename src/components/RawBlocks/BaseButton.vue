<template>
    <button
        class="resume-button"
        :class="classList"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    data() {
        return {
        }
    },
    props: {
        classList: String
    }
}
</script>

<style scoped lang="scss">
.resume-button {
    display: inline-block;
    padding: 11px 15px;
    border-radius: 3px;

    color: $green_color;
    border: 1px solid $green_color;
}

.menu {
    &.resume-button {
        margin: 0 auto;
        padding: 15px 50px;
    }
}
</style>