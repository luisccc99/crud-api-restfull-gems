const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://luisccc99:mamizssultimate1999@gems-db.91fou.mongodb.net/gems?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => {
    console.log('db is connected')
}).catch(err => console.error(err))