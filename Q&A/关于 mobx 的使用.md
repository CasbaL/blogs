# 关于 mobx 的使用
[中文文档](https://cn.mobx.js.org/)
特点：响应式编程    


#### 基本使用：
```js
  import { observable, action, reaction, computed } from 'mobx';
  export class store {
    constructor() {
      // 像不像 watch ？；还有 autorun、when 使用方法类似
      reaction(
        () => this.selected,
        selected => {
          // dododo something
        }
      )
    }
    // 这里跟react hooks 差不多；存储值跟改变函数成对出现
    @observable state: []
    @action.bound setState(arr) {   
      this.state = arr
    }
    // 衍生值; 写过vue 对这个计算属性？一定不陌生 😺
    @computed selected() {
      return this.state.find(s => s.selceted)
    }
  }
```