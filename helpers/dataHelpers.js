const getMongoDbURL = () => {
    console.log("NODE_ENV is set to: ", process.env.NODE_ENV)
    if (process.env.NODE_ENV === "production") {
        const username = process.env.MONGO_USERNAME;
        const password = process.env.MONGO_PASSWORD;
        const uri = `mongodb+srv://${username}:${password}@cluster0.tjlxi8n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        
        return uri;
    } else {
        return 'mongodb://localhost:27017/baseballCardsDB';
    }
};

module.exports = {
    getMongoDbURL
}