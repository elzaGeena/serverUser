const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const sowRouter = require('./routes/sows')
const courseplanRouter = require('./routes/courseplans')
const internalRouter = require('./routes/internals')
const assignmentRouter = require('./routes/assignments')
const classworkRouter = require('./routes/classworks')

app.use(cors());
dotenv.config();
//connect to db 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    
() => console.log("connected to db..."))
//middleware
app.use(express.json());

// router
app.use('/sows',sowRouter)
app.use('/courseplans',courseplanRouter)
app.use('/classworks',classworkRouter)
app.use('/assignments',assignmentRouter)
app.use('/internals',internalRouter)
app.listen(9000, () => console.log('server running...'));