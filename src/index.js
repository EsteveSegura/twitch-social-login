require('dotenv').config()
const express = require('express')
const app = express();


app.get('/auth', (req,res) => {
    res.sendFile('/auth.html',{root: __dirname})
})

app.get('/login',(req,res) => {
    res.redirect(`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=token&scope=channel:read:subscriptions&force_verify=true`)
})

app.listen(3001, () => {
    console.log('twitch-example-working')
})