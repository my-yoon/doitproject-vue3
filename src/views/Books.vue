<template>
    <Subpage :pagetit="'도서 소개'">
        <div class="bookpage">
            <Carousel class="subpageslider" :breakpoints="state.breakpoints"  @init="handleInit"  ref="myCarousel">
                <Slide v-for="(item, index) in state.Newbooks" :key="index">
                    <div class="rollimg" :class="{ active: index === tabIndex }" @click="clickLink(index)">
                        <span class="imgbox"><img :src="item.imgurl" /></span>
                        <strong v-html="item.name"></strong>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <component
                :is="componentslist[tabIndex]"
                :bookUrl="state.Newbooks[tabIndex].imgurl"
                :bookName="state.Newbooks[tabIndex].name"
                :bookDec="state.Newbooks[tabIndex].dec"
            >
            </component>
        </div>
    </Subpage>
</template>
<script setup>
import Subpage from '@/components/Subpage.vue';
import BookDetail1 from './BookDetail1.vue';
import BookDetail2 from './BookDetail2.vue';
import BookDetail3 from './BookDetail3.vue';
import BookDetail4 from './BookDetail4.vue';
import BookDetail5 from './BookDetail5.vue';
import BookDetail6 from './BookDetail6.vue';
import BookDetail7 from './BookDetail7.vue';
import BookDetail8 from './BookDetail8.vue';
import BookDetail9 from './BookDetail9.vue';
import BookDetail10 from './BookDetail10.vue';
import { reactive, nextTick, onMounted, watch, computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();
const componentslist =  ref([
    BookDetail1,
    BookDetail2,
    BookDetail3,
    BookDetail4,
    BookDetail5,
    BookDetail6,
    BookDetail7,
    BookDetail8,
    BookDetail9,
    BookDetail10
]);
const tabIndex = ref(0);
const myCarousel = ref(null);
const state = reactive({
    Newbooks: [
        { imgurl: '/images/books_image/book01.jpg', name: 'Do it! 웹 사이트 따라 만들기', dec: 'HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱' },
        { imgurl: '/images/books_image/book02.jpg', name: 'Do it! 첫 알고리즘', dec: '160가지 그림과 스토리텔링으로 이해한다!' },
        { imgurl: '/images/books_image/book03.jpg', name: 'Do it! C# 프로그래밍 입문', dec: '딱 필요한 문법만 빠르게 배우고 프로젝트 실습까지!' },
        { imgurl: '/images/books_image/book04.jpg', name: 'IT 5분 잡학사전', dec: '누구나 쉽게 이해할 수 있는 IT 지식이 가득한 입문서' },
        { imgurl: '/images/books_image/book05.jpg', name: 'Do it! SQL 입문', dec: '비전공자도 개발자도 쉽게 배우는 기초 문법 + 실용 예제' },
        { imgurl: '/images/books_image/book06.jpg', name: 'Do it! 클론 코딩 줌', dec: '노마드 코더와 만드는 화상 채팅 서비스' },
        { imgurl: '/images/books_image/book08.jpg', name: '된다! 엑셀 수식 & 함수', dec: '복잡한 수식의 원리부터 함수 설명까지!' },
        { imgurl: '/images/books_image/book09.jpg', name: '일 잘하는 디자이너', dec: '클라이언트 설득부터 타이포그래피, 색상 선택, 면접 준비까지!' },
        { imgurl: '/images/books_image/book10.jpg', name: '된다! 아이패드 하루 24시간', dec: '굿노트, 프로크리에이트, 루마퓨전 사용법과 애플 연동, 아이패드 문제 해결까지!' },
        { imgurl: '/images/books_image/book21.jpg', name: '블록체인 무엇인가?', dec: '수학, 코딩 몰라도 이해하는 비유의 힘!' }
    ],
    tabIndex: 0,
    breakpoints: {
        // 360 이상일 때 2개씩 노출
        360: {
            itemsToShow: 2,
            snapAlign: 'center'
        },
        // 767 이상일 때 5개씩 노출
        767: {
            itemsToShow: 5,
            snapAlign: 'center'
        },
        // 1024 이상일 때 8개씩 노출
        1024: {
            itemsToShow: 8,
            snapAlign: 'start'
        }
    },
    bookinfolists: [
        { label: '저자', content: '김윤미' },
        { label: '발행일', content: '2019-11-28' },
        { label: '사양', content: '312쪽 | 188*257mm' },
        { label: 'ISBN', content: '979-11-6303-119-2 13000' },
        { label: '정가', content: '16,000원' },
        { label: '상태', content: '정상 판매중' }
    ],
    tapselect: 'introduce'

});
const clickLink = (Index) => {
    if (!(route.query.tabId == Index)) {
        tabIndex.value = Index;
        return router.push('/book?tabId=' + Index);
    }
};
onMounted(() => {
    if (!route.query.tabId) {
        tabIndex.value = 0;
    } else {
        tabIndex.value = Number(route.query.tabId);
    }
});
const handleInit = () => {
    nextTick(() => {
        myCarousel.value.slideTo(tabIndex.value);
    });
};
</script>