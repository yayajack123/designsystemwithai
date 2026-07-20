import { b7 as defineNuxtRouteMiddleware, b8 as storeToRefs, aU as useAuthStore, n as navigateTo } from './server.mjs';
import 'vue';
import 'node:http';
import 'node:https';
import '../nitro/nitro.mjs';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-devtools-stub';
import '@antfu/utils';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware(() => {
  const { isAuth } = storeToRefs(useAuthStore());
  if (!isAuth.value) {
    return navigateTo({ name: "login" });
  }
});

export { auth as default };
