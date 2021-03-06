(function(exports) {
    'use strict';

    Object.defineProperties(exports, {
        'INPUT': {
            value: 'input',
            writable: false
        },
        'INPUT_MOVE': {
            value: 'move',
            writable: false
        },
        'INPUT_ROTATE_LEFT': {
            value: 'rotate-left',
            writable: false
        },
        'INPUT_ROTATE_RIGHT': {
            value: 'rotate-right',
            writable: false
        },
        'INPUT_FIRE': {
            value: 'fire',
            writable: false
        },
        'CONNECT_ACK': {
            value: 'connect-ack',
            writable: false
        },
        'CONNECT_OTHER': {
            value: 'connect-other',
            writable: false
        },
        'DISCONNECT_OTHER': {
            value: 'disconnect-other',
            writable: false
        },
        'UPDATE_SELF': {
            value: 'update-self',
            writable: false
        },
        'UPDATE_OTHER': {
            value: 'update-other',
            writable: false
        },
        'MISSILE_NEW': {
            value: 'missile-new',
            writable: false
        },
        'MISSILE_HIT': {
            value: 'missile-hit',
            writable: false
        },
        'DEAD': {
            value: 'dead',
            writable: false
        },
        'PICKUPS' : {
            value: 'pickups',
            writable: false
        },
        'DRAW_TEXT' : {
            value: 'draw-text',
            writable: false
        },
        'UPDATE_CIRCLE' : {
            value: 'update-circle',
            writable: false
        },
        'START_GAME': {
            value: 'start-game',
            writable: false
        },
        'WIN':{
            value: 'win',
            writable: false
        },
        'ISLANDS':{
            value: 'islands',
            writable: false
        }
    });

})(typeof exports === 'undefined' ? this['NetworkIds'] = {} : exports);