/*Creando la base de datos con indexedDB*/

/*Creamos una variable con ayuda del objeto indexedDB.
No todos los navegadores tienen este objeto por lo que hay 
que hacer lo siguiente:
*/

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            //Para crear la base de datos:
            var dataBase = null;
            
            function startDB() {
                //  dataBase=indexedDB.open("nombre de la base","versión de la base")
                dataBase = indexedDB.open("object", 1);
                //Para crear la colección(tabla) necesitamos utilizar el siguiente método
//Se ejecutará al abrir la base de datos o crear una nueva versión

    dataBase.onupgradeneeded = function (e) {

    var active = dataBase.result;                    
    
    var object = active.createObjectStore('people', { keyPath : 'id', autoIncrement : true });
                    //Con el método createObjectStore creamos la colección

/*activate.createObjectStore("coleccion",opciones);
Colección:El nombre del almacen de objetos(tabla)
Opciones: Un objeto con las propiedades keyPath(Llave única de nuestra colección(primaryKey)),
autoIncrement para incrementar automáticamente la llave
*/

object.createIndex('by_name', 'name', { unique : false });
object.createIndex('by_numCta', 'numCta', { unique : true});

};
//Controlando el resultado
/*
onsucces: Se ejecuta cuando la creación fue éxitosa
onerror: Se ejecuta cuando ocurrio algún error
*/
dataBase.onsuccess = function (e) {
    alert('Base de datos cargada');
    loadAll();
};

dataBase.onerror = function (e) {
    alert('Error al cargar la base de datos');
};

}


/*----------------------------------------Agregar elementos---------------------------------*/
function add() {

    var active = dataBase.result;

    var data = active.transaction(["people"], "readwrite");
    
    var object = data.objectStore("people");

    var request = object.put({
        numCta : document.querySelector("#numCta").value,
        name : document.querySelector("#name").value.toLowerCase(),
        surname : document.querySelector("#surname").value
    });

    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {
        document.querySelector('#numCta').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#surname').value = '';
        alert('Elemento agregado correctamente');
        loadAll();
    };
}


/*----------------------------------------Cargar elementos---------------------------------*/
function load(id) {

    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");

    var request = object.get(parseInt(id));

    request.onsuccess = function () {

        var result = request.result;

        if (result !== undefined) {
            alert("ID: " + result.id + "\n\
                numCta: " + result.numCta + "\n\
                Name: " + result.name + "\n\
                Surname: " + result.surname);
        }
    };
}

/*----------------------------------------Cargar por número de cuenta---------------------------------*/
function loadBynumCta(numCta) {

    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");
    var index = object.index("by_numCta");

    var request = index.get(String(numCta));

    request.onsuccess = function () {

        var result = request.result;

        if (result !== undefined) {
            alert("ID: " + result.id + "\n\
                numCta: " + result.numCta + "\n\
                Name: " + result.name + "\n\
                Surname: " + result.surname);
        }
    };
}

function loadAll() {

    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");

    var elements = [];

    object.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function() {

        var outerHTML = '';

        for (var key in elements) {

            outerHTML += '\n\
            <tr>\n\
            <td>' + elements[key].numCta + '</td>\n\
            <td>' + elements[key].name + '</td>\n\
            <td>\n\
            <button class="btn" type="button" onclick="load(' + elements[key].id + ');">Detalles</button>\n\
            <button class="btn" type="button" onclick="loadBynumCta(' + elements[key].numCta + ');">Detalles por número de cuenta</button>\n\
            </td>\n\
            </tr>';                        
        }

        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };

}

/*----------------------------------------Ordenar por orden alfabético---------------------------------*/
function loadAllByName() {

    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");
    var index = object.index('by_name');

    var elements = [];

    index.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function() {

        var outerHTML = '';

        for (var key in elements) {

            outerHTML += '\n\
            <tr>\n\
            <td>' + elements[key].numCta + '</td>\n\
            <td>' + elements[key].name + '</td>\n\
            <td>\n\
            <button class="btn" type="button" onclick="load(' + elements[key].id + ');">Detalles</button>\n\
            <button class="btn" type="button" onclick="loadBynumCta(' + elements[key].numCta + ');">Detalles por número de cuenta</button>\n\
            </td>\n\
            </tr>';                        
        }

        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };

}






