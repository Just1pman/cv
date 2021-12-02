<template>
    <header class="main-header animate__animated"
            :class="!isShowHeader ? 'animate__fadeOutUp' : 'animate__fadeInDown'"
            :style="(isOpenedMenu ? 'position: absolute' : '') "
    >
        <img src="@/assets/img/logo.svg" alt="site logo">
        <div class="right-side-wrapper">
            <NavList></NavList>
            <BaseButton>Resume</BaseButton>
        </div>

        <div class="mobile-menu">
            <MenuButton></MenuButton>
            <c-drawer :isOpen="isOpenedMenu" placement="right" :on-close="close">
                <c-drawer-overlay/>
                <c-drawer-content bg="#112240" :maxW="400">
                    <c-drawer-body py="100">
                        <CFlex direction="column" align="center" justify="center">
                            <NavList></NavList>
                            <BaseButton>Resume</BaseButton>
                        </CFlex>
                    </c-drawer-body>
                </c-drawer-content>
            </c-drawer>
        </div>
    </header>
</template>

<script>
import NavList from '@/components/RawBlocks/NavList'
import BaseButton from "@/components/RawBlocks/BaseButton";
import MenuButton from "@/components/Header/MenuButton";
import {
    CDrawer,
    CDrawerBody,
    CDrawerOverlay,
    CDrawerContent,
    CFlex,
} from '@chakra-ui/vue';
import {mapState, mapMutations} from 'vuex';

export default {
    name: "MainHeader",
    data() {
        return {
            isShowHeader: true
        }
    },

    created() {
        window.addEventListener('scroll', this.scrollHandler)
    },
    methods: {
        ...mapMutations([
            'changeStateMenu'
        ]),
        scrollHandler() {
            this.isShowHeader = window.pageYOffset === 0
        },

        close() {
            this.changeStateMenu()
        }
    },
    computed: {
        ...mapState([
            'isOpenedMenu'
        ])
    },
    components: {
        NavList,
        BaseButton,
        CDrawer,
        CDrawerBody,
        CDrawerOverlay,
        CDrawerContent,
        MenuButton,
        CFlex,
    }
}
</script>

<style scoped lang="scss">

.main-header {
    box-sizing: border-box;
    height: $header_height;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    position: fixed;
    top: 0;

    background-color: $background-color;
    font-family: $font_mono;

    @include media_screen($tablet-screen) {
        padding: 15px 25px;
    }

    .menu-button {
        display: none;
        margin-right: -10px;
        @include media_screen($tablet-screen) {
            display: block;
        }
    }

    .mobile-menu {
        display: none;

        &__list > > > .list {
            flex-direction: column;
        }

        @include media_screen($tablet-screen) {
            display: block;
        }
    }
}

.right-side-wrapper {
    display: flex;
    @include media_screen($tablet-screen) {
        display: none;
    }
}

.mobile-menu::v-deep .list {
    display: block;
}

.main-header::v-deep .resume-button {
    margin-left: 15px;
    font-size: 13px;
}
</style>