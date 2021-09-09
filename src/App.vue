<template>
  <div id="nav">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light border-0 shadow py-2"
    >
      <div class="container-fluid">
        <router-link :to="{ name: 'Home' }" class="text-decoration-none">
          <a class="navbar-brand" href="#">Feathers</a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Login' }">
                <button class="btn border-0">Login</button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Register' }" class="nav-link">
                <button class="btn btn-primary border-0 py-2 px-3">
                  Create account
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <main>
    <div class="">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>
