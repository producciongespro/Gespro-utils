const estudiantes = [
    {
      nombre: "Juan Perez",
      correo: "juan@correo.de",
      condicion: "aprobado",
    },
    {
      nombre: "Jimena Mora",
      correo: "jime@correo.de",
      condicion: "aprobado",
    },
  ];


  export function getEstudiantes(req, res) {     
      res.json(estudiantes);
  }

  export function insertDato(req, res  ) {
      const dato = req.body;
      res.json ({          
          method: "POST",
          dato,
          msj: `Dato recibido para insertar`
        });
  }

  export function updateDato(req, res  ) {
    const dato = req.body;
    res.json ({          
        method: "PUT",
        dato,
        msj: `Dato recibido para actualizar`
      });
}