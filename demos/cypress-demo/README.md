# Cypress

## Run locally
```shell script
npm i -D
npm run test
```

## Run docker
```shell script
docker-compose build
docker-compose up
docker-compose down
```

Note:
To run the eyes applitools scenario, replace your `YOUR_API_KEY` on `applitools.config.js` file and remove `skip` on `todomvc-visual.spec.js` file.
