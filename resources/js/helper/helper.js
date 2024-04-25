const fetchData = async (url, method, data) => {
    try {
        let main_url =
            import.meta.env.VITE_APP_ENVIRONMENT !== "production"
                ? `${import.meta.env.VITE_URL_DEV}`
                : `${import.meta.env.VITE_URL}`;

        const formData = new FormData();

        let headers = {
            method: method,
            headers: {
                Authorization:
                    import.meta.env.VITE_APP_ENVIRONMENT !== "production"
                        ? `Bearer ${import.meta.env.VITE_KEY_DEV}`
                        : `Bearer ${import.meta.env.VITE_KEY}`,
            },
            body: data ? formData : null,
        };

        if (data) {
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
        }

        const res = await fetch(`${main_url}${url}`, headers);

        const ressponse = res.json();
        return ressponse;
    } catch (error) {
        console.error("Error:", error);
    }
};

const awarenes = async (url, type) => {
    const filters = [];
    const getIdAds = [];

    filters["type"] = type;
    filters["id"] = getIdAds;

    fetchData("ads/awareness/store", "POST", filters);
};

const awarenes_article_ads = async (AdsRoutes, type) => {
    const filters = [];
    const getIdAds = [];
    const adsRoute = AdsRoutes;

    filters["type"] = type;

    adsRoute.forEach((value, key) => {
        getIdAds[key] = value["id"];
    });

    filters["id"] = getIdAds;

    fetchData("ads/awareness/store", "POST", filters);
};

const defaulString = (value) => {
    let value_string = value.replace(/-/g, " ");
    value_string = value_string.replace("+", ",");
    return value_string;
};

const defaulStringIndex = (value) => {
    let value_string = value.replace(/-/g, " ");
    value_string = value_string.replace("+", ",");
    return value_string;
};

const removeSpace = (value) => {
    let value_string = value.replace(/\s+/g, "-");
    // value_string = value_string.replace(/ /g, "-");
    value_string = value_string.replace(/[^\w\s\-&]/g, "");
    return value_string;
};

function capitalizeFirstLetter(word) {
    if (typeof word !== "string" || word.length === 0) {
        // Pastikan input berupa string yang tidak kosong
        return word;
    }
    return word[0].toUpperCase() + word.slice(1);
}

const getData = async () => {
    try {
        const response = await fetch("https://geolocation-db.com/json/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ip not found" + error);
    }
};

export {
    fetchData,
    removeSpace,
    defaulString,
    capitalizeFirstLetter,
    awarenes,
    awarenes_article_ads,
    getData,
    defaulStringIndex,
};
