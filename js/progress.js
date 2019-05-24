Vue.component('c-progress', {
  template: `<div>
    <h2>progress</h2>

    <p class="info">
    </p>

    <section>
      <h3>overflow-y: auto;</h3>
      <div style="height: 100px; border: solid 1px #666; margin-bottom: 3px; width: 10px; padding: 1px;">
        <div style="background: #0091e6; width: 100%; height: 30%; border-radius: 8px;"></div>
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
