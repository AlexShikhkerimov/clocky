import { Clock } from './core/clock.js'

const watch = new Clock()
watch.create()
document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState === 'visible') {
        // watch.create()
    } else {
        // watch.destroy()
    }
});