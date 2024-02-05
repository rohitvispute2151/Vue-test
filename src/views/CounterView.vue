<script setup>
import {useCounterStore} from '@/composables/CounterStore'
let counter = useCounterStore()
</script>
<template>
  <div class="about">
    <h1>Current Count: {{ counter.count }}</h1>
    <button @click="counter.increment()">increment</button>
  </div>
</template>

<style>
  .about {
    min-height: 100vh;
    border-top: 1px solid #eaeaea;
    margin-top: 1rem;
  }
</style>
