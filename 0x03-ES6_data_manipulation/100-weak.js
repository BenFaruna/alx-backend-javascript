let counter = 0;
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (counter < 5) {
    weakMap.set(endpoint, counter += 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}
