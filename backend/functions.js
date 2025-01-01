import { ref, get, set, update, remove, child } from "firebase/database";

export const getData = async (db, path, pname) => {
    var data = 'Nothing was run';
    var dbRef = ref(db, path)
    await get(child(dbRef, pname))
        .then((snapshot) => {
            data = snapshot.exists();
            if (snapshot.exists()) {
                data = snapshot.val();
            } else {
                data = "No";
            }
        })
        .catch((error) => {
            data = `Error: ${error}`
        });
    return data;
}

export const writeData = async (db, path, data) => {
    var output = 'Nothing was run';
    var dbRef = ref(db, path)
    await set(dbRef, data)
        .then(() => {
            output = 'Data was written';
        })
        .catch((error) => {
            output = `Error: ${error}`
        });
    console.log(output);
}