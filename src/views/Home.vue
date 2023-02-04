<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="new" :fullscreen="true">
      <div class="flex flex-col align-center justify-center h-full">
        <div class="mb-12">
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
              ></ion-icon>
              <ion-text color="light">Re-roll</ion-text>
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonIcon, IonPage } from "@ionic/vue";
import { diceOutline } from "ionicons/icons";
import { ref } from "vue";

const activity = ref("???");
const location = ref("???");

function rollAdventure() {
  console.log("hello");
}
</script>
