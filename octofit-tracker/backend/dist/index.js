import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = Number.parseInt(process.env.PORT ?? '8000', 10);
const mongoUrl = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
app.use(express.json());
app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', port });
});
async function startServer() {
    await mongoose.connect(mongoUrl);
    app.listen(port, () => {
        console.log(`OctoFit backend listening on port ${port}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start backend server', error);
    process.exit(1);
});
