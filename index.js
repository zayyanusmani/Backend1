require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const githubData = {
    "login": "zayyanusmani",
    "id": 40434779,
    "node_id": "MDQ6VXNlcjQwNDM0Nzc5",
    "avatar_url": "https://avatars.githubusercontent.com/u/40434779?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zayyanusmani",
    "html_url": "https://github.com/zayyanusmani",
    "followers_url": "https://api.github.com/users/zayyanusmani/followers",
    "following_url": "https://api.github.com/users/zayyanusmani/following{/other_user}",
    "gists_url": "https://api.github.com/users/zayyanusmani/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zayyanusmani/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zayyanusmani/subscriptions",
    "organizations_url": "https://api.github.com/users/zayyanusmani/orgs",
    "repos_url": "https://api.github.com/users/zayyanusmani/repos",
    "events_url": "https://api.github.com/users/zayyanusmani/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zayyanusmani/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Zayyan Usmani",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 17,
    "following": 5,
    "created_at": "2018-06-20T15:25:53Z",
    "updated_at": "2023-12-19T15:51:46Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) =>{
    res.send('Zayyan')
})

app.get('/login', (req,res) =>{
    res.send("<h1>Please Login</h1>")
})

app.get('/github', (req,res) =>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

