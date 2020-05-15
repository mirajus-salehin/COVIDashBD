# COVIDashBD
This project is a  part of a ongoing research on predicting the future of COVID-19 in Bangladesh. This dashboard shows the the confirmed cases of COVID-19 in different districts from 15 April 2020.
# Demo
View a demo [here](https://mirajus-salehin.github.io/COVIDashBD)
# How to use
This projects is still in development. So the full user documentation is not available.
# Data source
The data are collected from:
 - [Institute of Epidemiology, Disease Control and Research (IEDCR)](https://www.iedcr.gov.bd/)
 - https://corona.gov.bd

 
# FAQ
### How often the data get update?
The data gets an update at 11:30 PM (Local time) every day.
### The visuals are not satisfying
As I'vs mentioned this projects is still in development. In the future updates the visuals will be improved
### How can I download the graph?
In the future update we will add a download button to download the graphs. For now you can right click on the graph and download it as PNG.
### Do you have any API?
No, we don't provide any webAPI in this projects. But you can use [this](https://raw.githubusercontent.com/mirajus-salehin/COVIDashBD/master/filter.js) as a CDN for your projects.
### How do I use the CDN?
Import the CDN to you website like this:
```html
<script src="https://raw.githubusercontent.com/mirajus-salehin/COVIDashBD/master/filter.js"></scrpit>
```
The data are stored like this:
```javascript
covidData = {
	"Dhaka":{
		"15 April 2020": 546,

		"16 April 2020": 636,

		"17 April 2020": 768,
		...
		}
}
```
In ES6 module you can use this:
```javascript
import covidData from "https://raw.githubusercontent.com/mirajus-salehin/COVIDashBD/master/filter.js"
```

# Contributing :chart_with_upwards_trend:
We would really appriciate if you can contribute to this projects. We don't have the data before 15 April 2020. If you can provide it'll be really good.
If you have any feature to update create a pull request in the [test](https://github.com/mirajus-salehin/COVIDashBD/tree/test) branch
