const LinksSocialMidia = {
  github: 'Samael7735',
  instagram: 'senasamuel639',
  facebook: 'SamuelSena',
  youtube: 'www.youtube.com/channel/UCxGjNxUen0oCGrMU7G8hpYw'
}
function changeLinksSocialMidia() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    console.log(social)
    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeLinksSocialMidia();

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`

  //alert(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLogin.textContent = data.login

      UserPhoto.src = data.avatar_url
    })
}

getGithubProfileInfos();
