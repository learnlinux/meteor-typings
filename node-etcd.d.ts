declare module 'node-etcd' {
   import * as Etcd from 'node-etcd';
   export class Etcd {
      constructor(hosts?: any, options?: any);
      compareAndDelete(key: any, oldvalue: any, options: any, callback: any): any;
      compareAndSwap(key: any, value: any, oldvalue: any, options: any, callback: any): any;
      create(dir: any, value: any, options: any, callback: any): any;
      del(key: any, options?: any, callback: any): any;
      delSync(key: any, options: any): any;
      delete(key: any, options?: any, callback: any): any;
      get(key: any, options?: any, callback: any): any;
      getHosts(): any;
      getSync(key: any, options: any): any;
      leader(callback: any): any;
      leaderStats(callback: any): any;
      machines(callback: any): any;
      mkdir(dir: any, options: any, callback: any): any;
      mkdirSync(dir: any, options: any): any;
      post(dir: any, value: any, options: any, callback: any): any;
      raw(method: any, key: any, value: any, options: any, callback: any): any;
      rmdir(dir: any, options: any, callback: any): any;
      rmdirSync(dir: any, options: any): any;
      selfStats(callback: any): any;
      set(key: any, value: any, options: any, callback: any): any;
      setSync(key: any, value: any, options: any): any;
      testAndDelete(key: any, oldvalue: any, options: any, callback: any): any;
      testAndSet(key: any, value: any, oldvalue: any, options: any, callback: any): any;
      version(callback: any): any;
      watch(key: any, options: any, callback: any): any;
      watchIndex(key: any, index: any, options: any, callback: any): any;
      watcher(key: any, index: any, options: any): any;
   }
}
