/**
 * function: app-component
 * author: zeo
 * mail: 7453027@qq.com
 * create-date: 2015-08-21
 */

 /* mode declaration */
'use strict'

/* reference&variable declaration */
var React = require('react-native')
var Dimensions = require('Dimensions')

var {
    PixelRatio
    } = React


/* statement */
var Util = {
    pixel: 1 / PixelRatio.get(),

    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    post: function (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
            callback(JSON.parse(responseText))
        })
    },

    key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

}


/* register */
module.exports = Util

