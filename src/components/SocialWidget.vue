<template>
    <div class="social-widget">
        <SocialList></SocialList>
    </div>
</template>

<script>
import SocialList from '@/components/RawBlocks/SocialList'

export default {
    name: "SocialWidget",
    components: {
        SocialList
    }
}
</script>

<style lang="scss">
.social {
    &-widget {
        position: fixed;
        left: 40px;
        bottom: 0;
        width: 40px;
    }

    &-list {
        display: flex;
        flex-direction: column;

        &::after {
            content: '';
            width: 1px;
            height: 90px;
            background-color: $light_slate;
            display: block;
            margin: 0 auto;
        }
    }
}

</style>