<template>
  <div class="socmed-side-login">
    <v-btn class="navi-btn">
      <i class="ion-logo-facebook" />
      Facebook
    </v-btn>
    <v-btn class="blue-btn">
      <i class="ion-logo-twitter" />
      Twitter
    </v-btn>
    <v-btn class="red-btn" @click="signInPopup">
      <i class="ion-logo-google" />
      Google
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
export default {
  methods: {
    googleSignIn() {
      this.provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then(result => {
          // store the user ore wathever
          this.$router.push('/home')
        })
        .catch(e => {
          this.$snotify.error(e.message)
          console.log(e)
        })
    }
  }
}
</script>
