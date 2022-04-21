const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hey,babe I Can Do Node done well')
});

const users = [
    { id: 1, name: 'Halim', job: 'plumber', email: 'towhidurr280@gmail.com', phone: '0155245514414', job: 'Naika' },
    { id: 2, name: 'grtrhg', job: 'plumber', email: 'grtrhgdurr280@gmail.com', phone: '0155245514414', job: 'Naika' },
    { id: 3, name: 'yhyjujuj', job: 'plumber', email: 'yhyjujujdurr280@gmail.com', phone: '0155245514414', job: 'Naika' },
    { id: 4, name: 'tyhyhe', job: 'plumber', email: 'tyhyhedurr280@gmail.com', phone: '0155245514414', job: 'Naika' },
    { id: 5, name: 'Halijop;', job: 'plumber', email: 'towhip9p0;durr280@gmail.com', phone: '0155245514414', job: 'Naika' },
    { id: 6, name: 'Halpolim', job: 'plumber', email: 'towhidllurr280@gmail.com', phone: '0155245514414', job: 'Naika' },
    { id: 7, name: 'Haloillim', job: 'plumber', email: 'towhidurlliolor280@gmail.com', phone: '0155245514414', job: 'Naika' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
      const search = req.query.name.toLowerCase();
      const matched = users.filter(user => user.name.toLowerCase().includes(search));
      res.send(matched);
    }
    else {
        res.send(users);

    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    // const user = users[id];
    res.send(user)
    // res.send('finding user')
});


app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    // console.log(r;eq.body);
    res.send(user)
    // res.send('post method success');
})

app.listen(port, () => {
    console.log('yeah I get port', port);
})










