<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="new" :fullscreen="true">
      <div class="flex flex-col h-full">
        <div class="flex justify-end">
          <ion-button color="new">
            <ion-icon
              :icon="heartOutline"
              color="danger"
              size="large"
            ></ion-icon>
          </ion-button>
        </div>
        <div class="mb-12 px-2">
          <ion-text color="light">
            <h1 class="text-5xl">Let's Adventure to...</h1>
          </ion-text>
        </div>
        <div>
          <div class="px-3">
            <div class="bg-white">
              <ion-text color="dark">
                <h1 class="p-3 text-center text-3xl">
                  {{ activity }}
                </h1>
              </ion-text>
            </div>
            <div class="bg-white">
              <ion-text color="dark">
                <h1 class="p-3 text-center text-3xl">
                  {{ location }}
                </h1>
              </ion-text>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <ion-button
              :strong="true"
              size="large"
              color="new-accent"
              @click="rollAdventure"
            >
              <ion-icon
                slot="start"
                :icon="diceOutline"
                color="light"
                v-if="!loading"
              ></ion-icon>
              <ion-text color="light" v-if="!loading">Re-roll</ion-text>
              <ion-spinner
                name="dots"
                color="light"
                v-if="loading"
              ></ion-spinner>
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonIcon, IonPage } from "@ionic/vue";
import { diceOutline, heartOutline } from "ionicons/icons";
import { ref } from "vue";

const activity = ref<string>("???");
const location = ref<string>("???");
const loading = ref<boolean>(false);

function rollAdventure() {
  loading.value = true;

  // TODO: make api call
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}
</script>
