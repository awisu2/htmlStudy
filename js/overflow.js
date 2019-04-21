Vue.component('overflow', {
  template: `<div>
    <h2>overflow</h2>

    <p class="info">
    </p>

    <section>
      <h3>overflow-y: auto;</h3>
      <div class="overflow overflow--1">
        abc
      </div>

      <div class="overflow overflow--1">
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
      </div>
    </section>

    <section>
      <h3>absolute, overflow-y: auto;</h3>
      <div class="overflow overflow--2">
        <div>
          abc<br>
        </div>
      </div>

      <div class="overflow overflow--2">
        <div>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
        </div>
      </div>
    </section>

    <section>
      <h3>height: %, overflow-y: auto;</h3>
      <div class="overflow overflow--3">
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
        abc<br>
      </div>

      <h4>wrap define height</h4>
      <div style="height: 100px;">
        <div class="overflow overflow--3">
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
          abc<br>
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
