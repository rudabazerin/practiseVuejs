<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div>
      <div class="col-lg-4">
        <div class="border border-info rounded my_form">
          <h4>Sign-up</h4>
          <form @submit="handleSubmit">
            <div class="box">
              <input
                type="text"
                name="u_name"
                class="form-control"
                placeholder="Username"
              />
            </div>
            <div class="box">
              <input
                type="password"
                name="u_pass"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="box">
              <input
                type="submit"
                value="Login"
                name="u_login"
                class="btn btn-success col-12"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    
  props: [
        'title'
  ],
  methods: {
    handleSubmit(){
      console.log('submitted')
    }
  }

}
</script>

<style scoped>
.container {
  text-align: center;
  margin-left: 475px;
  margin-top: 125px;
}
.box {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>