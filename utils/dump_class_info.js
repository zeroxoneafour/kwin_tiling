function getProps(obj) {
    let result = [];
    for (const id in obj) {
        try {
            result.push("* " + id + ": " + obj[id].toString());
        } catch (err) {
            // idk
        }
    }
    return result;
}

print(getProps(class_name).join("\n"));
