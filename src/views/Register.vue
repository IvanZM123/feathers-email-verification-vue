<template>
  <div class="container-fluid">
    <div
      class="row justify-content-center align-items-center"
      style="min-height: 85vh"
    >
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <div class="card bg-white border-0 shadow p-2">
          <div class="card-header border-0 bg-white pb-0">
            <h2><strong>Create account</strong></h2>
            <p class="text-muted">One account all Feathers</p>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group py-2">
                <label for="fullname">Fullname</label>
                <input
                  placeholder="Exp: Ivan Zaldivar"
                  class="form-control my-1"
                  autocomplete="off"
                  name="fullname"
                  id="fullname"
                  autofocus
                  required
                />
                <small class="form-text text-muted">Enter your name</small>
              </div>
              <div class="form-group py-2">
                <label for="email">Email</label>
                <input
                  placeholder="Exp: abc@gmail.com"
                  class="form-control my-1"
                  autocomplete="off"
                  name="email"
                  id="email"
                  required
                />
                <small class="form-text text-muted">Enter your email</small>
              </div>
              <div class="form-group py-2">
                <label for="password">Password</label>
                <input
                  class="form-control my-1"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
                <small class="form-text text-muted">Enter your password</small>
              </div>
            </form>
            <div class="pt-2">
              <button class="btn btn-primary border-0 py-2 px-3 w-100">
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class RegisterPage extends Vue {}
</script>
