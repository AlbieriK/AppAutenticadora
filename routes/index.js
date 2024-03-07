import { Router } from "express";
const router = Router();

let users = [
    {
        id: 1,
        name: "Karim",
        address: "Añaxd",
        age: 85,
    }
];

// POST
router.post('/users/create', (req, res) => {
    users.push(req.body);
    res.send("No se que poner aqui xd");
});

// GET
router.get('/users', (req, res) => {
    res.status(200).json(users);
});

// PUT
router.put('/users/update/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send("El recurso no se encuentra!!!");
        return;
    }
    const updateUser = { ...user, ...req.body };
    users = users.map(u => u.id === parseInt(req.params.id) ? updateUser : u);
    res.status(200).send("Usuario actualizado con exito!!");
});

export default router;
