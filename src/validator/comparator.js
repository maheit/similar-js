const isAlNum = (value) => {
  const dataType = typeof value;
  if (
    (dataType === "number" ||
      (dataType === "string" &&
        value &&
        value.toLowerCase() !== "null" &&
        value.toLowerCase() !== "undefined")) &&
    !!value.toString()
  ) {
    return true;
  }
  return false;
};

const isNumber = (value) => {
  if (typeof value === "number") {
    return true;
  }
  return false;
};

const isString = (value) => {
  if (typeof value === "string") {
    return true;
  }
  return false;
};

const isObject = (value) => {
  const dataType = typeof value;
  if (dataType === "object" && value !== null) {
    return true;
  }
  return false;
};

const isObjectDeepEqual = (
  a = {},
  b = {},
  {
    exactObject = true,
    exactArray = true,
    swapCompObject = true,
    swapCompArray = true,
  } = {
    exactObject: true,
    exactArray: true,
    swapCompObject: true,
    swapCompArray: true,
  }
) => {
  a = { ...a };
  b = { ...b };
  const metadata = {
    exactObject,
    exactArray,
    swapCompObject,
    swapCompArray,
  };

  // Create arrays of property names
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (metadata.exactObject && aProps.length != bProps.length) {
    return false;
  }

  let properties = aProps;
  if (metadata.swapCompObject) {
    if (aProps.length > bProps.length) {
      properties = bProps;
    }
  }
  for (let i = 0; i < properties.length; i++) {
    let propName = properties[i];
    if (!isSimilar(a[propName], b[propName], metadata)) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
};

export const isSimilar = (
  a,
  b,
  {
    exactObject = true,
    exactArray = true,
    swapCompObject = true,
    swapCompArray = true,
  } = {
    exactObject: true,
    exactArray: true,
    swapCompObject: true,
    swapCompArray: true,
  }
) => {
  const metadata = {
    exactObject,
    exactArray,
    swapCompObject,
    swapCompArray,
  };
  let isConditionChecked = true;
  if (a && b) {
    if (isNumber(a) && isNumber(b)) {
      if (a !== b) {
        return false;
      }
    } else if (isString(a) && isString(b)) {
      if (a !== b) {
        return false;
      }
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (!isArrayDeepEqual(a, b, metadata)) {
        return false;
      }
    } else if (isObject(a) && isObject(b)) {
      if (!isObjectDeepEqual(a, b, metadata)) {
        return false;
      }
    } else {
      isConditionChecked = false;
    }
  } else {
    isConditionChecked = false;
  }
  if (!isConditionChecked && a !== b) {
    return false;
  }
  return true;
};

const isArrayDeepEqual = (
  firstArray,
  secondArray,
  {
    exactObject = true,
    exactArray = true,
    swapCompObject = true,
    swapCompArray = true,
  } = {
    exactObject: true,
    exactArray: true,
    swapCompObject: true,
    swapCompArray: true,
  }
) => {
  let a = [...firstArray];
  let b = [...secondArray];
  const metadata = {
    exactObject,
    exactArray,
    swapCompObject,
    swapCompArray,
  };

  let result = true;
  const isEqualSize = firstArray.length === secondArray.length;
  if (metadata.exactArray && !isEqualSize) {
    return false;
  }
  let lesserItems = a,
    maxItems = b;
  if (metadata.swapCompArray) {
    lesserItems = a.length > b.length ? b : a;
    maxItems = a.length > b.length ? a : b;
  }

  result = lesserItems.every((aValue, index) => {
    let bMatchedIndex = -1;
    // return secondArray.includes(value);
    const matched = maxItems.find((bValue, index) => {
      if (isSimilar(aValue, bValue, metadata)) {
        bMatchedIndex = index;
        return true;
      }
      return false;
    });
    if (bMatchedIndex < 0) {
      return false;
    }
    b.splice(bMatchedIndex, 1);
    return true;
  });

  return result;
};
