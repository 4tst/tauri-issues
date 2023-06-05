<template>
  <div class="about">
      <button @click="checkForUpdate">check for update</button>
  </div>
</template>

<script lang="ts" setup>
import { type UnlistenFn } from '@tauri-apps/api/event';
import { checkUpdate, onUpdaterEvent } from '@tauri-apps/api/updater';

let unlisten: UnlistenFn | undefined = undefined;

onMounted(async () => {
  // FIXME: not work
  unlisten = await onUpdaterEvent(({ error, status }) => {
    console.log('Updater event', error, status);
  });
  console.log(unlisten)
})
const checkForUpdate = () => {
  console.log("checkForUpdate")
  checkUpdate().then(({ shouldUpdate, manifest }) => {
    console.log(shouldUpdate, manifest)
  }).catch(e => {
    console.error(e)
  })
}
onUnmounted(() => {
  console.log("unmounted")
  if (unlisten) {
    unlisten()
  }
})

</script>

<style scoped>

button{
  border: 2px solid black;
  width: 200px;
}

</style>
