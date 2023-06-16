function displayProperty(prop, element)
{
    if (!prop[element]) {
        console.log(`Property '${element}' does not exist in the object.`);
    }else
        console.log(`${element}: ` + prop[element]);
}

displayProperty(person, "name");
