<template>
  <section class="Login">
    <div class="container-fluid">
      <div
        class="row justify-content-center align-items-center"
        style="min-height: 85vh"
      >
        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div class="card bg-white border-0 shadow p-2">
            <div class="card-header border-0 bg-white pb-0">
              <h2><strong>Login</strong></h2>
              <p class="text-muted">Log in and access our services.</p>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group py-2">
                  <label for="email">Email</label>
                  <input
                    placeholder="Exp: abc@gmail.com"
                    class="form-control my-1"
                    v-model="credentials.email"
                    autocomplete="off"
                    name="email"
                    id="email"
                    autofocus
                    required
                  />
                  <small class="form-text text-muted">Enter your email</small>
                </div>
                <div class="form-group py-2">
                  <label for="password">Password</label>
                  <input
                    class="form-control my-1"
                    v-model="credentials.password"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                  <small class="form-text text-muted"
                    >Enter your password</small
                  >
                </div>
              </form>
              <div class="pt-2">
                <button
                  @click="login"
                  class="btn btn-primary border-0 py-2 px-3 w-100"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { AuthService } from "@/services/auth.service";

@Options({})
export default class LoginPage extends Vue {
  credentials: Record<string, string> = {
    email: "",
    password: "",
  };

  async login(): Promise<void> {
    try {
      const { email, password } = this.credentials;
      const auth = new AuthService();
      const data = await auth.login(email, password);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
