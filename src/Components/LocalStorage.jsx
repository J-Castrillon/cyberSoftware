export const storage = (key, item) => {
    let actual = actualStorage('savedNews');

    Array.isArray(actual) ? actual.push(item) : actual = [item];

    localStorage.setItem(key, JSON.stringify(actual));
}

export const actualStorage = (key) => {
    let actual = JSON.parse(localStorage.getItem(key));

    return actual;
}

export const deleteStorage = (item, setSaved) => {
    let actual = actualStorage('savedNews');

    let updateSaved = actual.filter(article => article.title !== item.title);

    localStorage.setItem('savedNews', JSON.stringify(updateSaved));

    setSaved(updateSaved);
}

