<template>
  <div>
    <h4 class="use-text-subtitle mb-3">
      {{ $t('common.faq_topic') }}
      FAQ Topics
    </h4>
    <ul class="topic-list">
      <li v-for="(item, index) in topics" :key="index">
        <a :href="item.href">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
export default {
  data() {
    return {
      topics: [
        {
          title: 'Kenapa Harus Jagain',
          href: '#topic1'
        },
        {
          title: 'Keuntungan Menggunakan Jagain',
          href: '#topic2'
        },
        {
          title: 'Berapa Lama Polis Di terima',
          href: '#topic3'
        }
      ]
    }
  }
}
</script>