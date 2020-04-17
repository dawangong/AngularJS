class Scope {
  constructor() {
    this.$$watchers = []
  }

  $watch(watchFn, listenerFn = () => {
  }, deep) {
    const watcher = {
      watchFn,
      listenerFn,
      deep: !!deep
    };
    this.$$watchers.push(watcher);
  }

  $digest() {
    let ttl = 10;
    let dirty;
    do {
      if (!ttl) return false;
      this.$$watchers.forEach(watch => {
        const newValue = watch.watchFn(this);
        const oldValue = watch.last;
        const deep = watch.deep;
        if (!this.$equal(newValue, oldValue, deep)) {
          watch.listenerFn(newValue, oldValue, this);
          dirty = true
        }
        watch.last = deep ? this.$cloneDeep(newValue) : newValue;
      });
      ttl--
    } while (dirty);
  }

  $eval(expr, locals) {
    return expr(this, locals);
  };

  $apply(expr) {
    try {
      return this.$eval(expr);
    } finally {
      this.$digest();
    }
  };

  $equal(now, origin, deep) {
    return deep ? JSON.stringify(origin) === JSON.stringify(now) : origin === now || (typeof now === 'number' && typeof origin === 'number' &&
      isNaN(now) && isNaN(origin));
  }

  $cloneDeep(origin) {
    return JSON.parse(JSON.stringify(origin))
  }
}
