function isSameNull(objA: unknown, objB: unknown) {
  return objA === objB;
}

function isSameUndefiend(objA: unknown, objB: unknown) {
  return objA === objB;
}

function isSameArray<T>(arrA: T[], arrB: T[]) {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
}

function isSameObject<T extends Record<string, unknown>>(objA: T, objB: T) {
  let result = false;
  Object.keys(objA).forEach(([key]) => {
    if (objA[key] === objB[key]) {
      result = true;
    } else {
      result = false;
    }
  });
  return result;
}
export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (objA === null || objB === null) return isSameNull(objA, objB);
  if (objA === undefined || objB === undefined)
    return isSameUndefiend(objA, objB);
  // 배열일때
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return isSameArray(objA as unknown[], objB as unknown[]);
  }
  // 객체일때
  if (typeof objA === "object" && typeof objB === "object") {
    return isSameObject(
      objA as Record<string, unknown>,
      objB as Record<string, unknown>,
    );
  }
  return objA === objB;
}
