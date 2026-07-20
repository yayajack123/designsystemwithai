import { d as defineEventHandler, u as useRuntimeConfig, j as joinURL, p as proxyRequest } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _____ = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;
  const sanctumBaseUrl = config.public.sanctumBaseUrl;
  let path = "";
  let target = "";
  if (event.path.includes("/api/sanctum")) {
    path = event.path.replace(/^\/api\/sanctum\//, "/");
    target = joinURL(sanctumBaseUrl, path);
  } else if (event.path.includes("/api")) {
    path = event.path.replace(/^\/api\//, "/");
    target = joinURL(apiBaseUrl, path);
  }
  return proxyRequest(event, target, {
    headers: {
      "Accept-Encoding": "gzip, deflate, br"
    }
  });
});

export { _____ as default };
