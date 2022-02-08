const API = "https://api.github.com/users/"

let output,input,btn
output=document.getElementById('output')
input=document.getElementById('input')
btn=document.getElementById('btn')
let card=document.getElementById('card')

btn.addEventListener('click',()=>{
    searchUsers()
    output.innerHTML=''
})


const searchUsers = async () => {
   const Url = API+input.value
    let requset = await fetch(Url)
    let response = await requset.json()
    renderUsers(response)
    console.log(response)
}

const renderUsers = (results) => {
let login=document.createElement('h1')
login.innerHTML=results.login
let div=document.createElement('div')
let avatar_url=document.createElement('img')
avatar_url.src=results.avatar_url
avatar_url.style.cssText=`width:100px;`

let name=document.createElement('h2')
name.innerHTML=results.name
let location=document.createElement('h2')
location.innerHTML=results.location
let public_repos=document.createElement('h2')
public_repos.innerHTML='repositories:'+results.public_repos
let followers=document.createElement('h2')
followers.innerHTML='followers:'+results.followers
let following=document.createElement('h2')
following.innerHTML='following:'+results.following
followers.addEventListener('click', ()=>{
    userFollower()
})
following.addEventListener('click',()=>{
    userFollowing()
})
public_repos.addEventListener('click',()=>{
    userRepos()
})


div.append(login,avatar_url,name,location,public_repos,followers,following)
output.append(div)
}
const userFollower = async()=>{
    let url = API + input.value + "/followers"
    let req = await fetch(url)
    let res = await req.json()
    console.log(res);
    renderFollower(res)
    
   }
   
   const renderFollower = async(f)=>{
     card.innerHTML=''

      f.forEach((el)=>{
        let login = document.createElement('p')
          login.innerText = el.login
          login.className='loginfollowers'

login.style.cssText=`color:black;`

          let avatar = document.createElement('img')
          avatar.className='avatar2'
          avatar.src= el.avatar_url

          card.append(login,avatar)
output.append(card)
        })
    }


    const userFollowing = async()=>{
        let url = API + input.value + "/following"
        let req = await fetch(url)
        let res = await req.json()
        console.log(res);
        renderFollowing(res)
        
       }
       
       const renderFollowing = async(ff)=>{
         card.innerHTML=''
    
          ff.forEach((el)=>{
              let login = document.createElement('p')
              login.innerText = el.login
              login.className='loginfollowers'
            
    login.style.cssText=`color:black;
`

              let avatar = document.createElement('img')
              avatar.className='avatar2'
              avatar.src= el.avatar_url
            card.append(login,avatar)
            output.append(card)
          })
       }
    
const userRepos=async()=>{
    let url=API+input.value+"/repos"
    let req=await fetch(url)
    let res=await req.json()
    console.log(res)
    renderRepos(res)
}

const renderRepos=async(a)=>{
    card.innerHTML=''

    a.forEach((el)=>{
        let repos=document.createElement('p')
        repos.innerHTML=el.name
        repos.className='repos'

        repos.style.cssText=`color:white;
        margin-top:-150px;
        margin-left:400px;
        font-size:40px;`

    card.append(repos)
    output.append(card)
    })
}


    