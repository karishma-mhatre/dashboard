export class ChartTemplate {
    constructor(type, options) {
        this.type =  type
        this.data = {
            datasets: [
                {
                    data: [
                    ],
                    backgroundColor: [
                    ],
                    label: ''
                }
            ],
            labels: [
            ]

        }
        this.options = options
    }
}
