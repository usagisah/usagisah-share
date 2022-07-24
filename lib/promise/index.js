Promise.each = async function (ary, fn, filter = true) {
  const size = ary.length
  const result = []
  let i = 0
  while (i < size) {
    result.push(await Promise.resolve(fn(ary[i], i)))
    i++
  }

  const promise = Promise.all(result)
  return filter
    ? promise.then(ary => ary.filter(v => v !== undefined))
    : promise
}
Promise.map = async function (ary, fn, options) {
  let _concurrent = 1
  let _filter = true
  if (typeof options === "number" && options > 0) {
    _concurrent = options
  }
  if (typeof options === "object") {
    const { concurrent, filter } = options
    if (typeof concurrent === "number" && concurrent > 0) {
      _concurrent = concurrent
    }
    if (typeof filter === "boolean") {
      _filter = filter
    }
  }

  const size = ary.length
  let result = []

  return new Promise((resolve, reject) => {
    let linked = 0
    let resolved = 0

    let error
    let hasError = false

    let i = 0

    const next = index => {
      if (resolved >= size) {
        if (_filter) {
          result = result.filter(value => value !== undefined)
        }
        return resolve(result)
      }
      if (hasError) {
        reject(error)
      }
      if (linked >= _concurrent) {
        i--
        return
      }

      linked++
      Promise.resolve(fn(ary[index], index)).then(value => {
        result.splice(index, 0, value)
        linked--
        resolved++
        next(++i)
      })

      next(++i)
    }

    try {
      next(i)
    } catch (e) {
      hasError = true
      error = e
    }
  })
}
Promise.props = async function (obj, fn, filter = true) {
  const promise = Promise.all(
    Object.keys(obj).map((key, index) => fn(key, obj[key], index, obj))
  )
  return filter
    ? promise.then(ary => ary.filter(v => v !== undefined))
    : promise
}
Promise.delay = async function (ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms))
}
Promise.method = function (fn) {
  return async value => Promise.resolve(fn(value))
}
Promise.methods = function (...fns) {
  return async value => {
    const size = fns.length
    let i = -1
    while (++i < size) {
      value = await Promise.resolve(fns[i](value, i))
    }
    return value
  }
}
Promise.fn = async function (fn) {
  return Promise.resolve(fn())
}

Promise.prototype.each = function (fn, filter) {
  return this.then(ary => Promise.each(ary, fn, filter))
}
Promise.prototype.map = function (fn, options) {
  return this.then(ary => Promise.map(ary, fn, options))
}
Promise.prototype.props = function (fn, filter) {
  return this.then(obj => Promise.props(obj, fn, filter))
}
Promise.prototype.delay = function (ms) {
  return this.then(value => Promise.delay(ms, value))
}
