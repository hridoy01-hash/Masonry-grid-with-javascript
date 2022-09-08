(async function () {
    const BUSINESS_ID = "61d51889a8061fb905186c6b";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    // show item img from api
    const allTopCatagoriesItem = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/items?limit=8`);

    function showTopCatagories(allTopCatagoriesItem) {
        for (let i = 0; i < allTopCatagoriesItem.length; i++) {
            const singleItem = allTopCatagoriesItem[i];
            console.log("singleItem", singleItem);
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleItem?._id}/${singleItem?.image}`;
            const s0206_top_catagories_single_product = elementMaker("div", ["s0206_top_catagories_single_product", "s0206_product_1"]);
            const s0206_top_catagories_top_area = elementMaker("div", ["s0206_top_catagories_top_area"]);
            s0206_top_catagories_single_product.appendChild(s0206_top_catagories_top_area);
            const s0206_product_image = elementMaker("div", ["s0206_product_image"]);
            s0206_top_catagories_top_area.appendChild(s0206_product_image);
            const productImage = elementMaker("img", ["s0206_product_img"]);
            setAttributes(productImage, { "src": `${FeatureImage}` });
            s0206_product_image.appendChild(productImage);

            const s0206_top_catagories_bottom_area = elementMaker("div", ["s0206_top_catagories_bottom_area"]);
            s0206_top_catagories_single_product.appendChild(s0206_top_catagories_bottom_area);
            const product_name_container = elementMaker("div", ["product_name_container"]);
            s0206_top_catagories_bottom_area.appendChild(product_name_container);
            const s0206_product_name = elementMaker("p", ["s0206_product_name"]);
            s0206_product_name.innerText = `${singleItem?.name}`;
            product_name_container.appendChild(s0206_product_name);






            document.querySelector(".s0206_top_catagories_all_product").appendChild(s0206_top_catagories_single_product);
        }

    };
    showTopCatagories(allTopCatagoriesItem)


    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };

})();