Vue.component('height', {
  template: `<div>
    <h2>height</h2>

    <p class="info">
    </p>

    <section>
      <h3>px</h3>
      <div class="height height--1">
        height: 100px;
      </div>
    </section>

    <section>
      <h3>define scala</h3>
      <div class="height height--2">
        height: 10%;
      </div>
      <p class="info">
      </p>  
    </section>


    <section>
      <h3>親子関係タグで間に要素がない場合縦方向マージンは相殺される</h3>
      <div style="margin: 10px; background: #0F0000;">
        <div style="margin: 50px; background: #0F0; border: solid 1px #666;">
          margin: 10, margin: 50
        </div>
      </div>

      <div style="margin: 10px; background: #0F0000;">
        なにか文字を入れると相殺しない(下方向はなにもないので相殺している)
        <div style="margin: 50px; background: #0F0; border: solid 1px #666;">
          margin: 10, margin: 50
        </div>
      </div>

      <div style="margin: 10px; padding: 10px; background: #0F0000;">
        <div style="margin: 50px; background: #0F0; border: solid 1px #666;">
          padding をつけると相殺されない
        </div>
      </div>
    </section>
  </div>`,
  data: function () {
    return {
    }
  },
  methods: {
  }
})
