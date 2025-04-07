function isSameNull(objA: unknown, objB: unknown) {
  return objA === objB;
}

function isSameUndefiend(objA: unknown, objB: unknown) {
  return objA === objB;
}

function isSameArray<T>(arrA: T[], arrB: T[]) {
  const arrayA = JSON.parse(JSON.stringify(arrA));
  const arrayB = JSON.parse(JSON.stringify(arrB));
  if (arrayA.length !== arrayB.length) return false;
  for (let i = 0; i < arrayA.length; i++) {
    if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
      return deepEquals(arrayA[i], arrayB[i]);
    }
    if (typeof arrayA[i] === "object" && typeof arrayB[i] === "object") {
      return deepEquals(arrayA[i], arrayB[i]);
    }
    if (arrayA[i] !== arrayB[i]) return false;
  }
  return true;
}

function isSameObject<T extends Record<string, unknown>>(objA: T, objB: T) {
  const objectA = JSON.parse(JSON.stringify(objA));
  const objectB = JSON.parse(JSON.stringify(objB));

  const checkEquals = Object.entries(objectA).map(([key, value]) => {
    if (typeof value === "object" || Array.isArray(value)) {
      return deepEquals(objectA[key], objectB[key]);
    }
    if (objectA[key] !== objectB[key]) {
      return false;
    } else {
      return true;
    }
  });
  if (checkEquals.includes(false)) {
    return false;
  } else {
    return true;
  }
}

export function deepEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) return true;
  if (objA === undefined || objB === undefined) {
    return isSameUndefiend(objA, objB);
  }
  if (objA === null || objB === null) return isSameNull(objA, objB);
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return isSameArray(objA as unknown[], objB as unknown[]);
  }

  if (typeof objA === "object" && typeof objB === "object") {
    return isSameObject(
      objA as Record<string, unknown>,
      objB as Record<string, unknown>,
    );
  }
  return objA === objB;
}
