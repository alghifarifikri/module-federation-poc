<!-- eslint-disable vue/attribute-hyphenation -->
<template>
    <client-only>
      <!-- :ref="refSwiper" -->
      <swiper
        :class="$attrs.class"
        :modules="parsedModules"
        :effect="effect"
        :slidesPerView="slidesPerView"
        :slides-per-group="slidesPerGroup"
        :loop="loop"
        :space-between="spaceBetween"
        :centered-slides="centeredSlides"
        :allow-touch-move="allowTouchMove"
        :pagination="{
          clickable: true
        }"
        :navigation="isNavigation"
        :coverflow-effect="coverflowEffect"
        :grid="grid"
        :autoplay="{
          delay: delay,
          disableOnInteraction: false
        }"
        :breakpoints="breakpoints"
        @swiper="onSwiper"
        @slider-move="onSliderMove"
        @slide-change="onSlideChange"
      >
        <swiper-slide
          v-for="(item, i) in items"
          :key="i"
          :class="slideClassGenerate(i)"
        >
          <slot
            name="content"
            v-bind="
              typeof item === 'object'
                ? { ...item, index: i }
                : { value: item, index: i }
            "
          ></slot>
        </swiper-slide>
      </swiper>
    </client-only>
  </template>
  <script>
  // import Swiper core and required modules
  import {
    Navigation,
    Pagination,
    EffectCoverflow,
    // Scrollbar,
    // A11y,
    Grid,
    Autoplay
    // EffectFade,
  } from 'swiper'
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'
  
  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'
  import 'swiper/css/grid'
  import 'swiper/css/effect-coverflow'
  // import "swiper/css/effect-fade";

  import { device } from '../utils/device'
import { computed } from 'vue'
  
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      slidesPerView: {
        type: [Number, String],
        default: 1
      },
      slidesPerGroup: {
        type: [Number, String],
        default: 1
      },
      spaceBetween: {
        type: Number,
        default: 0
      },
      delay: {
        type: Number,
        default: 3000
      },
      loop: {
        type: Boolean,
        default: false
      },
      slideClass: {
        type: [String, Array],
        default: ''
      },
      effect: {
        type: String,
        default: null
      },
      centeredSlides: {
        type: Boolean,
        default: false
      },
      allowTouchMove: {
        type: Boolean,
        default: true
      },
      keyIterate: {
        type: Boolean,
        default: false
      },
      items: {
        type: Array,
        default: () => []
      },
      modules: {
        type: Array,
        default: () => []
        // validator(value) {
        //   return ['Navigation', 'Pagination', 'Autoplay', 'EffectCoverflow'].includes(value)
        // }
      },
      breakpoints: {
        type: Object,
        default: () => {}
      },
      grid: {
        type: Object,
        default: () => {}
      },
      coverflowEffect: {
        type: Object,
        default: () => {
          // return {
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }
        }
      }
    },
  
    emits: ['slideChange', 'sliderMove', 'swiper'],
  
    setup(props, { emit }) {
      const parsedModules = computed(() => {
        const modules = []
        for (let i = 0; i < props.modules.length; i++) {
          const e = props.modules[i]
          if (e === 'Navigation') {
            modules.push(Navigation)
          }
          if (e === 'Pagination') {
            modules.push(Pagination)
          }
          if (e === 'Autoplay') {
            modules.push(Autoplay)
          }
          if (e === 'EffectCoverflow') {
            modules.push(EffectCoverflow)
          }
          if (e === 'Grid') {
            modules.push(Grid)
          }
        }
        return modules
      })

      console.log('Render')
  
      const isNavigation = computed(() => {
        return props.modules.includes('Navigation') && device.isDesktop
      })
  
      // const refSwiper = ref(null)
  
      const onSlideChange = (e) => {
        emit('slideChange', e)
      }
      const onSlideClick = (e) => {
        emit('slideChange', e)
      }
      const onSliderMove = (e) => {
        emit('sliderMove', e)
      }
      const onSwiper = (e) => {
        emit('swiper', e)
        // refSwiper.value = e
      }
  
      const slideClassGenerate = (key) => {
        if (props.keyIterate) {
          const temp = [
            'slide-min swiper-step',
            { 'right-line': key < 4 },
            { 'left-line': key > 0 }
          ]
          return temp
        } else {
          return props.slideClass
        }
      }
  
      return {
        parsedModules,
        isNavigation,
        onSlideChange,
        onSlideClick,
        onSliderMove,
        onSwiper,
        slideClassGenerate
        // refSwiper
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .swiper {
    // @apply static;
    @apply relative py-8;
  
    &-button-next {
      @apply -right-16 w-10 h-10 rounded-full text-white bg-gray-600 bg-opacity-40 #{!important};
      &.swiper-button-disabled {
        @apply opacity-0 #{!important};
      }
      &::after {
        @apply text-sm font-bold;
      }
    }
  
    &-button-prev {
      @apply -left-16 w-10 h-10 rounded-full text-white bg-gray-600 bg-opacity-40 #{!important};
      &.swiper-button-disabled {
        @apply opacity-0 #{!important};
      }
      &::after {
        @apply text-sm font-bold;
      }
    }
  }
  
  :deep() {
    .swiper-pagination {
      // position: unset !important;
      .swiper-pagination-bullet-active {
        @apply w-2 bg-primary-navy opacity-100;
      }
      &-pagination-bullet {
        @apply w-2 h-2 rounded-lg transition-all;
  
        &:hover {
          @apply opacity-50;
        }
      }
    }
    .swiper-step {
      &.right-line {
        &::after {
          content: '';
          @apply absolute bottom-[30px] border border-primary-light-blue w-1/2 right-0;
        }
      }
      &.left-line {
        &::before {
          content: '';
          @apply absolute bottom-[30px] border border-primary-light-blue w-1/2 left-0;
        }
      }
    }
  }
  </style>
  