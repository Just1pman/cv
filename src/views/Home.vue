<template>
    <div class="home">
        <section class="hero-section section">
            <div class="container">
                <div class="hero-section__inner">
                    <b class="hero-section__intro">Hi, my name is</b>
                    <h1 class="hero-section__title big-heading">Alexander Olkhovik</h1>
                    <h2 class="hero-section__sub-title big-heading">I build things for the web.</h2>
                    <p class="hero-section__description">
                        I’m a software engineer specializing in building exceptional digital experiences.
                        Currently, I’m focused on building corporate products.
                    </p>
                </div>
            </div>
        </section>
        <section class="about-me section">
            <div class="container">
                <div class="about-me__inner">
                    <div class="about-me__description">
                        <h3 class="about-me__title section-title">About Me</h3>
                        <p>
                            Hello! My name is Alex and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2017 when I decided to try
                            editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                            a start-up, a huge corporation, and a student-led design studio. My main focus these days is
                            building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>
                        <p>
                            I also recently launched a course that covers everything you need to build a web app with
                            the Spotify API using Node & React.
                        </p>
                        <p>
                            Here are a few technologies I’ve been working with recently:
                        </p>

                        <ul class="recently-tech">
                            <li class="recently-tech__item">JavaScript (ES6+)</li>
                            <li class="recently-tech__item">Vue</li>
                            <li class="recently-tech__item">PHP</li>
                            <li class="recently-tech__item">Symfony</li>
                        </ul>
                    </div>
                    <div class="about-me__photo-container">
                        <div class="wrapper">
                            <img class="about-me__photo-image" src="@/assets/img/photo-profile.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>


export default {
    name: 'Home',
    data() {
        return {
        }
    },
    // created() {
    //     window.addEventListener('scroll', this.scrollHandler)
    // },
    // methods: {
    //     scrollHandler() {
    //        this.isShowHeader = window.pageYOffset === 0
    //     },
    // }
}
</script>

<style scoped lang="scss">

.hero-section .container {
    display: flex;
    min-height: 100vh;
    align-items: center;
}

.hero-section {
    margin: 0;
    &__inner {
        width: 100%;
    }

    &__intro {
        color: $green_color;
        font-size: $fz-md;
        font-weight: 400;
        font-family: $font_mono;
        display: block;
        margin-bottom: 30px;
    }

    &__title {
        color: $lightest-slate;
    }

    &__description {
        margin-top: 15px;
        max-width: 500px;
        line-height: 26px;

        @include media_screen($mobile-screen) {
            font-size: $fz-lg;
            line-height: 24px;
        }
    }
}

.about-me {
    margin-top: 10px;
    &__inner {
        display: flex;
        justify-content: space-between;

        @include media_screen($tablet-screen) {
            flex-direction: column;
        }

    }
    &__title {
        width: 100%;
    }
    &__description {
        line-height: 26px;
        margin-right: 50px;

        @include media_screen($tablet-screen) {
            margin-right: 0;
            margin-bottom: 50px;
        }

        p {
            margin-bottom: 15px;

            @include media_screen($mobile-screen) {
                font-size: $fz-lg;
                line-height: 24px;
            }
        }
    }

    &__photo-container {
        max-width: 300px;

        @include media_screen($tablet-screen) {
            max-width: 100%;
            display: flex;
            justify-content: center;
        }

        .wrapper {
            @include media_screen($tablet-screen) {
                max-width: 300px;
            }
        }

    }

    &__photo-image {
        display: block;
        border-radius: 3px;
    }
}

.recently-tech {
    display: flex;
    flex-wrap: wrap;

    &__item {
        width: 50%;
        margin-bottom: 15px;

        &::before {
            content: "▹";
            display: inline-block;
            color: $green_color;
            margin-right: 8px;
            font-size: 10px;
            position: relative;
            top: -2px;
        }
    }
}
</style>
