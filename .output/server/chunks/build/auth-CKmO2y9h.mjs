import { bb as defineNuxtRouteMiddleware, bc as storeToRefs, aW as useAuthStore, n as navigateTo, f as useRuntimeConfig } from './server.mjs';
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
import '@antfu/utils';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig();
  if (!config.public.authEnabled)
    return;
  const { isAuth } = storeToRefs(useAuthStore());
  if (!isAuth.value) {
    return navigateTo({ name: "login" });
  }
});

export { auth as default };
