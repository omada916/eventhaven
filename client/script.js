let d = document;
window.reqType = "Read"
var pathd, datad;
async function request(url, way) {
    try {
        pathd = d.getElementById("1").value;
        datad = d.getElementById("2").value;
        const response = await fetch(url, {
            method: way,
            body: JSON.stringify({
                path: pathd,
                data: datad,
            }),
            headers: {
                "Content-type": "application/JSON; charset=UTF-8",
            },
        });
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (e) {
        console.error(e);
    }
}
async function makereq() {
    const ret = await request(`/api/${window.reqType}`, "POST");
    d.getElementById("b").innerHTML = ret;
    console.log(ret);
}
function t() {
    if (window.reqType === "Read") {
        window.reqType = "Write";
    } else {
        window.reqType = "Read";
    }
    d.getElementById("td").innerHTML = window.reqType;
}