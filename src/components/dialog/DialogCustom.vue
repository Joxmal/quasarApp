<template>
    <q-btn @click="show">abrir dialog</q-btn>
    
    <q-dialog ref="dialogRef" seamless @hide="onDialogHide">
        <q-card class="q-dialog-plugin">
          <q-card-section>
            <slot>
              {{something}}
            </slot>
            <slot name="main"></slot>        
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="primary" label="OK" @click="onDialogOK" />
            <q-btn color="primary" label="Cancel" @click="onDialogCancel" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </template>
    
    <script setup>
    import { useDialogPluginComponent } from 'quasar'
    import {onMounted} from 'vue'
    
    const props = defineProps({
      something: {
          type: String,
          default: 'contenido por default'
        }
    })
    
    defineEmits([
      // REQUIRED; need to specify some events that your
      // component will emit through useDialogPluginComponent()
      ...useDialogPluginComponent.emits
    ])
    
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*...*/ }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome
    
    // this is part of our example (so not required)
    function onOKClick () {
      // on OK, it is REQUIRED to
      // call onDialogOK (with optional payload)
      onDialogOK()
      // or with payload: onDialogOK({ ... })
      // ...and it will also hide the dialog automatically
    }
    
    function show() {
          dialogRef.value.show()
        }
    
    onMounted(()=>{
      onDialogHide(dialogRef.value)
    })
    
    </script>