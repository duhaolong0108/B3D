class B3D {
    /**
     * B3D 初始化
     * @example var three = new B3D("#canvas");
     *
     * @param {string} selector Canvas 的选择器。
     *
     * 可以在这里改变应用于这个B3D的摄像头参数：
     * @example three.x = 1;
     * @param {number} camera.x
     * @param {number} camera.y
     * @param {number} camera.z
     * @param {number} camera.a
     * @param {number} camera.u
     * @param {number} camera.fov
     * @param {number} camera.far
     */
    constructor(selector) {
        self.ctx = document.querySelector(selector).getContext("2d");
        self.camera = {
            x: 0,
            y: 0,
            z: 0,
            a: 0,
            u: 0,
            fov: 0,
            far: 0,
        };
    }

    /**
     * 更新画图
     * @example three.run([Obj1,Obj2,...]); // 第一种用法
     *          three.objs = [Obj1,Obj2,...]; three.run() // 第二种用法
     *
     * @param {Array} [objs] 3D物体
     *
     * objs、B3D.objs 内的每一项都是一个 Obj 类。
     *
     * 如果已经设置了 B3D.objs , 可以选择不传入 Objs参数。
     *
     * 若传入，参数的优先级高于 B3D.objs。
     */
    run(objs) {
        objs = objs ? objs : self.objs;
    }
}

class Obj {
    /**
     * 创建物体。
     * Obj 是 3D 模型中所有的参数
     * @example {
     *     "x":0, // 物体左上角的x坐标
     *     "y":0, // 同上
     *     "z":0, // 同上
     *     "faces": [ // 物体的面
     *         {
     *             "point":[...] // 这个面的点坐标，相对与物体坐标（刚刚的 obj.x,obj.y,obj.z）
     *             "background":"" // 这个面的背景。 可以填入图片url(Blob 链接) 或 16进制颜色代码。
     *         },
     *         ...
     *     ]
     * }
     */

    constructor() { 
        self.x = 0;
        self.y = 0;
        self.z = 0;
        self.faces = [];
    }
}
B3D("canvas").run();
