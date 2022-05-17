export const PerformanceMixin = (superclass) => 
    class extends superclass {
        constructor() {
            super();
            this.times = 0;
        }
        startTime() {
            this.timeStart = performance.now();
        }

        endTime() {
            this.timeEnd = performance.now();
        }

        reportPerformance() {
            console.log("Tardó " + (this.timeEnd - this.timeStart) + " milisegundos.");
        }
    }