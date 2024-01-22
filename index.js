require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "singh-sambhav",
    "id": 77566730,
    "node_id": "MDQ6VXNlcjc3NTY2NzMw",
    "avatar_url": "https://avatars.githubusercontent.com/u/77566730?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/singh-sambhav",
    "html_url": "https://github.com/singh-sambhav",
    "followers_url": "https://api.github.com/users/singh-sambhav/followers",
    "following_url": "https://api.github.com/users/singh-sambhav/following{/other_user}",
    "gists_url": "https://api.github.com/users/singh-sambhav/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/singh-sambhav/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/singh-sambhav/subscriptions",
    "organizations_url": "https://api.github.com/users/singh-sambhav/orgs",
    "repos_url": "https://api.github.com/users/singh-sambhav/repos",
    "events_url": "https://api.github.com/users/singh-sambhav/events{/privacy}",
    "received_events_url": "https://api.github.com/users/singh-sambhav/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sambhav Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2021-01-17T08:02:28Z",
    "updated_at": "2023-12-18T19:46:39Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('sambhavdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1> mujhe naukri dilva do </h1> ')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>Sambhav Singh</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})