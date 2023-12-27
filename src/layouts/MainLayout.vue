<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="store.menuActivar ? 'mdi-menu-close' : 'mdi-menu-open'"
          aria-label="Menu"
          @click="store.mostrarMenu()"
        />

        <q-toolbar-title>
          APLICACIÓN QUASAR
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="store.menuActivar"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { linksList } from 'src/router/link-list'
import EssentialLink from 'components/EssentialLink.vue'
import {useMenuStore} from 'stores/menu'

const store = useMenuStore()

</script>
