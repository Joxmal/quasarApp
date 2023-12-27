<template>
  <q-page class="flex column">
    <!-- <h1>typography</h1> -->
    <span class="text-h1 q-pa-xs">typography</span>
    <span class="text-h1 p-3">typography</span>
    <span class="text-h1 p-3">typography</span>
    <q-separator spaced inset/>
    <q-btn color="primary" icon="mdi-dots-horizontal" label="OK" @click="store.mostrarMenu()" />
    <q-separator spaced inset/>
     
    <div class="row q-mb-md">
      <div class="col col-12 col-md-6  col bg-primary"> a</div>
      <div class="col col-12 col-md-6 bg-secondary"> b </div>

    </div>
    <DialogCustom @ok="ver">
      
      
    </DialogCustom>


  </q-page>
</template>

<script setup>
import {useMenuStore} from '../stores/menu'
import DialogCustom from 'components/dialog/DialogCustom.vue'

const store = useMenuStore()


function ver(ver){
  console.log(ver)
}
</script>
