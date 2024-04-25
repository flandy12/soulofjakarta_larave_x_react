function GetSubNavbar(e) {
    // const id_element = document.getElementById((e.target.getAttribute('data-target')));
    // id_element.classList.replace('hidden','add');
    console.log(e);
}

const removeSubNavbar = (e) => {
    const id_element = document.getElementById(e.target.id);
    if (id_element) {
        id_element.classList.replace("add", "hidden");
    }
};

const removeSubNavbarS = (e) => {
    const id_element = document.getElementById(
        e.target.getAttribute("data-target")
    );
    id_element.classList.replace("add", "hidden");
};

export { GetSubNavbar, removeSubNavbar, removeSubNavbarS };
