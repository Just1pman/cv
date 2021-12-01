<template>
    <div class="menu-button">
        <input type="checkbox" id="togglenav" class="menu-trigger hidden" v-on:change="changeStateMenu">
        <label for="togglenav" class="burger-wrapper">
            <div class="hamburger"></div>
        </label>
    </div>
</template>

<script>
export default {
    name: "MenuButton",
    methods: {
        changeStateMenu: function () {
            this.$emit('changeStateMenu', 'carrier');
        }
    },
}
</script>

<style scoped lang="scss">
$s: 4px;

.menu-button {
    z-index: 1000;
    position: relative;

    height: 35px;
    width: 41px;
    box-sizing: content-box;
    padding: 10px;
}

.burger-wrapper {
    cursor: pointer;
    margin: auto;
    width: $s*10;
    height: $s*8;

    .hamburger {
        background: $green_color;
        width: $s*10;
        height: $s;
        position: relative;
        transition: background 10ms 300ms ease;
        transform: translateY($s*4);

        &:before, &:after {
            transition: top 300ms 350ms ease,
            transform 300ms 50ms ease;
            position: absolute;
            background: $green_color;
            width: $s*10;
            height: $s;
            content: '';
        }

        &:before {
            top: $s*-3;
        }

        &:after {
            top: $s*3;
        }
    }
}

.menu-trigger:checked {
    ~ .burger-wrapper {
        .hamburger {
            background: transparent;

            &:after, &:before {
                transition: top 300ms 50ms ease,
                transform 300ms 350ms ease;
                top: 0;
            }

            &:before {
                transform: rotate(45deg);
            }

            &:after {
                transform: rotate(-45deg);
            }
        }
    }
}

.hidden {
    display: none;
}
</style>