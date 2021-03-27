<template>
  <div class="w-full max-w-6xl mx-auto py-4 space-y-4">
    <breadcrumbs
      class="px-4"
      :links="[
        ['홈', '/'],
        ['컴퓨터', '/computer'],
        ['알고리즘', '/computer/algorithms'],
        ['정렬', '/computer/algorithms/sorting'],
      ]"
    />
    <article class="shadow bg-white p-4 rounded-lg space-y-4">
      <div
        class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"
      >
        <h1 class="text-3xl font-bold">정렬</h1>
        <p class="text-gray-500">
          <span>예상 학습 소요 시간: 30분</span> |
          <span>작성중</span>
        </p>
      </div>
      <hr />
      <div class="space-y-4">
        <div>
          <h2 class="font-bold text-xl">학습 목표</h2>
          <ul class="list-disc list-inside">
            <li>버블소트를 이해합니다.</li>
            <li>퀵소트를 이해합니다.</li>
          </ul>
        </div>
        <hr />
        <div>
          <h2 class="font-bold text-xl">버블소트</h2>
          <bubble-sort />
        </div>
        <div>
          <h2 class="font-bold text-xl">퀵소트</h2>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import BubbleSort from '../../../components/computer/algorithms/sorting/bubbleSort.vue'
export default {
  components: { BubbleSort },
  head: {
    title: '정렬 알고리즘 | 비주얼 스터디',
  },
}
</script>
