Vue.component('flex', {
  template: `<div>
    <h2>flex</h2>

    <p class="info">
      基本の使い方は、親タグに <strong>"display: flex;"</strong>, その子に <strong>"flex: {x};"</strong>。これで要素内の配置をコントロールできる。<br>
      flexには、3つの種類がある(flex-grow: 伸び率, flexs-hrink: 縮小率, flex-basis: 基本幅)<br>
      flex-basisは横幅指定、flex-direction: column;のときうまく動作しないみたい
    </p>

    <section>
      <h3>均等配置(flex-grow)</h3>
      <div class="flex-box flex-box--1">
        <div>flex: 1</div>
        <div>flex: 1</div>
      </div>
    </section>

    <section>
      <h3>均等配置 2(flex-grow)</h3>
      <div class="flex-box flex-box--2">
        <div>flex: 3</div>
        <div :style="'flex: ' + arg.flexBox2Flex2 + ';'">flex: {{arg.flexBox2Flex2}}</div>
        <div>flex: 4</div>
      </div>
      flex: <input type="number" v-model="arg.flexBox2Flex2">
    </section>

    <section>
      <h3>justify-content: center;(flex-basis)</h3>
      <div :class="'flex-box flex-box--3' + (arg.flexBox3 ? ' reverse' : '')">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <button @click="arg.flexBox3 = !arg.flexBox3">flex-direction: row-reverse;</button>
    </section>

    <section>
      <h3>align-items: center</h3>
      <div :class="'flex-box flex-box--4' + (arg.flexBox4 ? ' reverse': '')">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <button @click="arg.flexBox4 = !arg.flexBox4">flex-direction: row-reverse;</button>
      <p>
        <strong>flex-direction</strong>: row, row-reverseは、<strong>書式方向(横)</strong>に合わせる。 column, column-reverseは、<strong>ブロック軸(縦)</strong>に合わせる。
      </p>
    </section>  

    <section>
      <h3>flex-direction: column</h3>
      <div :class="'flex-box flex-box--5' + (arg.flexBox5Reverse ? ' reverse': '')">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <button @click="arg.flexBox5Reverse = !arg.flexBox5Reverse">reverse</button>
    </section>
  </div>`,
  data: function () {
    return {
      arg: {
        flexBox2Flex2: 2,
        flexBox3: false,
        flexBox4: false,
        flexBox5Reverse: false
      }
    }
  },
  methods: {
  }
})
