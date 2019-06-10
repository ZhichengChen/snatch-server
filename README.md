# snatch-server
Snatch backend node server base on expressjs.

This is the backend of [Snatch](https://github.com/ZhichengChen/snatch), Snatch is a Sketch plugin that upload layer to CDN directly.

## Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run the server:

```bash
node index.js
```

## API

GET get all projects

```bash
/all

[
  {
    id: "lucky",
    pic_wheel: "https://cdn.chenzhicheng.com/images/pic_wheel.png",
    pic_arrow: "https://cdn.chenzhicheng.com/images/pic_arrow.png",
    btn_luckydraw: "https://cdn.chenzhicheng.com/images/pic_luckydraw.png",
    bg_blue: "https://cdn.chenzhicheng.com/images/bg_blue.png"
  }
]
```

POST uplaod images

```bash
/:projectId

params

{
  name: "pic_wheel",
  images: "data:image/png;base64,iVBORw0KGgo=..."
}
```
