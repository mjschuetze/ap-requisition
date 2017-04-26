'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require(__dirname + '/views.js');

module.exports.build = (data, callback) => {    
    Handlebars.registerPartial('surgical/page', Handlebars.templates['surgical/page'])
    Handlebars.registerPartial('style', Handlebars.templates['style'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('surgical/patient-info', Handlebars.templates['surgical/patient-info'])
    Handlebars.registerPartial('partials/billing-info', Handlebars.templates['partials/billing-info'])
    Handlebars.registerPartial('surgical/surgical-header', Handlebars.templates['surgical/surgical-header'])
    Handlebars.registerPartial('surgical/clinical-data', Handlebars.templates['surgical/clinical-data'])
    Handlebars.registerPartial('surgical/surgical-specimens', Handlebars.templates['surgical/surgical-specimens'])
    Handlebars.registerPartial('surgical/flow-cytometry', Handlebars.templates['surgical/flow-cytometry'])

    var template = Handlebars.templates['surgical/page']
    var result = template(data)
    callback(null, result)
}
