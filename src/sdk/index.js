import Tracker from '@openreplay/tracker';
import { getCache } from "../lib/storage"

export const defaultConfig = {
  projectKey: "gmf3VdFFqHhH2xdFHAbU",
  __DISABLE_SECURE_MODE: true
}

const config = Object.assign(defaultConfig, getCache())

const tracker = new Tracker(config);

tracker.start();
