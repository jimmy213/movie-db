# Movie DB Search

## Overview

A React based web app that displays movie information and allow users to search and add them to their favorites.

For the fetched movie information, I used the [TMDb API](https://www.themoviedb.org/).

## How to run

Install the required node packages by running the following in the project's directory.

`yarn install`

For the application to work as intended and start fetching data, you need an [API key](https://www.themoviedb.org/documentation/api). You should create a `.env.local` file in the project's root directory and add your key as following:

```
REACT_APP_TMDB_API_KEY=YOUR_API_KEY
```

For the favorites functionality to work, you need to be running:

`npx json-server --watch data/db.json --port 4000`

and add the corresponding url to the `.env.local` file that we created.

```
REACT_APP_TMDB_API_KEY=a066e9bd01a7c0cf2ddd9ecf589e8a13
REACT_APP_LOCAL_SERVER_IP=http://localhost:4000/favorites
```

Finally, we can start the local development environment by running:

`yarn start`

## Power by

<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="the movie database" width="100"/>
