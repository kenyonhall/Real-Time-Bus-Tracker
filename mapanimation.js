mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGwtc2RnIiwiYSI6ImNrazYzYnd3MDAwNWMybm56ZWViZzk3aHAifQ.V7-M1jzW1OkMaT7ilna3fg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12
});

const marker = new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map);

let counter = 0;
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
];

function move() {
    setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 1000);
}

move();
