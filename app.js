/**
 * Call All DOM Elements
 */
const addNewProduct = document.getElementById("addNewProduct");
const msg = document.getElementById("msg");
const productList = document.getElementById("productList");

/**
 * Show all Products Function
 */
const allProducts = () => {
    //Receive all data from Local Storage function to allItems varibale
    let allItems = redaData("product");

    //Data check. If unavailable show this
    if (!allItems) {
        productList.innerHTML = `<td colspan="6" class="text-center">No Products Found</td>`;
    }

    //Data check. If available show all products
    if (allItems) {
        //init value to store the data
        let list = "";

        //Running Map loop for showing the data on DOM
        allItems.map((item, index) => {
            //add new data to list variable and show on DOM
            list += `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${item.photo}" alt=""></td>
                <td>${item.itemName}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${item.price * item.qty}</td>
                <td>
                    <a class="btn btn-info" href="#"><i class="fas fa-edit"></i></a>
                    <a class="btn btn-success" href="#"><i class="fas fa-eye"></i></a>
                    <a class="btn btn-danger" href="#"><i class="fas fa-trash"></i></a>
                </td>
            </tr>`;
        });
        //add new data to list variable and show on DOM
        productList.innerHTML = list;
    }
};

//Call all Products Function
allProducts();

/**
 * Add New Product Form Submit Event
 */
addNewProduct.onsubmit = (e) => {
    //to stop loading
    e.preventDefault();

    //Make the Form Data into Object
    const form_data = new FormData(e.target);
    let products = Object.fromEntries(form_data.entries());
    let { photo, itemName, qty, price } = Object.fromEntries(form_data.entries());

    //Form Validation
    if (!photo || !itemName || !qty || !price) {
        msg.innerHTML = getAlert("All Fields are required");
    } else {
        createLSData("product", products);
        msg.innerHTML = getAlert("Data Stable", "success");
        //To reset the form data
        e.target.reset();
        //Call all Products Function to show the data on DOM instantly
        allProducts();
    }
};