<template>
    <Subpage :pagetit="'자료실'">
    <div class="referencepage">
        <div class="subpageguide">도서와 관련된 추가 자료를 다운로드할 수 있습니다.</div>
        <listComm :lists="state.lists" />
    </div>
    </Subpage>
</template>
<script setup>
import Subpage from '@/components/Subpage.vue';
import listComm from '@/components/listComm.vue';
import { reactive, nextTick, onMounted, watch, computed, ref } from 'vue';
const state = reactive({
    lists: [
        {
            img: '/images/books_image/book01.jpg', // 이미지 경로
            title: 'Do it! 실습 파일과 학습 파일 내려받기', // 제목
            date: '2019.04.15', // 등록일
            dec: '책을 다 공부한 독자를 위한 실전 프로젝트입니다.<br /> 웹 사이트에서 자주 사용하는 이미지 슬라이드 쇼 프로그램을 만드는 방법을 단계별로 공부할 수 있습니다', // 설명
            link1: '', // 소스 파일 경로
            link2: '' // 정오표 경로
        }
    ]
});
</script>