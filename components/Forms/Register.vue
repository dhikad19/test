<template>
  <AuthFrame
    :title="$t('common.register_subtitle')"
    :subtitle="$t('common.auth_desc')"
  >
    <div>
      <div class="head">
        <h3 class="use-text-subtitle">
          {{ $t('common.login_create') }}
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.register_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              :label="$t('common.register_email')"
              :rules="emailRules"
              color="secondary"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('common.register_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area">
          <div class="form-helper">
          </div>
          <v-btn
            large
            color="black"
            type="button"
            outlined
            @click="createUser"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import SocialAuth from './SocialAuth'
import AuthFrame from './AuthFrame'

export default {
  components: {
    SocialAuth,
    AuthFrame
  },
  data() {
    return {
      valid: true,
      email: '',
      name: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'This field is required'],
      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match'
      ],
      checkbox: false
    }
  },
  methods: {
    async createUser() {
      console.log('strted')
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        this.$router.push('/')
      } catch (e) {
        // eslint-disable-next-line no-undef
        handleError(e)
      }
    },
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
