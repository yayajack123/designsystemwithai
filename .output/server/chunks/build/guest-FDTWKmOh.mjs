import { bb as defineNuxtRouteMiddleware, n as navigateTo, bc as storeToRefs, aW as useAuthStore, f as useRuntimeConfig } from './server.mjs';
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

const guest = defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig();
  if (!config.public.authEnabled)
    return navigateTo("/");
  const { isAuth } = storeToRefs(useAuthStore());
  if (isAuth.value) {
    return navigateTo("/");
  }
});

export { guest as default };
