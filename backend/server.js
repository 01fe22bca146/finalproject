const express=require('express');
const dotenv=require('dotenv')
const connectDb=require('./config/config')
const productsRoutes =require('./routes/productsRoute')
const { errorHandler } =require ('./middlewares/errorMiddleware')
const UsersRoute =require('./routes/UsersRoute')


//connectin mongo DB
dotenv.config();
connectDb();
const app = express()
app.use(express.json());
//dotenv config

app.get('/',(req,res) => {
    res.send('<h1>Welcome to node server</h1>')
});


app.use('/api',productsRoutes)
app.use('/api/users',UsersRoute)


app.use(errorHandler);

const PORT=8080;
app.listen(process.env.PORT || PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`);
});
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.json({success:true,data:{user,token}, message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
}
);