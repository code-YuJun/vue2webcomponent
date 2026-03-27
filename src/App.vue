<script setup>
import { register } from './CustomElement/index';
register("dark-mode-switch");
</script>

<template>
    <dark-mode-switch />
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>