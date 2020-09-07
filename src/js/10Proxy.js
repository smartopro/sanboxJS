// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (target, prop) => prop in target ? target[prop] : defaultValue
    });
}

const position = withDefaultValue({x: 24, y: 42}, 0);

// Hidden properties
const withHiddenProps = (target, prefix = "_") => {
    return new Proxy(target, {
        // есть свойство или нет
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),

        // какие ключи имеются у объекта
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0,
        set: (obj, prop, value, receiver) => obj[prop] = (prop in receiver) ? value : obj[prop]
    });
}

const data = withHiddenProps({
    name: "Ilya",
    age: 33,
    _id: 42
})

// Optimization
const userData = [
    {id: 1, name: "Ilya", age: 33},
    {id: 2, name: "Asya", age: 32},
    {id: 3, name: "Keks", age: 2},
]

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {};
        args.forEach(item => index[item.id] = item);

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case "push": return item => {
                        index[item.id] = item;
                        arr[prop].call(arr, item);
                    }
                    case "findById": return id => index[id];
                    default: return arr[prop]
                }
            }
        });
    }
})

const users = new IndexedArray(userData);
