Vue.component('AppHeader', {
  props: {
    text: {
      type: String,
      default: 'App Header'
    }
  },
  template: `
    <h1>{{text}}</h1>  
  `
});

Vue.component('SearchBox', {
  template: `
    <div>
      <label>Search:</label>
      <input type="text" 
        v-on:keyup.enter.esc="$emit('input', $event.target.value)" />
    </div>
  `
});

Vue.component('ShipListItem', {
  props: {
    ship: {
      type: Object
    }
  },
  template: `
    <li>
      {{ship.name}} <button v-on:click="$emit('ship-selected', ship.url)">view</button>
    </li>
  `
});

Vue.component('PilotList', {
  computed: {
    pilots: function() {
      return this.$store.state.pilots;
    }
  },
  template: `
    <div>
      <h2>Pilots</h2>
      <ul v-if="pilots.length > 0">
        <PilotListItem v-for="pilot in pilots" v-bind:key="pilot.url" v-bind:pilot="pilot" />
      </ul> 
    </div>
  `
});

Vue.component('PilotListItem', {
  props: {
    pilot: {
      type: Object
    }
  },
  template: `
    <li>
      <h3>Name: <small>{{pilot.name}}</small></h3>
    </li>
  `
});

Vue.component('ShipStat', {
  props: {
    label: String,
    value: String
  },
  template: `
  <h3>{{label}}: <small>{{value}}</small></h3>
  `
});

Vue.component('CurrentShip', {
  computed: {
    ship: function() {
      return this.$store.state.ship;
    }
  },
  template: `
    <div v-show="ship.name">
      <h2>Current Ship</h2>

      <ShipStat label="Name" v-bind:value="ship.name" />
      <ShipStat label="Manufacturer" v-bind:value="ship.manufacturer" />
      <ShipStat label="Class" v-bind:value="ship.starship_class" />
      <ShipStat label="Crew Size" v-bind:value="ship.crew" />

      <slot></slot>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    appLabel: 'Ship Search'
  },
  store,
  computed: {
    ships: function() {
      return this.$store.state.ships.results;
    }
  },
  methods: {
    search: function(search) {
      store.dispatch('search', { searchText: search });
    },
    viewShip: function(url) {
      this.$store.dispatch({ type: 'setShip', url: url });
    }
  },
  template: `
      <div>

        <AppHeader v-bind:text="appLabel"/>

        <SearchBox v-on:input="search" />
                
        <ul>
          <ShipListItem 
            v-for="ship in ships" 
            v-bind:key="ship.url" 
            v-bind:ship="ship" 
            v-on:ship-selected="viewShip" />
        </ul>

        <CurrentShip>
          <PilotList />
        </CurrentShip>

      </div>
      `
});
