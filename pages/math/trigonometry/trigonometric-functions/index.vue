<template>
  <article class="shadow bg-white p-4 rounded-lg space-y-4">
    <div
      class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"
    >
      <h1 class="text-3xl font-bold">삼각 함수</h1>
      <p class="text-gray-500">
        <span>예상 학습 소요 시간: 30분</span> |
        <span>작성중</span>
      </p>
    </div>
    <hr />
    <div class="space-y-4">
      <div class="space-y-4">
        <h2 class="font-bold text-xl">학습 목표</h2>
        <ul class="list-disc list-inside">
          <li>SIN 함수를 이해합니다.</li>
          <li>COS 함수를 이해합니다.</li>
          <li>TAN 함수를 이해합니다.</li>
        </ul>
      </div>
      <hr />
      <div class="space-y-4">
        <h2 class="font-bold text-xl">SIN 함수</h2>
        <sin />
        <p>작성 부탁드립니다.</p>
      </div>
      <div class="space-y-4">
        <h2 class="font-bold text-xl">COS 함수</h2>
        <cos />
        <p>작성 부탁드립니다.</p>
      </div>
    </div>
  </article>
</template>
<script>
import Sin from '~/components/visualizations/math/trigonometric-functions/Sin'
import Cos from '~/components/visualizations/math/trigonometric-functions/Cos'
export default {
  components: { Sin, Cos },
  head: {
    title: '삼각함수 | 비주얼 스터디',
  },
  ko: '삼각함수',
}
</script>
