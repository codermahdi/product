/**
 * Alert Funtion
 */
const getAlert = (text, type = "danger") => {
    return `<p class="alert alert-${type} alert-dismissible w-75 m-auto mt-5">${text}!<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
};

/**
 * Get Local Storage Data by putting the key of that Data
 */
const redaData = (key) => {
    //Check the key is available or not. If available take that as array by doing JSON.parse() for showing that data on DOM.
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }
};

/**
 * Set Local Storage Data by putting the key & value of that Data
 */
const createLSData = (key, value) => {
    //Take array variable. Init empty array
    let data = [];

    //Check the key value is available or not. If available take that as array by doing JSON.parse().
    if (localStorage.getItem(key)) {
        data = JSON.parse(localStorage.getItem(key));
    }
    //Add the value to existing key value
    data.push(value);
    //Set new value to Local Storage as JSON stringify
    localStorage.setItem(key, JSON.stringify(data));
};