<template>
  <div :class="`container-fluid bg-${notification.color}`">
    <div
      class="row justify-content-center align-items-center"
      style="min-height: 90vh"
    >
      <div class="col-12 col-sm-8 col-md-6 col-xl-4">
        <div :class="`card bg-white border-0`">
          <div class="card-body">
            <div class="text-center w-100">
              <img
                :src="require(`@/assets/${notification.picture}`)"
                alt="Picture"
              />
            </div>
            <h1 class="text-center mt-3">{{ notification.title }}</h1>
            <p class="text-muted text-center">{{ notification.subtitle }}</p>
            <div
              v-if="notification.status === 'pending'"
              class="progress"
              style="height: 10px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { LocationQuery } from "vue-router";

import { AuthService } from "@/services/auth.service";

enum STATUS {
  PENDING = "pending",
  COMPLETED = "completed",
  ERROR = "error",
}

@Options({})
export default class VerifyEmail extends Vue {
  notification: Record<string, string | boolean> | null = {
    picture: "picture-one.png",
    title: "Email verification",
    subtitle: "Your request is being processed.",
    status: STATUS.PENDING,
  };

  created(): void {
    // We carry out the verification.
    this.verifyAccount(this.$route.query);
  }

  private async verifyAccount(query: LocationQuery): Promise<void> {
    try {
      // Instance class.
      const { verifySignUp } = new AuthService();
      // Send request to the server.
      const user = await verifySignUp((query.token as string) || "");
      // Show sucess message.
      this.notification = {
        picture: "picture-three.png",
        title: "Verified account",
        subtitle: `${user.fullname} Your account has been verified successfully`,
        color: "primary",
        status: STATUS.ERROR,
      };
    } catch (error) {
      // Show failure message.
      this.notification = {
        picture: "picture-two.png",
        title: "Error",
        subtitle: error.message || "An error occurred during the operation.",
        color: "danger",
        status: STATUS.ERROR,
      };
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 20px;
}
img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
