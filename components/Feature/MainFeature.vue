<template>
  <div class="page-section">
    <h1 class="text-center title-app display-2 mb-16">{{ $t('feature.feature_title')}} <span style="color: #ad1c24">Jagain?</span></h1>
    <v-row>
      <v-col class="px-6" sm="4" cols="12">
        <div class="feature-list">
          <img src="../../static/text/fast-time.png" alt="banner-images" class="icons" />
          <h5 class="headline">
            {{ $t('feature.feature_sm_title_1') }}
          </h5>
          <p class="body-1">
            {{ $t('feature.feature_desc_1') }}
          </p>
        </div>
      </v-col>
      <v-col class="px-6" sm="4" cols="12">
        <div class="feature-list">
          <img src="../../static/text/answer.png" alt="banner-images" class="icons" />
          <h5 class="headline">
            {{ $t('feature.feature_sm_title_2') }}
          </h5>
          <p class="body-1">
            {{ $t('feature.feature_desc_2') }}
          </p>
        </div>
      </v-col>
      <v-col class="px-6" sm="4" cols="12">
        <div class="feature-list">
          <img src="../../static/text/answer.png" alt="banner-images" class="icons" />
          <h5 class="headline">
            {{ $t('feature.feature_sm_title_3') }}
          </h5>
          <p class="body-1">
            {{ $t('feature.feature_desc_3') }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>
