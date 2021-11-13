let mysql= require("mysql2")
let connection = mysql.createConnection
(
    {
        host : "localhost",
        user: "root",
        password: "12345678",
        database:"CODENOTCH"
    }
);

connection.connect(function(error)
{
    if (error)
        console.log(error);
    else 
        console.log("Conexion correcta")
});
//RETO 1 
//CALCULAR LA MEDIA DE LOS ESTUDIANTES
// let sql = "SELECT AVG (nota) FROM NOTAS WHERE id_asignatura=1"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Nota media estudiantes en la asignatura 1")
//         console.log(resultado)
// })
//CALCULAR EL NUMERO TOTAL DE ALUMNOS 
// let sql = "SELECT COUNT(id_estudiante) FROM ESTUDIANTES"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("NUMERO TOTAL DE ESTUDIANTES")
//         console.log(resultado)
// })


//LISTAR LOS DATOS DE LA TABLA 
// let sql = "SELECT * FROM GRUPO"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Lista grupo")
//         console.log(resultado)
// })


//ELIMINAR TODAS LAS NOTAS SUPERIORES A 5 Y DE 2020
// let sql = "DELETE notas FROM NOTAS WHERE nota>5 AND fecha>20191231 & fecha<20211230"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Datos borrado")
//         console.log(resultado)
// })

//OBTEN LOS DATOS DE LOS ALUMNOS QUE HAN INGRESADO EN 2021
// let sql = "SELECT *  FROM ESTUDIANTES WHERE ingreso=2021"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Datos alumnos que han ingresado en 2021")
//         console.log(resultado)
// })
//CALCULAR EL NUMERO DE PROFESORES QUE HAY POR ASIGNATURA
// let sql = "SELECT  COUNT(*) AS id_profesor FROM ASIGNATURA_PROFESORES GROUP BY id_asignatura"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Profesores por asignatura")
//         console.log(resultado)
// })
//RETO2
//OBTEN EL ID Y LA NOTA DE LOS ALUMNOS QUE TENGAN UN ID ENTRE 1 Y 20 O QUE LA NOTA SEA SUPERIOR A 8 Y LA FECHA SEA DEL AÑO PASADO
// let sql = "SELECT id_estudiantes, nota  FROM NOTAS WHERE (id_estudiantes BETWEEN 1 and 20 )OR (nota>8 and fecha BETWEEN '20201231' AND '20200101')"

// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Datos alumnos que han ingresado en 2021")
//         console.log(resultado)
// })

//MEDIA DE LAS NOTAS POR ESTUDIANTE
let sql = "SELECT AVG(nota) FROM NOTAS WHERE fecha BETWEEN '20200101' AND '20201231' GROUP BY id_estudiantes"
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Nota media estudiante en el año 2020")
        console.log(resultado)
})

//OBTEN LA MEDIA ARITMETICA DE LAS NOTAS QUE SE HAN DADO EN EL ULTIMO AÑO POR ASIGNATURA
// let sql = "SELECT AVG(nota) FROM NOTAS WHERE fecha BETWEEN '20200101' AND '20201231' GROUP BY id_asignatura"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Nota media por asignatura en el año 2020")
//         console.log(resultado)
// })
