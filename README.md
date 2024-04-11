# Docker Demo

Example of running a simple static website using docker.

![Screenshot](assets/screenshot.png)

## Getting Started

Make sure [Docker Desktop](https://www.docker.com/products/docker-desktop/) is
installed and running.

### Development Build

```shell
npm ci
npm run dev
```

Open a browser window at http://localhost:3000/ to see the site. Every time you
change the code, you will have to refresh the browser. The underlying server
does not have live reloading functionality.

### Running without docker

```shell
npm start
```

Open a browser window at http://localhost:3000/ to see the site.

### Running with docker

First build a docker image (see `Dockerfile` to understand how the image is
built):

```shell
npm run docker-build
```

Now run the docker image:

```shell
npm run docker-run
```

Open a browser window at http://localhost:3000/ to see the site.

Use Docker Desktop to stop and delete the `docker-demo` container.
