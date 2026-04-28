import _ from 'underscore';
import { createDeck, createPlayersUI, dom, gameLang, initGame, initEvents, nextTurn, revealCard, state } from './usecases/index';

const blackjack = (() => {
    'use strict'
    initEvents()
})()