# emaily

Node + React

<!-- https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=63809856305-e3c7n2mhbk9fvrfv694e3dtigat2vjt4.apps.googleusercontent.com -->

<!-- BREAKDOWN -->

<!-- 1. https://accounts.google.com/o/oauth2/v2/auth? -->
<!-- domain name and subdomain -->

<!-- 2. response_type=code& -->
<!-- Here we are telling google to give us a code that we can use to access a little more information about the users google account -->


<!-- 3. redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback& -->
<!-- This is the address the user should be redirected to. -->

<!-- 4. scope=profile%20email& -->
<!-- These are the two pieces of information we are asking for. We want access to profile and email address. -->

<!-- 5. client_id=63809856305-e3c7n2mhbk9fvrfv694e3dtigat2vjt4.apps.googleusercontent.com -->
<!-- Client ID identifies our application to the google server. -->

How to write an async await function
write a function to retrieve a blob of json
make an ajax request! Use the 'fetch' function.

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json);
}

fetchAlbums();
