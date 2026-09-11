import { ba as defineNuxtRouteMiddleware, bb as storeToRefs, aW as useAuthStore, n as navigateTo } from "../server.mjs";
import "vue";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/unctx/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/defu/dist/defu.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/klona/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/destr/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ohash/dist/index.mjs";
import "@antfu/utils";
import "vue/server-renderer";
const guest = defineNuxtRouteMiddleware(() => {
  const { isAuth } = storeToRefs(useAuthStore());
  if (isAuth.value) {
    return navigateTo("/");
  }
});
export {
  guest as default
};
