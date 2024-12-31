let d = document;
window.reqType = "Read"
var pathd, datad;
async function request(url, way, body) {
    function g(id) {
        return d.getElementById(id);
    }
    try {
        pathd = d.getElementById("1").value;
        datad = d.getElementById("2").value;
        const response = await fetch(url, {
            method: way,
            body,
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
function createEvent(name, time) {
    var eventInfo = {
        name,
        info: {
            time,
            location: g()
        }
    }
}
function t() {
    if (window.reqType === "Read") {
        window.reqType = "Write";
    } else {
        window.reqType = "Read";
    }
    d.getElementById("td").innerHTML = window.reqType;
}