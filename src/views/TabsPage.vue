<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>GoGo! San Diego</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="pt-1">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="balloon" />
          <ion-label>GoGo!</ion-label>
        </ion-tab-button>
        <!-- <ion-tab-button tab="favorites" href="/tabs/favorites">
          <ion-icon :icon="heart" />
          <ion-label>Favorites</ion-label>
        </ion-tab-button> -->
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue";
import { balloon } from "ionicons/icons";
</script>
