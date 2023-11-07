# 快速给图片左下角加水印

## 使用说明

### 安装

```bash
npm install @ww1818/imgwithwatermark --save
```

### 引入

```js
//ems 引入
import Imgwithwatermark from "@ww1818/imgwithwatermark";
```

### 使用

```js
//实例化
let imgWithWaterMark = new Imgwithwatermark({
  fillStyle,
  text,
  quality,
});
```

| 参数      | 类型   | 是否必填 | 含义               |
| :-------- | :----- | :------- | :----------------- |
| fillStyle | string | 否       | 水印样式默认'#fff' |
| text      | string | 否       | 水印文案           |
| quality   | numer  | 否       | 压缩质量 0-1       |

```js
//返回 base64

let url = await imgWithWaterMark.setWaterMark({ img, text });
```

| 参数 | 类型   | 是否必填 | 含义               |
| :--- | :----- | :------- | :----------------- |
| img  | object | 是       | 图片必传 file 类型 |
| text | string | 否       | 水印               |

```js
//销毁canvsa
imgWithWaterMark.destoryCanvas();
```
