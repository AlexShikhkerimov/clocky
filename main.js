import { Clock } from './core/clock.js'

const watch = new Clock()
watch.start()

// document.addEventListener('visibilitychange', (event) => {
//     if (document.visibilityState === 'visible') {
//         watch.start()
//     } else {
//         watch.stop()
//     }
// });