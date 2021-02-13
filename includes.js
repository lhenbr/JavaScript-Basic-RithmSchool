// add whatever parameters you deem necessary - good luck!
function includes(collection, value, strIndex) {
    if (typeof (collection) == "string" || Array.isArray(collection)) {
        collection = collection.slice(strIndex);
        if (collection.includes(value))
            return true;
        return false;
    }
    else {
        if (value in collection)
            return true;
        return false;
    }
}