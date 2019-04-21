const TYPES = {
  rgb: 'rgb',
  rg: 'rg',
  rb: 'rb',
  gb: 'gb'
}

Vue.component('color', {
  template: `<div>
    <h2>color</h2>

    <p class="info">
    </p>

    <section>
      <h3>color sheet</h3>
      <div>
        column: <input type="number" v-model.number="column">
        row: <input type="number" v-model.number="row">
        <br>
        color-type: 
        <span v-for="TYPE in TYPES">
          <input type="radio" name="color-type" v-model="type" :value="TYPE"> {{TYPE}}
        </span>
        <div v-show="type == TYPES['rgb']">
          blue rate(0~255): <input type="number" v-model.number="blueRate">
          <span v-for="rate in [0, 32, 64, 96, 128, 160, 192, 224, 255]">
            <button @click="blueRate = rate">{{rate}}</button> 
          </span>
        </div>
      </div>
      <table :style="'width: 100%; height: ' + height + 'px;'">
        <tr v-for="r in rows" :key="r">
          <td v-for="c in columns" :key="c" :style="'background-color: ' + getColor(r, c) + ';'" :title="getColor(r, c)"></td>
        </tr>
      </table>
    </section>
  </div>`,
  data: function () {
    return {
      column: 60,
      row: 40,
      height: 400,
      blueRate: 128,
      TYPES: TYPES,
      type: TYPES['rgb']
    }
  },
  computed: {
    divideSize: function () {
      let h = this.height / this.row
      let w = 100 / this.column
      h = Math.round(h * 100) / 100
      w = Math.round(w * 100) / 100
      console.log(h, w)
      return `height: ${h}px; width: ${w}%;`
    },
    columns: function () {
      let columns = []
      for (let i=0; i < this.column + 1; i++) {
        columns.push(i)
      }
      return columns
    },
    rows: function () {
      let rows = []
      for (let i=0; i < this.row + 1; i++) {
        rows.push(i)
      }
      return rows
    }
  },
  methods: {
    getColor: function (row, column) {
      let r, g, b
      let perColumn = column / this.column
      let perRow = row / this.row
      switch(this.type) {
        case this.TYPES.rgb:
          r = perColumn * 255
          g = perRow * 255
          b = (perColumn + perRow) / 2 * this.blueRate
          break
        case this.TYPES.rg:
          r = perColumn * 255
          g = perRow * 255
          b = 0
          break
        case this.TYPES.rb:
          r = perColumn * 255
          g = 0
          b = perRow * 255
          break
        case this.TYPES.gb:
          r = 0
          g = perColumn * 255
          b = perRow * 255
          break
      }
      r = ('00' + Math.round(r).toString(16)).substr(-2)
      g = ('00' + Math.round(g).toString(16)).substr(-2)
      b = ('00' + Math.round(b).toString(16)).substr(-2)
      return `#${r}${g}${b}`
    }
  }
})
