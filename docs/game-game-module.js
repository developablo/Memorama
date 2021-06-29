(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

/***/ "/d5H":
/*!********************************************************!*\
  !*** ./src/app/game/components/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CardComponent_button_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.card.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.card.cardName);
} }
function CardComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.reveal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_button_1_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.card.revealed);
} }
class CardComponent {
    constructor() {
        this.disabled = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    reveal() {
        if (!this.disabled) {
            this.card.revealed = true;
            this.selected.emit(this.card.id);
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card", disabled: "disabled" }, outputs: { selected: "selected" }, decls: 2, vars: 1, consts: [[1, "card-container"], ["class", "card-body", 3, "click", 4, "ngIf"], [1, "card-body", 3, "click"], ["class", "card-image", 3, "src", "alt", 4, "ngIf"], [1, "card-image", 3, "src", "alt"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card-container[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n  border-radius: 1rem;\n  width: 5rem;\n  height: 6rem;\n}\n.card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n}\n.card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  max-width: 4rem;\n  max-height: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDWiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogNnJlbTtcclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogIDRyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "/mCa":
/*!*********************************************!*\
  !*** ./src/app/game/game-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GameRoutingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRoutingRoutingModule", function() { return GameRoutingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/board/board.component */ "PW/R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"] }
];
class GameRoutingRoutingModule {
}
GameRoutingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GameRoutingRoutingModule });
GameRoutingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function GameRoutingRoutingModule_Factory(t) { return new (t || GameRoutingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GameRoutingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "IdRu":
/*!************************************************!*\
  !*** ./src/app/game/services/cards.service.ts ***!
  \************************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardsService {
    constructor() {
        this.availableCards = [
            {
                id: 1,
                revealed: false,
                imageUrl: 'assets/images/arrow.svg',
                cardName: 'Flecha',
            },
            {
                id: 2,
                revealed: false,
                imageUrl: 'assets/images/brush.svg',
                cardName: 'Pincel',
            },
            {
                id: 3,
                revealed: false,
                imageUrl: 'assets/images/camera.svg',
                cardName: 'Cámara',
            },
            {
                id: 4,
                revealed: false,
                imageUrl: 'assets/images/fish.svg',
                cardName: 'Pez',
            },
            {
                id: 5,
                revealed: false,
                imageUrl: 'assets/images/laptop.svg',
                cardName: 'Laptop',
            },
            {
                id: 6,
                revealed: false,
                imageUrl: 'assets/images/lightbulb.svg',
                cardName: 'Lámpara',
            },
            {
                id: 7,
                revealed: false,
                imageUrl: 'assets/images/mortarboard-hat.svg',
                cardName: 'Bonete',
            },
            {
                id: 8,
                revealed: false,
                imageUrl: 'assets/images/owl.svg',
                cardName: 'Buho',
            },
            {
                id: 9,
                revealed: false,
                imageUrl: 'assets/images/popsicles.svg',
                cardName: 'Helados',
            },
            {
                id: 10,
                revealed: false,
                imageUrl: 'assets/images/flower.svg',
                cardName: 'Flor',
            },
        ];
        this.cards = [
            Object.assign({}, this.availableCards[0]),
            Object.assign({}, this.availableCards[1]),
            Object.assign({}, this.availableCards[2]),
            Object.assign({}, this.availableCards[3]),
            Object.assign({}, this.availableCards[4]),
            Object.assign({}, this.availableCards[5]),
            Object.assign({}, this.availableCards[6]),
            Object.assign({}, this.availableCards[7]),
            Object.assign({}, this.availableCards[8]),
            Object.assign({}, this.availableCards[9]),
            Object.assign({}, this.availableCards[0]),
            Object.assign({}, this.availableCards[1]),
            Object.assign({}, this.availableCards[2]),
            Object.assign({}, this.availableCards[3]),
            Object.assign({}, this.availableCards[4]),
            Object.assign({}, this.availableCards[5]),
            Object.assign({}, this.availableCards[6]),
            Object.assign({}, this.availableCards[7]),
            Object.assign({}, this.availableCards[8]),
            Object.assign({}, this.availableCards[9]),
        ];
    }
    dealHand() {
        const cardsArray = [];
        const totalCardsAmount = 20;
        const takenIndex = [];
        this.availableCards.forEach((card) => {
            let firstIndex = Math.floor(Math.random() * totalCardsAmount);
            while (takenIndex.includes(firstIndex))
                firstIndex = Math.floor(Math.random() * totalCardsAmount);
            takenIndex.push(firstIndex);
            let secondIndex = Math.floor(Math.random() * totalCardsAmount);
            while (takenIndex.includes(secondIndex))
                secondIndex = Math.floor(Math.random() * totalCardsAmount);
            takenIndex.push(secondIndex);
            cardsArray[firstIndex] = Object.assign({}, card);
            cardsArray[secondIndex] = Object.assign({}, card);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(cardsArray);
    }
    checkRevealed(cards) {
        return cards.every((card) => card.revealed === true);
    }
}
CardsService.ɵfac = function CardsService_Factory(t) { return new (t || CardsService)(); };
CardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardsService, factory: CardsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "P7es":
/*!*************************************************!*\
  !*** ./src/app/game/services/player.service.ts ***!
  \*************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlayerService {
    constructor() {
        this.player1 = { id: 1, score: 0 };
        this.player2 = { id: 2, score: 0 };
        this.currentPlayer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.player1);
    }
    togglePlayer() {
        this.currentPlayer.next(this.currentPlayer.value === this.player1 ? this.player2 : this.player1);
    }
    resetScores() {
        this.player1.score = 0;
        this.player2.score = 0;
        this.currentPlayer.next(this.player1);
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PW/R":
/*!**********************************************************!*\
  !*** ./src/app/game/components/board/board.component.ts ***!
  \**********************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/player.service */ "P7es");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cards.service */ "IdRu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "/d5H");





function BoardComponent_app_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function BoardComponent_app_card_4_Template_app_card_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.checkMatch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r2)("disabled", ctx_r0.disabled);
} }
function BoardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "El juego ha terminado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resultado: ", ctx_r1.gameResult, "");
} }
class BoardComponent {
    constructor(playerService, cardsService) {
        this.playerService = playerService;
        this.cardsService = cardsService;
        this.scores = [
            { id: 1, score: 0 },
            { id: 2, score: 0 },
        ];
        this.gameResult = null;
        this.cards = [];
        this.timeLeft = 10;
        this.disabled = false;
    }
    ngOnInit() {
        this.playerService.currentPlayer.subscribe((res) => (this.currentPlayer = res));
        this.cardsService.dealHand().subscribe((res) => (this.cards = res));
        setInterval(() => this.timeControl(), 1000);
    }
    checkMatch(cardId) {
        this.disabled = true;
        if (!this.previouslySelected) {
            this.previouslySelected = cardId;
            this.disabled = false;
        }
        else {
            const success = this.previouslySelected === cardId;
            setTimeout(() => {
                if (!success) {
                    this.cards
                        .filter((card) => card.id === cardId || card.id === this.previouslySelected)
                        .forEach((card) => (card.revealed = false));
                }
                this.endTurn(success);
                this.previouslySelected = null;
                this.disabled = false;
            }, 1000);
        }
    }
    endTurn(success) {
        if (success) {
            this.currentPlayer.score += 1;
            this.scores.find((player) => player.id === this.currentPlayer.id).score += 1;
        }
        else {
            this.playerService.togglePlayer();
        }
        this.timeLeft = 10;
        if (this.cardsService.checkRevealed(this.cards))
            this.endGame();
    }
    reset() {
        this.scores.forEach((player) => (player.score = 0));
        this.playerService.resetScores();
        this.cards.forEach((card) => (card.revealed = false));
        this.gameResult = null;
    }
    endGame() {
        if (this.scores[0].score === this.scores[1].score) {
            this.gameResult = 'Es un empate!';
        }
        else {
            this.gameResult =
                this.scores[0].score > this.scores[1].score
                    ? `Ha ganado el Jugador 1 con ${this.scores[0].score} puntos!`
                    : `Ha ganado el Jugador 2 con ${this.scores[1].score} puntos!`;
        }
        this.timeLeft = 0;
    }
    timeControl() {
        if (this.timeLeft <= 0) {
            this.endTurn(false);
        }
        else {
            this.timeLeft -= 1;
        }
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 19, vars: 7, consts: [[1, "board-container"], [1, "players-turn"], [1, "main-board"], [3, "card", "disabled", "selected", 4, "ngFor", "ngForOf"], ["class", "end-game-modal", 4, "ngIf"], [1, "score"], [1, "score__player-one"], [1, "score__player-two"], [3, "click"], [3, "card", "disabled", "selected"], [1, "end-game-modal"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BoardComponent_app_card_4_Template, 1, 2, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardComponent_div_5_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Puntajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_17_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reiniciar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Turno de jugador ", ctx.currentPlayer.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Tiempo restante: ", ctx.timeLeft, " segundo", ctx.timeLeft !== 1 ? "s" : "", ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Jugador 1: ", ctx.scores[0].score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Jugador 2: ", ctx.scores[1].score, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: [".main-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 5.1rem);\n  grid-template-rows: repeat(5, 6.1rem);\n  width: 21rem;\n}\n\n.end-game-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(240, 248, 255, 0.527);\n  width: 21rem;\n  height: 31rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCA1LjFyZW0pO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDYuMXJlbSk7XHJcbiAgd2lkdGg6IDIxcmVtO1xyXG59XHJcblxyXG4uZW5kLWdhbWUtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNTI3KTtcclxuICB3aWR0aDogMjFyZW07XHJcbiAgaGVpZ2h0OiAzMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ekgB":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/board/board.component */ "PW/R");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-routing.module */ "/mCa");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ "/d5H");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/player.service */ "P7es");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GameModule {
}
GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function GameModule_Factory(t) { return new (t || GameModule)(); }, providers: [_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _game_routing_module__WEBPACK_IMPORTED_MODULE_2__["GameRoutingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_components_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _game_routing_module__WEBPACK_IMPORTED_MODULE_2__["GameRoutingRoutingModule"]], exports: [_components_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=game-game-module.js.map